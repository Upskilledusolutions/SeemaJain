import React from 'react'
import styles from '../../src/styles/Home/Sculpture.module.css'
import Image from 'next/image'

export default function Sculpture() {
  return (
    <div className={styles.bigcontainer1}>
    <div className={styles.heading}>An Apology to My Father</div>
    <div className={styles.text1}>a collection of English poems, Sabhya Prakashana: New Delhi, 2017</div>
    <div className={styles.bigcontainer}>
        <div className={styles.left}>
            <Image className={styles.artistimg} src={'/new/an apology to my father.jpg'} width={1000} height={1000} alt='image'/>
        </div>
        <div className={styles.right}>
            <div className={styles.text}>
<div><b>About the book:</b></div>
<div>The poems in this volume by Seema Jain depict her sincere observations through her
simple narratives and ideal metaphors. She is engaging herself with the world around her. Her
poems reflect the quality of the culture we are living in.</div>
<div>The poem ‘A Dark December Day’ reminds us of the Nirbhaya case in Delhi which left
every individual in the country shocked. Such cases are still happening. Seema Jain thus
questions the unnecessary favours we give to our sons and the subtle prejudices that we show
towards our daughters. This is because the value system in our country is crumbling.
The poems in this volume further highlight the complexities that exist in our society and
the poet feels that the subjective observations are impacting the message and relevance of our
age-old values. The poet is disappointed with the instances of male chauvinism. She uses the
images from the foliage to make her poetry more comprehensible. She uses these images to
reflect social dichotomies and divisions that exist today.</div><div><br/></div>
<div>July 22, 2017 H. K. Kaul</div>
<div>President</div>
<div>The Poetry Society (India)</div>
www.indianpoetry.org</div>
        </div>
        
    </div>
    </div>
  )
}