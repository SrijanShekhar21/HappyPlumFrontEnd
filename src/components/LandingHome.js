import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Button, Navbar, Nav, Card, Stack, Form, Accordion } from 'react-bootstrap';
import { BiMap, BiEnvelope, BiPhone } from 'react-icons/bi';
import { FaArrowRight, FaFacebook, FaLinkedin, FaPlayCircle, FaYoutube } from 'react-icons/fa';

import logo from "../images/logo.jpeg";
import landing from "../images/landing.PNG";
import hero2 from "../images/Teacher.png";
import hero3 from "../images/welcome.png";
import image from "../images/aboutsection.jpg";
import ceo from "../images/Ceo.PNG";
import cofounder from "../images/cofounder.PNG";

import { BsFillGridFill } from 'react-icons/bs';
// import Login from './Login';
// import Register from './Register';
// import Header from './Header';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import PopupForm from './PopupForm';

import Faq from './Faq';


const HomePage = () => {


  return (<>
    <div id="home">
     {/* <Game/> */}
      {/* Hero */}
      <section className="home-section text-center ">
        <Container fluid >
          <Row className="align-items-center d-flex justify-content-center p-3">
            <Col lg={6}>
              <div className="right-content-wrap ">
                <div className="img-wrap">
                  {/* Add style to control image height */}
                  <img src={logo} alt="" className="img-fluid" style={{ maxHeight: '160px' }} />
                  <img src={landing} alt="" className="img-fluid" style={{ maxHeight: '400px' }} />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="left-content-wrap">

                <div className="paragraph">
                  <p><span style={{ fontWeight: 'normal', color: "#000000" }}></span></p>
                </div>
              </div>
            </Col>

          </Row>
          <Row className="align-items-center d-flex justify-content-center py-5" style={{ backgroundColor: "#7335b7", borderRadius: "20% 20% 0 0", color: "#ffffff" }}>
            <Col lg={6}>
              <img src={hero2} alt="" className="img-fluid" />


            </Col>
            <Col lg={6} className="d-flex align-items-center text-align-center">
              <div className="header-inner">
                <h1 className="title">Transforming Education for the Future</h1>
                <p className="description">Innovative learning solutioms for parents and teachers to get deeper insights to the students language learning journey.</p>
                <div className=" mt-4">
                  <Button href="https://calendly.com/happyplumint/30min" variant="primary" style={{ marginRight: "10px",fontWeight: 'bold' }}>
                    Get Started{" "}<FaArrowRight />
                  </Button>
                  
                  <Button href="/#watchdemo" variant="primary" className="ml-2" style={{ fontWeight: 'bold' }}>
      Watch Demo{" "}<FaPlayCircle/>
    </Button>
                </div>
              </div>
            </Col></Row>

        </Container>
      </section>
      {/* About Us Section */}
      <section id="about" className="about-section py-5">

        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="left-content-wrap">
                <span className="subtitle"></span>
                <h3 className="title">About Us</h3>
                <div className="paragraph">
                  <p><span style={{ fontWeight: 'normal' }}>Our K-12 language learning LMS combines personalized learning paths, immersive cultural experiences, and interactive gamification to create a fun, engaging, and effective language learning journey. With real-time feedback, comprehensive curriculum alignment, and robust support tools for teachers and parents, our LMS ensures every student can achieve language proficiency at their own pace and style, both online and offline.</span></p>
                  <p><span style={{ fontWeight: 'normal' }}>By integrating generative AI and gamification, these technologies not only make learning more engaging and interactive, but also provide personalized, culturally enriched, and inclusive education. This holistic approach prepares students to be confident communicators and globally competent individuals, equipped with the skills needed for future success.</span></p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="right-content-wrap d-flex justify-content-center">
                <div className="img-wrap">
                  {/* Add style to control image height */}
                  <img src={image} alt="" className="img-fluid" style={{ maxHeight: '400px' }} />
                </div>
              </div>
            </Col>
          </Row>
        </Container></section>
      {/* Meet the Team Section */}
      <section id="team" className="team-section  py-5 my-5 " style={{ backgroundColor: "#7335b7", color: "#ffffff", borderRadius: "20% 0 20% 0" }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="right-content-wrap d-flex justify-content-center">
                <div className="img-wrap">
                  {/* Add style to control image height */}
                  <img src={ceo} alt="" className="img-fluid" style={{ maxwidth:"100%",maxHeight: '400px' }} />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="left-content-wrap">
                <span className="subtitle"></span>
                <h3 className="title">Chief Executive Officer</h3>
                <div className="paragraph">
                  <p><span style={{ fontWeight: 'normal' }}>Born in China, adopted as a toddler, and raised in Maine, Nina began learning Mandarin
                    at age of 15, when she was awarded the National Security Language Initiative for Youth,
                    a highly competitive cultural immersion and intensive language scholarship program of
                    the US Department of State. She continued her Mandarin studies through college, and
                    was awarded the State Department’s Critical Language Scholarship in Suzhou, China in
                    2018. She graduated from Wheaton College in Norton MA with a BA in International
                    Relations with a focus on Asia.
                  </span></p>
                  <p><span style={{ fontWeight: 'normal' }}>Her love for teaching Chinese began with the realization that many American children
                    don’t learn well with the strict and rote approach of many Chinese teachers. In response,
                    she created an innovative learning approach so that children for whom Chinese is not a
                    first language could actually have fun learning.

                  </span></p>
                  <p><span style={{ fontWeight: 'normal' }}>In addition to teaching Mandarin to all ages from toddlers to adults, she has built her
                    knowledge and teaching experience through substitute teaching, private gymnastics
                    coaching, and tutoring students of all ages in a variety of subjects, including English,
                    statistics, and AP Biology. She’s also passionate about entrepreneurial endeavors and
                    believes that speaking both Mandarin and English is an asset in the international
                    business realm.
                  </span></p>
                  <p><span style={{ fontWeight: 'normal' }}>In her free time, Nina enjoys traveling to Asia, learning languages, and reading about
                    business/ startups. In the past few years she has traveled to Qatar, Singapore, Hong
                    Kong, Dubai, Bali, Barcelona, Croatia, India and many major cities in China, such as Shenzhen, Xi’an, and
                    Shanghai.
                  </span></p>
                </div>
              </div>
            </Col>

          </Row>
          <Row className="align-items-center">

            <Col lg={6}>
              <div className="left-content-wrap">
                <span className="subtitle"></span>
                <h3 className="title">Cofounder</h3>
                <div className="paragraph">
                  <p><span style={{ fontWeight: 'normal' }}>With more than a dozen years
                    of experience in healthcare and AI, I'm the co-founder and CEO of basys.ai, a healthtech startup. Our
                    focus at basys.ai is utilizing generative AI to enhance prior authorization and utilization management for
                    healthcare payers and providers. My responsibilities involve leading sales, strategy, and fundraising
                    efforts, with a deep-seated passion for driving cost savings and better outcomes within the healthcare
                    sector
                  </span></p>
                  <p><span style={{ fontWeight: 'normal' }}>I earned my MS in Health Data Science from Harvard University, where I was recognized as a Cheng
                    Fellow, Roslyn and Lisle Payne Scholar, and recipient of the 40 under 40 award from the Boston
                    Congress of Public Health. During my academic journey, I've contributed to three patents and authored
                    several research papers on the intersection of AI and healthcare.
                  </span></p>
                  <p><span style={{ fontWeight: 'normal' }}>My prior venture was as co-founder and CTO at kydots.ai, where I led both sales and engineering teams.
                    We successfully delivered a SaaS product catering to enterprise clients in the financial management and
                    human capital sectors. The venture resulted in two patents and a research paper detailing our proprietary
                    platform before getting acquired.
                  </span></p>
                  <p><span style={{ fontWeight: 'normal' }}>A firm believer in community and collective leadership, I'm enthusiastic about mentoring startups at
                    TechStars, Harvard, MIT, MassChallenge, and XLerateHealth. I've also held the role of Co-Director for the
                    Harvard Business Club, where I provided strategic support and fundraising guidance to Harvard-affiliated
                    founders.
                  </span></p>
                  <p><span style={{ fontWeight: 'normal' }}>As an enthusiast of applied machine learning, I've been actively involved in both professional and
                    academic initiatives within the Artificial Intelligence domain. One notable example is co-instructing the
                    "Collaborative Data Science in Medicine - HST.953" course at MIT. My contributions extend to top-tier
                    machine learning conferences like NeurIPS and ACL and esteemed journals such as Lancet and
                    Springer.
                  </span></p>
                  <p><span style={{ fontWeight: 'normal' }}>Healthcare and technology are personal passions of mine, and I've been fortunate to share my insights
                    on various public platforms. Invitations to speak at TEDx, Mayo Clinic, DuPont, Udacity, and other events
                    have allowed me to delve into these crucial topics. Additionally, I've had the honor of having startups I
                    have founded featured in Forbes and TechCrunch.
                  </span></p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="right-content-wrap d-flex justify-content-center">
                <div className="img-wrap">
                  {/* Add style to control image height */}
                  <img src={cofounder} alt="" className="img-fluid" style={{ maxHeight: '400px' }} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>

      </section>

      {/* Customer Testimonials Section */}
      <section id="testimonials" className="testimonials-section text-center py-5">
        <Container>
          <Row className="text-center">
            <Col lg={4}></Col>
            <Col lg={4}>
              <h3 className="text-center mb-4" style={{ borderBottom: '4px solid #156AA7', paddingBottom: '10px' }}>What Our Customers Say</h3>
            </Col>
            <Col lg={4}></Col>
          </Row>
          <Row xs={1} sm={2} md={2} lg={3} xl={3} className="justify-content-center">
            {[
              {
                icon: <BsFillGridFill size={64} color="#ff0000" />,
                person:"Educator",
                description: "She really enjoyed learning from you."
              },
              {
                icon: <BsFillGridFill size={64} color="#ff0000" />,
                person:"Parent",
                description: "He was so excited for you to come."
              },
              {
                icon: <BsFillGridFill size={64} color="#ff0000" />,
                person:"Student",
                description: "She really interested to adapt language."
              },


            ].map((service, index) => (
              <Col key={index} className="mb-4">
                <Card className="h-100 shadow" style={{ margin: '0 10px', borderWidth: '30%' }}>
                  <div className=" p-4">{service.icon}</div>
                  <Card.Body>
                    <div className="content text-center">
                      <h4 className="title"><a href={service.link} style={{ textDecoration: 'none', color: 'black' }}> {service.person}</a></h4>

                      <p style={{ color: 'black' }}>{service.description}</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section id="contact" className="contact-section py-5" style={{ backgroundColor: " #7335b7", borderRadius: "20% 0" }}>
        <Container >
          <Row className="gy-5 gx-lg-5">
            <Col lg={12}>
              <div className="section-header" style={{ color: "#ffffff" }}>
                <h2>Contact Us</h2>
                <p>Happy Plum Language Learning</p>
              </div>
            </Col>
          </Row>
          <Row className="gy-5 gx-lg-5">

            <Col lg={6}>
              <Card className="h-100 shadow">
                <Card.Body>
                  <Card.Title>Get in touch</Card.Title>
                  <Card.Text>
                    You have any query please contact we will provide support.
                  </Card.Text>
                  <div className="info-item d-flex align-items-center" style={{ marginBottom: '20px' }}>
                    <Stack direction="horizontal" gap={3}>
                      <BiMap className="flex-shrink-0 mr-3" size={24} style={{ color: 'blue' }} />
                      <div>
                        <h4>Location:</h4>
                        <p>Boston, MA USA</p>
                      </div>
                    </Stack>
                  </div>
                  <div className="info-item d-flex align-items-center" style={{ marginBottom: '20px' }}>
                    <Stack direction="horizontal" gap={3}>
                      <BiEnvelope className="flex-shrink-0 mr-3" size={24} style={{ color: 'green' }} />
                      <div>
                        <h4>Email:</h4>
                        <p> happyplumint@gmail.com</p>
                      </div>
                    </Stack>
                  </div>
                  <div className="info-item d-flex align-items-center" style={{ marginBottom: '20px' }}>
                    <Stack direction="horizontal" gap={3}>
                      <BiPhone className="flex-shrink-0 mr-3" size={24} style={{ color: 'red' }} />
                      <div>
                        <h4>Call:</h4>
                        <p>+16174595461</p>
                      </div>
                    </Stack>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="h-100 shadow">

                <Card.Body>
                  <Card.Title>Customer Support</Card.Title>
                  <Form className="php-email-form">
                    <Row className="mb-3">
                      <Col md={12} className="form-group mb-3">
                        <Form.Control type="text" name="name" placeholder="Your Name" required />
                      </Col>
                      <Col md={12} className="form-group mb-3 ">
                        <Form.Control type="email" name="email" placeholder="Your Email" required />
                      </Col>

                      <Col md={12} className="form-group mb-3">
                        <Form.Control type="text" name="subject" placeholder="Subject" required />
                      </Col>
                      <Col md={12} className="form-group mb-3">
                        <Form.Control as="textarea" name="message" placeholder="Message" required />
                      </Col>
                      <Col md={12} className="text-center">
                        <Button type="submit">Send Message</Button>
                      </Col>
                    </Row>
                  </Form>
                  <div>

                    <p>Social Media Links:</p>
                  </div>
                  <Stack direction="horizontal" gap={3}>

                    <a href="https://www.facebook.com/happyplummandarin" style={{ textDecoration: 'none', fontSize: '24px', marginRight: '10px' }}><FaFacebook /></a>
                    <a href="https://www.linkedin.com/company/73955807/admin/feed/posts/" style={{ textDecoration: 'none', fontSize: '24px', marginRight: '10px' }}><FaLinkedin /></a>
                    <a href="https://www.youtube.com/@happyplummandarin5661" style={{ textDecoration: 'none', fontSize: '24px', marginRight: '10px', color:"red"}}><FaYoutube/></a>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </section>

      <section id="login" className="home-section text-center" >
        <Container  style={{padding:"9% 0"}}>
     
          <Row className="align-items-center d-flex justify-content-center py-5" style={{ backgroundColor: "#7335b7", borderRadius: "50% 5% 15% 50%", color: "#ffffff" }}>
            <Col lg={4}>
              <img src={hero3} alt="" className="img-fluid " style={{ maxHeight: '400px' }}/>


            </Col>
            <Col lg={8} className="d-flex align-items-center text-align-center">
              <div className="header-inner">
                <h1 className="title">Welcome to Happy Plum!</h1>
                <p className="description">Our LMS connects your child's language learning journey with parents and teachers, ensuring personalized education for future global leaders. Join us in this exciting adventure to cultivate your child's success in the 21st century.</p>
                <div className=" mt-4">
                  <Button  variant="primary" style={{ marginRight: "10px" ,color:"white"}}>
                    <Link to="/login" className='text-light text-decoration-none'>Login</Link>
                  </Button>
                 
                </div>
              </div>
            </Col></Row>

        </Container>
      </section>
      <section id="watchdemo" className="home-section text-center">
      <Container style={{ padding: "5% 0" }}>
        <Row className="align-items-center d-flex justify-content-center py-5" style={{ backgroundColor: "orange", borderRadius: "2%", color: "#ffffff" }}>
          <Col lg={12}>
            {/* <div style={{ maxHeight: "100vh", overflow: "hidden" }}> */}
              <video src={require('../images/watch_demo.mp4')} controls style={{ width: "100%",maxHeight: "80vh" }} />
            {/* </div> */}
          </Col>
        </Row>
      </Container>
      
    </section>
    <section id="faq" className="home-section text-center">
    <Faq/>
      
    </section>
   
    </div>

   <PopupForm/>

</> );
};

export default HomePage;
