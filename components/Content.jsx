import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contentData from '../utils/contentData';
import localFont from 'next/font/local'

const francisco = localFont({
  src: [
    {
      path: '../public/fonts/francisco.ttf',
      weight: '100'
    }
  ],
  variable: '--font-francisco'
})


const Content = () => (
  <div className='drake-border' style={{
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    flex: "1",
    placeItems: "center",
    width: "75%"
  }}
  >
      <h7 className='text-white py-2 px-1 mt-5 mb-5' style={{pointerEvents: 'none', width: "12rem", color:"#f8f9fa", letterSpacing:"0.1rem", borderColor: "#f8f9fa", border: "0.8px solid white", borderRadius: "1rem", textAlignLast: "center", fontWeight: "300" }}>DRAKEHAVEN</h7>
      {/* <h7 className='text-white py-2 px-1 mt-5 mb-5' style={{pointerEvents: 'none', width: "12rem", color:"#f8f9fa", letterSpacing:"0.1rem", borderColor: "#f8f9fa", border: "0.8px solid white", borderRadius: "1rem", textAlignLast: "center", fontWeight: "300" }}>TYE SHEETS</h7> */}
      <h1 className='{`${francisco.src}`} mb-5' style={{color: '#EE3623', fontFamily: 'Francisco', letterSpacing: '0.05rem', fontWeight: '100', fontSize: 'rem', opacity: '0.92'}}>Where the Dragons once wept</h1>
      <img src='/hero.png' style={{width: "100%"}} />
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
