import React from 'react'
import PropTypes from 'prop-types'
import Languages from '../data/Languages'

function LanguagesSelect({ lang, setLang }) {
  return (
    <label className="text-gray-700 dark:text-white" htmlFor="languages">
      Languages
      <select
        id="languages"
        className="w-full block py-2 px-3 border border-gray-300 bg-white dark:bg-gray-800 dark:border-none rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        name="languages"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        {Languages.map((language) => (
          <option key={language.label} value={language.label}>
            {language.value}
          </option>
        ))}
      </select>
    </label>
  )
}

LanguagesSelect.propTypes = {
  lang: PropTypes.string,
  setLang: PropTypes.func,
}

export default LanguagesSelect
