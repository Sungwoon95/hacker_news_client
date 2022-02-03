import axios from 'axios'

axios.defaults.baseURL = 'https://customhackerapi.herokuapp.com'

const APIfetcher = async (method, url, ...rest)=> {
  const res = await axios[method](url, ...rest)

  return res.data
}

export default APIfetcher