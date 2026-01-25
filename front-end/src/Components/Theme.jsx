import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function Theme() {
    const { theme, toggleTheme } = useContext(AppContext);
  return (
    <div style={{background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white'}}>
      <h1>current Theme : {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Theme