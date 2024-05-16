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
  <div style={{
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    flex: "1"
  }}
  >
      <h6 className='text-white py-2 px-2 mb-5' style={{pointerEvents: 'none', width: "10rem", color:"white", letterSpacing:"0.15rem", borderColor: "white", border: "1px solid white", borderRadius: "1rem", textAlignLast: "center", fontWeight: "500" }}>TYE SHEETS</h6>
      {/* <button type="button" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' style={{pointerEvents: 'none', width: "15rem", color:"white", letterSpacing:"0.15rem", borderColor: "white" }}>TYE SHEETS</button> */}
      <h3 className={`${francisco.src}`} >Drakehaven</h3>
      <img src='/hero.png' style={{width: "50%"}} />
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
