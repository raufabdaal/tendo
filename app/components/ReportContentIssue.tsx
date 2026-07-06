"use client";

import { useState } from "react";

// Content issue reporter for modular topics.
// No backend: it (a) saves to localStorage for on-device review, and
// (b) opens a GitHub issue pre-filled with the context so developers can act on it.

const REPO = "https://github.com/raufabdaal/tendo-ug";
const STORAGE_KEY = "tendo:content-reports";

export interface ContentReport {
  topicId: string;
  topicTitle: string;
  subtopicId?: string;
  subtopicTitle?: string;
  moduleId?: string;
  moduleTitle?: string;
  type: string;
  message: string;
  reporter?: string;
  url: string;
  ts: string;
}

function buildContextLabel(
  topicTitle: string,
  subtopicTitle?: string,
  moduleTitle?: string,
): string {
  let label = topicTitle;
  if (subtopicTitle) label += ` → ${subtopicTitle}`;
  if (moduleTitle) label += ` → ${moduleTitle}`;
  return label;
}

function buildIssueBody(report: Omit<ContentReport, "ts">): string {
  const lines: string[] = [];
  lines.push("## Content issue report");
  lines.push("");
  lines.push(`**Topic:** ${report.topicTitle} (\`${report.topicId}\`)`);
  if (report.subtopicTitle) {
    lines.push(`**Part:** ${report.subtopicTitle}`);
  }
  if (report.moduleTitle) {
    lines.push(`**Module:** ${report.moduleTitle}`);
  }
  lines.push(`**Issue type:** ${report.type}`);
  lines.push(`**Reported from:** ${report.url}`);
  if (report.reporter) {
    lines.push(`**Reporter:** ${report.reporter}`);
  }
  lines.push("");
  lines.push("## Details");
  lines.push(report.message || "(no details provided)");
  lines.push("");
  lines.push("---");
  lines.push("*This issue was generated from the in-app content reporter.*");
  return lines.join("\n");
}

function saveReport(report: ContentReport) {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const list: ContentReport[] = raw ? JSON.parse(raw) : [];
    list.push(report);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    // ignore
  }
}

export default function ReportContentIssue({
  topicId,
  topicTitle,
  subtopicId,
  subtopicTitle,
  moduleId,
  moduleTitle,
}: {
  topicId: string;
  topicTitle: string;
  subtopicId?: string;
  subtopicTitle?: string;
  moduleId?: string;
  moduleTitle?: string;
}) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("Typo / spelling");
  const [message, setMessage] = useState("");
  const [reporter, setReporter] = useState("");
  const [sent, setSent] = useState(false);

  function submit() {
    if (!message.trim()) return;
    const url = typeof window !== "undefined" ? window.location.href : "";
    const report: ContentReport = {
      topicId,
      topicTitle,
      subtopicId,
      subtopicTitle,
      moduleId,
      moduleTitle,
      type,
      message: message.trim(),
      reporter: reporter.trim() || undefined,
      url,
      ts: new Date().toISOString(),
    };
    saveReport(report);

    const title = encodeURIComponent(`Content issue: ${topicTitle}`);
    const body = encodeURIComponent(buildIssueBody(report));
    const issueUrl = `${REPO}/issues/new?title=${title}&body=${body}`;
    window.open(issueUrl, "_blank", "noopener,noreferrer");

    setSent(true);
    setTimeout(() => {
      setOpen(false);
      setSent(false);
      setMessage("");
      setReporter("");
      setType("Typo / spelling");
    }, 2000);
  }

  const contextLabel = buildContextLabel(topicTitle, subtopicTitle, moduleTitle);

  return (
    <>
      <button
        type="button"
        className="report-link"
        onClick={() => setOpen(true)}
      >
        Report an issue with this content
      </button>

      {open && (
        <div
          className="report-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="report-modal" role="dialog" aria-modal="true">
            {!sent ? (
              <>
                <h3>Report a content issue</h3>
                <div className="report-modal-cite">
                  <strong>Content:</strong> {contextLabel}
                </div>
                <p style={{ color: "var(--muted)", fontSize: 14, margin: "8px 0" }}>
                  Found a typo, wrong fact, unclear explanation or missing content? Tell us and we’ll fix it.
                </p>

                <label style={{ display: "block", marginBottom: 10, fontSize: 14 }}>
                  <span style={{ display: "block", marginBottom: 4, fontWeight: 600 }}>Issue type</span>
                  <select
                    className="text-input"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option>Typo / spelling</option>
                    <option>Wrong fact or answer</option>
                    <option>Unclear explanation</option>
                    <option>Missing content</option>
                    <option>Other</option>
                  </select>
                </label>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="The capital of Kenya is written as Nairobi, which is correct, but the explanation says…"
                  autoFocus
                />

                <label style={{ display: "block", marginTop: 10, fontSize: 14 }}>
                  <span style={{ display: "block", marginBottom: 4, fontWeight: 600 }}>Your name or email (optional)</span>
                  <input
                    type="text"
                    className="text-input"
                    value={reporter}
                    onChange={(e) => setReporter(e.target.value)}
                    placeholder="e.g. P7 Social Studies teacher"
                  />
                </label>

                <div className="report-modal-actions">
                  <button className="btn btn-secondary" onClick={() => setOpen(false)}>
                    Cancel
                  </button>
                  <button className="btn btn-primary" onClick={submit} disabled={!message.trim()}>
                    Open GitHub issue
                  </button>
                </div>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: 16 }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>✓</div>
                <strong>Thank you.</strong>
                <p style={{ color: "var(--muted)", marginTop: 6 }}>
                  A GitHub issue was opened. A reviewer will look at it.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
