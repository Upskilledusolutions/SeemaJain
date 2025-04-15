import React from 'react';
import styles from '../../src/styles/About/Exhibition.module.css';

const Timeline = () => {

    const events = [
      {
        title: "Participated in Wall Painting for Project ‘Pustakanche Gaon’ – Bhilar organized by Government of Maharashtra – Rajya Marathi Vikas Sanstha",
        description: "",
        date: "2019"
      },
      
       {
          title: "Participated in a Kalamkari workshop with Lavanya Mani at JJ School of Arts",
          description: "",
          date: "2019"
        },

        {
          title: "Participated in a Printing workshop with Tanuja Rane at JJ School of Arts",
          description: "",
          date: "2019"
        },

        {
          title: "As a group of 6 artists, we displayed an art Installation at Renaissance Convection Centre, Powai (Mumbai).For  Charity",
          description: "",
          date: "2019"
        },

        {
          title: "Participated in KalaSagar Marinetime History Competition.",
          description: "",
          date: "2019"
        },

        {
          title: "Volunteered for painting Benches at Juhu for Project Mumbai under Shishir Joshi",
          description: "",
          date: "2019"
        },

        {
          title: "Participated in Jumbish",
          description: "",
          date: "2019"
        },

        {
          title: "Exhibited at World Trade Centre in a Group Art Show",
          description: "",
          date: "2019"
        },
        
        {
          title: "Exhibited at a Group Art show at Ravindra Natya Mandir",
          description: "",
          date: "2019"
        },

        {
          title: "Exhibited at Rachana Sansad Annual Art Exhibition",
          description: "",
          date: "2019"
        },

        {
          title: "Exhibited at Artists Centre (Twice)",
          description: "",
          date: "2019"
        },

        {
          title: "Participated/Exhibited at LIFFT Fest",
          description: "",
          date: "2019"
        },

        {
          title: "As a group of 8 artists students from Rachana Sansad for wall painting for an NGO - Parisar Bhagini Vikas Sangha Dry Waste Centre Chembur",
          description: "",
          date: "2020"
        },

        {
          title: "Workshop in Serigraphy with Kona Foundation at Rachana Sansad",
          description: "",
          date: "2020"
        },

        {
          title: "Exhibited at Rachana Sansad Annual Art Exhibition",
          description: "",
          date: "2020"
        },

        {
          title: "Participated/ Exhibited at LIFFT Fest WON Best Emerging Artist of the year with 4 Nominated works (Conceptual Art)",
          description: "",
          date: "2020"
        },

        {
          title: "Participated & displayed at Jehangir Art Gallery as a Team from Rachana Sansad for the Kala Ghoda Fest",
          description: "",
          date: "2020"
        },

        {
          title: "Exhibited in a group exhibition by Generation Art Foundation at The Leela Business Hotel, Mumbai",
          description: "",
          date: "2021"
        },

        {
          title: "Participated/ Exhibited at LIFFT Fest WON Best Emerging Artist of the year with 4 Nominated works (Conceptual Art)",
          description: "",
          date: "2021"
        },

        {
          title: "Participated in an International Mental Health Art Event , A Happier ME -California (won)",
          description: "",
          date: "2021"
        },

        {
          title: "Participated in  the XIIIth Florence Biennale Italy 2021 with 2 of my works. Sculpture and installation art both works on mental health.",
          description: "",
          date: "2021"
        },

        {
          title: "Completed a 5 month specialized course in Painting at Rachana Sansad AFAC Kurla Mumbai",
          description: "",
          date: "2021"
        },

        {
          title: "Displayed 3 of my works on Feminism at Nippon Art Gallery’s online exhibition",
          description: "",
          date: "2021"
        },

        {
          title: "Art Smiley Dubai online 2021",
          description: "",
          date: "2021"
        },

        {
          title: "The Bombay Art Society 3 months online show in 2021",
          description: "",
          date: "2021"
        },

        {
          title: "Participated in Lalit Kala Akademi Puri inSeptember 2022 in a group show for Konark International Fevistal by KalaNirvana International",
          description: "",
          date: "2022"
        },

        {
          title: "Participated in Udyaan Art gallery’s group show May 2022",
          description: "",
          date: "2022"
        },
        
        {
          title: "Kaari Art exhibition (group) at Raja Ravi Varma gallery March 2022",
          description: "",
          date: "2022"
        },

        {
          title: "Participated in Udyan Gallery Group show in September 2022",
          description: "",
          date: "2022"
        },

        {
          title: "Participated in a group show at Lalit Kala Akademi Jaipur September 2022",
          description: "",
          date: "2022"
        },

        {
          title: "Participated in a Group show based on an international selection process for FINEXT International Awards 2022 with my Print work on Mental Health at Indore,September 2022",
          description: "",
          date: "2022"
        },

        {
          title: "Participated in a 3 month Psychological workshop with Dr Priya Jhadav on Robert Karcoff model of Therapy & Counselling 2022",
          description: "",
          date: "2022"
        },

        {
          title: "Attended a 15 days workshop on Art Therapy/ Sculpture/Printing/Painting /ABT and Psychotherapy at MIT-ADT SOFA University Loni Pune, from 15th -30th  June 2022",
          description: "",
          date: "2022"
        },

        {
          title: "Participated in Mumbai Art Expo 11th-12th February 2023",
          description: "",
          date: "2023"
        },

        {
          title: "Did Performance Art at KGAF 2023 and the streets of Mumbai and Public Transport voluntarily.",
          description: "",
          date: "2023"
        },
        
        {
          title: "Exhibited with Hyperglot Solutions at Alliance France  March 2023",
          description: "",
          date: "2023"
        },

        {
          title: "Exhibited with Hyperglot Solutions at CSOI Art Gallery, Delhi November 2023",
          description: "",
          date: "2023"
        },

        {
          title: "Hosted my First Solo Art Show from 24th -30th April at “The Leela” Mumbai 2023",
          description: "",
          date: "2023"
        },

        {
          title: "XIVth Florence Biennale Italy 2023 Curatorial Board had selected 2 of my Artworks To be exhibited (it’s a NOT FOR SALE platform).",
          description: "",
          date: "2023"
        },

        {
          title: "Participated in Finext International Awards group show Indore 2023",
          description: "",
          date: "2023"
        },

        {
          title: "Exhibited a Solo Installation at Kala Ghoda Festival based on my Series of the MAHABHARATHA. Size 8’x11’ (feet) at Cross Maidan Mumbai",
          description: "",
          date: "2024"
        },

        {
          title: "Participated in a group exhibition at CSOI new Delhi with Hypoglot solutions August 2024",
          description: "",
          date: "2024"
        },
      ];


  return (
    <div className={styles.timelinecontainer}>
      <div className={styles.timelineline}></div>
      {events.map((event, index) => (
        <div key={index} className={styles.timelineevent}>
          <div className={styles.timelinebox}>
            <h3>{event.title}</h3>
            {event.description && <p>{event.description}</p>}
            <span>{event.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;