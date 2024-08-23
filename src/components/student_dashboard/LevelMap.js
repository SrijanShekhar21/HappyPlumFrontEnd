import React, { useState } from 'react';
import { Badge, Image } from 'react-bootstrap';
import { MANAGE_TEST_ASSESSMENT_GET } from '../../api/server';
import { getRequestById } from '../../api/api';

const LevelMap = () => {

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
  // const levels = [
  //   { id: 1, name: '1.1', complete: true },
  //   { id: 2, name: '1.2', complete: true },
  //   { id: 3, name: '1.3', complete: true   },
  //   { id: 4, name: '1.4', complete: false },
  // ];

  // // Reverse the array and find the index of the first completed true value
  // const reversedLevels = [...levels].reverse();
  // const lastCompletedIndex = reversedLevels.findIndex(level => level.complete);

//   // Calculate the original index of the last completed level
//   const originalIndex = lastCompletedIndex >= 0 ? levels.length - 1 - lastCompletedIndex : -1;
// console.log("vbcvncvn",lastCompletedIndex)
  return (
    <ul>
      {testAssessmentList.map((item, index) => (
        <ui key={item.id}>
          <h1><Badge pill className="d-inline-flex align-items-center">Level : 1.1</Badge>
          {item.percentage>="95.0%" 
          // && index === originalIndex
           && 
          (
            // <div>
            //   <img src={require("../images/elephant.jpg")} alt={`Image for ${level.name}`} style={{width:"50px"}}/>
            // </div>
            // <Badge pill className="d-inline-flex align-items-center">
            <Image src={require("../../images/elephant.jpg")} alt="" roundedCircle className="mr-20 mb-0" width={50} height={50} />
            // {/* <p className="mx-2 mb-0"><h4>Level : {level.name}</h4></p> */}
        //   </Badge>
          )}</h1>
        </ui>
      ))}
    </ul>
  );
};

export default LevelMap;
