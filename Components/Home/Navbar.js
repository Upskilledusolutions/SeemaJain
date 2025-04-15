import React, { useState } from 'react'
import styles from "../../src/styles/Home/Navbar.module.css"
import Menu from '../Navbar/Menu'
import Link from 'next/link'

export default function Navbar() {
  const [open,setOpen] = useState(false)
  return (
    <div className={styles.bigcontainer}>
        <div className={styles.logo}><div className={styles.initials}>SJ</div><div className={styles.name}>SEEMA JAIN</div></div>
            <ul className={open ? `${styles.list}` : `${styles.olist}`}>
                <Link className={styles.link} href={'/'}>Home</Link>
                <Link className={styles.link} href={'/Books'}>Books</Link>  
                <Link className={styles.link} href={'/Anthologies'}>Anthologies</Link>  
                <Link className={styles.link} href={'/Events'}>Events</Link>
                <Link className={styles.link} href={'/About'}>About</Link>
            </ul>
            <div onClick={()=>setOpen(!open)} className={styles.menu}>
              <Menu />
            </div>
    </div>
  )
}
