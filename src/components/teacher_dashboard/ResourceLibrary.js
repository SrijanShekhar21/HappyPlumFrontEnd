import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { BASE_SERVER_URL, MANAGE_RESOURCE_GET } from '../../api/server';
import { getRequest } from '../../api/api';

const ResourceLibrary = () => {
    const [resourceList, setResourceList] = useState([]);

    const allStudentView = async () => {
        // console.log("object id", id);
        try {
            let res = await getRequest(
              MANAGE_RESOURCE_GET,
              ""
            );
            if (res) {
                setResourceList(res.data);
              console.log("asdfghjkljhdfgh", res.data)
            }
          
    
    
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle the error here or display an error message to the user
        }
      };

    React.useEffect(() => {
        allStudentView();
      }, []);

    return (
        <Container>
          <h1>Resource List</h1>
            <Row>
            
                {resourceList&&resourceList.length>0?(resourceList.map(resource => (
                    <Col key={resource._id} md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>{resource.title}</Card.Title>
                                <Card.Text>Type: {resource.resourceType}</Card.Text>
                                <Card.Text>
                  <a href={`${BASE_SERVER_URL
                    
                  }/${resource.resourcePath.replace('public\\', '')}`} target="_blank" rel="noopener noreferrer">View Resource</a>
                  {/* const resourcePath = resource.resourcePath.replace('public\\', '').replace(/\\/g, '/'); */}
                {/* //   href={`http://localhost:5000/images/${"resourceFile-1721822085845.pdf"}`} */}
                </Card.Text>

                                {/* <Card.Link href={`E:/happy_plum_backend/${resource.resourcePath}`}>{resource.resourcePath}</Card.Link> */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))):null}
            </Row>
        </Container>
    );
};

export default ResourceLibrary;
