import { useState } from 'react'

export default function VariationB() {
  const [fraction, setFraction] = useState(50) // 0 to 100

  const numerator = Math.round((fraction / 100) * 4)
  const denominator = 4

  return (
    <div className="explorer-container">
      <div className="explorer-header">
        <h1>Fractions in Action</h1>
        <p>Drag the slider to see how fractions change.</p>
      </div>

      <div className="grid-cards">
        <div className="brill-card" style={{ gridColumn: '1 / -1' }}>
          <h3>Visualizing Parts of a Whole</h3>
          <p>A fraction represents a part of a whole. Move the slider to fill the box.</p>
          
          <div className="widget-box">
            <div className="fraction-display">
              <div className="fraction">
                <span>{numerator}</span>
                <div className="fraction-line" />
                <span>{denominator}</span>
              </div>
              <span>=</span>
              <div className="visual-box">
                <div className="visual-fill" style={{ height: `${fraction}%` }} />
              </div>
            </div>

            <div className="slider-container">
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="25"
                value={fraction} 
                onChange={(e) => setFraction(Number(e.target.value))}
                className="slider"
              />
            </div>
            
            <p style={{ color: '#a0a0a0', margin: 0 }}>
              You have selected {numerator} out of {denominator} parts.
            </p>
          </div>
        </div>

        <div className="brill-card">
          <div className="brill-card-icon">➕</div>
          <h3>Adding Fractions</h3>
          <p>Learn how to combine parts together.</p>
        </div>

        <div className="brill-card">
          <div className="brill-card-icon">🍕</div>
          <h3>Real World: Pizza</h3>
          <p>Apply fractions to slicing a pizza.</p>
        </div>
      </div>
    </div>
  )
}
