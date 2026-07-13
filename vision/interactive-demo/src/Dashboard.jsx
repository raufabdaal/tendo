import React from 'react';

export default function Dashboard({ onWorldClick }) {
  return (
    <div className="dashboard-content">
      {/* Rank Card */}
      <div className="rank-card">
        <div className="rank-badge">
          ⭐
        </div>
        <div className="rank-info" style={{ flex: 1 }}>
          <p style={{ color: '#FBBF24', textTransform: 'uppercase', fontSize: '12px', fontWeight: 800 }}>Current Rank</p>
          <h2>Division Two</h2>
          <p>450 XP to Division One Master</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>

      <div className="section-title gamer-font">Active Campaigns</div>

      <div className="worlds-grid">
        <div className="world-card offline-ready" onClick={() => onWorldClick('SST')}>
          <div className="world-icon">🌍</div>
          <div className="world-title">SST World</div>
          <div style={{ color: '#94A3B8', fontSize: '12px', marginTop: '4px' }}>Level 12 • East Africa</div>
        </div>

        <div className="world-card" onClick={() => onWorldClick('Science')}>
          <div className="world-icon">🔬</div>
          <div className="world-title">Science Lab</div>
          <div style={{ color: '#94A3B8', fontSize: '12px', marginTop: '4px' }}>Level 8 • Human Body</div>
        </div>

        <div className="world-card offline-ready" onClick={() => onWorldClick('Math')}>
          <div className="world-icon">📐</div>
          <div className="world-title">Math Arena</div>
          <div style={{ color: '#94A3B8', fontSize: '12px', marginTop: '4px' }}>Level 15 • Fractions</div>
        </div>

        <div className="world-card" onClick={() => onWorldClick('English')}>
          <div className="world-icon">📖</div>
          <div className="world-title">English City</div>
          <div style={{ color: '#94A3B8', fontSize: '12px', marginTop: '4px' }}>Level 5 • Grammar</div>
        </div>
      </div>

      <div className="section-title gamer-font" style={{ marginTop: '32px' }}>Live Leaderboard (P7)</div>
      
      <div style={{ background: '#1E293B', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', padding: '16px' }}>
        {[
          { pos: 1, name: 'Okello B.', rank: 'Div 1', xp: '12,450' },
          { pos: 2, name: 'Namuli S.', rank: 'Div 1', xp: '11,200' },
          { pos: 3, name: 'You', rank: 'Div 2', xp: '9,850', active: true },
          { pos: 4, name: 'Kato D.', rank: 'Div 2', xp: '9,100' },
        ].map(user => (
          <div key={user.pos} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '12px 0', 
            borderBottom: user.pos === 4 ? 'none' : '1px solid rgba(255,255,255,0.05)',
            color: user.active ? '#22D3EE' : '#F8FAFC',
            fontWeight: user.active ? 800 : 400
          }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <span style={{ color: '#94A3B8', width: '20px' }}>#{user.pos}</span>
              <span>{user.name}</span>
            </div>
            <span>{user.xp} XP</span>
          </div>
        ))}
      </div>
    </div>
  );
}
