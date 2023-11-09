import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Preahvihear&display=swap" rel="stylesheet" />
    </Head>
    <div className={styles.navbar}>
    <div className={styles.navbarItems}>
      <a>home</a>
      <a>about</a>
      <a>contact</a>
       
      </div>
    </div>
    <div className={styles.heroImg}><img src='hero3.svg'></img></div>
    <div className={styles.heroSlogan}>
      <h1>I'm a Full stack developer.| </h1>
      <p>Currently, I'm the CTO and co-founder at <span>defipe.io</span></p>
    </div>
    <div className={styles.bio}>
      <p>I am a self-taught proficient full stack developer,<br/>with expertise in both front-end and back-end technologies<br/>
      I love to innovate new things by my coding skills</p>
</div>
    </>
  )
}
