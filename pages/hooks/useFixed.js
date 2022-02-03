import {useState, useEffect, useRef, useCallback} from 'react'

const useFixed = target => {
  const fixRef = useRef(null)
  const [fixing,setFixing] = useState(false)

  // console.log(fixRef.current,target.current)

  const getFixing = useCallback(()=>{
    if (!fixRef.current){
      fixRef.current = new IntersectionObserver(
        entries => (setFixing(entries[0].isIntersecting))
      )
    }
    return fixRef.current
  },[fixRef.current])
  
  useEffect(()=>{
    getFixing()
    if(target.current){
      getFixing().observe(target.current)
    }  
    return () => {
     getFixing().disconnect()
    }
  },[target.current])

  return fixing
}

export default useFixed