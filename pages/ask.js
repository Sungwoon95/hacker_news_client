import React,{useState,useEffect, useRef, useContext} from 'react'
import APIfetcher from '../APIfetcher'
import {useRouter} from 'next/router'
import Sort from './components/layout/Sort'
import Articles from './components/layout/Articles'

const Ask = ({serContents}) => {
  const router = useRouter()

  return(
  <div>
    <Sort />
    <Articles isRouter={router} serContents={serContents}/>
  </div>
  )
}

export const getServerSideProps = async () => {
  const serContents = await APIfetcher('get', '/ask/content/scroll')
  return {
    props: {serContents}
  }
}

export default Ask;