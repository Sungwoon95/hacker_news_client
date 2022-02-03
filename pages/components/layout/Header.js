import React,{useState, useContext} from 'react';
import {useRouter} from 'next/router'
import Link from 'next/link'
import {ThemeContext} from '../../contexts/theme.js'

import Logo from '../../assets/logo.svg'
import About from '../../assets/about.svg'
import LightTheme from '../../assets/lightTheme.svg'
import DarkTheme from '../../assets/darkTheme.svg'

const Header = () => {
  const [{isDark}, toggleTheme] =useContext(ThemeContext)

  return(
    <div className={`${isDark? 'Dark': 'Light'}_Header`}>
      <Link href="/">
        <div className="Header__logo">
          <div className="Header__logo--image">
          <Logo className="Header__logo--image-svg"/>
          </div>
          <div className="Header__logo--title">
            ReHacker<br />News
          </div>
        </div>
      </Link>
      <div className="Header__about">
        <div className="Header__about--theme" onClick={toggleTheme}>
            {isDark
            ?<LightTheme className="Header__theme--image-svg"/>
            :<DarkTheme className="Header__theme--image-svg"/>
            }
        </div>
        <div className="Header__about--descript">
          <About className="Header__about--image-svg"/>
        </div>
      </div>
    </div>
  )
}

export default Header;