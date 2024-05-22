'use client';

import React, {useEffect} from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Quests from '../components/Quests';
import Spells from '../components/Spells';
import Map from '../components/Map';
import Footer from '../components/Footer';


export default function Index() {
  useEffect(() => {
    document.title = 'Drakehaven';
  }, []);

  return (
    <>
      {/* <Hero /> */}
      <Content />
      {/* <Quests />
      <hr />
      <Spells />
      <hr />
      <Map /> */}
      <Footer />
    </>
  );
}
