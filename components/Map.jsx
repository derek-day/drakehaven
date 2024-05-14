'use client';

import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Iframe from 'react-iframe'


import PageLink from './PageLink';
import Link from 'next/link'

import questData from '../app/quests/questData';

const Content = () => (
  <div className="next-steps my-5" data-testid="content">
    <h1 className="my-5 text-center" data-testid="content-title">
      Map
    </h1>
    <Iframe url="https://www.aidedd.org/atlas/index.php?map=R&l=1"
        width="1000px"
        height="700px"
        id=""
        className="text-center"
        display="block"
        position="relative"/>
  </div>
);

export default Content;
