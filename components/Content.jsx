import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contentData from '../utils/contentData';


const Content = () => (
  // <div className='drake-border' style={{
  <div style={{
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    flex: "1",
    placeItems: "center"
  }}
  >

      {/* <h6 className='text-white px-1 mt-5 mb-5' style={{paddingTop: '0.5rem !important', paddingBottom: '0.55rem !important', pointerEvents: 'none', width: "12rem", color:"#f8f9fa", letterSpacing:"0.1rem", borderColor: "#f8f9fa", border: "0.8px solid white", borderRadius: "1rem", textAlignLast: "center", fontWeight: "300" }}>DRAKEHAVEN</h6> */}
      <h2 className='title mb-4' style={{fontFamily:'House', letterSpacing:'0.3rem', fontSize: '4rem' }}>Drakehaven</h2>
      {/* <h1 className='{`${francisco.src}`} mb-5 mx-5' style={{color: '#f3482a', fontFamily: 'Francisco', fontKerning: 'none', letterSpacing: '0.05rem', fontWeight: '100', fontSize: '2rem'}}>Welcome to the century city - a land free from all dragons.</h1> */}
      <img className='hero-image' src='/hero.png' style={{width: "100%", filter: "saturate(0.85)"}} />
  </div>
  // <div className="next-steps my-5" data-testid="content">
  //   <h2 className="my-5 text-center" data-testid="content-title">
  //     What can I do next?
  //   </h2>
  //   <Row className="d-flex justify-content-between" data-testid="content-items">
  //     {contentData.map((col, i) => (
  //       <Col key={i} md={5} className="mb-4">
  //         <h6 className="mb-3">
  //           <a href={col.link}>
  //             <FontAwesomeIcon icon="link" className="mr-2" />
  //             {col.title}
  //           </a>
  //         </h6>
  //         <p>{col.description}</p>
  //       </Col>
  //     ))}
  //   </Row>
  // </div>
);

export default Content;
