import recipies from "./recipies.json"

import Recipe from "./components/Recipe/Recipe"
import './App.css'

function App() {


  return (
    <>
    <Recipe recipies={recipies}/>
    </>
  )
}

export default App