import React from 'react'
import { useFetch, getImageUrl } from '../services'
export default function TVShow({ tvShow }) {
  return (
    <tr>
      <td>
        <img className='movieImage' src={getImageUrl(tvShow.poster_path)} alt='tvshow-img' />
      </td>
    </tr>
  )
}
