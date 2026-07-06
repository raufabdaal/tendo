import Link from "next/link";
import WorksheetGenerator from "@/components/WorksheetGenerator";

export const metadata = {
  title: "Worksheet generator — Tendo",
  description: "Generate printable worksheets from the Tendo question bank.",
};

export default function WorksheetPage() {
  return (
    <div className="worksheet-page">
      <Link href="/teacher" className="back no-print">← Teacher home</Link>
      <section className="compact-page-intro teacher-content-intro no-print">
        <div>
          <div className="eyebrow">Worksheets</div>
          <h1>Make a worksheet</h1>
          <p className="lead">Choose class, subject and topics. Then print or copy.</p>
        </div>
        <span aria-hidden="true">🧾</span>
      </section>

      <WorksheetGenerator />
    </div>
  );
}
