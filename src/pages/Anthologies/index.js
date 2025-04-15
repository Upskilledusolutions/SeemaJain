import React from 'react'
import Navbar from '../../../Components/Home/Navbar'
import Footer from '../../../Components/Home/Footer'
import styles from '../../styles/About/gallery.module.css'
import artdata from '../api/artworks'
import Image from 'next/image'

export default function index() {
  return (
    <div>
        <Navbar />
        <div className={styles.container}>
        <div className={styles.heading}>Anthologies</div>
        <div className={styles.flex}>
                {artdata.map(data=>
                <div className={styles.card}>
                    <Image className={styles.heroimg} src={data.url} width={500} height={500} alt='image'/>
                    <div className={styles.info}>
                        <div className={styles.name}>{data.name}</div>
                        {/* <button className={styles.btn}>View All</button> */}
                    </div>
                </div>)}
        </div>
        </div>
        <Footer />
    </div>
  )
}
