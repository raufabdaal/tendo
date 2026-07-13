import React, { useState } from 'react';

export default function CampaignMap({ world, onBack }) {
  const [activeNode, setActiveNode] = useState(1); // 0-based index of active node

  const handleNodeClick = (index, locked) => {
    if (locked) return;
    if (index === activeNode) {
      alert(`Entering ${world} Campaign Level ${index + 1}...`);
      // Simulate level completion
      setTimeout(() => {
        setActiveNode(activeNode + 1);
      }, 500);
    }
  };

  const nodes = [
    { title: 'Physical Features', desc: 'Mountains & Lakes', type: 'completed', icon: '⛰️' },
    { title: 'Climate', desc: 'Rainfall & Seasons', type: 'active', icon: '⛈️' },
    { title: 'Vegetation', desc: 'Forests & Savannah', type: 'locked', icon: '🌳' },
    { title: 'Boss Challenge', desc: 'East Africa Review', type: 'locked', icon: '💀' }
  ];

  return (
    <div className="map-container">
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button className="back-btn" onClick={onBack}>
          ← COMMAND CENTER
        </button>
        <div style={{ color: '#F87171', fontWeight: 800, fontSize: '12px' }}>
          OFFLINE CACHED
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <h1 style={{ color: '#22D3EE' }}>{world} Campaign</h1>
        <p style={{ color: '#94A3B8' }}>Conquer East Africa to rank up.</p>
      </div>

      <div style={{ width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {/* Connecting line */}
        <div style={{ 
          position: 'absolute', 
          top: '20px', 
          bottom: '20px', 
          left: '32px', 
          width: '4px', 
          background: '#334155', 
          zIndex: 1,
          borderRadius: '4px'
        }} />

        {nodes.map((node, i) => {
          let statusClass = node.type;
          if (i < activeNode) statusClass = 'completed';
          if (i === activeNode) statusClass = 'active';
          if (i > activeNode) statusClass = 'locked';

          return (
            <div 
              key={i} 
              className={`map-node ${statusClass}`}
              onClick={() => handleNodeClick(i, statusClass === 'locked')}
            >
              <div className="node-icon-wrapper">
                {statusClass === 'completed' ? '✓' : node.icon}
              </div>
              <div className="node-info">
                <h3>{node.title}</h3>
                <p>{node.desc}</p>
              </div>
              {statusClass === 'active' && (
                <div style={{ marginLeft: 'auto', color: '#22D3EE', fontWeight: 800, fontSize: '12px', animation: 'pulse 2s infinite' }}>
                  PLAY NOW
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  );
}
