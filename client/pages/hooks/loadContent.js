import React,{useState,useEffect, useRef} from 'react'
import {dataFetcher} from '../../dataFetcher'
import APIfetcher from '../../APIfetcher'
import PageView from '../components/layout/pageView'
import PageDetail from '../components/layout/pageDetail'
import Sort from '../components/layout/Sort'
import useInfiniteScroll from '../hooks/useInfiniteScroll'

const loadContent = () => {
  const [content, setContent] = useState([])
  const [endScroll, setEndScroll] = useState(true)
  const fetchMore = useRef(null)
  const intersecting = useInfiniteScroll(fetchMore)
  
  const [pageType, setPageType] = useState(true);

  const toggleView = () => {
    setPageType(!pageType)
  }

  const getContent = async() => {
    const newContents = await APIfetcher ('get','/new/content/scroll', {
      params:{cursor: content[content.length - 1]?.id || ''}}
      )
      if (newContents.length === 0){
        setEndScroll(false)
      }
    setContent(content=>[...content,...newContents])
  }
  useEffect (() => {
    if(intersecting && endScroll) getContent()
    console.log(intersecting)

  },[intersecting,content])
  return(
  <div className="container">
    <Sort />
    {/* {isLoading 
    ?
    <p>Loadgin</p> 
    :
    <>
    {loadContent.map((item,idx)=>(
      <PageView key={item.id} ms={item} idx={idx+1}/>
    ))}
    </>}     */}
    <button onClick={toggleView}>
        {pageType? "자세히" :"일반"}
      </button>
    {pageType? content.map((item,idx)=>(
      <PageDetail key={idx} ms={item} idx={idx+1}/>
      )):
      content.map((item,idx)=>(
        <PageView key={idx} ms={item} idx={idx+1}/>
        ))
      }
    <div ref={fetchMore} />
  </div>
  )
}

export default loadContent