import {createContext,useState, useEffect} from 'react';

export const PageTypeContext = createContext();

export const PageTypeProvider = ({children}) => {
  const [isDetail, setIsDetail] = useState(false)
  //const [isNew, setIsNew] = useState(false)
  
  const toggleView = () => {
    localStorage.setItem("isDetail", JSON.stringify(!isDetail))
    setIsDetail(!isDetail)
  }

  //const toggletype = () => {
  //  localStorage.setItem("isNew", JSON.stringify(!isNew))
  //  setIsDetail(!isNew)
  //}

  useEffect(()=>{
    const isDetail = localStorage.getItem("isDetail") === "true";
    setIsDetail(isDetail);
  },[])

  return(
    <PageTypeContext.Provider value={[{isDetail}, toggleView]}>
      {children}
    </PageTypeContext.Provider>
  )
}