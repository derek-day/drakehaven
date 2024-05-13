import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import questData from './questData';

import { Row, Col } from 'reactstrap';
// import PageLink from './../PageLink';
import Link from 'next/link'


export default function ProductList() {
  return (
    <>
      <Row className="d-flex justify-content-between" data-testid="content-items">
      {questData.map((col, i) => (
        <Col key={i} md={5} className="mb-4">
          <h6 className="mb-3">
          {/* <PageLink href={col.link} className="quest-link" testId="quest-link">
            {col.title}
          </PageLink> */}

          {/* <PageLink href={'/quest/' + col.id} className="quest-link" testId="quest-link">
            {col.title}
          </PageLink> */}

          <Link key={col.id} href={'/quests/' + col.id}>
          {/* <Link key={col.id} href='/quest'> */}
          {/* <Link key={col.id} href={'/quest/' + col.id}> */}
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

      <h1>Quest List</h1>
      <h2>Quest 1</h2>
      <h2>Quest 2</h2>
      <h2>Quest 3</h2>
    </>
  )
}
