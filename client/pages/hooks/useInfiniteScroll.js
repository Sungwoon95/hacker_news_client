import {useState, useEffect, useRef, useCallback} from 'react'

const useInfiniteScroll = target => {
  const observerRef = useRef(null)
  const [intersecting, setIntersecting]= useState(false)

 const getObserver = useCallback(()=>{
   if (!observerRef.current){
    observerRef.current = new IntersectionObserver(
      entries => setIntersecting(
        entries.some(entry => entry.isIntersecting)
    ))
   }
   return observerRef.current
 },[observerRef.current])

  useEffect(()=>{
    if(target.current) getObserver().observe(target.current)

    return ()=>{
      getObserver().disconnect()
    }
  },[target.current])

  return intersecting
}

export default useInfiniteScroll

// const observerRef = useRef(null)
//   const [intersecting, setIntersecting] = useState(false)
  
//   const getObserver = useCallback(()=>{
//     if (!observerRef.current){
//       observerRef.current = new IntersectionObserver(
//         entries => setIntersecting(entries.some(entry => entry.intersecting))
//       )
//     }
//     return observerRef.current
//   },[observerRef.current])

//   useEffect(()=>{
//     if(target.current) getObserver().observe(target.current)

//     return () => {
//       getObserver().disconnect()
//     }
//   },[target.current])
//   return intersecting