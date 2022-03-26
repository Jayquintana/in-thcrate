const getArtists = async (artistsId) => {

  return fetch(`https://api.discogs.com/artists/${artistsId}?key=sREoDobrApthElmLhCgq&secret=gcHxqrvVqXaOXnSaiZdUIXElhWvArlPR`)
    .then(response => {
      if (!response.ok) {
        if (response.status >= 500) {
          throw new Error(`${response.status}. I am so sorry for the inconvenience! The server is down. Please try again, later.`)
        } else if (response.status === 404) {
          throw new Error(`${response.status}. We apologize for the inconvenience. Please try again, or go back to the Main Page.`)
        } else {
          throw new Error(`${response.status}. We apologize for the inconvenience. Please try again later.`)
        }
      } else {
        return response.json()
      }
    })
}



export { getArtists}