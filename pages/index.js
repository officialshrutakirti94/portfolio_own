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
      <p>Currently, I'm the CTO and co-founder at <span><a href='https://defipe.io/'>defipe.io</a></span></p>
    </div>
    <div className={styles.bio}>
      <p>I am a self-taught proficient full stack developer,<br/>with expertise in both front-end and back-end technologies<br/>
      I love to innovate new things by my coding skills</p>
</div>
<div className={styles.stack}>
  <h1>Currently I am using this tech stack</h1>
</div>
<div className={styles.stackImg}>
  <img src='stack2.svg'></img>
  </div>
  <div className={styles.contact}>
    <h2>contact</h2>
    <h5>Let's Build Something Amazing Together!</h5>
    <p>I'm a passionate full-stack developer ready to tackle your next project. Whether it's a web application, API development, or database management, I've got you covered</p>
    <p>Feel Free to contact me !</p>

    <div className={styles.tradebutton}><a href='mailto:chakrabortyshrutakirti@gmail.com'>Contact Me</a></div>

  </div>
    </>
  )
}
