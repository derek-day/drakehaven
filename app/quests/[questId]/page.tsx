'use client';

import React, {useEffect} from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import questData from '../questData';

import { withRouter, NextRouter } from 'next/router';

export default function QuestDetails({
  params,
}: {
  params: { questId: string };
}) {
  const quest = questData.find((q) => q.id === params.questId);

  const title = quest.title

  useEffect(() => {
    document.title = title + " | Drakehaven";
  }, []);

  return (
    <>
      <div className='drake-border' style={{
        // backgroundColor: "#fff !important", backgroundImage: "url('/med.png')", width: '80%'
        width: '80%'
      }}>
        <h1 className='quest-title'>{quest.title}</h1>
        <p className='quest-desc px-3 py-2'>{quest.description}</p>
        <p className='quest-desc px-3'><span className='bold'>Received from:</span> {quest.given}</p>
        <p className='quest-desc px-3'><span className='bold'>Location:</span> {quest.location}</p>
      </div>
    </>
  )
}