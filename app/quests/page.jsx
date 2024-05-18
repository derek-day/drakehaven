import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import questData from './questData';

import { Row, Col } from 'reactstrap';
// import PageLink from './../PageLink';
import Link from 'next/link'


export default function QuestList() {
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
        <img className="style-image-image" src='/quests.png' style={{width:'400px', margin: '0.25rem'}} />
      </div>
      <div className='style-text'>
        <h2 className='vertical'>Current Quests</h2>
      </div>

      <div className='style-mob'>
        <img className='style-image-image' src='/quests.png' style={{width:'400px', margin: '0.25rem'}} />
        <h2 className='vertical'>Current Quests</h2>
      </div>

    </div>
    <div className='info'>
    {questData.map((col, i) => (
      <div>
        <Link className="quest-link" key={col.id} href={'/quests/' + col.id}>
          <h3>{col.title}</h3>
        </Link>
        <p className='px-3 py-2'>{col.subtitle}</p>
        <br></br>
      </div>
    ))}
    </div> 
  </div>
    </>
  )
}
