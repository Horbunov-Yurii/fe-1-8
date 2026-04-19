import Section from "./components/Section/Section.style"
import List from "./components/List/List"
import recipies from "./recipies.json"
import Title from "./components/Title/Title"
import Recipe from "./components/Recipe/Recipe"
import Button from "./components/Button/Button"
import './App.css'

function App() {


  return (
    <>
    <Section>
      <Title text='Найпопулярніші фільми'/>
      <List/>
    </Section>
    <Recipe recipe={recipies}/>
    <Title/>
    <Button text="closed" error/>
    <Button text="open" primary/>
    <Button text="info" info/>
    
    </>
  )
}

export default App