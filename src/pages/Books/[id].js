import data from '../api/Books';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Books/Bookpage.module.css';
import Navbar from '../../../Components/Home/Navbar';
import Footer from '../../../Components/Home/Footer';
import Image from 'next/image';

export default function BookDetails() {
    const router = useRouter();
    const { id } = router.query;
    const [book, setBook] = useState(null);

    useEffect(() => {
        if (id) {
            const foundBook = data.find((item) => item.id == id);
            if (foundBook) {
                setBook(foundBook);
            }
        }
    }, [id]);

    if (!book) {
        return (
            <>
                <Navbar />
                <div className={styles.container}>
                    <div className={styles.loading}>Loading...</div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.bookCard}>
                    <div className={styles.imageContainer}>
                        <Image 
                            className={styles.image} 
                            src={book.url} 
                            width={500} 
                            height={500} 
                            alt={book.name} 
                        />
                    </div>
                    <div className={styles.details}>
                        <h1 className={styles.title}>{book.name}</h1>
                        <div 
                            className={styles.content} 
                            dangerouslySetInnerHTML={{ __html: book.content }}
                        ></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
