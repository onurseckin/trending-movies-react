import React from 'react'
import { useFetch, getImageUrl, getMovieByIdUrl, imdbUrl, youtubeTrailerUrl } from '../services'
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
    let anchorTag = (url) => (
      <a href={url} target='_blank' rel='noreferrer'>
        {playingOnHelper(url)}
      </a>
    )
    if (url) {
      return <p>Playing On: {anchorTag(url)}</p>
    } else {
      return <p></p>
    }
  }

  const WatchTrailer = () => {
    let url = youtubeTrailerUrl(movie.title)
    return (
      <a href={url} target='_blank' rel='noreferrer'>
        Watch Trailer
      </a>
    )
  }
  return (
    <tr className='movieRow'>
      <td className='movieImage'>
        <a href={imdbUrl(movie.imdb_id)} target='_blank' rel='noreferrer'>
          <img src={getImageUrl(movie.poster_path)} alt='movie-img' />
        </a>
      </td>
      <td className='movieInfos'>
        <span style={{ fontSize: 12 }}>
          <span style={{ fontSize: 24 }}>{movie.vote_average}</span> / 10
        </span>
        <a style={{ textDecoration: 'none' }} href={imdbUrl(movie.imdb_id)} target='_blank' rel='noreferrer'>
          <p style={{ fontSize: 16 }}>{movie.title}</p>
        </a>
        <Genre />
        <PlayingOn />
        <WatchTrailer />
      </td>
    </tr>
  )
}
