"use strict";
import Link from "next/link";

export default function ClassSelector({ activeLevel }: { activeLevel: "P6" | "P7" }) {
  return (
    <div className="class-selector" style={{ display: "flex", gap: 10, margin: "16px 0 24px" }}>
      <Link
        href={activeLevel === "P7" ? "/" : "/?class=P7"}
        className={"btn " + (activeLevel === "P7" ? "btn-primary" : "btn-secondary")}
        style={{ flex: 1, textAlign: "center", textDecoration: "none" }}
      >
        Primary Seven (P.7 PLE)
      </Link>
      <Link
        href="/p6-home"
        className={"btn " + (activeLevel === "P6" ? "btn-primary" : "btn-secondary")}
        style={{ flex: 1, textAlign: "center", textDecoration: "none" }}
      >
        Primary Six (P.6 Foundation)
      </Link>
    </div>
  );
}
