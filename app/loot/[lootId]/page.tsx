'use client';

import React, {useEffect, useState} from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import { db } from '../../firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

import lootData from '../lootData';

export default function LootDetails({
  params,
}: {
  params: { lootId: string };
}) {
  const loot = lootData.find((q) => q.id === params.lootId);

  const title = loot.title;

  const [lootList, setLootList] = useState([]);

  const getLootList = async () => {
    try {
      const lootCollectionRef = query(
        collection(db, "loot"),
        where("page", "==", params.lootId)
      );
  
      const data = await getDocs(lootCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id,
      }));
      setLootList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  getLootList();


  useEffect(() => {
    document.title = title + " | Drakehaven";
  }, []);

  return (
    <>
      <div className='drake-border' style={{
        width: '80%'
      }}>

        {lootList.map((loot) => (
        <>
          <h1 className='spell-title'>{loot.title}</h1>
          <ul className='spell-list'>
            <li><span className='bold'>Quality:</span> {loot.quality}</li>
            <li><span className='bold'>Description:</span> {loot.description}</li>
          </ul>
        </>
        ))}

      </div>
    </>
  )
}