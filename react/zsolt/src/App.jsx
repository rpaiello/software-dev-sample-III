import { useState } from 'react'
import './App.css'
import WordCard from './components/wordcard/WordCard'
import CreateCards from './components/wordcard/CreateCards';

function App() {
  const [words, setWords] = useState([
    {key: "1", obverse: "Translation", reverse: "Üvbersetzung"},
    {key: "2", obverse: "Egg", reverse:"Ei"},
    {key: "3", obverse: "Paper", reverse:"Papier"},
    {key: "4", obverse: "Square", reverse:"Platz"}
  ]);

  return (
    <div className="app">
      <section className='cardform'>
        <CreateCards />
      </section>
      <h2>Dictionary App</h2>
      <hr />
      <main className='cardcontainer'>
        {words.map(word => <WordCard obverse={word.obverse} reverse={word.reverse} key={`${word.obverse}-${word.reverse}`} />)}
      </main>
    </div>
  )
}

export default App
