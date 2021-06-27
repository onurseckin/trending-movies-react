import React from 'react'
import TredingMovies from './components/TrendingMovies'
import TredingTV from './components/TrendingTV'
import './App.scss'
function App() {
  return (
    <div className='app'>
      <div className='header'>
        <h1 style={{ display: 'flex', justifyContent: 'center', color: 'darkcyan' }}>
          Trending Movies and TV Shows - React Project
        </h1>
      </div>
      <div className='app-container'>
        <TredingMovies />
        <div className='divider'></div>
        <TredingTV />
      </div>
    </div>
  )
}

export default App
