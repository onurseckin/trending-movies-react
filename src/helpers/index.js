export const playingOnHelper = (url) => {
  const regex = /^(?:https?:)?(?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/gim
  const r = new RegExp(regex)
  const raw = r.exec(url)
  const domain = raw[1]
  switch (domain) {
    case 'netflix.com':
      return 'Netflix'
    case 'warnerbros.com':
      return 'Warner Bros'
    case 'play.hbomax.com':
      return 'HBO Max'
    case 'spiral.movie':
      return 'Spiral Movie'
    case 'disneyplus.com':
      return 'Disney Plus'
    case 'movies.disney.com':
      return 'Disney Movies'
    case 'thefastsaga.com':
      return 'The Fast Saga'
    case 'aquietplacemovie.com':
      return 'A Quiet Place Movie'
    case 'paramountplus.com':
      return 'Paramount Plus'
    case 'dreamworks.com':
      return 'DreamWorks'
    case 'miramax.com':
      return 'Miramax'
    case 'base-fx.com':
      return 'Base FX'
    case 'sonypictures.com':
      return 'Sony Pictures'
    default:
      return domain
  }
}
