import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import spellData from '../spellData';

import { withRouter, NextRouter } from 'next/router';

import { Row, Col } from 'reactstrap';

export default function SpellDetails({
  params,
}: {
  params: { spellId: string };
}) {
  const spell = spellData.find((q) => q.id === params.spellId);

  return (
    <>
      <div className='drake-border' style={{
        backgroundColor: "#fff !important", backgroundImage: "url('/med.png')", width: '80%'
      }}>
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
      </div>
    </>
  )
}