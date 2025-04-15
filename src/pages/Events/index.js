import React from 'react';
import Navbar from '../../../Components/Home/Navbar';
import Footer from '../../../Components/Home/Footer';
import styles from '../../styles/About/gallery1.module.css';
import artdata from '../api/events';
import Image from 'next/image';

export default function index() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.heading}>Events</div>
        <div className={styles.grid}>
          {artdata.map((data) => (
            <div key={data.id} className={styles.gridItem}>
              <Image
                className={styles.heroimg}
                src={data.url}
                width={500}
                height={500}
                alt="event image"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
