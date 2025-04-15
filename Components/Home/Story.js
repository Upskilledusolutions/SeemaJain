import React from 'react'
import styles from '../../src/styles/Home/Story.module.css'
import Image from 'next/image'

export default function Story() {
  return (
    <div className={styles.bigcontainer}>
        <div className={styles.left}>
            <Image className={styles.artistimg} src={'/artworks/1.jpg'} width={1000} height={1000} alt='image'/>
        </div>
        <div className={styles.right}>
            <div className={styles.heading}>Profile </div>
            <div className={styles.text}>Seema Jain is a bilingual poet, short story writer, translator, editor, critic and reviewer. She retired as Ex-Vice Principal &amp; Head, PG Dept of English KMV Jalandhar. She has fourteen published books: five collections of English and Hindi poems, two edited books, three books of translated poems and two translated novels. Her two edited poetry anthologies on 21st Century Indian Women Poets (one published by Sahitya Akademi) have received much critical attention. Her poems are published globally in more than130 anthologies and in Stanford University’s digital pandemic archives. A recipient of many prestigious awards like Purvottar Hindi Sahitya Akademi Award, Pankas Academy Award, the ALS Indian Women Achievers&#39; Award 2023, Seema occupies key positions on various literary bodies nationally and globally, and is on the awards panels of prestigious national/state literary bodies. She has recited her poems for Sahitya Akademi&#39;s Sahityotsav, FOSWAL Literature Festival and Washington DC South Asian Literature Festival.</div>
        </div>
        
    </div>
  )
}

 
 
