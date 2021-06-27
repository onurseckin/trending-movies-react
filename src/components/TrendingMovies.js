import React from 'react'
import { useFetch, getTrendingMoviesUrl } from '../services'
import Movie from './Movie'

export default function TrendingMovies() {
  const trendingMoviesData = useFetch(getTrendingMoviesUrl())
  if (!trendingMoviesData.response) {
    return <div>Loading...</div>
  }
  const movies = trendingMoviesData.response.results
  const RenderMovies = () => movies.map((movie) => <Movie id={movie.id} key={movie.id} />)
  return (
    <div className='trendingMovies'>
      <table cellPadding='10' cellSpacing='0'>
        <thead>
          <tr>
            <th>Trending Movies</th>
          </tr>
        </thead>
        <tbody>
          <RenderMovies />
        </tbody>
      </table>
    </div>
  )
}
