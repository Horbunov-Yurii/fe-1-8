import Section from "./components/Section/Section"
import Title from "./components/Title/Title"
import recipies from "./recipies.json"

import Recipe from "./components/Recipe/Recipe"
import './App.css'

function App() {


  return (
    <>
      <Section>
        <Title/>
      </Section>
    <Recipe recipies={recipies}/>
    </>
  )
}

export default App