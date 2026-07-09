"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getLearnerProfile, type LearnerProfile } from "@/lib/learner-profile";

export default function LearnerBanner({
  activeLevel,
  subject,
}: {
  activeLevel: "P5" | "P6" | "P7";
  subject?: string;
}) {
  const [profile, setProfile] = useState<LearnerProfile | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProfile(getLearnerProfile());
    setHydrated(true);
  }, []);

  if (!hydrated || !profile || profile.grade === activeLevel) return null;

  const targetHref = subject
    ? `/${subject}/${profile.grade.toLowerCase()}`
    : profile.grade === "P6"
      ? "/p6-home"
      : "/";

  return (
    <div
      className="no-print"
      style={{
        background: "#fef3c7",
        border: "1px solid #f59e0b",
        padding: "12px 16px",
        borderRadius: 12,
        marginBottom: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <div>
        <strong style={{ color: "#92400e", display: "block", fontSize: 13 }}>
          ⚠️ Notice: Your profile is locked to {profile.grade === "P6" ? "Primary Six (P.6)" : "Primary Seven (P.7)"}
        </strong>
        <span style={{ fontSize: 12, color: "#78350f" }}>
          You are currently browsing {activeLevel === "P7" ? "Primary 7 (PLE)" : "Primary 6"} study materials.
        </span>
      </div>
      <Link
        href={targetHref}
        className="btn btn-primary"
        style={{ fontSize: 12, padding: "6px 12px", textDecoration: "none" }}
      >
        Go to my {profile.grade} {subject ? "Subject Page" : "Study Hub"} →
      </Link>
    </div>
  );
}
