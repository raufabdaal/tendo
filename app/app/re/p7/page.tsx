import { useState } from "react";
import Link from "next/link";
import ProgressBadge from "@/components/ProgressBadge";
import { getTopicVisualPill } from "@/lib/topics";
import { CRE_TOPICS, IRE_TOPICS } from "@/lib/re-topics";

export default function ReligiousEducationPage() {
  return (
    <>
      <Link href="/" className="back">← All subjects</Link>
      <div className="eyebrow">P7 · Religious Education</div>
      <h1>Choose your Religious Education option</h1>
      <p className="lead">
        In the PLE examination, candidates attempt either Christian Religious Education (CRE) or Islamic Religious Education (IRE). Choose your option below to begin studying.
      </p>

      <div className="maths-overview" aria-label="P7 Religious Education summary">
        <div className="maths-overview-item">
          <strong>2</strong>
          <span>PLE options</span>
        </div>
        <div className="maths-overview-item">
          <strong>14</strong>
          <span>total topics</span>
        </div>
        <div className="maths-overview-item">
          <strong>112</strong>
          <span>practice questions</span>
        </div>
      </div>

      <section className="theme-group strand-section" style={{ marginTop: 28 }}>
        <div className="strand-head">
          <div>
            <div className="theme-label">Part I · Christian Religious Education (CRE)</div>
            <p className="strand-desc">7 official NCDC topics covering creation, faith ancestors, Ten Commandments, ministry & passion of Christ, Holy Spirit, and Christian citizenship.</p>
          </div>
          <div className="strand-meta">
            <span>7 topics</span>
          </div>
        </div>

        <div className="topic-card-grid">
          {CRE_TOPICS.map((topic) => {
            const pill = getTopicVisualPill(topic);
            return (
              <Link key={topic.id} href={`/re/p7/${topic.id}`} className="card topic-card">
                <div className="card-row">
                  <div>
                    <div className="card-title">{topic.title}</div>
                    <div className="card-sub">About {topic.estMinutes} minutes · {topic.quiz.length} questions</div>
                    {pill && <div className="visual-cue">{pill}</div>}
                  </div>
                  <ProgressBadge topicId={topic.id} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="theme-group strand-section" style={{ marginTop: 36 }}>
        <div className="strand-head">
          <div>
            <div className="theme-label">Part II · Islamic Religious Education (IRE)</div>
            <p className="strand-desc">7 official NCDC topics covering Surat al-Fatiha, Tawheed/Iman, Qur'an guidance, Fiqh/Ibadah, Hadith/Sunnah, Seerah history, and Islamic Adab.</p>
          </div>
          <div className="strand-meta">
            <span>7 topics</span>
          </div>
        </div>

        <div className="topic-card-grid">
          {IRE_TOPICS.map((topic) => {
            const pill = getTopicVisualPill(topic);
            return (
              <Link key={topic.id} href={`/re/p7/${topic.id}`} className="card topic-card">
                <div className="card-row">
                  <div>
                    <div className="card-title">{topic.title}</div>
                    <div className="card-sub">About {topic.estMinutes} minutes · {topic.quiz.length} questions</div>
                    {pill && <div className="visual-cue">{pill}</div>}
                  </div>
                  <ProgressBadge topicId={topic.id} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="foot">
        14 P7 Religious Education topics ready now. NCDC Set One outline covered for both CRE and IRE.
      </div>
    </>
  );
}
