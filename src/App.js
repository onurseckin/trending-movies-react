import React from 'react'
import TredingMovies from './components/TrendingMovies'
import TredingTV from './components/TrendingTV'
import './App.scss'
function App() {
  return (
    <div className='app-container'>
      <TredingMovies />
      <TredingTV />
    </div>
  )
}

export default App
