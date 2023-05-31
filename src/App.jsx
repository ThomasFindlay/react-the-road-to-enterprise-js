import AnimalExampleWithApiStates from '@/components/AnimalExampleWithApiStates'
import AnimalExampleWithApiStatesConstants from '@/components/AnimalExampleWithApiStatesConstants'
import AnimalExampleWithUseApiStatus from '@/components/AnimalExampleWithUseApiStatus'
import AnimalExampleWithUseApi from '@/components/AnimalExampleWithUseApi'

function App() {
  return (
    <div className="max-w-6xl mx-auto my-8 text-center App">
      <h1>React - The Road To Enterprise</h1>
      <AnimalExampleWithApiStates />
      <AnimalExampleWithApiStatesConstants />
      <AnimalExampleWithUseApiStatus />
      <AnimalExampleWithUseApi />
    </div>
  )
}

export default App
