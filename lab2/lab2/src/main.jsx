import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PremierLeagueTeams } from './components/PremiereLeagueTeams.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PremierLeagueTeams />
  </StrictMode>,
)
