// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import 'chart.js/auto';

// const BarChart = () => {
//     const data = [
//         { level: '1.1', completion: 100 },
//         { level: '1.2', completion: 0 },
//         { level: '1.3', completion: 0},
//         { level: '1.4', completion: 0 }
//       ];
//   const chartData = {
//     labels: data.map(d => `Level ${d.level}`),
//     datasets: [
//       {
//         label: 'Level Prograss',
//         data: data.map(d => d.completion),
//         backgroundColor: 'green',
//         borderColor: 'green',
//         borderWidth: 1
//       }
//     ]
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100
//       }
//     }
//   };

//   return <Bar data={chartData} options={options} />;
// };

// export default  BarChart;
import React, { Fragment, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { MANAGE_TEST_ASSESSMENT_GET } from '../../api/server';
import { getRequestById } from '../../api/api';
const BarChart = () => {
  const [types, setTypes] = useState({});
  const [testAssessmentList, setTestAssessmentList] = useState([]);
  const testAssessmentView = async () => {
    // console.log("object id", id);
    try {
      if(types?._id){
        let res = await getRequestById(
          MANAGE_TEST_ASSESSMENT_GET,
          types?._id,
          ""
        );
        if (res) {
          setTestAssessmentList(res.data);
          console.log("asdfghjkljhdfgh",res.data)
        }
      }
     
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error here or display an error message to the user
    }
  };

  
  React.useEffect(() => {
    testAssessmentView();
  }, [types?._id]);

  React.useEffect(() => {
    const auth = sessionStorage.getItem("user");
    if (auth) {
      const myObject = JSON.parse(auth);
      // Now you can use the object
      setTypes(myObject);
      // setAdmintype(myObject);
    }
  }, []);

    // const data = [
    //         { level: '1.1', completion: true },
    //         { level: '1.2', completion: true },
    //         { level: '1.3', completion: true},
    //         { level: '1.4', completion: false }
    //       ];
    const barStyle = {
      height: `${300}px`,
      width: '100%',
      margin: '0 auto',
      borderRadius: '5px',
      borderColor:"2px solid red"
    };
  
    return (
      <div >
        <Row>
        {testAssessmentList.map((item, index) => (<Fragment key={item.level}>
            <Col>
        <div style={{...barStyle,backgroundColor: `${item.percentage>="95.0%"?"green":""}`}} />
        <h4>Level:1.1</h4> 
        <h6 style={{ marginTop: '5px' }}>{item.percentage>="95.0%" ? 'Completed' : 'Incomplete'}</h6>
        </Col>
        </Fragment>))}
        </Row>
        </div>
    );
  };

  export default  BarChart;



  
