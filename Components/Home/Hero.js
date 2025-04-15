import React from 'react'
import styles from '../../src/styles/Home/Hero.module.css'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className={styles.bigcontainer}>
        <div className={styles.left}>
            <div className={styles.tagcont}>
                <div className={styles.name}>SEEMA JAIN</div>
                <div className={styles.tag}> Bilingual poet, short story writer,<br/>translator, editor, critic and reviewer</div>
            </div>
        </div>
        <div className={styles.right}>
        <div className={styles.dark}></div>
            <Image className={styles.heroimg} src={'/artworks/SeemaJain.jpg'} width={1000} height={1000} alt='image'/>
        </div>
    </div>
  )
}
