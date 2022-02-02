import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom'
import APIfetcher from '../../../APIfetcher'
import Backdrop from '../shared/Backdrop';

const Modal = ({userName, onClick}) => {
  const [isOpen,setIsOepn] = useState(false);
  const [user, setUser] = useState({})

  const getUser = async() => {
    const userModal = await APIfetcher('get',`id/${userName}`)
    setUser(userModal)
  }

  useEffect(()=>{
    getUser()

  },[])

  const createTime = () => {
    const create = Math.round((Date.now()-(user.created*1000))/(60*1000))

    if(create < 60){
      return `${create}M`
    }else if (create < 1440){
      return `${Math.round(create/60)}H`
    }else if (create < 10080){
      return `${Math.round(create/1440)}D`
    }else if (create < 40320){
      return `${Math.round(create/10080)}W`
    }else if (create < 483840){
      return `${Math.round(create/40320)}M`
    }else{
      return `${Math.round(create/483840)}Y`
    }
  }

  return ReactDOM.createPortal(
    <div className="UserModal">
      <Backdrop onClick={onClick} />
      <p className='UserModal__name'>{user.id}</p>
      <p className='UserModal__title'>
        profile with hacker news
      </p>
      <div className='UserModal__info'>
        <div className='UserModal__info--section'>
          <span className='UserModal__info--title'>
            Joined
          </span>
          <span className='UserModal__info--txt'>
            {createTime()}<span className='UserModal__info--txt-ago'>ago</span>
          </span>
        </div>
        <div className='UserModal__info--section'>
        <span className='UserModal__info--title'>
            Karma
          </span>
          <span className='UserModal__info--txt'>
            {user.karma}
          </span>
        </div>
      </div>
      <div className='UserModal__about'>{user.about}</div>
      <div className='UserModal__more'>
        <div className='UserModal__more--option'>
          <div className='UserModal__more--option-left'>
            <span className='material-icons'>
              link
            </span>
            <p className='UserModal__more--option-title'>
              Submissons
            </p>
          </div>
          <div className='UserModal__more--option--right'>
            <span className='material-icons'>
              navigate_next
            </span>
          </div>
        </div>
        <div className='UserModal__more--option'>
          <div className='UserModal__more--option-left'>
            <span className='material-icons'>
              link
            </span>
            <p className='UserModal__more--option-title'>
              Favorites
            </p>
          </div>
          <div className='UserModal__more--option--right'>
            <span className='material-icons'>
              navigate_next
            </span>
          </div>
        </div>
        <div className='UserModal__more--option'>
          <div className='UserModal__more--option-left'>
            <span className='material-icons'>
              link
            </span>
            <p className='UserModal__more--option-title'>
              Comments
            </p>
          </div>
          <div className='UserModal__more--option--right'>
            <span className='material-icons'>
              navigate_next
            </span>
          </div>
        </div>
      </div>
      <div onClick={onClick} className='UserModal__top--bar ' />
      <div onClick={onClick} className='UserModal__bottom--bar' />
    </div>,
    document.querySelector('#userModal')
  )
}

export default Modal