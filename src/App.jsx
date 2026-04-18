import recipies from "./recipies.json"
import Title from "./components/Title/Title"
import Recipe from "./components/Recipe/Recipe"
import Button from "./components/Button/Button"
import './App.css'

function App() {


  return (
    <>
    <Recipe recipe={recipies}/>
    <Title/>
    <Button text="closed" error/>
    <Button text="open" primary/>
    <Button text="info" info/>
    
    </>
  )
}

export default App