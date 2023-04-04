import { useSomethingContext } from './context/SomethingContext'

function App() {
  const {name} = useSomethingContext();

  return (
    <div className="App">
      <h1>Dion React template for Context</h1>
      <h2>{name}</h2>
    </div>
  )
}

export default App
