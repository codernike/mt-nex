import Head from 'next/head'
import Cardgames from '../comp/cardgames'
import Containerhome from '../comp/containerhome'
import Homeform from '../comp/homeform'
//import Image from 'next/image'


import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>pikapkm</title>
        <meta name="description" content="pikapk here" />
        <link rel="icon" href="https://c4.wallpaperflare.com/wallpaper/119/552/901/anime-cartoon-pokemon-pikachu-wallpaper-preview.jpg" />
      </Head>
       <Containerhome/>
       <Cardgames/>
       <Homeform/>
     
    </div>
  )
}
