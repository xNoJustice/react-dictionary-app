import React from 'react'
import PropTypes from 'prop-types'

function SearchWord({ word, setWord }) {
  return (
    <div className="relative">
      <label htmlFor="word" className="text-gray-700 dark:text-white">
        Word
      </label>
      <input
        type="text"
        className="w-full rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder="Search word..."
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
    </div>
  )
}

SearchWord.propTypes = {
  word: PropTypes.string,
  setWord: PropTypes.func,
}

export default SearchWord
