import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import questData from '../questData';

import { withRouter, NextRouter } from 'next/router';

export default function QuestDetails({
  params,
}: {
  params: { questId: string };
}) {
  const quest = questData.find((q) => q.id === params.questId);

  console.log(quest.image)

  return (
    <>
      <h1 className='quest-title'>{quest.title}</h1>
      <p className='quest-desc px-3 py-2'>{quest.description}</p>
      {/* <img src={quest.image} width={600} height={500} /> */}
    </>
  )
}