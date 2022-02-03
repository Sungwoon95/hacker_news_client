import React,{useState,useEffect, useRef, useContext} from 'react'
import APIfetcher from '../APIfetcher'
import {useRouter} from 'next/router'
import Sort from './components/layout/Sort'
import Articles from './components/layout/Articles'

const Show = ({serContents}) => {
  const router = useRouter()

  return(
    <div>
      {/* <Sort /> */}
      <Articles isRouter={router} serContents={serContents}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const serContents = await APIfetcher('get', '/show/content/scroll')
  return {
    props: {serContents}
  }
}

export default Show;