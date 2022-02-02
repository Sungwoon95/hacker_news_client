import React from 'react'
import ReactDOM from 'react-dom'

const Backdrop = ({onClick}) => {
  return ReactDOM.createPortal(
    <div className='Backdrop' onClick={onClick}/>,
    document.querySelector('#backdrop')
  )
}

export default Backdrop