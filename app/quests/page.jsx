'use client';

import React, {useEffect, useState} from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { db } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';

import questData from './questData';

import { Row, Col } from 'reactstrap';
import Link from 'next/link'
import Footer from '../../components/Footer';

export default function QuestList() {
  const [questList, setQuestList] = useState([]);

  const questsCollectionRef = collection(db, "quests");

  useEffect (() => {
    const getQuestList = async () => {
      try {
        const data = await getDocs(questsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(), 
          id: doc.id}));
        console.log(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getQuestList();
  }, []);

  useEffect(() => {
    document.title = 'Quests | Drakehaven';
  }, []);

  return (
    <>

  <div className="testgrid" style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem"
  }}
  >
    <div className='style drake-border stylegrid' style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    }}>
      <div className='style-image'>
        {/* <img className="style-image-image" src='/quests1.png' style={{width:'400px', margin: '0.25rem'}} /> */}
        <img className="style-image-image" src='/questscrt2.png' style={{width:'400px', margin: '0.25rem', mixBlendMode: "plus-lighter"}} />

      </div>
      <div className='style-text'>
        <h2 className='vertical'>Current Quests</h2>
      </div>

      <div className='style-mob'>
        {/* <img className='style-image-image' src='/quests1.png' style={{width:'400px', margin: '0.25rem'}} /> */}
        <img className="style-image-image" src='/questscrt2.png' style={{width:'400px', margin: '0.25rem', mixBlendMode: "plus-lighter"}} />

        <h2 className='vertical'>Current Quests</h2>
      </div>

    </div>
    <div className='info'>
    {questData.map((col, i) => (
      <div>
        <Link className="quest-link" key={col.id} href={'/quests/' + col.id}>
          <h3>{col.title}</h3>
        </Link>
        <p className='px-3 py-2' style={{fontWeight: '100', fontFamily: 'Ghibli'}}>{col.subtitle}</p>
        <br></br>
      </div>
    ))}
    </div> 
  </div>
  <Footer />

    </>
  )
}
