import { useState } from 'react'

export default function VariationA() {
  const [streak, setStreak] = useState(12)
  const [activeNode, setActiveNode] = useState(2) // 0-based index

  const handleNodeClick = (index) => {
    if (index === activeNode) {
      alert("Starting lesson: " + (index + 1));
      // Simulate completing lesson
      setTimeout(() => {
        setActiveNode(activeNode + 1)
        if (activeNode === 2) setStreak(streak + 1)
      }, 500)
    }
  }

  const nodes = [
    { type: 'completed', icon: '⭐' },
    { type: 'completed', icon: '⭐' },
    { type: 'active', icon: '📖' },
    { type: 'locked', icon: '🔒' },
    { type: 'locked', icon: '🔒' },
    { type: 'locked', icon: '🎁' }
  ];

  return (
    <div className="gamified-container">
      <div className="gamified-header">
        <div style={{ fontWeight: 800, fontSize: '20px' }}>Tendo</div>
        <div className="streak-badge">
          🔥 {streak}
        </div>
      </div>

      <div style={{ padding: '24px 24px 0', textAlign: 'center' }}>
        <h2 style={{ margin: 0 }}>Unit 1: Fractions</h2>
        <p style={{ color: '#86868b' }}>Learn to divide and conquer</p>
      </div>

      <div className="path-container">
        <div className="path-line" />
        
        {nodes.map((node, i) => {
          let offsetClass = '';
          if (i % 2 !== 0) {
            offsetClass = i % 4 === 1 ? 'node-offset-left' : 'node-offset-right';
          }
          
          return (
            <div 
              key={i} 
              className={`node ${node.type} ${offsetClass}`}
              onClick={() => handleNodeClick(i)}
            >
              {node.icon}
            </div>
          )
        })}
      </div>

      <div style={{ padding: '24px', position: 'sticky', bottom: 0, background: 'linear-gradient(transparent, white 20%)' }}>
        <button className="btn btn-duo" onClick={() => handleNodeClick(activeNode)}>
          CONTINUE
        </button>
      </div>
    </div>
  )
}
