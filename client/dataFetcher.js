import {useState, useEffect} from 'react';
import {getIds} from './fetcher'

export const dataFetcher = (category, length) => {
  const [loadContent, setLoadContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    setIsLoading(true);
    getIds(category, length).then((loadContent)=>{
      setLoadContent(loadContent)
      setIsLoading(false);
    })
    .catch(()=>{
      setIsLoading(false);
    })
  },[category])
  return {loadContent, isLoading};
}

export const NewDatFetcher = (category, length)=> {
  const [newContent, setNewContent]= useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(()=>{
    setIsLoad(true);
    getIds(category,length).then((newContent)=>{
      setNewContent(newContent)
      setIsLoad(false)
    }).catch(()=>{
      setIsLoad(false)
    })
  },[category])

  return {newContent, isLoad}
}


