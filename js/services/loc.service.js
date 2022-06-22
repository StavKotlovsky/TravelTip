import { storageService } from './storage.service.js'

const API_KEY = 'AIzaSyB_chQszcvUfSeiALf9bvdQw44SIPjbHq4'

export const locService = {
  getLocs,
}

const locs = [
  { name: 'Greatplace', lat: 32.047104, lng: 34.832384 },
  { name: 'Neveragain', lat: 32.047201, lng: 34.832581 },
]

function getLocs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(locs)
    }, 2000)
  })
}

getCordsByCity('tel aviv')

function getCordsByCity(city) {
  console.log('hey')
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}+View,+CA&key=${API_KEY}`
    )

    .then(({ data }) => data.results)
    .then((results) => {
      let resultsPrms = results.map(loadCityData)
      return Promise.all(resultsPrms).then((results) => {
        return results
      })
    })
}

function loadCityData(city) {
  console.log(city)
}
