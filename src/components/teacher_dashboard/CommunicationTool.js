import React, { useState } from 'react'
import { MANAGE_PROFILES_GET } from '../../api/server';
import { Button, Container, Table } from 'react-bootstrap';
import { getRequest } from '../../api/api';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
function CommunicationTool() {
  const [profileList, setProfileList] = useState([]);

  const [types, setTypes] = useState({});
  const allProfilesView = async () => {
    // console.log("object id", id);
    try {
      if(types?._id){let res = await getRequest(
        MANAGE_PROFILES_GET,
        ""
      );
      if (res) {
        setProfileList(res.data);
        console.log("asdfghjkljhdfgh",res.data)
      }}
      
     
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error here or display an error message to the user
    }
  };

  React.useEffect(() => {
    const auth = sessionStorage.getItem("user");
    if (auth) {
      const myObject = JSON.parse(auth);
      // Now you can use the object
      setTypes(myObject);
      // setAdmintype(myObject);
    }
  }, []);

  React.useEffect(() => {
    allProfilesView();
  }, [types?._id]);
  return (
    <> 
         <Container>
{/* 
    <Button variant="primary" onClick={handleShow}>
        <FaPlusCircle/>Do Test/Assessment 
      </Button> */}

      <h2>Teacher to Parent Communication </h2>
      <Table striped bordered hover style={{ backgroundColor: "#7335B7",color:"#ffffff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)"  }}>
        {/* <thead> */}
          <tr>
            <th>S.No.</th>
            <th>Parent Name</th>
            <th>Parent Email</th>
            <th>Message Mode</th>
          </tr>
        {/* </thead> */}
        <tbody>
          
        {
        profileList?.filter(list => list.type === "Parent").length > 0 ? (
          profileList?.filter(list => list.type === "Parent").map((list, index) => (
    <tr key={list._id}>
      <td>{index + 1}</td>
      <td>{list.fullName}</td>
      <td>{list.email}</td>
      <td><Button
      as="a"
      href={`https://api.whatsapp.com/send?phone=${"9701075876"}`} // Make sure to use 'phone' instead of 'email' for WhatsApp
      target="_blank"
      variant="link"
      style={{textDecoration: 'none' }}
    >
      <FaWhatsapp style={{ color: 'green', fontSize: '24px' }} />
    </Button>
    <Button
      as="a"
      href={`mailto:${list.email}`}
      variant="link"
      style={{ padding: '10px', textDecoration: 'none' }}
    >
      <SiGmail style={{ color: 'red', fontSize: '24px' }} />
    </Button>
    </td>
    </tr>
  ))
) : 
(
  <tr>
    <td colSpan="4" align="center"><h1>No Parent Details found</h1></td>
  </tr>
)
}
        </tbody>
      </Table>

      
      <h2>Teacher to Student Communication </h2>
      <Table striped bordered hover style={{ backgroundColor: "#7335B7",color:"#ffffff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)"  }}>
        {/* <thead> */}
          <tr>
            <th>S.No.</th>
            <th>Student Name</th>
            <th>Student Email</th>
            <th>Message Mode</th>
          </tr>
        {/* </thead> */}
        <tbody>
          
        {
        profileList?.filter(list => list.type === "Student").length > 0 ? (
          profileList?.filter(list => list.type === "Student").map((list, index) => (
    <tr key={list._id}>
      <td>{index + 1}</td>
      <td>{list.fullName}</td>
      <td>{list.email}</td>
      <td><Button
      as="a"
      // href={`https://api.whatsapp.com/send?phone=${"9701075876"}`} // Make sure to use 'phone' instead of 'email' for WhatsApp
      href={`https://api.whatsapp.com/send?phone=${"9701075876"}&text=${encodeURIComponent("hi ramesh")}`}
      target="_blank"
      variant="link"
      style={{textDecoration: 'none',padding: '10px' }}
    >
      <FaWhatsapp style={{ color: 'green', fontSize: '24px' }} />
    </Button>
    <Button
      as="a"
      href={`mailto:${list.email}`}
      // href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
     
      variant="link"
      style={{ textDecoration: 'none' }}
    >
      <SiGmail style={{ color: 'red', fontSize: '24px' }} />
    </Button>
    <Button
      type="button"
      
      style={{ textDecoration: 'none' }}
    >
      Feedback
    </Button>
    </td>
      
    </tr>
  ))
) : 
(
  <tr>
    <td colSpan="4" align="center"><h1>No Student Details found</h1></td>
  </tr>
)
}
        </tbody>
      </Table>
    </Container>
  </>
  )
}

export default CommunicationTool