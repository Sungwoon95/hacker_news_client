import React,{useState,useEffect, useRef, useContext} from 'react'
import APIfetcher from '../APIfetcher'
import Sort from './components/layout/Sort'
import {useRouter} from 'next/router'

import Articles from './components/layout/Articles'

const New = ({serContents}) => {  

  const router = useRouter()

  return(
  <div>
    <Sort />
    <Articles isRouter={router} serContents={serContents}/>
  </div>
  )
}

export const getServerSideProps = async () => {
  const serContents = await APIfetcher('get', '/new/content/scroll')
  return {
    props: {serContents}
  }
}

export default New;