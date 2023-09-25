import './App.css';
import Ingredients from './components/ingredients/Ingredients';
import IngredientsInfoHelper from './components/ingredients/IngredientsInfoHelper';

function App() {
  return (
    <div className='App mx-auto max-w-6xl text-center my-8'>
      <h1 className='font-semibold text-2xl'>React - The Road To Enterprise</h1>
      <Ingredients ingredientsInfoHelper={<IngredientsInfoHelper />} />
    </div>
  );
}

export default App;
