import config from '../config';

export const AdoptionApiService = {
  getCat() {
    return fetch(`${config.API_ENDPOINT}/cat`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getDog() {
    return fetch(`${config.API_ENDPOINT}/dog`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
};