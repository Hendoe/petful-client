import config from '../config';

export const AdoptionApiService = {
  getPerson() {
    return fetch(`${config.API_ENDPOINT}/person`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getPeople() {
    return fetch(`${config.API_ENDPOINT}/people`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getCats() {
    return fetch(`${config.API_ENDPOINT}/cats`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
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
  getDogs() {
    return fetch(`${config.API_ENDPOINT}/dogs`, {
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
  },
  deleteDog() {
    return fetch(`${config.API_ENDPOINT}/dog`, {
      headers: {
        'DELETE'
      },
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  }
};