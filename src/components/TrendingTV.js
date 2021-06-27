import React from 'react'
import { useFetch, getTrendingTVUrl } from '../services'
export default function TrendingTV() {
  const trendingTVData = useFetch(getTrendingTVUrl())
  if (!trendingTVData.response) {
    return <div>Loading...</div>
  }
  console.log(trendingTVData.response)
  return (
    <div className='trendingTV'>
      <table>
        <thead>
          <tr>
            <th>Trending TV Shows</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Trending TV Shows Data</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
