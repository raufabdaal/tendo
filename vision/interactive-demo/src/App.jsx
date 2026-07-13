import { useState } from 'react'
import Dashboard from './Dashboard'
import CampaignMap from './CampaignMap'

function App() {
  const [currentView, setCurrentView] = useState('dashboard')
  const [selectedWorld, setSelectedWorld] = useState(null)

  const openWorld = (world) => {
    setSelectedWorld(world)
    setCurrentView('campaign')
  }

  const goHome = () => {
    setSelectedWorld(null)
    setCurrentView('dashboard')
  }

  return (
    <div className="app-container">
      <div className="topbar">
        <div style={{ fontWeight: 800, fontSize: '18px', color: '#F8FAFC' }}>
          TENDO <span style={{ color: '#22D3EE' }}>PRO</span>
        </div>
        <div className="offline-status">
          <span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#4ADE80', borderRadius: '50%' }}></span>
          ONLINE
        </div>
      </div>

      {currentView === 'dashboard' && <Dashboard onWorldClick={openWorld} />}
      {currentView === 'campaign' && <CampaignMap world={selectedWorld} onBack={goHome} />}
    </div>
  )
}

export default App
