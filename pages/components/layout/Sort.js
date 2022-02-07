import React,{useState, useContext,useRef} from 'react';
import Modal from './Modal.js'

import {ThemeContext} from '../../contexts/theme.js'
import {PageTypeContext} from '../../contexts/viewType.js'

import Plus from '../../assets/plus.svg'
import Minus from '../../assets/minus.svg'
import Checked from '../../assets/check.svg'

import useFixed from '../../hooks/useFixed'

const Sort = ({isPage, onInverse}) => {
  const [{isDark}, toggleTheme] =useContext(ThemeContext)
  const [{isDetail}, toggleView] =useContext(PageTypeContext)
  
  const [isFixed, setIsFixed] = useState(false)
  const sortFixed = useRef(null)
  const fixing = useFixed(sortFixed)
  
  onInverse(!fixing)

  return(
    <>
      <div ref ={sortFixed} />
      <div className={`${isDark ? "Dark": "Light"}_Sort ${!fixing ? "Fixing" : "UnFixing"}`}>
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
      </>
  )
}

export default Sort;