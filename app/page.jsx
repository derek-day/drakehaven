'use client';

import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Quests from '../components/Quests';

export default function Index() {
  return (
    <>
      <Hero />
      <hr />
      {/* <Content /> */}
      <Quests />
    </>
  );
}
