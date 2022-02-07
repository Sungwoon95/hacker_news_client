import React,{useState,useEffect, useRef, useContext} from 'react'
import APIfetcher from '../APIfetcher'
import {useRouter} from 'next/router'
import Sort from './components/layout/Sort'
import Articles from './components/layout/Articles'

const Ask = ({serContents}) => {
  const [inverse, setInverse] = useState(true)
  const router = useRouter()
  
  const onInverse = (inv) => {
    setInverse(inv)
  }

  return(
  <div>
    <Sort onInverse={onInverse}/>
    <Articles isRouter={router} serContents={serContents} inverse={inverse}/>
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