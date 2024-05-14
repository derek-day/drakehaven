'use client';

import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Quests from '../components/Quests';
import Spells from '../components/Spells';
import Map from '../components/Map';


export default function Index() {
  return (
    <>
      {/* <Hero /> */}
      {/* <Content /> */}
      <Quests />
      <hr />
      <Spells />
      <hr />
      <Map />
    </>
  );
}
