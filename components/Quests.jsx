'use client';


import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PageLink from './PageLink';
// import { Link } from "react-router-dom";
import Link from 'next/link'

import questData from '../utils/questData';

const Content = () => (
  <div className="next-steps my-5" data-testid="content">
    <h1 className="my-5 text-center" data-testid="content-title">
      Quests
    </h1>
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

          <Link href={'/quest/' + col.id}>
          {/* <Link key={col.id} href='/quest'> */}
          {/* <Link key={col.id} href={'/quest/' + col.id}> */}
            <h2>{col.title}</h2>
          </Link>



          {/* href={'/posts/' + post.id} */}


          {/* <Route exact path="/ProductPage/:id" render={() => <ProductPage data={col.id} />}/>  */}


          {/* <a href={col.link}>
            <FontAwesomeIcon icon="link" className="mr-2" />
             {col.title}
          </a> */}

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
