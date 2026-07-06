"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getLearnerProfile, saveLearnerProfile, type LearnerProfile } from "@/lib/learner-profile";

export default function ClassSelector({ activeLevel }: { activeLevel: "P6" | "P7" }) {
  const [profile, setProfile] = useState<LearnerProfile | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [tempName, setTempName] = useState("");
  const [tempGrade, setTempGrade] = useState<"P6" | "P7">(activeLevel);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const loaded = getLearnerProfile();
    if (loaded) {
      setProfile(loaded);
      setTempName(loaded.name || "");
      setTempGrade(loaded.grade);
    } else {
      setShowModal(true);
    }
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  function handleSave() {
    const newProfile: LearnerProfile = {
      name: tempName.trim() || undefined,
      grade: tempGrade,
      onboardedAt: new Date().toISOString(),
    };
    saveLearnerProfile(newProfile);
    setProfile(newProfile);
    setShowModal(false);

    // If locked into P6 but viewing P7 page (or vice versa), navigate to their grade hub
    if (tempGrade === "P6" && activeLevel === "P7") {
      window.location.href = "/p6-home";
    } else if (tempGrade === "P7" && activeLevel === "P6") {
      window.location.href = "/";
    }
  }

  if (showModal) {
    return (
      <div
        className="onboarding-card no-print"
        style={{
          background: "var(--surface, #ffffff)",
          border: "2px solid var(--primary, #2563eb)",
          borderRadius: 16,
          padding: "24px",
          margin: "16px 0 28px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <span style={{ fontSize: 32 }}>🎓</span>
          <div>
            <h2 style={{ margin: 0, fontSize: 20, color: "var(--text-main)" }}>Welcome to Tendo!</h2>
            <p style={{ margin: 0, color: "var(--text-muted, #64748b)", fontSize: 14 }}>
              Lock in your study class so you only see content aligned with your NCDC syllabus.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 6, color: "var(--text-main)" }}>
            Your First Name (Optional):
          </label>
          <input
            type="text"
            placeholder="e.g. Akello Joy"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            className="text-input"
            style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #cbd5e1", fontSize: 14 }}
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, color: "var(--text-main)" }}>
            Select Your Primary Class:
          </label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <button
              type="button"
              onClick={() => setTempGrade("P6")}
              style={{
                padding: "16px",
                borderRadius: 12,
                textAlign: "left",
                cursor: "pointer",
                border: tempGrade === "P6" ? "2px solid #2563eb" : "1px solid #cbd5e1",
                background: tempGrade === "P6" ? "#eff6ff" : "#ffffff",
              }}
            >
              <strong style={{ display: "block", fontSize: 16, color: tempGrade === "P6" ? "#1d4ed8" : "#0f172a" }}>
                Primary Six (P.6)
              </strong>
              <span style={{ fontSize: 12, color: "#64748b" }}>
                East African SST, Numeracy, Integrated Science foundation
              </span>
            </button>

            <button
              type="button"
              onClick={() => setTempGrade("P7")}
              style={{
                padding: "16px",
                borderRadius: 12,
                textAlign: "left",
                cursor: "pointer",
                border: tempGrade === "P7" ? "2px solid #2563eb" : "1px solid #cbd5e1",
                background: tempGrade === "P7" ? "#eff6ff" : "#ffffff",
              }}
            >
              <strong style={{ display: "block", fontSize: 16, color: tempGrade === "P7" ? "#1d4ed8" : "#0f172a" }}>
                Primary Seven (P.7 PLE)
              </strong>
              <span style={{ fontSize: 12, color: "#64748b" }}>
                Final PLE candidates, past papers & full syllabus
              </span>
            </button>
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <button type="button" className="btn btn-primary" style={{ flex: 1 }} onClick={handleSave}>
            Lock My Class & Start Studying →
          </button>
          {profile && (
            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          )}
        </div>
      </div>
    );
  }

  // If learner profile is set to the opposite class than the active level page
  if (profile && profile.grade !== activeLevel) {
    return (
      <div
        className="no-print"
        style={{
          background: "#fef3c7",
          border: "1px solid #f59e0b",
          padding: "14px 18px",
          borderRadius: 12,
          margin: "16px 0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div>
          <strong style={{ color: "#92400e", display: "block", fontSize: 14 }}>
            ⚠️ Viewing {activeLevel === "P7" ? "Primary Seven (P.7)" : "Primary Six (P.6)"} Hub
          </strong>
          <span style={{ fontSize: 13, color: "#78350f" }}>
            Your profile is currently locked to <strong>{profile.grade === "P6" ? "Primary Six (P.6)" : "Primary Seven (P.7)"}</strong>.
          </span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Link
            href={profile.grade === "P6" ? "/p6-home" : "/"}
            className="btn btn-primary"
            style={{ fontSize: 13, padding: "6px 12px", textDecoration: "none" }}
          >
            Go to my {profile.grade} Hub →
          </Link>
          <button type="button" className="btn btn-secondary" style={{ fontSize: 13, padding: "6px 12px" }} onClick={() => setShowModal(true)}>
            Change Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="learner-profile-bar no-print"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "var(--surface-sunken, #f8fafc)",
        padding: "12px 18px",
        borderRadius: 12,
        border: "1px solid var(--border-light, #e2e8f0)",
        margin: "16px 0 24px",
        flexWrap: "wrap",
        gap: 10,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 24 }}>🎓</span>
        <div>
          <strong style={{ display: "block", fontSize: 14, color: "var(--text-main)" }}>
            {profile?.name ? `${profile.name} · ` : ""}Locked into: {profile?.grade === "P6" ? "Primary Six (P.6 Foundation)" : "Primary Seven (P.7 PLE)"}
          </strong>
          <span style={{ fontSize: 12, color: "#64748b" }}>
            Showing study content strictly aligned with your {profile?.grade} NCDC syllabus.
          </span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <Link
          href={activeLevel === "P7" ? "/p6-home" : "/"}
          className="btn btn-secondary"
          style={{ fontSize: 12, padding: "6px 12px", textDecoration: "none" }}
        >
          Browse {activeLevel === "P7" ? "P.6" : "P.7"}
        </Link>
        <button
          type="button"
          className="btn btn-secondary"
          style={{ fontSize: 12, padding: "6px 12px" }}
          onClick={() => setShowModal(true)}
        >
          ⚙️ Switch Class
        </button>
      </div>
    </div>
  );
}
