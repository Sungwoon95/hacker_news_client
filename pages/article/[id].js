import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import APIfetcher from '../../APIfetcher'

import Comment from '../components/layout/Comment'

const UserInfo = () => {
  const [article, setArticle] = useState({})
  const [comment, setComment] = useState([])
  const router = useRouter();
  const userId= router.query.id

  const getArticle = async() => {
   const articlePage = await APIfetcher('get',`/article/${userId}`
   //,{params:{userId}}
   )
   setArticle(articlePage)
  }

  const getComment = async() => {
    const comments = await APIfetcher('get',`/comment/${userId}`
    //,{params:{userId}}
    )
    setComment(comments)
   }

  useEffect(()=>{
   getArticle()
   getComment()
  },[])

  return (
    <div>
      {article.by}
      {article.descendants}
      {article.title}
      {/* {article.text} */}
      {comment.map((item,idx)=>(
        <Comment key={idx} data={item}/>
      ))}
    </div>
  )
}

export default UserInfo