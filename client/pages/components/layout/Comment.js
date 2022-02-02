import React,{useState, useContext, useEffect} from 'react';
import APIfetcher from '../../../APIfetcher'

import {ThemeContext} from '../../contexts/theme.js'


const Comment = ({data:{id,by,text,time}}) => {
  const [{isDark}, toggleTheme] =useContext(ThemeContext)
  //const [article, setArticle] =({})
  //const [comment, setComment] =({})

  //const getArticle = async() => {
  //  const articlePage = await APIfetcher('get',`/article/${id}`
  //  //,{params:{userId}}
  //  )
  //  setArticle(articlePage)
  // }
 
  // const getComment = async() => {
  //   const comments = await APIfetcher('get',`/comment/${id}`
  //   //,{params:{userId}}
  //   )
  //   setComment(comments)
  //  }
 
  // useEffect(()=>{
  //  getArticle()
  //  getComment()
  // },[])

  const wroteTime = () => {
    const write = Math.round((Date.now() - (time*1000)) / (60 * 1000))
    
    if(write < 60){
      return `${write} minutes ago`
    }else if (write < 1440){
      return `${Math.round(write/60)} hours ago`
    }else if (write < 10080){
      return `${Math.round(write/1440)} days ago`
    }else if (write < 40320){
      return `${Math.round(write/10080)} weeks ago`
    }else if (write < 483840){
      return `${Math.round(write/40320)} months ago`
    }else{
      return `${Math.round(write/483840)} years ago`
    }
  }


  return(
    <div className={`${isDark? 'Dark': 'Light'}_Comment`}>
      <div className='Comment__top'>
        <div className='Comment__user'>
          {by}
        </div>
        <div className='Comment__time'>
          {wroteTime()}
        </div>
      </div>
      <div className='Comment__text'>
        {text}
      </div>
    </div>
  )
}

export default Comment