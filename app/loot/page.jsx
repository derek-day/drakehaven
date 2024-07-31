'use client';

import React, {useEffect, useState} from 'react';
import { db } from '../firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

import Link from 'next/link'

import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../../components/Loading';

import Footer from '../../components/Footer';

  export default function LootList() {
    const { user, isLoading } = useUser();

    const [lootList, setLootList] = useState([]);

    const getLootList = async () => {
      try {
        const spellsCollectionRef = query(
          collection(db, "loot"),
          where("user", "==", user?.id)
        );
    
        const data = await getDocs(spellsCollectionRef);
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
      document.title = 'Loot | Drakehaven';
    }, []);
  
    return (
      <>  
        <div className="testgrid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem"
        }}
        >
          <div className='style drake-border stylegrid' style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}>

            <div className='style-image'>
              <img className='style-image-image' src='/loot.png' style={{width:'400px', margin: '0.25rem', mixBlendMode: 'plus-lighter'}} />

            </div>

            <div className='style-text'>
              <h2 className='vertical-spell'>Loot</h2>
            </div>

            <div className='style-mob'>
              <img className='style-image-image' src='/loot.png' style={{width:'400px', margin: '0.25rem', mixBlendMode: 'plus-lighter'}} />

              <h2 className='vertical-spell'>Loot</h2>
            </div>

          </div>

          <div className='info'>

              {lootList.map((loot) => (
                <div>
                  <Link className="spell-link" key={loot.id} href={'/loot/' + loot.page}>
                    <h3>{loot.title}</h3>
                  </Link>
                  <p className='px-3 py-2' style={{fontFamily: 'Ghibli', fontWeight: '100'}}>{loot.subtitle}</p>
                  <br></br>

                </div>
              ))}

            </div>
        </div>

    </>
    )
  }
  