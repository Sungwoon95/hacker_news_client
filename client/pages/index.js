import React,{useState,useEffect,useRef, useContext} from 'react'
import {Pagination} from 'swiper'
import { Swiper, SwiperSlide} from 'swiper/react';
import PageView from './components/layout/PageView'
import CardView from './components/layout/CardView'
import Sort from './components/layout/Sort';
import APIfetcher from '../APIfetcher'
import PageDetail from './components/layout/PageDetail';
import useInfiniteScroll from './hooks/useInfiniteScroll'

import 'swiper/css/pagination';
import {ThemeContext} from './contexts/theme.js'
import {PageTypeContext} from './contexts/viewType.js'


const Home = () => {
  const [{isDark}, toggleTheme] =useContext(ThemeContext)
  const [{isDetail}, toggleView] =useContext(PageTypeContext)

  const [content, setContent] = useState([])
  const [toppest, setToppest] = useState([])
  const [endScroll, setEndScroll] = useState(true)
  const fetchMore = useRef(null)
  const intersecting = useInfiniteScroll(fetchMore)
  
  const [isLoading,setIsLoading] = useState(false);

  const getToppest = async() => {
    const newContents = await APIfetcher ('get','/rank')
    setToppest(newContents)
    setIsLoading(true);
  }

  const getContent = async() => {
    const newContents = await APIfetcher ('get','/new/content/scroll', {
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

  useEffect(()=>
  {
    getToppest()
  },[toppest])
  return(<div className={`${isDark ? "Dark": "Light"}_Home`}>
    <h2 className='container Home__rank'>Total<br/> Ranking 5 Now</h2>
  <div className='CardView__wrap'>
  {<Swiper modules={[Pagination]}
     pagination={{clickable: true}}>
       {toppest.map((item, idx)=>(
           <>
            <SwiperSlide>
             <CardView key={idx} ms={item} idx={idx+1} />
           </SwiperSlide>
           <h2>
             굿
           </h2>
           </>
       ))}
     </Swiper>}
     </div>
    <Sort onClick={toggleView}/>
  {!isLoading 
  ? 
  'Load...'
  :
  (isDetail? content.map((item,idx)=>(
    <PageDetail key={idx} ms={item} idx={idx+1}/>
    )):
    content.map((item,idx)=>(
      <PageView key={item.id} ms={item} idx={idx+1}/>
      )))
    }
  
  <div ref={fetchMore} />
</div>

        )
}


export default Home;