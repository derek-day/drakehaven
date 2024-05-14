import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import questData from './questData';

import { Row, Col } from 'reactstrap';
// import PageLink from './../PageLink';
import Link from 'next/link'


export default function QuestList() {
  return (
    <>
      <h1 className="my-5 text-center" data-testid="content-title">Current Quests</h1>
      <Row className="d-flex justify-content-between" data-testid="content-items">
        {questData.map((col, i) => (
          <Col key={i} md={5} className="mb-4">
            <h6 className="mb-3">
              <Link key={col.id} href={'/quests/' + col.id}>
                <h3>{col.title}</h3>
              </Link>
            </h6>
            <h7 className="mb-3 q-subtitle">{col.subtitle}</h7>
            <p className="mt-3">{col.description}</p>
            {/* Use this if on phone
            <p className="mt-3 ellipsis">{col.description}</p> */}
          </Col>
        ))}
      </Row>
    </>
  )
}
