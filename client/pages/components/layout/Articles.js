import React,{useContext,useState, useEffect,useRef} from 'react';
import {ThemeContext} from '../../contexts/theme.js'
import {PageTypeContext} from '../../contexts/viewType.js'
import PageDetail from './PageDetail'
import PageView from './PageView'
import APIfetcher from '../../../APIfetcher'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'

const Articles = ({isRouter,serContents}) => {
  const [{isDetail}, toggleView] =useContext(PageTypeContext)
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);

  const [content, setContent] = useState(serContents)
  
  const [endScroll, setEndScroll] = useState(true)
  const fetchMore = useRef(null)
  const intersecting = useInfiniteScroll(fetchMore)

  const [isLoading,setIsLoading] = useState(false);

  const getContent = async() => {
    const newContents = await APIfetcher('get',isRouter.asPath+'/content/scroll',{
      params:{cursor: content[content.length -1]?.id || ""}
    })

    if(newContents.length ===0){
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
      {isDetail
      ?content.map((item, idx)=>(<PageDetail key={item.id} ms={item} idx={idx+1}/>)) 
      :content.map((item, idx)=>(<PageView key={idx} ms={item} idx={idx+1}/>))
      }
      <div ref={fetchMore} />
    </div>
  )
}

export default Articles;