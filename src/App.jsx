import logo from './logo.png'
import style from './App.module.css'
import AnimalExample from '@/components/AnimalExample.jsx'

function App() {
  return (
    <div className="container flex flex-col min-h-screen gap-8 p-4 mx-auto">
      <a
        className="block mx-auto"
        href="https://theroadtoenterprise.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={logo} className="w-48" alt="logo" />
      </a>
      <AnimalExample />
    </div>
  )
}

export default App
