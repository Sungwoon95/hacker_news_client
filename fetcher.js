import axios from 'axios'

axios.defaults.baseURL = 'https://hacker-news.firebaseio.com/v0'

const fetching = async (method, url, ...rest)=>{
    const res = await axios[method](url,...rest)
    return res.data
}

const getNews = async (id) => {
  const msgs = await fetching('get',`/item/${id}.json`)
  
  return msgs
}

export const getIds = async (category,length) => {
  const ids = await fetching('get',`/${category}stories.json`)
  const content = await Promise.all(
    ids.slice(0,length).map(async item=> await getNews(item))
  )
  return content
}