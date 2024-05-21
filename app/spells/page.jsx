'use client';

import React, {useEffect} from 'react';

import spellData from './spellData';

import { Row, Col } from 'reactstrap';
import Link from 'next/link'

import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../../components/Loading';

  // const { user, isLoading } = useUser();

  // {isLoading && <Loading />}
  // need to set user id to spell user id (edit spellData to have seperate user id's with their spells listed below)
  // {user && spellData.find((q) => q.id === user.id) && (

  export default function SpellList() {
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
            {/* <div className='info'>
              {spellData.map((col, i) => (
                <div>
                  <Link className="spell-link" key={col.id} href={'/spells/' + col.id}>
                    <h3>{col.title}</h3>
                  </Link>
                  <p className='px-3 py-2'>{col.subtitle}</p>
                  <br></br>
                </div>
              ))}
            </div> */}


          <div className='style drake-border stylegrid' style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}>

            <div className='style-image'>
              {/* <img className='style-image-image' src='/spells1.png' style={{width:'400px', margin: '0.25rem'}} /> */}
              <img className='style-image-image' src='/spellscrt3.png' style={{width:'400px', margin: '0.25rem', mixBlendMode: 'plus-lighter'}} />

            </div>

            <div className='style-text'>
              <h2 className='vertical-spell'>Spells</h2>
            </div>

            <div className='style-mob'>
              {/* <img className='style-image-image' src='/spells1.png' style={{width:'400px', margin: '0.25rem'}} /> */}
              <img className='style-image-image' src='/spellscrt5.png' style={{width:'400px', margin: '0.25rem', mixBlendMode: 'plus-lighter'}} />

              <h2 className='vertical-spell'>Spells</h2>
            </div>

          </div>

          <div className='info'>
              {spellData.map((col, i) => (
                <div>
                  <Link className="spell-link" key={col.id} href={'/spells/' + col.id}>
                    <h3>{col.title}</h3>
                  </Link>
                  <p className='px-3 py-2' style={{fontFamily: 'Ghibli', fontWeight: '100'}}>{col.subtitle}</p>
                  <br></br>
                </div>
              ))}
            </div>

        </div>
    </>
    )
  }
  