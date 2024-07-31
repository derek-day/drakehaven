'use client';

import React, {useEffect, useState} from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import { db } from '../../firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

import powerData from '../powerData';

export default function PowerDetails({
  params,
}: {
  params: { powerId: string };
}) {
  const power = powerData.find((q) => q.id === params.powerId);

  const title = power.title;

  const [powerList, setPowerList] = useState([]);

  const getPowerList = async () => {
    try {
      const powerCollectionRef = query(
        collection(db, "powers"),
        where("page", "==", params.powerId)
      );
  
      const data = await getDocs(powerCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id,
      }));
      setPowerList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  getPowerList();


  useEffect(() => {
    document.title = title + " | Drakehaven";
  }, []);

  return (
    <>
      <div className='drake-border' style={{
        width: '80%'
      }}>

        {powerList.map((power) => (
        <>
          <h1 className='spell-title'>{power.title}</h1>
          <ul className='spell-list'>
            <li><span className='bold'>Casttime:</span> {power.casttime}</li>
            <li><span className='bold'>Range:</span> {power.range}</li>
            <li><span className='bold'>Duration:</span> {power.duration}</li>
            <li><span className='bold'>Description:</span> {power.description}</li>
          </ul>
        </>
        ))}

      </div>
    </>
  )
}