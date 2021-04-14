import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import HomeBlog from '../component/home'

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeBlog />
    </div>
  )
}
