import style from './App.module.css'
import AnimalExample from '@/components/AnimalExample.jsx'
import Logo from './components/Logo'

function App() {
  return (
    <div className="container flex flex-col min-h-screen gap-8 p-4 mx-auto">
      <Logo />
      <AnimalExample />
    </div>
  )
}

export default App
