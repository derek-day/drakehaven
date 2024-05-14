import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import spellData from './spellData';

import { Row, Col } from 'reactstrap';
import Link from 'next/link'

export default function SpellList() {
  return (
    <>
      <Row className="d-flex justify-content-between" data-testid="content-items">
        {spellData.map((col, i) => (
          <Col key={i} md={5} className="mb-4">
            <h6 className="mb-3">
              <Link key={col.id} href={'/spells/' + col.id}>
                <h2>{col.title}</h2>
              </Link>
            </h6>
          </Col>
        ))}
      </Row>
    </>
  )
}
