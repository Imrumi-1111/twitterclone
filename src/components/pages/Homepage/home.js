import React,{Fragment} from 'react'
import SearchBarTwitter from '../../atoms/searchbar/searchbar'
import Trending from '../../molecules/trending/trending'
import styles from './home.module.css'

const Home = () => {
  return (
    <Fragment>
      <div className={styles.Home}>
    <div className={styles.SearchBarTwitter}><SearchBarTwitter/></div>
      <div className={styles.Trending}><Trending/></div>
      </div>
    </Fragment>
  )
}

export default Home
