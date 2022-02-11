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
    const comments = await APIfetcher('get',`/commentReply/${userId}`
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
      <p className="container">{article.by}</p>
      <p className="container">{article.descendants}</p>
      <p className="container">{article.title}</p>
      {/* {article.text} */}
      {comment.map((item,idx)=>(
        <Comment key={idx} data={item}/>
      ))}
    </div>
  )
}

export default UserInfo