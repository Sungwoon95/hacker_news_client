import React,{useState, useContext} from 'react';
import Modal from './Modal.js'

import {ThemeContext} from '../../contexts/theme.js'
import {PageTypeContext} from '../../contexts/viewType.js'

import Plus from '../../assets/plus.svg'
import Minus from '../../assets/minus.svg'
import Checked from '../../assets/check.svg'

const Sort = ({isPage}) => {
  const [{isDark}, toggleTheme] =useContext(ThemeContext)
  const [{isDetail}, toggleView] =useContext(PageTypeContext)
  
  return(
      <div className={`${isDark ? "Dark": "Light"}_Sort`}>
        <div className="Sort__filter">
          <div className="Sort__fillter--top">
            <div className="Sort__fillter--checked">
              <Checked className="Sort__fillter--checked-svg"/>
            </div>
            Top
          </div>
          <div className="Sort__fillter--new">
            <div className="Sort__fillter--checked">
              <Checked className="Sort__fillter--checked-svg"/>
            </div>
            New
          </div>
        </div>
        <div className="Sort__viewer">
          <span onClick={toggleView}>
            {!isDetail
            ?<Plus className="Sort__filter--view-svg"/>
            :<Minus className="Sort__filter--view-svg"/>
            }
          </span>
        </div>
      </div>
  )
}

export default Sort;