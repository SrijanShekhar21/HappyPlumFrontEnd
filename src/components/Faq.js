

//     <><Container style={{ paddingTop: '50px', paddingBottom: '50px', fontFamily: 'Arial, sans-serif', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', background: '#f8f9fa' }}>
//     <Row className="text-center">
//       <Col lg={3}></Col>
//         <Col lg={6}>
//           <h1 className="text-center mb-4" style={{ borderBottom: '4px solid #156AA7', paddingBottom: '10px' }}>Frequently Asked Questions</h1>
//         </Col>
//         <Col lg={3}></Col>
//       </Row>
//     <Accordion>
//       {faqDetails.map((faq, index) => (
//         <Fragment key={index}>
//           <Accordion.Item eventKey={index}>
//             <Accordion.Header style={{ background: '#007bff', color: '#fff', fontWeight: 'bold', borderRadius: '5px', padding: '15px', cursor: 'pointer' }}>
//               {faq.question}
//             </Accordion.Header>
//             <Accordion.Body style={{ background: '#ffffff', color: '#333', padding: '15px', borderRadius: '0 0 5px 5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
//               {faq.answer}
//             </Accordion.Body>
//           </Accordion.Item>
//         </Fragment>
//       ))}
//     </Accordion>
//   </Container></>



import { Fragment, useState } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const lmsFaq = [
    {
      question: "What is LMS?",
      answer: "LMS is a Learning Management System"
    }
  ];

  const appFaq = [
    {
      question: "What is App?",
      answer: "App is the managing activity of student"
    }
  ];


  const aboutusFaq = [
    {
      question: "What services Happy Plum provide?",
      answer: "Happy plum provides Learning platform online"
    }
  
  ];


  
  function Faq() {
    const [key, setKey] = useState('lms');
  
    return (
        <Container style={{ paddingTop: '50px', paddingBottom: '50px', fontFamily: 'Arial, sans-serif', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', background: '#f8f9fa' }}>
    <Row className="text-center">
      <Col lg={3}></Col>
        <Col lg={6}>
          <h1 className="text-center mb-4" style={{ borderBottom: '4px solid #156AA7', paddingBottom: '10px' }}>Frequently Asked Questions</h1>
        </Col>
        <Col lg={3}></Col>
      </Row>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="lms" title="LMS">
        <Accordion>
      {lmsFaq.map((faq, index) => (
        <Fragment key={index}>
          <Accordion.Item eventKey={index}>
            <Accordion.Header style={{ background: '#007bff', color: '#fff', fontWeight: 'bold', borderRadius: '5px', padding: '15px', cursor: 'pointer' }}>
              {faq.question}
            </Accordion.Header>
            <Accordion.Body style={{ background: '#ffffff', color: '#333', padding: '15px', borderRadius: '0 0 5px 5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              {faq.answer}
            </Accordion.Body>
          </Accordion.Item>
        </Fragment>
      ))}
    </Accordion>

        </Tab>
        {/* <Tab eventKey="app" title="APP">
        <Accordion>
      {appFaq.map((faq, index) => (
        <Fragment key={index}>
          <Accordion.Item eventKey={index}>
            <Accordion.Header style={{ background: '#007bff', color: '#fff', fontWeight: 'bold', borderRadius: '5px', padding: '15px', cursor: 'pointer' }}>
              {faq.question}
            </Accordion.Header>
            <Accordion.Body style={{ background: '#ffffff', color: '#333', padding: '15px', borderRadius: '0 0 5px 5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              {faq.answer}
            </Accordion.Body>
          </Accordion.Item>
        </Fragment>
      ))}
    </Accordion>

        </Tab> */}
        <Tab eventKey="aboutus" title="About Us" >
        
    <Accordion>
      {aboutusFaq.map((faq, index) => (
        <Fragment key={index}>
          <Accordion.Item eventKey={index}>
            <Accordion.Header style={{ background: '#007bff', color: '#fff', fontWeight: 'bold', borderRadius: '5px', padding: '15px', cursor: 'pointer' }}>
              {faq.question}
            </Accordion.Header>
            <Accordion.Body style={{ background: '#ffffff', color: '#333', padding: '15px', borderRadius: '0 0 5px 5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              {faq.answer}
            </Accordion.Body>
          </Accordion.Item>
        </Fragment>
      ))}
    </Accordion>

        </Tab>
      </Tabs></Container>
    );
  }
  
  export default Faq;