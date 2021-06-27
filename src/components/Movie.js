import React from 'react'
import { useFetch, getImageUrl, getMovieByIdUrl } from '../services'
import { playingOnHelper } from '../helpers'
export default function Movie({ id }) {
  const movieData = useFetch(getMovieByIdUrl(id))
  if (!movieData.response) {
    return <div>Loading...</div>
  }
  const movie = movieData.response
  const Genre = () => {
    let genres = movie.genres
    let result = ''
    for (let i = 0; i < genres.length; i++) {
      result += genres[i].name
      if (genres[i + 1] !== undefined) result += ', '
    }
    return result
  }

  const PlayingOn = () => {
    let url = movie.homepage
    let result = ''
    if (url) {
      result = playingOnHelper(url)
      return <p>Playing On: {result}</p>
    } else {
      return null
    }
  }

  console.log(movie)
  return (
    <tr className='movieRow'>
      <td className='movieImage'>
        <img src={getImageUrl(movie.poster_path)} alt='movie-img' />
      </td>
      <td className='movieInfos'>
        <span style={{ fontSize: 12 }}>
          <span style={{ fontSize: 24 }}>{movie.vote_average}</span> / 10
        </span>
        <p style={{ fontSize: 16 }}>{movie.title}</p>
        <Genre />
        <PlayingOn />
      </td>
    </tr>
  )
}
