import { useFruits } from '../hooks/useFruits.ts'
import LandingPage from './LandingPage.tsx'

function App() {
  const { data } = useFruits()

  return (
    <div>
    <LandingPage />
  </div>
  )
}

export default App
