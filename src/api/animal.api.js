import api from './api'

const URLS = {
  fetchDogUrl: 'breeds/image/random',
  fetchCatUrl: 'images/search?format=json',
}

export const fetchDog = () => {
  return api.get(URLS.fetchDogUrl, {
    baseURL: 'https://dog.ceo/api/',
  })
}

export const fetchCat = () => {
  return api.get(URLS.fetchCatUrl, {
    baseURL: 'https://api.thecatapi.com/v1/',
  })
}
