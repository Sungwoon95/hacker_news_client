import React,{useState,useEffect, useRef, useContext} from 'react'
import APIfetcher from '../APIfetcher'
import PageView from './components/layout/pageView'
import PageDetail from './components/layout/pageDetail'
import Sort from './components/layout/Sort'
import useInfiniteScroll from './hooks/useInfiniteScroll'
import {ThemeContext} from './contexts/theme.js'
import {PageTypeContext} from './contexts/viewType.js'

const Ask = () => {
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
  const [{isDetail}, toggleView] =useContext(PageTypeContext)
  
  const [content, setContent] = useState([])
  const [endScroll, setEndScroll] = useState(true)
  const fetchMore = useRef(null)
  const intersecting = useInfiniteScroll(fetchMore)
  
  const [isLoading,setIsLoading] = useState(false);

  const getContent = async() => {
    const newContents = await APIfetcher ('get','/ask/content/scroll', {
      params:{cursor: content[content.length - 1]?.id || ''}}
      )
      if (newContents.length === 0){
        setEndScroll(false)
      }
    setContent(content=>[...content,...newContents])
    setIsLoading(true);
  }
  useEffect (() => {
    if(intersecting && endScroll) getContent()

  },[intersecting,content])

  return(
  <div>
    <Sort onClick={toggleView}/>
    {!isLoading 
    ? 
    'Load...'
    :
    (isDetail? content.map((item,idx)=>(
      <PageDetail key={idx} ms={item} idx={idx+1}/>
      )):
      content.map((item,idx)=>(
        <PageView key={idx} ms={item} idx={idx+1}/>
        )))
      }
    
    <div ref={fetchMore} />  
  </div>
  )
}

export default Ask;