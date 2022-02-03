import React,{useState, useContext} from 'react';
import Modal from './Modal.js'

import {ThemeContext} from '../../contexts/theme.js'

const CardView = ({ms: {id,by, title, kids, time, url, descendants, score}, idx}) => {
  const [{isDark}, toggleTheme] =useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  const idxNum = ('00' + idx).slice(-2)
  
  
  return(
      <div className={`${isDark ? "Dark": "Light"}_CardView`}>
        <div className="CardView__main">
          <span className="CardView__rank">{idxNum}</span>
          <h3 className="CardView__title">{title}</h3>
        </div>
        <div className="CardView__info">
          <p onClick={openModal} className="CardView__info--user">
            {by}
          </p>
        </div>
        {isOpen && <Modal userName={by} onClick={closeModal}/>}
        {/* <p>{url}</p> */}
      </div>
  )
}

export default CardView;