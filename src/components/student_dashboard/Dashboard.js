import React, { useState } from "react";
import { Col, Container, Row, Button, Card, Form } from "react-bootstrap";
import ProgressGraph from "./ProgresGraph";
import ProgressChart from "./ProgressChart";
import Avatar from "./Avatar";

function Dashboard() {
  const [step, setStep] = useState(1);
  const [language, setLanguage] = useState("");
  const [proficiency, setProficiency] = useState("");
  const [testAnswers, setTestAnswers] = useState({});
  const [testPassed, setTestPassed] = useState(false);
  const [background, setBackground] = useState("");

  // Updated hardcoded test data for each language separately
  const testData = {
    Mandarin: {
      New: [
        {
          question: 'What is the word for "Hello" in Mandarin?',
          options: ["你好", "谢谢", "再见"],
          correctAnswer: "你好",
        },
        {
          question: 'What is the word for "Thank you" in Mandarin?',
          options: ["谢谢", "你好", "再见"],
          correctAnswer: "谢谢",
        },
        {
          question: 'What is the word for "Goodbye" in Mandarin?',
          options: ["再见", "你好", "谢谢"],
          correctAnswer: "再见",
        },
      ],
      Conversational: [
        {
          question: 'What does "谢谢" mean in Mandarin?',
          options: ["Thank you", "Goodbye", "Hello"],
          correctAnswer: "Thank you",
        },
        {
          question: 'How do you say "Good morning" in Mandarin?',
          options: ["早上好", "晚上好", "再见"],
          correctAnswer: "早上好",
        },
        {
          question: 'What is "Yes" in Mandarin?',
          options: ["是", "否", "谢谢"],
          correctAnswer: "是",
        },
      ],
      Intermediate: [
        {
          question: 'How do you say "I don’t understand" in Mandarin?',
          options: ["我不明白", "我很好", "你好吗"],
          correctAnswer: "我不明白",
        },
        {
          question: 'Translate "Where is the bathroom?" to Mandarin.',
          options: ["洗手间在哪里？", "你好吗？", "我很好"],
          correctAnswer: "洗手间在哪里？",
        },
        {
          question: 'How do you say "I would like to buy this" in Mandarin?',
          options: ["我想买这个", "谢谢", "再见"],
          correctAnswer: "我想买这个",
        },
      ],
    },
    French: {
      New: [
        {
          question: 'What is the word for "Hello" in French?',
          options: ["Bonjour", "Merci", "Au revoir"],
          correctAnswer: "Bonjour",
        },
        {
          question: 'What is the word for "Thank you" in French?',
          options: ["Merci", "Bonjour", "Salut"],
          correctAnswer: "Merci",
        },
        {
          question: 'What is the word for "Goodbye" in French?',
          options: ["Au revoir", "Salut", "Merci"],
          correctAnswer: "Au revoir",
        },
      ],
      Conversational: [
        {
          question: 'Translate "Good morning" to French.',
          options: ["Bonjour", "Bonne nuit", "Salut"],
          correctAnswer: "Bonjour",
        },
        {
          question: 'What does "Merci" mean in French?',
          options: ["Thank you", "Please", "Hello"],
          correctAnswer: "Thank you",
        },
        {
          question: 'How do you say "Good evening" in French?',
          options: ["Bonsoir", "Bonne nuit", "Salut"],
          correctAnswer: "Bonsoir",
        },
      ],
      Intermediate: [
        {
          question: 'How do you say "Where is the bathroom?" in French?',
          options: [
            "Où est la salle de bain?",
            "Comment ça va?",
            "Je suis fatigué",
          ],
          correctAnswer: "Où est la salle de bain?",
        },
        {
          question: 'Translate "I would like a coffee" to French.',
          options: ["Je voudrais un café", "Merci beaucoup", "Bonjour"],
          correctAnswer: "Je voudrais un café",
        },
        {
          question: 'How do you say "I’m sorry" in French?',
          options: ["Je suis désolé", "Merci", "Bonjour"],
          correctAnswer: "Je suis désolé",
        },
      ],
    },
    Spanish: {
      New: [
        {
          question: 'What is the word for "Hello" in Spanish?',
          options: ["Hola", "Gracias", "Adiós"],
          correctAnswer: "Hola",
        },
        {
          question: 'What is the word for "Thank you" in Spanish?',
          options: ["Gracias", "Hola", "Adiós"],
          correctAnswer: "Gracias",
        },
        {
          question: 'What is the word for "Goodbye" in Spanish?',
          options: ["Adiós", "Hola", "Gracias"],
          correctAnswer: "Adiós",
        },
      ],
      Conversational: [
        {
          question: 'Translate "Good morning" to Spanish.',
          options: ["Buenos días", "Buenas noches", "Hola"],
          correctAnswer: "Buenos días",
        },
        {
          question: 'What does "Gracias" mean in Spanish?',
          options: ["Thank you", "Please", "Hello"],
          correctAnswer: "Thank you",
        },
        {
          question: 'How do you say "Good evening" in Spanish?',
          options: ["Buenas tardes", "Buenas noches", "Hola"],
          correctAnswer: "Buenas tardes",
        },
      ],
      Intermediate: [
        {
          question: 'How do you say "Where is the bathroom?" in Spanish?',
          options: ["¿Dónde está el baño?", "¿Cómo estás?", "Estoy cansado"],
          correctAnswer: "¿Dónde está el baño?",
        },
        {
          question: 'Translate "I would like a coffee" to Spanish.',
          options: ["Quisiera un café", "Gracias", "Buenos días"],
          correctAnswer: "Quisiera un café",
        },
        {
          question: 'How do you say "I’m sorry" in Spanish?',
          options: ["Lo siento", "Gracias", "Hola"],
          correctAnswer: "Lo siento",
        },
      ],
    },
  };

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setStep(2);
  };

  const handleProficiencySelect = (selectedProficiency) => {
    setProficiency(selectedProficiency);
    setStep(3);
  };

  const handleAnswerSelect = (questionIndex, answer) => {
    setTestAnswers({ ...testAnswers, [questionIndex]: answer });
  };

  const evaluateTest = () => {
    const questions = testData[language][proficiency];
    let correctCount = 0;

    questions.forEach((question, index) => {
      if (testAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });

    const score = (correctCount / questions.length) * 100;
    if (score >= 80) {
      setTestPassed(true);
      setStep(4);
    } else {
      alert("Test not passed. Please try again.");
      setTestAnswers({});
      setStep(2); // Reset to proficiency selection if the test is not passed
    }
  };

  const handleBackgroundSelect = (selectedBackground) => {
    setBackground(selectedBackground);
    setStep(5);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        {step === 1 && (
          <Col md={8}>
            <Card className="p-4 shadow-sm">
              <Card.Body>
                <h2 className="text-center mb-4">
                  What is the language you want to learn?
                </h2>
                <div className="d-flex justify-content-around">
                  <Button
                    variant="outline-primary"
                    onClick={() => handleLanguageSelect("Mandarin")}
                  >
                    Mandarin
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => handleLanguageSelect("French")}
                  >
                    French
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => handleLanguageSelect("Spanish")}
                  >
                    Spanish
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        )}

        {step === 2 && (
          <Col md={8}>
            <Card className="p-4 shadow-sm">
              <Card.Body>
                <h2 className="text-center mb-4">
                  What is your proficiency in {language}?
                </h2>
                <div className="d-flex justify-content-around flex-wrap">
                  <Button
                    variant="outline-success"
                    onClick={() => handleProficiencySelect("New")}
                  >
                    I'm new to the language
                  </Button>
                  <Button
                    variant="outline-success"
                    onClick={() => handleProficiencySelect("Conversational")}
                  >
                    I have a few conversational words
                  </Button>
                  <Button
                    variant="outline-success"
                    onClick={() => handleProficiencySelect("Intermediate")}
                  >
                    I can hold a conversation
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        )}

        {step === 3 && (
          <Col md={8}>
            <Card className="p-4 shadow-sm">
              <Card.Body>
                <h2 className="text-center mb-4">
                  Answer the following questions to test your knowledge:
                </h2>
                {testData[language][proficiency].map((question, index) => (
                  <Form.Group key={index} className="mb-4">
                    <Form.Label>{question.question}</Form.Label>
                    <div>
                      {question.options.map((option, i) => (
                        <Form.Check
                          key={i}
                          type="radio"
                          name={`question-${index}`}
                          label={option}
                          value={option}
                          onChange={() => handleAnswerSelect(index, option)}
                        />
                      ))}
                    </div>
                  </Form.Group>
                ))}
                <Button variant="primary" onClick={evaluateTest}>
                  Submit Answers
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )}

        {step === 4 && testPassed && (
          <Col md={8}>
            <Card className="p-4 shadow-sm">
              <Card.Body>
                <h2 className="text-center mb-4">Congratulations!</h2>
                <p className="text-center">You have passed the test!</p>
                <Button variant="success" onClick={() => setStep(5)}>
                  Select Your Learning Background
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )}

        {step === 5 && (
          <Col md={8}>
            <Card className="p-4 shadow-sm">
              <Card.Body>
                <h2 className="text-center mb-4">
                  Choose your learning background:
                </h2>
                <div className="d-flex justify-content-around flex-wrap">
                  <Button
                    variant="outline-info"
                    onClick={() =>
                      handleBackgroundSelect("Bilingual Immersion School")
                    }
                  >
                    Bilingual Immersion School
                  </Button>
                  <Button
                    variant="outline-info"
                    onClick={() =>
                      handleBackgroundSelect("Private Lessons/Tutoring")
                    }
                  >
                    Private Lessons/Tutoring
                  </Button>
                  <Button
                    variant="outline-info"
                    onClick={() => handleBackgroundSelect("Self-Study")}
                  >
                    Self-Study
                  </Button>
                  <Button
                    variant="outline-info"
                    onClick={() => handleBackgroundSelect("Work")}
                  >
                    Work
                  </Button>
                  <Button
                    variant="outline-info"
                    onClick={() => handleBackgroundSelect("Leisure")}
                  >
                    Leisure
                  </Button>
                </div>
                {background && <Avatar background={background} />}
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Dashboard;
