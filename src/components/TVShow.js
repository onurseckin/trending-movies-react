import React from 'react'
import { useFetch, getImageUrl, getTVByIdUrl, youtubeTrailerUrl } from '../services'
import { playingOnHelper } from '../helpers'
export default function Movie({ id, title }) {
  const TVShowData = useFetch(getTVByIdUrl(id))
  if (!TVShowData.response) {
    return <div>Loading...</div>
  }
  const tvShow = TVShowData.response
  const Genre = () => {
    let genres = tvShow.genres
    let result = ''
    for (let i = 0; i < genres.length; i++) {
      result += genres[i].name
      if (genres[i + 1] !== undefined) result += ', '
    }
    return result
  }

  const PlayingOn = () => {
    let url = tvShow.homepage
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
    let url = youtubeTrailerUrl(title)
    return (
      <a href={url} target='_blank' rel='noreferrer'>
        Watch Trailer
      </a>
    )
  }
  return (
    <tr className='tableRow'>
      <td className='tableImage'>
        <a href={tvShow.homepage} target='_blank' rel='noreferrer'>
          <img src={getImageUrl(tvShow.poster_path)} alt='tvShow-img' />
        </a>
      </td>
      <td className='tableInfos'>
        <span style={{ fontSize: 12 }}>
          <span style={{ fontSize: 24 }}>{tvShow.vote_average}</span> / 10
        </span>
        <a style={{ textDecoration: 'none' }} href={tvShow.homepage} target='_blank' rel='noreferrer'>
          <p style={{ fontSize: 16 }}>{title}</p>
        </a>
        <Genre />
        <PlayingOn />
        <WatchTrailer />
      </td>
    </tr>
  )
}
