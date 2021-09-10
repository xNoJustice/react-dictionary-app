import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

function Definitions({ meanings, word, lang }) {
  return (
    <div className="w-full mx-auto mt-3 overflow-y-auto">
      {meanings[0] && word && lang === 'en' && (
        <audio
          className="w-1/2 lg:w-1/2 mx-auto"
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          <track kind="captions" />
          Your browser does not support the audio element.
        </audio>
      )}
      {word === '' ? (
        <div className="bg-gray-400 dark:bg-gray-300 text-6xl uppercase font-thin rounded-2xl px-8 py-6 mx-8 my-4 lg:mx-64">
          Start by typing a word in search
        </div>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                key={uuidv4()}
                className="bg-gray-400 dark:bg-gray-300 divide-y-2 divide-indigo-500 divide-opacity-50 rounded-2xl px-8 py-6 mx-8 my-4 lg:mx-64 break-all"
              >
                <div>
                  <b>Meaning :</b> {def.definition}
                </div>
                {def.example && (
                  <div>
                    <b>Example :</b> {def.example}
                  </div>
                )}
                {def.synonyms && def.synonyms.length > 0 && (
                  <div>
                    <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                  </div>
                )}
              </div>
            )),
          ),
        )
      )}
    </div>
  )
}

Definitions.propTypes = {
  meanings: PropTypes.array,
  word: PropTypes.string,
  lang: PropTypes.string,
}

export default Definitions
