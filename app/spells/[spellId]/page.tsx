'use client';

import React, {useEffect, useState} from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import { db } from '../../firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

import spellData from '../spellData';

export default function SpellDetails({
  params,
}: {
  params: { spellId: string };
}) {
  const spell = spellData.find((q) => q.id === params.spellId);

  const title = spell.title;

  const [spellList, setSpellList] = useState([]);

  const getSpellList = async () => {
    try {
      const spellsCollectionRef = query(
        collection(db, "spells"),
        where("page", "==", params.spellId)
      );
  
      const data = await getDocs(spellsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id,
      }));
      setSpellList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  getSpellList();


  useEffect(() => {
    document.title = title + " | Drakehaven";
  }, []);

  return (
    <>
      <div className='drake-border' style={{
        width: '80%'
      }}>

        {spellList.map((spell) => (
        <>
          <h1 className='spell-title'>{spell.title}</h1>
          <ul className='spell-list'>
            <li><span className='bold'>Level:</span> {spell.level}</li>
            <li><span className='bold'>School:</span> {spell.school}</li>
            <li><span className='bold'>Casting Time:</span> {spell.casttime}</li>
            <li><span className='bold'>Range:</span> {spell.range}</li>
            <li><span className='bold'>Components:</span> {spell.components}</li>
            <li><span className='bold'>Duration:</span> {spell.duration}</li>
            <li><span className='bold'>Description:</span> {spell.description}</li>
          </ul>
        </>
        ))}

      </div>
    </>
  )
}