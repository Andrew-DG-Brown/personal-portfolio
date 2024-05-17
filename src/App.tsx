import './App.css'
import Main from './components/Main'
import { useLenis, ReactLenis } from 'lenis/react'

function App() {
  useLenis()

  return (
    <ReactLenis root options={{ duration: 0.6 }}>
      <Main />
    </ReactLenis>
  )
}

export default App

