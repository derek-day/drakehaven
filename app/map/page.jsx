'use client';

import React, {useEffect} from 'react';

import { Row, Col } from 'reactstrap';
import Link from 'next/link'

import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../../components/Loading';

  export default function Map() {
    useEffect(() => {
      document.title = 'Map | Drakehaven';
    }, []);

    return (
      <>
      <h1 className='mb-5' style={{fontFamily: "Ghibli", textAlign: 'center', color: '#e03222'}}>Map</h1>
      <img src="/maps/1.png" style={{  display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '90%', mixBlendMode: 'difference'}} />
    </>
    )
  }
  