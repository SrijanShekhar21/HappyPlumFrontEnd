import React from 'react';
import { Container,Card} from 'react-bootstrap';
import logo from "../../images/logo.jpeg";
import landing from "../../images/landing.PNG";
const Goal = () => {
  const words = [
    "你 Nǐ (You)",
    "我 Wǒ (I, me)",
    "好 Hǎo (fine/good)",
    "你好 Nǐhǎo (Hello)",
    "再见 Zàijiàn (Goodbye)",
    "妈妈 Māmā (Mom)",
    "爸爸 Bàba (Dad)",
    "哥哥 Gēgē (Older brother)",
    "弟弟 Dìdì (Younger brother)",
    "姐姐 Jiějiě (Older sister)",
    "妹妹 Mèimei (Younger sister)",
    "家 Jiā (Family)",
    "学生 Xuéshēng (Student)",
    "老师 Lǎoshī (Teacher)"
  ];

  const phrases = [
    "你好吗 Nǐ hǎo ma? (How are you?)",
    "我很好 Wǒ hěn hǎo. (I am fine.)",
    "你叫什么名字 Nǐ jiào shénme míngzì? (What is your name?)",
    "我叫 Wǒ jiào… (My name is…)",
    "你几岁 Nǐ jǐ suì? OR 你多大 Nǐ duōdà? (How old are you?)",
    "我…岁 Wǒ___suì. (I am ___ years old.)",
    "你家有几口人 Nǐ jiā yǒu jǐ kǒu rén? (How many people are in your family?)",
    "我家有…口人 Wǒ jiā yǒu.. kǒu rén (My family has .. number of people)",
    "你家里有谁? Nǐ jiā li yǒu shéi? (Who's in your family?)",
    "我家里有… Wǒ jiā li yǒu... (My family has...)"
  ];

  return (<>
  <Container className='p-5 ' style={{width:"80%"}}>
          <Card style={{ border: 'none', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
          <div className="right-content-wrap ">
                <div className="img-wrap">
                  {/* Add style to control image height */}
                  <img src={logo} alt="" className="img-fluid" style={{width:"25%" ,maxHeight: '160px' }} />
                  <img src={landing} alt="" className="img-fluid" style={{ width:"75%" ,maxHeight: '160px' }} />
                </div>
              </div>
      {/* <img src={logoBackground} alt="Login" style={{ maxWidth: '100%',height:"30vh" ,backgroundColor: " #7335b7",}} /> */}
      <Card.Body>
        {/* <Card.Title>Special title treatment</Card.Title> */}
        <Card.Text>
        <h1><strong>LEARNING GOALS 1: Self Introduction</strong></h1>
          <p><strong>Student will be able to hold a short conversation and answer simple questions using these words and phrases:</strong></p>

          <h3>Words</h3>
          {/* <Button>gdrgdthe</Button> */}
          <audio controls>
        <source src={require("../../images/hi.ogg")} type="audio/ogg" />
        {/* <source src="hi.mp3" type="audio/mpeg" /> */}
      </audio>
          <ul>
            {words.map((word, index) => (
              <h2><li key={index}>{word} 
              </li></h2>
            ))}
          </ul>
          <h3>Phrases</h3>
          <ul>
            {phrases.map((phrase, index) => (
              <h2><li key={index}>{phrase}</li></h2>
            ))}
          </ul>
          <h3>Numbers</h3>
          <ul>
            
          <h2> <li>1-10</li></h2>

          </ul>
          <Container className="d-flex justify-content-end">
        <span className=" text-center">
          <h2>&copy; Happy Plum Mandarin Learning 2024</h2>
        </span>
      </Container>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </Container>
</>
    
  );
};

export default Goal;
