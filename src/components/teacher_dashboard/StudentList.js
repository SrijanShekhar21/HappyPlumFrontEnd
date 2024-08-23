import React, { useEffect, useState } from 'react'
import { MANAGE_ALL_STUDENTS__GET } from '../../api/server';
import { getRequest } from '../../api/api';
import { FaEye, FaFilePdf } from 'react-icons/fa';
import { Container, Form, FormControl, Table } from 'react-bootstrap';

function StudentList() {
    const [studentList, setStudentList] = useState([]);
    //state to manage searched data
    const [searchApiData, setSearchApiData] = useState([]);
 
    //state to manage search value
    const [filterVal, setFilterVal] = useState("");

    const [filterData, setFilterData] = useState("");
    console.log("filterdata",filterData)
    // function to handle filter data
    const handleFilter = (e) => {
        if (e.target.value === "") {
            setStudentList(searchApiData);
        } else {
            const filterResult = searchApiData.filter((item) => {
                const searchValue = e.target.value.toLowerCase();
                return Object.values(item).some((value) => {
                    if (typeof value === "string" || typeof value === "number") {
                        const itemValue = String(value).toLowerCase();
                        return itemValue.includes(searchValue);
                    }
                    return false;
                });
            });
            setStudentList(filterResult);
        }
        setFilterVal(e.target.value);
    };
    const allStudentView = async () => {
        // console.log("object id", id);
        try {
            //   if(types?._id){let res = await getRequest(
            if (true) {
                let res = await getRequest(
                    MANAGE_ALL_STUDENTS__GET,
                    ""
                );
                if (res) {
                    setStudentList(res.data);
                    setSearchApiData(res.data);
                    console.log("asdfghjkljhdfgh", res.data)
                }
            }


        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error here or display an error message to the user
        }
    };

    useEffect(() => {
        const filteredData = searchApiData?.filter((item) =>
          item.fullName.toLowerCase().includes(filterData.toLowerCase())
        );
        setStudentList(filteredData);
      }, [filterData, searchApiData]);

    React.useEffect(() => {
        allStudentView();
    }, []);
    //   }, [types?._id]);
    return (
        <Container>
            {/* <InputGroup className="mb-3" style={{ background: "white", margin: "0 1rem" }}> */}
            <FormControl
                placeholder="Search by name and ID"
                value={filterVal}
                onChange={(e) => handleFilter(e)}
                aria-label="Search by name and ID"
            />
            {/* <InputGroup.Append>
        <Button variant="outline-secondary">
          <Search />
        </Button>
      </InputGroup.Append> */}
            {/* </InputGroup> */}

            <Form.Group controlId="studentName">
                <Form.Label>Student Name</Form.Label>

                <Form.Control
                    required
                    as="select"
                    name="studentName"
                    onChange={(e)=>setFilterData(e.target.value)}
                >
                    <option value="">{"select one option"}</option>
                    <option
                        value={"Nina G"}
                    >
                        Nina G
                    </option>
                    <option
                        value={"Suresh S"}
                    >
                        Suresh S
                    </option>
                </Form.Control>
            </Form.Group>
            <h2>Student List </h2>
            <Table striped bordered hover style={{ backgroundColor: "#7335B7", color: "#ffffff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}>
                {/* <thead> */}
                <tr>
                    <th>S.No.</th>
                    <th>Student Name</th>
                    <th>Email</th>
                </tr>
                {/* </thead> */}
                <tbody>

                    {
                        studentList && studentList?.length > 0 ? (
                            studentList?.map((list, index) => (
                                <tr key={list.id}>
                                    <td>{index + 1}</td>
                                    <td>{list.fullName}</td>
                                    <td>{list.email}</td>
                                    <td>
                                        {/* <button  className='bg-info text-light' type='button' onClick={()=>navigate('/dashboard/test-assessment/result', { state: { list } })} ><FaEye/> View</button> */}
                                        {/* <PDFDownloadLink
                                      document={
                                        <ResultPdf list={list} />
                                      }
                                    >
                               <button className='bg-danger text-light'>
                               <FaFilePdf/> Download</button>
                                  
                                    </PDFDownloadLink> */}
                                    </td>

                                </tr>
                            ))
                        ) :
                            (
                                null
                            )
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default StudentList