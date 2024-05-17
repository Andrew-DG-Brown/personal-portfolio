import './App.css'
import Main from './components/Main'
import ScrollToTop from './components/ScrollToTop'
import { useLenis, ReactLenis } from 'lenis/react'

function App() {
  useLenis()

  return (
    <ReactLenis root options={{ duration: 0.6 }}>
      <Main />
      <ScrollToTop />
    </ReactLenis>
  )
}

export default App

