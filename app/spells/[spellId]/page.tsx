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
          <li>Level: {spell.level}</li>
          <li>School: {spell.school}</li>
          <li>Casting Time: {spell.casttime}</li>
          <li>Range: {spell.range}</li>
          <li>Components: {spell.components}</li>
          <li>Duration: {spell.duration}</li>
          <li>Description: {spell.description}</li>
        </ul>
      </div>
    </>
  )
}