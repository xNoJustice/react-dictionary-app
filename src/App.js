import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LanguagesSelect from './components/LanguagesSelect'
import SearchWord from './components/SearchWord'
import Definitions from './components/Definitions'
import logo from './logo.svg'
import './logo.css'

function App() {
  const [word, setWord] = useState('')
  const [meanings, setMeanings] = useState([])
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const fetchWord = () => {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`)
        .then((res) => {
          setMeanings(res.data)
        })
        .catch(() => {})
    }
    if (word.length > 2) {
      setTimeout(() => {
        fetchWord()
      }, 1000)
    }
  }, [word, lang, setMeanings])

  return (
    <div className="w-3/4 h-auto min-h-screen mx-auto">
      <img src={logo} alt="logo" className="w-32 h-32 mx-auto logo" />
      <h1 className="text-center mt-6 mb-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        {word || 'React Dictionary App'}
      </h1>
      <div className="flex flex-wrap justify-evenly mx-auto">
        <SearchWord word={word} setWord={setWord} />
        <LanguagesSelect lang={lang} setLang={setLang} />
      </div>
      {meanings && <Definitions meanings={meanings} word={word} lang={lang} />}
    </div>
  )
}

export default App
