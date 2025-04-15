import React from 'react';
import Navbar from '../../../Components/Home/Navbar';
import Footer from '../../../Components/Home/Footer';
import { Inter } from "next/font/google";
import styles from '../../styles/About/about.module.css';
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

export default function index() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div>
          <Image className={styles.heroimg} src={'/artworks/seemajain.jpg'} width={1000} height={1000} alt='image' />
        </div>
        <div className={styles.name}>Seema Jain</div>
        <div className={styles.text}>
          <div><b>Name:</b> Seema Jain</div>
          <div><b>Email ID:</b> seemajain390@yahoo.in</div>
          <br />
          <div><b>Professional details:</b> Retired as Associate Professor in English, Vice Principal, Dean Academics &amp; Head, P G Department of English, KMV (An Autonomous Heritage Institution, Established 1886) Jalandhar Punjab India</div>
          <div><b>Teaching Experience:</b> 39 years (postgraduate and undergraduate students)</div>
          <div><b>Some Highlights of the professional career:</b> Held multiple administrative positions; was Convenor of multiple International Conferences and interacted with Academics from about 24 countries, including prestigious Ivy League Universities in the US; organised Literary Festivals and Creative Writing Competitions for many years, and countless more responsibilities besides having been on various academic bodies of GNDU Amritsar. Acted as Chairperson in many International Conferences/National Seminars, Presented Research Papers, and also published many Research Articles.</div>
          <br />
          <div><b>PROFILE AS AN AUTHOR:</b></div>
          <div><b>Published Books:</b> 16</div>
          <ul>
            <li>5 Collections of Poetry in Hindi and English</li>
            <li>Mom Ke Pankh: Deepak Publishers Jalandhar, 2006</li>
            <li>Dhoop Chhanv: Excellent Publishers, New Delhi, 2013</li>
            <li>An Apology to My Father: Sabhya Prakashana: New Delhi, 2017</li>
            <li>Silent Letters: Authors Press: New Delhi , 2020</li>
            <li>Melodies Unheard 2021): (English Poetry Collection in collaboration)</li>
            <li>2 more Poetry Collections in the process</li>
          </ul>
          <div><b>Editor of Two Anthologies of Poetry on Contemporary Indian Women Poets in English:</b></div>
          <ul>
            <li>Vibrant Voices: An Anthology of 21st Century Indian Women Poets (Sahitya Akademi publication 2022)</li>
            <li>Mosaic of Poetic Musings: Contemporary Women Poets from India (Authors Press Publication 2022)</li>
          </ul>
          <div><b>3 Translated Collections of poems (Hindi to English):</b></div>
          <ul>
            <li>Poetic World of Narendra Mohan (English translation of Dr Narendra Mohan’s selected Poems): Authors Press Publication, 2020</li>
            <li>Dil Se (English translation of Dr Veena Vij’s selected Poems): Sahitya Kalash Publication, Patiala, 2023</li>
            <li>Listen Radhika (English translation of Madhav Kaushik’s long poem): Readomania Publication, 2024</li>
          </ul>
          <div><b>2 Translated novels:</b></div>
          <ul>
            <li>The Vanquished Queen: the Diary of Kaikeyi (Hindi to English) (July 2022) Published by Hawakal Publishers New Delhi/Kolkata</li>
            <li>Mohalla, English Translation of a Sahitya Akademi Award-winning Rajasthani Novel, Gavvad for Sahitya Akademi</li>
          </ul>
          <div><b>2 Edited Books of Research articles:</b></div>
          <ul>
            <li>Women Empowerment and Higher Education</li>
            <li>Cross Cultural Nuances</li>
          </ul>
          <div><b>On the Editorial Board of the Creative Pages of the English Scholars Beyond Borders online Scopus Indexed Journal</b></div>
          <div><b>Have been a Reviewer for the Sahitya Akademi</b></div>
          <br />
          <div><b>Contribution of poems/ short stories/ reviews/interviews/articles to Anthologies/ E-magazines/ Journals:</b> Approximately One Hundred and thirty</div>
          <div><b>Associate Director:</b> IAE (International Academy of Ethics)</div>
          <div><b>Founder President:</b> Litspark: A Literary Forum, an organisation to promote creative writing and young talent</div>
          <div><b>Vice President:</b> Mahila Kavya Manch Punjab</div>
          <br />
          <div><b>Awards:</b></div>
          <ul>
            <li>Purvottar Hindi Sahitya Academy Award in 2013 for Contribution to Education, Research and Creative Writing</li>
            <li>Master of Creative Impulse Award by Philosophique Poetica and Grand Productions Canada during World Poetry Conference at Bhatinda Punjab in 2019</li>
            <li>Punjab Kala Sahitya Academy Award for significant contribution to Literature and Creative Writing</li>
            <li>Indian Women Achievers’ Award 2023 by ALS Literary Society</li>
            <li>LWG Litfest 01 Best Woman Poet of the Year Award 2023</li>
            <li>LWG Litfest 01 Best English Poetry Rendition Award 2023</li>
            <li>LWG Litfest 02 Best English Story (Online) 2024 Award</li>
            <li>International Academy Award in Literature by IAE</li>
          </ul>
          <div>Won about 35 PRIZES in Online Poem Writing Competitions from May 2021 to November 2021, most of them with the Asian Literary Society and Literary Warriors’ Group (online)</div>
          <div>Acted as Guest of Honour and Judge for Poetry Meets/ Poetry Competitions; Participation in Solo Poetry Sessions and English and Hindi International/National Poetry Meets Online</div>
          <div>Participated in TV and AIR poetry meets, talks and other programmes for the last two decades</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
