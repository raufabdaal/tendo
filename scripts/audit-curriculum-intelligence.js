#!/usr/bin/env node
/*
 * Tendo Curriculum Intelligence audit.
 *
 * Current scope: P7 Social Studies pilot.
 * Checks app structure against:
 * - content/curriculum/p7-social-studies.json
 * - content/curriculum-intelligence/p7-sst/manifest.json
 *
 * This script intentionally audits structure and traceability scaffolding.
 * It does not certify factual correctness; that remains a source/evidence QA gate.
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const appContentPath = path.join(root, "app/lib/social-topics.ts");
const curriculumPath = path.join(root, "content/curriculum/p7-social-studies.json");
const manifestPath = path.join(root, "content/curriculum-intelligence/p7-sst/manifest.json");

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function findMatching(text, openIndex, openChar, closeChar) {
  if (text[openIndex] !== openChar) throw new Error(`Expected ${openChar} at ${openIndex}`);
  let depth = 0;
  let state = "code";
  let quote = "";
  for (let i = openIndex; i < text.length; i++) {
    const c = text[i];
    const n = text[i + 1] || "";
    if (state === "code") {
      if (c === "/" && n === "/") { state = "line"; i++; continue; }
      if (c === "/" && n === "*") { state = "block"; i++; continue; }
      if (c === "\"" || c === "'" || c === "`") { quote = c; state = "string"; continue; }
      if (c === openChar) depth++;
      if (c === closeChar) {
        depth--;
        if (depth === 0) return i;
      }
    } else if (state === "line") {
      if (c === "\n") state = "code";
    } else if (state === "block") {
      if (c === "*" && n === "/") { state = "code"; i++; }
    } else if (state === "string") {
      if (c === "\\") { i++; continue; }
      if (c === quote) state = "code";
    }
  }
  throw new Error(`No matching ${closeChar} found`);
}

function objectSpansInArray(text, arrOpen, arrClose) {
  const spans = [];
  let state = "code";
  let quote = "";
  for (let i = arrOpen + 1; i < arrClose; i++) {
    const c = text[i];
    const n = text[i + 1] || "";
    if (state === "code") {
      if (c === "/" && n === "/") { state = "line"; i++; continue; }
      if (c === "/" && n === "*") { state = "block"; i++; continue; }
      if (c === "\"" || c === "'" || c === "`") { quote = c; state = "string"; continue; }
      if (c === "{") {
        const end = findMatching(text, i, "{", "}");
        let j = end + 1;
        while (j < text.length && /\s/.test(text[j])) j++;
        if (text[j] === ",") j++;
        spans.push([i, j]);
        i = j;
      }
    } else if (state === "line") {
      if (c === "\n") state = "code";
    } else if (state === "block") {
      if (c === "*" && n === "/") { state = "code"; i++; }
    } else if (state === "string") {
      if (c === "\\") { i++; continue; }
      if (c === quote) state = "code";
    }
  }
  return spans;
}

function firstStringProp(objText, prop) {
  const re = new RegExp(`\\b${prop}:\\s*"([^"]+)"`);
  const m = objText.match(re);
  return m ? m[1] : null;
}

function parseSocialTopics(source) {
  const marker = "const SOCIAL_TOPICS_DATA: Topic[] = [";
  const start = source.indexOf(marker);
  if (start < 0) throw new Error("Could not find SOCIAL_TOPICS_DATA array");
  const arrOpen = source.indexOf("[", source.indexOf("= [", start));
  const arrClose = findMatching(source, arrOpen, "[", "]");
  const topicSpans = objectSpansInArray(source, arrOpen, arrClose);
  const topics = [];
  const subtopicOwners = new Map();

  for (const [a, b] of topicSpans) {
    const topicText = source.slice(a, b);
    const topicId = firstStringProp(topicText, "id");
    const title = firstStringProp(topicText, "title");
    const subtopicsMatch = topicText.match(/\bsubtopics:\s*\[/);
    const subtopics = [];

    if (subtopicsMatch) {
      const subArrOpen = subtopicsMatch.index + subtopicsMatch[0].length - 1;
      const subArrClose = findMatching(topicText, subArrOpen, "[", "]");
      const subSpans = objectSpansInArray(topicText, subArrOpen, subArrClose);
      for (const [sa, sb] of subSpans) {
        const subText = topicText.slice(sa, sb);
        const subtopicId = firstStringProp(subText, "subtopicId");
        const subTitle = firstStringProp(subText, "title");
        const moduleCount = (subText.match(/\bmoduleId:\s*"/g) || []).length;
        const tryThisCount = (subText.match(/\btryThis:\s*{/g) || []).length;
        subtopics.push({ subtopicId, title: subTitle, moduleCount, tryThisCount });
        if (subtopicOwners.has(subtopicId)) {
          subtopicOwners.get(subtopicId).push(topicId);
        } else {
          subtopicOwners.set(subtopicId, [topicId]);
        }
      }
    }
    topics.push({ topicId, title, subtopics });
  }

  return { topics, subtopicOwners };
}

function fail(msg) { return { level: "FAIL", msg }; }
function warn(msg) { return { level: "WARN", msg }; }
function pass(msg) { return { level: "PASS", msg }; }

function main() {
  const issues = [];
  const source = fs.readFileSync(appContentPath, "utf8");
  const curriculum = readJson(curriculumPath);
  const manifest = readJson(manifestPath);
  const parsed = parseSocialTopics(source);

  const appOrder = parsed.topics.map((t) => t.topicId);
  const manifestOrder = manifest.topicOrder;
  const curriculumOrder = curriculum.themes[0].topics.map((t) => t.id);

  if (JSON.stringify(appOrder) === JSON.stringify(curriculumOrder)) {
    issues.push(pass("App P7 SST topic order matches curriculum JSON order."));
  } else {
    issues.push(fail(`App topic order does not match curriculum JSON. App=${appOrder.join(", ")} Curriculum=${curriculumOrder.join(", ")}`));
  }

  if (JSON.stringify(appOrder) === JSON.stringify(manifestOrder)) {
    issues.push(pass("App P7 SST topic order matches curriculum intelligence manifest."));
  } else {
    issues.push(fail(`App topic order does not match manifest. App=${appOrder.join(", ")} Manifest=${manifestOrder.join(", ")}`));
  }

  const appIds = new Set(appOrder);
  for (const id of curriculumOrder) {
    if (!appIds.has(id)) issues.push(fail(`Missing app topic for curriculum topic: ${id}`));
  }
  for (const id of appOrder) {
    if (!curriculumOrder.includes(id)) issues.push(fail(`Extra app topic not in curriculum map: ${id}`));
  }

  for (const [subId, owners] of parsed.subtopicOwners.entries()) {
    if (owners.length > 1) issues.push(fail(`Duplicate subtopicId ${subId} appears under: ${owners.join(", ")}`));
  }

  const topicById = Object.fromEntries(parsed.topics.map((t) => [t.topicId, t]));
  for (const topic of manifest.topics) {
    const appTopic = topicById[topic.topicId];
    if (!appTopic) {
      issues.push(fail(`Manifest topic missing in app: ${topic.topicId}`));
      continue;
    }
    if (topic.requiredAppSubtopicIds) {
      const appSubIds = new Set(appTopic.subtopics.map((s) => s.subtopicId));
      for (const subId of topic.requiredAppSubtopicIds) {
        if (!appSubIds.has(subId)) issues.push(fail(`Topic ${topic.topicId} missing required app subtopic ${subId}`));
      }
    }
    if (topic.officialSubtopicMappings) {
      for (const mapping of topic.officialSubtopicMappings) {
        if (!mapping.appSubtopicIds || mapping.appSubtopicIds.length === 0) {
          issues.push(fail(`Official subtopic has no app mapping: ${topic.topicId} / ${mapping.officialSubtopic}`));
        }
        const evidenceStatus = mapping.evidenceStatus || "unknown";
        const verifiedEnough = evidenceStatus === "verified" || evidenceStatus.startsWith("verified-from-");
        if (!verifiedEnough) {
          issues.push(warn(`${topic.topicId} evidence not fully verified (${evidenceStatus}): ${mapping.officialSubtopic}`));
        }
      }
    }
  }

  for (const t of parsed.topics) {
    for (const s of t.subtopics) {
      if (s.moduleCount === 0) issues.push(fail(`${t.topicId}/${s.subtopicId} has no modules.`));
      if (s.tryThisCount < s.moduleCount) {
        issues.push(warn(`${t.topicId}/${s.subtopicId} has ${s.moduleCount} modules but only ${s.tryThisCount} inline checks.`));
      }
    }
  }

  console.log("\nTendo Curriculum Intelligence Audit — P7 SST\n");
  for (const t of parsed.topics) {
    const modules = t.subtopics.reduce((sum, s) => sum + s.moduleCount, 0);
    const checks = t.subtopics.reduce((sum, s) => sum + s.tryThisCount, 0);
    console.log(`${t.topicId.padEnd(38)} subtopics=${String(t.subtopics.length).padStart(2)} modules=${String(modules).padStart(3)} checks=${String(checks).padStart(3)}`);
  }

  console.log("\nGate results:\n");
  for (const item of issues) {
    console.log(`[${item.level}] ${item.msg}`);
  }

  const failCount = issues.filter((i) => i.level === "FAIL").length;
  const warnCount = issues.filter((i) => i.level === "WARN").length;
  console.log(`\nSummary: ${failCount} fail(s), ${warnCount} warning(s).`);
  if (failCount > 0) process.exit(1);
}

main();
