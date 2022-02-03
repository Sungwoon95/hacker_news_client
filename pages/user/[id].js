import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import APIfetcher from '../../APIfetcher'

const UserInfo = () => {
  const [user, setUser] = useState({})
  const router = useRouter();
  const userId= router.query.id

  const getUserInfo = async() => {
    const userPage = await APIfetcher('get',`id/${userId}`
    //,{params:{userId}}
    )
    setUser(userPage)
  }

  useEffect(()=>{
    getUserInfo()
  },[])

  return (
    <div>
      <div>user:{user.id}</div>
      <div>created:{user.created}</div>
      <div>karma:{user.karma}</div>
      <div>about:{user.about}</div>
      <div>about:{user.submitted}</div>
    </div>
  )
}

export default UserInfo