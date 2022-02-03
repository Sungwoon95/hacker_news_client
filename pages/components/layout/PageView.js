import React from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'
// import Page from './Page';
// import {dataFetcher} from '../../../dataFetcher'

const PageView = ({ms: {id,by, title, kids, time, url, descendants, score}, idx}) => {
  const router = useRouter();
  const idxNum = ('00' + idx).slice(-3)
  
  const wroteTime = Math.round((Date.now() - (time*1000)) / (60 * 1000))
  // const contentTime = new Date(time*1000).toLocaleString("ko-KR")
  return(
      <div className="PageView">
        <h3 className="PageView__title">{title}</h3>
        <div className="PageView__info">
        <Link href = {`/user/${by}`}>
          <p className="PageView__info--user">
            {by}
            <span class="material-icons">
              navigate_next
            </span>
          </p>
          </Link>
          <div className="PageView__info--option">
            <p className="PageView__info--option-comment">{descendants}</p>
            <p className="PageView__info--option-score">{score}</p>
          </div>
        </div>
        
        
        
        {/* <p>{url}</p> */}
      </div>
  )
}

export default PageView;