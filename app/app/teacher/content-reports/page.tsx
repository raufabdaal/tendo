"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { ContentReport } from "@/components/ReportContentIssue";

const STORAGE_KEY = "tendo:content-reports";

export default function ContentReportsPage() {
  const [reports, setReports] = useState<ContentReport[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const list: ContentReport[] = raw ? JSON.parse(raw) : [];
      setReports(list);
    } catch {
      setReports([]);
    }
    setLoaded(true);
  }, []);

  function clearAll() {
    if (!window.confirm("Delete all stored content reports?")) return;
    window.localStorage.removeItem(STORAGE_KEY);
    setReports([]);
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(reports, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tendo-content-reports-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <Link href="/teacher" className="back">← Teacher home</Link>
      <section className="compact-page-intro teacher-content-intro">
        <div>
          <div className="eyebrow">Reports</div>
          <h1>Content issues</h1>
          <p className="lead">Teacher-submitted notes saved on this device.</p>
        </div>
        <span aria-hidden="true">⚠️</span>
      </section>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
        <button className="btn btn-primary" onClick={exportJson} disabled={reports.length === 0}>
          Export JSON
        </button>
        <button className="btn btn-secondary" onClick={clearAll} disabled={reports.length === 0}>
          Clear all
        </button>
      </div>

      {!loaded && <p>Loading…</p>}

      {loaded && reports.length === 0 && (
        <div className="dash-empty">
          <strong>No reports yet</strong>
          Reports appear here when someone taps “Report an issue with this content” inside a topic.
        </div>
      )}

      {loaded && reports.length > 0 && (
        <div className="report-list">
          {[...reports].reverse().map((report, i) => (
            <div key={i} className="report-card">
              <div className="report-card-meta">
                <span className="report-card-type">{report.type}</span>
                <span className="report-card-date">{new Date(report.ts).toLocaleString()}</span>
              </div>
              <div className="report-card-context">
                <strong>{report.topicTitle}</strong>
                {report.subtopicTitle && <span> → {report.subtopicTitle}</span>}
                {report.moduleTitle && <span> → {report.moduleTitle}</span>}
              </div>
              <p className="report-card-message">{report.message}</p>
              {report.reporter && <p className="report-card-reporter">Reporter: {report.reporter}</p>}
              <p className="report-card-url">{report.url}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
