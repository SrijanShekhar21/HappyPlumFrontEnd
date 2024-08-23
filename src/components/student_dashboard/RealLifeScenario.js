import React, { useState } from 'react';
import { Button, Card, Row, Col, Container, ListGroup } from 'react-bootstrap';
import { Fragment} from 'react';
import { Accordion } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ready from "../../images/reallifescenario/ready.png";
import clothes from "../../images/reallifescenario/clothes.png";
import cleaning from "../../images/reallifescenario/cleaning.png";
import home from '../../images/reallifescenario/home.png';
import classroom from '../../images/reallifescenario/classroom.png';
import eating from '../../images/reallifescenario/eating.png';
import school from '../../images/reallifescenario/school.png';
import subject from '../../images/reallifescenario/subject.png';
import office from '../../images/reallifescenario/work.png';
import work from '../../images/reallifescenario/work.png';
import discussion from '../../images/reallifescenario/discussion.png';
import job from '../../images/reallifescenario/job.png';

// Data for the scenarios
const scenariosData = [
  {
    title: 'At home',
    description: 'Your family is doing household chores. What task do you want to help with?',
    options: [
      { name: 'Cleaning up the house', image: cleaning },
      { name: 'Getting ready for the day', image: ready},
      { name: 'Putting on clothes', image: clothes }
    ],
    image: home
  },
  {
    title: 'At school',
    description: 'It\'s breakfast time! What do you want to prepare?',
    options: [
      { name: 'Going to the classroom', image: classroom },
      { name: 'Eating with friends', image: eating},
      { name: 'Talking about different subjects', image: subject }
    ],
    image: school
  },
  {
    title: 'At work',
    description: 'Let\'s go for a walk in nature! What should we bring?',
    options: [
      { name: 'Getting to work', image: work },
      { name: 'Talking about work deadlines', image: discussion},
      { name: 'Talking about which job is best for you', image: job }
    ],
    image: office
  }
];

const Scenario = ({ title, description, options, image, onSelect, selectedOption }) => {
  return (
    <Card className="mb-4" style={{backgroundColor:"orange"}}>
      <Card.Img variant="top" src={image} alt={title} style={{ height: '200px', objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Row>
          {options.map((option, index) => (
            <Col key={index} xs={4}>
              <Card>
                <Card.Img variant="top" src={option.image} alt={option.name} style={{ height: '200px', objectFit:"contain" ,backgroundColor:"yellow"}} />
                <Card.Body>
                  <Button
                    className="w-100"
                    onClick={() => onSelect(option.name)}
                    disabled={selectedOption !== null}
                  >
                    {option.name}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

const RealLifeScenario = () => {

  const [key, setKey] = useState('prek-elementary');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    console.log('Selected option:', option);
    setSelectedOption(option);
  };

  const resetOption = () => {
    setSelectedOption(null);
  };

  return (
    <>

<Container
 style={{ paddingTop: '50px', paddingBottom: '50px', fontFamily: 'Arial, sans-serif', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', background: '#f8f9fa' }}>
    <Row className="text-center">
      {/* <Col lg={3}></Col>
        <Col lg={6}>
          <h1 className="text-center mb-4" style={{ borderBottom: '4px solid #156AA7', paddingBottom: '10px' }}>Frequently Asked Questions</h1>
        </Col>
        <Col lg={3}></Col> */}
      </Row>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="prek-elementary" title="Prek-elementary">
        {/* <div className="App">
      <header>
        <h1 className="text-center bg-primary">Real-Life Scenarios</h1>
      </header>
      <main className="container">
        {scenariosData.map((scenario, index) => (
          <Scenario
            key={index}
            title={scenario.title}
            description={scenario.description}
            options={scenario.options}
            image={scenario.image}
            onSelect={handleOptionSelect}
            selectedOption={selectedOption}
          />
        ))}
        {selectedOption && (
          <div className="navigation-buttons text-center">
            <Button onClick={resetOption}>Reset</Button>
          </div>
        )}
      </main>
    </div> */}


<div>
      <h2>Pre-K to Elementary School (Ages 3-10)</h2>
      <ListGroup>
        <ListGroup.Item>
          <h4>1. Daily Routines:</h4>
          <ListGroup>
            <ListGroup.Item>Morning Routine: Students learn vocabulary and phrases related to waking up, brushing teeth, getting dressed, and eating breakfast.</ListGroup.Item>
            <ListGroup.Item>Bedtime Routine: Vocabulary around getting ready for bed, including bathing, putting on pajamas, and reading a bedtime story.</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>2. Family and Friends:</h4>
          <ListGroup>
            <ListGroup.Item>Introducing Family Members: Names and roles of family members (e.g., mother, father, sister, brother).</ListGroup.Item>
            <ListGroup.Item>Playdates: Conversations about playing games, sharing toys, and making friends.</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>3. School Life:</h4>
          <ListGroup>
            <ListGroup.Item>Classroom Activities: Common classroom instructions, names of school supplies, and subjects.</ListGroup.Item>
            <ListGroup.Item>Recess and Lunch: Vocabulary related to playing on the playground, eating lunch, and socializing with classmates.</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>4. Shopping:</h4>
          <ListGroup>
            <ListGroup.Item>Grocery Store: Names of fruits, vegetables, and common grocery items; phrases for buying and selling.</ListGroup.Item>
            <ListGroup.Item>Toy Store: Vocabulary for toys, asking prices, and making simple purchases.</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>5. Outdoor Activities:</h4>
          <ListGroup>
            <ListGroup.Item>Park Visit: Words and phrases related to playing in the park, naming playground equipment, and interacting with nature.</ListGroup.Item>
            <ListGroup.Item>Zoo Visit: Names of animals, habitats, and simple descriptions of animal behaviors.</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
        </Tab>
        <Tab eventKey="middle-school" title="Middle-school">

        <div>
      <h2>Middle School (Ages 11-14)</h2>
      <ListGroup>
        <ListGroup.Item>
          <h4>1. Social Interactions:</h4>
          <ListGroup>
            <ListGroup.Item>Making Plans: Inviting friends to events, setting up meeting times, and discussing weekend activities.</ListGroup.Item>
            <ListGroup.Item>Birthday Parties: Planning and attending birthday parties, giving gifts, and singing birthday songs.</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>2. Community and Services:</h4>
          <ListGroup>
            <ListGroup.Item>Library Visit: Checking out books, asking for recommendations, and discussing favorite books.</ListGroup.Item>
            <ListGroup.Item>Post Office: Sending letters and packages, buying stamps, and understanding postal services.</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>3. Health and Safety:</h4>
          <ListGroup>
            <ListGroup.Item>Doctor's Visit: Describing symptoms, understanding medical advice, and learning about healthy habits.</ListGroup.Item>
            <ListGroup.Item>Safety Instructions: Understanding safety rules at home, school, and in public places.</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>4. Hobbies and Interests:</h4>
          <ListGroup>
            <ListGroup.Item>Sports: Discussing favorite sports, playing sports, and understanding basic rules.</ListGroup.Item>
            <ListGroup.Item>Music and Arts: Talking about favorite music, instruments, and artistic activities.</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>5. Technology:</h4>
          <ListGroup>
            <ListGroup.Item>Using Gadgets: Vocabulary related to using computers, tablets, and smartphones for educational purposes.</ListGroup.Item>
            <ListGroup.Item>Internet Safety: Understanding safe internet practices and discussing online activities.</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
        </Tab>
        <Tab eventKey="high-school" title="High-school" >
  
        <div>
      <h2>High School (Ages 15-18)</h2>
      <ListGroup>
        <ListGroup.Item>
          <h4>1. Academic Life:</h4>
          <ListGroup>
            <ListGroup.Item>Class Discussions: Participating in classroom discussions, expressing opinions, and debating topics.</ListGroup.Item>
            <ListGroup.Item>Homework and Projects: Discussing assignments, collaborating on group projects, and presenting findings.</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>2. Career Exploration:</h4>
          <ListGroup>
            <ListGroup.Item>Job Interviews: Preparing for job interviews, discussing career aspirations, and writing resumes.</ListGroup.Item>
            <ListGroup.Item>Part-Time Jobs: Vocabulary and scenarios related to working part-time jobs, including customer service and handling money.</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>3. Travel and Tourism:</h4>
          <ListGroup>
            <ListGroup.Item>Planning a Trip: Booking flights and hotels, understanding travel itineraries, and navigating airports.</ListGroup.Item>
            <ListGroup.Item>Tourist Attractions: Discussing landmarks, cultural sites, and engaging in guided tours.</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>4. Daily Life:</h4>
          <ListGroup>
            <ListGroup.Item>Household Chores: Describing chores, scheduling tasks, and discussing responsibilities.</ListGroup.Item>
            <ListGroup.Item>Cooking and Meals: Following recipes, cooking meals, and discussing nutrition.</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>5. Social and Cultural Events:</h4>
          <ListGroup>
            <ListGroup.Item>Festivals and Holidays: Celebrating cultural events, understanding traditions, and participating in holiday activities.</ListGroup.Item>
            <ListGroup.Item>Community Events: Attending local events, volunteering, and engaging in community service.</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
        </Tab>
      </Tabs></Container>
    
  </>);
};

export default RealLifeScenario;
