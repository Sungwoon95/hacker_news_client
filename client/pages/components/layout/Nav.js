import React,{useEffect, useContext} from 'react';
import axios from 'axios'

import {useRouter} from 'next/router'
import Link from 'next/link'

import {ThemeContext} from '../../contexts/theme.js'

const Nav = () => {
  const [{isDark}, toggleTheme] =useContext(ThemeContext)

  const router = useRouter();
  const category = [
    // {path:'/', sectionName:'Home'},
    {path:'/new', sectionName:'Article'},
    {path:'/show', sectionName:'Show'},
    {path:'/ask', sectionName:'Ask'},
    {path:'/jobs', sectionName:'Jobs'},
  ]
  return(
    <div className={`${isDark ? "Dark": "Light"}_Nav container`}>
      <ul className={`Nav__list--wrap ${router.asPath === "/" ? "home" : "side"}`}>
        {category.map((item,idx)=>(
          <li key={idx} className={`Nav__list ${router.asPath === item.path ? "active" : ""}`}>
            <Link href={item.path}>
              <a>
                <span className={`${router.asPath === item.path ? "Nav__list--active-item" : "Nav__list--item"}`}>
                {item.sectionName}
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav;