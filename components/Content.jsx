'use  client';

import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import PageLink from './PageLink';

const Content = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (

    <div style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      flex: "1",
      placeItems: "center"
    }}
    >
      <h2 className='title mt-2 mb-5' style={{fontFamily:'House', letterSpacing:'0.3rem' }}>Drakehaven</h2>

      {user && (
      <>
        <div className='drake-border mb-5' style={{
          backgroundColor: "#fff !important", backgroundImage: "url('/med.png')", width: '15rem'
        }}>
          <ul className='nav-list' style={{listStyleType: 'none', margin: '0', padding: '0', textAlign: 'center'}}>
            <li><PageLink href="/quests" className="">Quests</PageLink></li>
            <li><PageLink href="/spells" className="">Spells</PageLink></li>
            <li><PageLink href="/map" className="">Map</PageLink></li>
          </ul>
        </div>
      </>
      )}

      <img className='hero-image' src='/herool2.png' style={{width: "100%", filter: "saturate(1)", borderRadius: '1rem'}} />
    </div>
  );
};

export default Content;
