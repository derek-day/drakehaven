'use client';

import React, {useEffect, useState} from 'react';
import { db } from '../firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

import Link from 'next/link'

import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../../components/Loading';

import Footer from '../../components/Footer';

  export default function PowerList() {
    const { user, isLoading } = useUser();

    const [powerList, setPowerList] = useState([]);

    const getPowerList = async () => {
      try {
        const powersCollectionRef = query(
          collection(db, "powers"),
          where("user", "==", user?.id)
        );
    
        const data = await getDocs(powersCollectionRef);
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
      document.title = 'Powers | Drakehaven';
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
              <img className='style-image-image' src='/powers.png' style={{width:'400px', margin: '0.25rem', mixBlendMode: 'plus-lighter'}} />

            </div>

            <div className='style-text'>
              <h2 className='vertical-spell'>Powers</h2>
            </div>

            <div className='style-mob'>
              <img className='style-image-image' src='/powers.png' style={{width:'400px', margin: '0.25rem', mixBlendMode: 'plus-lighter'}} />

              <h2 className='vertical-spell'>Powers</h2>
            </div>

          </div>

          <div className='info'>

              {powerList.map((power) => (
                <div>
                  <Link className="spell-link" key={power.id} href={'/powers/' + power.page}>
                    <h3>{power.title}</h3>
                  </Link>
                  <p className='px-3 py-2' style={{fontFamily: 'Ghibli', fontWeight: '100'}}>{power.subtitle}</p>
                  <br></br>

                </div>
              ))}

            </div>
        </div>

    </>
    )
  }
  