import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaAppStoreIos, FaCertificate, FaUsersCog } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';

const CulturalHighlights = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <Card className="shadow p-3 mb-5 bg-white rounded">
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between">
                <div className="icon" style={{ color: '#ff0000', marginRight: '10px' }}>
                  <FaAppStoreIos size={48} />
                </div>
                <div className="content">
                  <h3 className="title"><a href="/" style={{ textDecoration: 'none', color: '#333' }}>440+ History</a></h3>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="shadow p-3 mb-5 bg-white rounded">
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between">
                <div className="icon" style={{ color: '#00ff00', marginRight: '10px' }}>
                  <FaCertificate size={48} />
                </div>
                <div className="content">
                  <h3 className="title"><a href="/" style={{ textDecoration: 'none', color: '#333' }}>10+ Culture</a></h3>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="shadow p-3 mb-5 bg-white rounded">
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between">
                <div className="icon" style={{ color: '#0000ff', marginRight: '10px' }}>
                  <FaUsersCog size={48} />
                </div>
                <div className="content">
                  <h3 className="title"><a href="/" style={{ textDecoration: 'none', color: '#333' }}>1200+ Daily life</a></h3>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
  );
}

export default CulturalHighlights;
