import { useState } from 'react'
import './App.css'
import CreateCards from './components/wordcard/CreateCards';
import CardContainer from './components/wordcard/CardContainer';

function App() {
  const [words, setWords] = useState([]);

  const addWord = (obverse, reverse) => {
    const newWords = [...words, {obverse, reverse}]
    setWords(newWords);
  }

  const deleteWord = (obverse) => {
    const wordsMinusOne = words.filter(word => word.obverse !== obverse);
    setWords(wordsMinusOne);
  }

  return (
    <div className="app">
      <h2>Dictionary App</h2>
      <hr />
      <section className='cardform'>
        <CreateCards addWord={addWord}/>
        <CardContainer deleteWord={deleteWord} words={words}/>
      </section>
    </div>
  )
}

export default App
