// import reactLogo from './assets/react.svg'
import './App.css'
import Nav from "./Nav"
import Journal from "./Journal"
import data from "./data"

function App() {
  const entries = data.map(entry => {
    console.log(entry)
    return (
      <Journal
        key={entry.id} 
        entry={entry}
      />
    )
  })

  console.log(data)
  return (
    <div>
    <header>
      <Nav />
    </header>
    <main>
      {entries}
    </main>
    </div>
  )
}

export default App
