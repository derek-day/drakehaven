'use client';

import React from 'react';

import spellData from './spellData';

import { Row, Col } from 'reactstrap';
import Link from 'next/link'

import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../../components/Loading';

export default function SpellList() {
  const { user, isLoading } = useUser();
  // const data = spellData.find((q) => q.id === user.id)
  // console.log(data);

  return (
    <>
      {isLoading && <Loading />}
      {/* need to set user id to spell user id (edit spellData to have seperate user id's with their spells listed below) */}
      {/* {user && ( */}
      {user && spellData.find((q) => q.id === user.id) && (
      <>
        <Row className="d-flex justify-content-between" data-testid="content-items">
          {spellData.map((col, i) => (
          // {spellData.map((col, i) => (
            <Col key={i} md={5} className="mb-4">
              <h6 className="mb-3">
                <Link key={col.id} href={'/spells/' + col.id}>
                  <h2>{col.title}</h2>
                </Link>
              </h6>
            </Col>
          ))}
        </Row>
        <h1>{user.id}</h1>
      </>
      )}
      </>
  )
}
