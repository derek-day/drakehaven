'use client';

import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PageLink from './PageLink';
import Link from 'next/link'

import questData from '../app/quests/questData';

const Content = () => (
  <div className="next-steps my-5" data-testid="content">
    <h1 className="my-5 text-center" data-testid="content-title">
      Current Quests
    </h1>
    <Row className="d-flex justify-content-between" data-testid="content-items">
      {questData.map((col, i) => (
        <Col key={i} md={5} className="mb-4">
          <h6 className="mb-3">
            <Link href={'/quests/' + col.id}>
              <h2>{col.title}</h2>
            </Link>
          </h6>
          <h7 className="mb-3 q-subtitle">{col.subtitle}</h7>
          <p className="mt-3">{col.description}</p>
          {/* Use this if on phone
          <p className="mt-3 ellipsis">{col.description}</p> */}
        </Col>
      ))}
    </Row>
  </div>
);

export default Content;
