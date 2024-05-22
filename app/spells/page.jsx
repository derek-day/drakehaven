'use client';

import React, {useEffect, useState} from 'react';
import { db } from '../firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

import spellData from './spellData';

import Link from 'next/link'

import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../../components/Loading';

import Footer from '../../components/Footer';

  export default function SpellList() {
    const { user, isLoading } = useUser();

    const [spellList, setSpellList] = useState([]);

    const getSpellList = async () => {
      try {
        const spellsCollectionRef = query(
          collection(db, "spells"),
          where("user", "==", user?.id)
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


    // useEffect (() => {
    //   const getSpellList = async () => {
    //     try {

    //       console.log(user);

    //       const spellsCollectionRef = query(
    //         collection(db, "spells"),
    //         // where("user", "==", "1")
    //         where("name", "==", user?.name)
    //       );
      
    //       const data = await getDocs(spellsCollectionRef);
    //       const filteredData = data.docs.map((doc) => ({
    //         ...doc.data(), 
    //         id: doc.id,
    //       }));
    //       setSpellList(filteredData);
    //     } catch (err) {
    //       console.error(err);
    //     }
    //   };
  
    //   getSpellList();
    // }, []);
  

    useEffect(() => {
      document.title = 'Spells | Drakehaven';
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
              <img className='style-image-image' src='/spellscrt7.png' style={{width:'400px', margin: '0.25rem', mixBlendMode: 'plus-lighter'}} />

            </div>

            <div className='style-text'>
              <h2 className='vertical-spell'>Spells</h2>
            </div>

            <div className='style-mob'>
              <img className='style-image-image' src='/spellscrt7.png' style={{width:'400px', margin: '0.25rem', mixBlendMode: 'plus-lighter'}} />

              <h2 className='vertical-spell'>Spells</h2>
            </div>

          </div>

          <div className='info'>

              {spellList.map((spell) => (
                <div>
                  <Link className="spell-link" key={spell.id} href={'/spells/' + spell.page}>
                    <h3>{spell.title}</h3>
                  </Link>
                  <p className='px-3 py-2' style={{fontFamily: 'Ghibli', fontWeight: '100'}}>{spell.subtitle}</p>
                  <br></br>

                </div>
              ))}

              {/* {spellData.map((col, i) => (
                <div>
                  <Link className="spell-link" key={col.id} href={'/spells/' + col.id}>
                    <h3>{col.title}</h3>
                  </Link>
                  <p className='px-3 py-2' style={{fontFamily: 'Ghibli', fontWeight: '100'}}>{col.subtitle}</p>
                  <br></br>
                </div>
              ))} */}
            </div>
        </div>

        <Footer />

    </>
    )
  }
  