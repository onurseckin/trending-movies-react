import React from 'react'
const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY

export const useFetch = (url) => {
  const [response, setResponse] = React.useState(null)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const json = await res.json()
        setResponse(json)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, []) //eslint-disable-line

  return { response, error }
}

export const getTrendingMoviesUrl = () => `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`

export const getTrendingTVUrl = () => `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`

export const getTVByIdUrl = (id) => `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`

export const getMovieByIdUrl = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`

export const getImageUrl = (id) => `https://image.tmdb.org/t/p/w154/${id}`
