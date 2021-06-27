import React from 'react'
import { useFetch, getTrendingTVUrl } from '../services'
import TVShow from './TVShow'

export default function TrendingTV() {
  const trendingTvShows = useFetch(getTrendingTVUrl())
  if (!trendingTvShows.response) {
    return <div>Loading...</div>
  }
  const tvShows = trendingTvShows.response.results
  const RenderTvShows = () => tvShows.map((tvShow) => <TVShow id={tvShow.id} key={tvShow.id} title={tvShow.name} />)
  return (
    <div className='trendingMovies'>
      <table cellPadding='10' cellSpacing='0'>
        <thead>
          <tr>
            <th>Trending TV Shows</th>
          </tr>
        </thead>
        <tbody>
          <RenderTvShows />
        </tbody>
      </table>
    </div>
  )
}
