// // import React from 'react'

// // function MainLayout() {
// //   return (
// //     <div>MainLayout</div>
// //   )
// // }

// // export default MainLayout

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import logo from "../images/logo.PNG";
// import { Outlet } from 'react-router-dom';
// import { FaUser, FaBell, FaCog, FaEllipsisV } from 'react-icons/fa';
// function MainLayout() {
//   return (
//     <>
//       {[false

//       ].map((expand) => (
//         <Navbar key={expand} expand={expand} className="color-light mb-3" style={{ backgroundColor: "#7335b7",color:"#ffffff"}}>
//           <Container fluid >
//             <Navbar.Brand href="#"> <h4 className='text-light'>
//             <img
//               alt=""
//               src={logo}
//               width="30"
//               height="30"
//               className="d-inline-block align-top"
//             />{' '}
//            Happy Plum{' '}
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='text-light'/></h4>
//           </Navbar.Brand>
//           <Form className="d-flex">
//       <Button className='rounded-circle mx-2' style={{ backgroundColor: '#7335b7' }}>
//         <FaUser />
//       </Button>
//       <Button className='rounded-circle mx-2' style={{ backgroundColor: '#7335b7' }}>
//         <FaBell />
//       </Button>
//       <Button className='rounded-circle mx-2' style={{ backgroundColor: '#7335b7' }}>
//         <FaCog />
//       </Button>
//       <Button className='rounded-circle mx-2 d-lg-none' style={{ backgroundColor: '#7335b7' }}>
//         <FaEllipsisV  />
//       </Button>
//     </Form>
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="start"
//               style={{ backgroundColor: "#7335b7",color:"#ffffff"}}
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                 <img
//               alt=""
//               src={logo}
//               width="30"
//               height="30"
//               className="d-inline-block align-top"
//             />{' '}
//             Happy Plum
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <Nav.Link href="/dashboard">Dashboard</Nav.Link>
//                   <Nav.Link href="#action2">Link</Nav.Link>
//                   <NavDropdown
//                     title="Dropdown"
//                     id={`offcanvasNavbarDropdown-expand-${expand}`}
//                   >
//                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action4">
//                       Another action
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action5">
//                       Something else here
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </Nav>
//                 {/* <Form className="d-flex">
//                   <Form.Control
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form> */}
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//       <Outlet/>
//     </>
//   );
// }

// export default MainLayout;

import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Badge,
  Button,
  Collapse,
  Image,
} from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaBell,
  FaEnvelope,
  FaUser,
  FaCar,
  FaUsers,
  FaBook,
  FaCaretDown,
  FaTachometerAlt,
  FaDog,
  FaChevronUp,
  FaChevronDown,
  FaBuilding,
  FaClipboardCheck,
  FaComment,
  FaPlus,
  FaCalendarPlus,
  FaPen,
  FaDatabase,
  FaFileAlt,
  FaEye,
  FaChartLine,
  FaBookOpen,
  FaRoute,
  FaLightbulb,
  FaCog,
  FaGraduationCap,
  FaFileArchive,
  FaPencilAlt,
  FaMountain,
  FaGamepad,
  FaHandshake,
  FaStar,
  FaClipboardList,
  FaRobot,
  FaCheckSquare,
  FaFilter,
  FaTheaterMasks,
  FaBookmark,
  FaFolder,
  FaBullseye,
  FaGlobe,
  FaFile,
  FaListAlt,
  FaSitemap,
  FaCommentDots,
  FaTrophy,
  FaMapMarker,
  FaCalendarAlt,
  FaPaperPlane,
  FaLifeRing,
  FaHeadset,
  FaUserCheck,
  FaChartBar,
  FaTasks,
  FaThumbsUp,
  FaHandPaper,
  FaHandPointDown,
  FaEllipsisV,
} from "react-icons/fa";
import Logo from "../images/logo.jpeg";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const MainLayout = (props) => {
  const [types, setTypes] = useState({});
  const { user } = useSelector((state) => state.LoginReducer);
  console.log("gfdgtdhgfhdthhyfjyyd", user);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCollapse, setShowCollapse] = useState(false);
  const handleToggle1 = () => setOpen1(!open1);
  const handleToggle2 = () => setOpen2(!open2);
  const handleToggle3 = () => setOpen3(!open3);
  const handleToggle4 = () => setOpen4(!open4);
  const handleToggle5 = () => setOpen5(!open5);
  const handleToggle6 = () => setOpen6(!open6);
  const handleToggle7 = () => setOpen7(!open7);
  const handleToggle = () => setOpen(!open);
  const handleDropdownToggle = () => setShowDropdown(!showDropdown);
  const handleCollapseToggle = () => setShowCollapse(!showCollapse);

  const logout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  const [showNestedList, setShowNestedList] = useState(false);

  const handleToggleNestedList = () => {
    setShowNestedList(!showNestedList);
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
  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className="w-100"
        style={{ backgroundColor: "#7335b7" }}
      >
        <Container fluid>
          <Navbar.Brand href="#" className="text-light">
            <img
              src={Logo}
              alt="Logo"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <strong>Happy Plum Language Learning</strong>
          </Navbar.Brand>
          <Button
            variant="primary"
            onClick={handleToggle}
            className="me-2 bg-info"
          >
            <FaBars />
          </Button>

          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <FaEllipsisV />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand
              href="#"
              className="text-light d-flex align-items-center"
            >
              <span>Hi! Welcome to</span>
              <strong className="px-2"> {user?.fullName}</strong>
            </Navbar.Brand>
            <Nav className="ms-auto">
              {/* <Nav.Link href="#">
              <Badge pill bg="danger"><FaEnvelope />4</Badge>

            </Nav.Link>
            <Nav.Link href="#">
              <Badge pill bg="danger"><FaBell />17</Badge>

            </Nav.Link> */}
              <Nav.Link href="#">
                <Badge pill className="d-inline-flex align-items-center">
                  <Image
                    src={Logo}
                    alt=""
                    roundedCircle
                    className="mr-2 mb-0"
                    width={30}
                    height={30}
                  />
                  <p className="mx-2 mb-0">{types?.email}</p>
                </Badge>
              </Nav.Link>

              <NavDropdown
                title={
                  <>
                    <Badge pill className="d-inline-flex align-items-center">
                      <h1
                        roundedCircle
                        className="mr-2 py-2"
                        width={30}
                        height={30}
                      />
                      <FaCog />
                      Settings
                    </Badge>{" "}
                  </>
                }
                id="collasible-nav-dropdown"
                align="end"
              >
                <NavDropdown.Item
                  onClick={() => navigate("/dashboard/profile")}
                >
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#">My Account</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={logout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex h-100 py-5">
        <div
          className={`sidebar text-white ${open ? "open" : "closed"} `}
          style={{
            backgroundColor: "#7335b7",
            minHeight: "100vh",
            width: `${open ? "22%" : "2%"}`,
          }}
        >
          <Nav className="flex-column py-3" style={{ position: "fixed" }}>
            <Nav.Link
              onClick={() => navigate("/dashboard")}
              className="text-white d-flex align-items-center"
            >
              <FaTachometerAlt className="me-2" />
              <h5>{open && `${types?.type} Dashboard`}</h5>
            </Nav.Link>
            {types?.type === "Student" ? (
              <>
                <Nav.Item>
                  <Nav.Link
                    onClick={() => navigate("/dashboard")}
                    className="text-white d-flex align-items-center"
                  >
                    <FaTachometerAlt className="me-2" />
                    {open && "Home"}
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigate("/dashboard/homework")}
                    className="text-white d-flex align-items-center"
                  >
                    <FaBook className="me-2" />
                    {open && "Homework"}
                  </Nav.Link>

                  <Nav.Link
                    onClick={() => navigate("/dashboard/rubric")}
                    className="text-white d-flex align-items-center"
                  >
                    <FaCheckSquare className="me-2" />
                    {open && "Rubric"}
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigate("/dashboard/real-life-scenario")}
                    className="text-white d-flex align-items-center"
                  >
                    <FaGlobe className="me-2" />
                    {open && "Real Life Scenario"}
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigate("/dashboard/lessons")}
                    className="text-white d-flex align-items-center"
                  >
                    <FaBookOpen className="me-2" />
                    {open && "Lessons"}
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigate("/dashboard/goal")}
                    className="text-white d-flex align-items-center"
                  >
                    <FaBullseye className="me-2" />
                    {open && "Goal"}
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigate("/dashboard/student-curriculum")}
                    className="text-white d-flex align-items-center"
                  >
                    <FaBullseye className="me-2" />
                    {open && "Curriculum"}
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigate("/dashboard/student-chat")}
                    className="text-white d-flex align-items-center"
                  >
                    <FaBullseye className="me-2" />
                    {open && "Message"}
                  </Nav.Link>

                  <Nav.Link
                    onClick={() => navigate("/dashboard/student-performance-stats")}
                    className="text-white d-flex align-items-center"
                  >
                    <FaBullseye className="me-2" />
                    {open && "Performance"}
                  </Nav.Link>

                  <Nav.Link
                    onClick={() => navigate("/dashboard/review-sheet")}
                    className="text-white d-flex align-items-center"
                  >
                    <FaStar className="me-2" />
                    {open && "Review Sheet"}
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigate("/dashboard/cultural-highlights")}
                    className="text-white d-flex align-items-center"
                  >
                    <FaTheaterMasks className="me-2" />
                    {open && "Cultural Highlights"}
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigate("/dashboard/flash-cards")}
                    className="text-white d-flex align-items-center"
                  >
                    <FaBookmark className="me-2" />
                    {open && "Flash cards"}
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigate("/dashboard/Test-assessments")}
                    className="text-white d-flex align-items-center"
                  >
                    <FaClipboardCheck className="me-2" />
                    {open && "Test/Assessment"}
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigate("/dashboard/project")}
                    className="text-white d-flex align-items-center"
                  >
                    <FaFolder className="me-2" />
                    {open && "Project"}
                  </Nav.Link>
                </Nav.Item>
              </>
            ) : types?.type === "Teacher" ? (
              <Nav.Item>
                <Nav.Link
                  onClick={() => navigate("/dashboard")}
                  className="text-white d-flex align-items-center"
                >
                  <FaTachometerAlt className="me-2" />
                  {open && "Home"}
                </Nav.Link>
                <Nav.Link
                  onClick={handleToggle1}
                  className="text-white d-flex align-items-center"
                >
                  <FaUsers className="me-2" onClick={handleToggle} />
                  {open && (
                    <>
                      {"Classes"} {open1 ? <FaChevronUp /> : <FaChevronDown />}
                    </>
                  )}
                </Nav.Link>
                <Collapse in={open1}>
                  <div className="px-2">
                    <Nav.Link
                      onClick={() => navigate("/dashboard/class-list")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaPen className="me-2" />
                      {open && <>{"Class List"} </>}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/dashboard/class-overview")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaClipboardCheck className="me-2" />
                      {"Class Overview"}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/dashboard/attendance-tracking")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaComment className="me-2" />
                      {"Attendance Tracking"}
                    </Nav.Link>
                  </div>
                </Collapse>
                <Nav.Link
                  onClick={handleToggle2}
                  className="text-white d-flex align-items-center"
                >
                  <FaChartLine className="me-2" onClick={handleToggle} />
                  {open && (
                    <>
                      {"Student"} {open2 ? <FaChevronUp /> : <FaChevronDown />}
                    </>
                  )}
                </Nav.Link>
                <Collapse in={open2}>
                  <div className="px-2">
                    <Nav.Link
                      onClick={() => navigate("/dashboard/student-list")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaTachometerAlt className="me-2" />
                      {"Student List"}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/dashboard/student-profile")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaDatabase className="me-2" />
                      {"Student Profile"}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/dashboard/performance-graphs")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaFileAlt className="me-2" />
                      {"Performance Graphs"}
                    </Nav.Link>
                  </div>
                </Collapse>
                <Nav.Link
                  onClick={handleToggle3}
                  className="text-white d-flex align-items-center"
                >
                  <FaBookOpen className="me-2" onClick={handleToggle} />
                  {open && (
                    <>
                      {"Assignments"}{" "}
                      {open3 ? <FaChevronUp /> : <FaChevronDown />}
                    </>
                  )}
                </Nav.Link>
                <Collapse in={open3}>
                  <div className="px-2">
                    <Nav.Link
                      onClick={() => navigate("/dashboard/assignment-manager")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaRoute className="me-2" />
                      {"Assignment Manager"}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/dashboard/create-assignment")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaLightbulb className="me-2" />
                      {"Create Assignment"}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/dashboard/submission-review")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaCog className="me-2" />
                      {"Submission Review"}
                    </Nav.Link>
                  </div>
                </Collapse>

                <Nav.Link
                  onClick={handleToggle4}
                  className="text-white d-flex align-items-center"
                >
                  <FaBook className="me-2" onClick={handleToggle} />
                  {open && (
                    <>
                      {"Resources"}{" "}
                      {open4 ? <FaChevronUp /> : <FaChevronDown />}
                    </>
                  )}
                </Nav.Link>
                <Collapse in={open4}>
                  <div className="px-2">
                    <Nav.Link
                      onClick={() => navigate("/dashboard/resource-library")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaGraduationCap className="me-2" />
                      {"Resource Library"}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/dashboard/upload-share")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaFileArchive className="me-2" />
                      {"Upload and Share"}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/dashboard/content-creation")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaPencilAlt className="me-2" />
                      {"Content Creation"}
                    </Nav.Link>
                  </div>
                </Collapse>

                <Nav.Link
                  onClick={handleToggle5}
                  className="text-white d-flex align-items-center"
                >
                  <FaMountain className="me-2" onClick={handleToggle} />
                  {open && (
                    <>
                      {"Messages"} {open5 ? <FaChevronUp /> : <FaChevronDown />}
                    </>
                  )}
                </Nav.Link>
                <Collapse in={open5}>
                  <div className="px-2">
                    <Nav.Link
                      onClick={() => navigate("/dashboard/inbox")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaGamepad className="me-2" />
                      {"inbox"}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/dashboard/compose-message")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaHandshake className="me-2" />
                      {"Compose Message"}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/dashboard/group-messages")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaStar className="me-2" />
                      {"Group Messages"}
                    </Nav.Link>
                  </div>
                </Collapse>

                <Nav.Link
                  onClick={handleToggle6}
                  className="text-white d-flex align-items-center"
                >
                  <FaClipboardCheck className="me-2" onClick={handleToggle} />
                  {open && (
                    <>
                      {"Analytics"}{" "}
                      {open6 ? <FaChevronUp /> : <FaChevronDown />}
                    </>
                  )}
                </Nav.Link>
                <Collapse in={open6}>
                  <div className="px-2">
                    <Nav.Link
                      onClick={() =>
                        navigate("/dashboard/performance-overview")
                      }
                      className="text-white d-flex align-items-center"
                    >
                      <FaClipboardList className="me-2" />
                      {"Performance Overview"}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/dashboard/engagement-reports")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaRobot className="me-2" />
                      {"Engagement Reports"}
                    </Nav.Link>
                    {/* <Nav.Link onClick={() => navigate("/dashboard/progress-tracking")} className="text-white d-flex align-items-center">
                      <FaCheckSquare  className="me-2" />
                      {"Progress Tracking"}
                    </Nav.Link> */}
                    <Nav.Link
                      onClick={() => navigate("/dashboard/custom-reports")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaCheckSquare className="me-2" />
                      {"Custom Reports"}
                    </Nav.Link>
                  </div>
                </Collapse>
              </Nav.Item>
            ) : types?.type === "Parent" ? (
              //   (
              //      <Nav.Item>
              //        <Nav.Link onClick={() => navigate("/dashboard")} className="text-white d-flex align-items-center">
              //   <FaTachometerAlt className="me-2" />
              //   {open && "Home"}
              // </Nav.Link>
              //       <Nav.Link onClick={handleToggle1} className="text-white d-flex align-items-center">
              //         <FaChartBar className="me-2" onClick={handleToggle} />
              //         {open && <>{"Progress"} {open1 ? <FaChevronUp /> : <FaChevronDown />}</>}
              //       </Nav.Link>
              //       <Collapse in={open1}>
              //         <div className="px-2">
              //           <Nav.Link onClick={() => navigate("/dashboard/overall-performance")} className="text-white d-flex align-items-center">
              //             <FaFile className="me-2" />
              //             {"Overall Performance"}
              //           </Nav.Link>
              //           <Nav.Link onClick={() => navigate("/dashboard/detailed-reports")} className="text-white d-flex align-items-center">
              //             <FaListAlt className="me-2" />
              //             {"Detailed Reports"}
              //           </Nav.Link>
              //           <Nav.Link onClick={() => navigate("/dashboard/progress-overtime")} className="text-white d-flex align-items-center">
              //             <FaChartLine className="me-2" />
              //             {"Progress Overtime"}
              //           </Nav.Link>
              //           <Nav.Link onClick={() => navigate("/dashboard/strength-improvement")} className="text-white d-flex align-items-center">
              //             <FaChartLine className="me-2" />
              //             {"Strength & Improvement"}
              //           </Nav.Link>
              //         </div>
              //       </Collapse>
              //       <Nav.Link onClick={handleToggle2} className="text-white d-flex align-items-center">
              //         <FaBookmark  className="me-2" onClick={handleToggle} />
              //         {open && <>{"Assignments"} {open2 ? <FaChevronUp /> : <FaChevronDown />}</>}
              //       </Nav.Link>
              //       <Collapse in={open2}>
              //         <div className="px-2">
              //           <Nav.Link onClick={() => navigate("/dashboard/assignment-list")} className="text-white d-flex align-items-center">
              //             <FaStar className="me-2" />
              //             {"Assignment List"}
              //           </Nav.Link>
              //           <Nav.Link onClick={() => navigate("/dashboard/submission-status")} className="text-white d-flex align-items-center">
              //             <FaRoute className="me-2" />
              //             {"Submission Status"}
              //           </Nav.Link>
              //           <Nav.Link onClick={() => navigate("/dashboard/teacher-feedback")} className="text-white d-flex align-items-center">
              //             <FaRoute className="me-2" />
              //             {"Teacher Feedback"}
              //           </Nav.Link>
              //         </div>
              //       </Collapse>
              //       <Nav.Link onClick={handleToggle3} className="text-white d-flex align-items-center">
              //         <FaComment className="me-2" onClick={handleToggle} />
              //         {open && <>{"Messages"} {open3 ? <FaChevronUp /> : <FaChevronDown />}</>}
              //       </Nav.Link>
              //       <Collapse in={open3}>
              //         <div className="px-2">
              //           <Nav.Link onClick={() => navigate("/dashboard/inbox")} className="text-white d-flex align-items-center">
              //             <FaCommentDots className="me-2" />
              //             {"Inbox"}
              //           </Nav.Link>
              //           <Nav.Link onClick={() => navigate("/dashboard/compose-message")} className="text-white d-flex align-items-center">
              //             <FaBell className="me-2" />
              //             {"Compose Message"}
              //           </Nav.Link>
              //           <Nav.Link onClick={() => navigate("/dashboard/group-messages")} className="text-white d-flex align-items-center">
              //             <FaBell className="me-2" />
              //             {"Group Messages"}
              //           </Nav.Link>
              //         </div>
              //       </Collapse>

              //       <Nav.Link onClick={handleToggle4} className="text-white d-flex align-items-center">
              //         <FaThumbsUp className="me-2" onClick={handleToggle} />
              //         {open && <>{"Resources"} {open4 ? <FaChevronUp /> : <FaChevronDown />}</>}
              //       </Nav.Link>
              //       <Collapse in={open4}>
              //         <div className="px-2">
              //           <Nav.Link onClick={() => navigate("/dashboard/resource-library")} className="text-white d-flex align-items-center">
              //             <FaTrophy className="me-2" />
              //             {"Resource Library"}
              //           </Nav.Link>
              //           <Nav.Link onClick={() => navigate("/dashboard/recommended-activities")} className="text-white d-flex align-items-center">
              //             <FaLightbulb className="me-2" />
              //             {"Recommended Activities"}
              //           </Nav.Link>
              //           <Nav.Link onClick={() => navigate("/dashboard/parental-guidance")} className="text-white d-flex align-items-center">
              //             <FaLightbulb className="me-2" />
              //             {"Parental Guidance"}
              //           </Nav.Link>
              //         </div>
              //       </Collapse>

              //       <Nav.Link onClick={handleToggle5} className="text-white d-flex align-items-center">
              //         <FaTasks className="me-2" onClick={handleToggle} />
              //         {open && <>{"Calender"} {open5 ? <FaChevronUp /> : <FaChevronDown />}</>}
              //       </Nav.Link>
              //       <Collapse in={open5}>
              //         <div className="px-2">
              //           <Nav.Link onClick={() => navigate("/dashboard/important-dates")} className="text-white d-flex align-items-center">
              //             < FaCalendarAlt className="me-2" />
              //             {"Important Dates"}
              //           </Nav.Link>
              //           <Nav.Link onClick={() => navigate("/dashboard/add-events")} className="text-white d-flex align-items-center">
              //             <FaPaperPlane className="me-2" />
              //             {"Add Events"}
              //           </Nav.Link>
              //           <Nav.Link onClick={() => navigate("/dashboard/personal-calender")} className="text-white d-flex align-items-center">
              //             <FaPaperPlane className="me-2" />
              //             {"Personal Calender"}
              //           </Nav.Link>
              //         </div>
              //       </Collapse>

              //     </Nav.Item>)

              <Nav.Item>
                <Nav.Link
                  onClick={() => navigate("/dashboard")}
                  className="text-white d-flex align-items-center"
                >
                  <FaTachometerAlt className="me-2" />
                  {open && "Home"}
                </Nav.Link>
                <Nav.Link
                  onClick={handleToggle1}
                  className="text-white d-flex align-items-center"
                >
                  <FaChartBar className="me-2" onClick={handleToggle} />
                  {open && (
                    <>
                      {"Overview and Progress Tracking"}{" "}
                      {open1 ? <FaChevronUp /> : <FaChevronDown />}
                    </>
                  )}
                </Nav.Link>
                <Collapse in={open1}>
                  <div className="px-2">
                    <Nav.Link
                      onClick={() => navigate("/dashboard/child-profile")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaFile className="me-2" />
                      {"Child Profile"}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/dashboard/progress-summary")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaListAlt className="me-2" />
                      {"Progress Summary"}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/dashboard/detailed-reports")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaChartLine className="me-2" />
                      {"Detailed Reports"}
                    </Nav.Link>
                  </div>
                </Collapse>
                <Nav.Link
                  onClick={handleToggle2}
                  className="text-white d-flex align-items-center"
                >
                  <FaBookmark className="me-2" onClick={handleToggle} />
                  {open && (
                    <>
                      {"Activity & Performance"}{" "}
                      {open2 ? <FaChevronUp /> : <FaChevronDown />}
                    </>
                  )}
                </Nav.Link>
                <Collapse in={open2}>
                  <div className="px-2">
                    <Nav.Link
                      onClick={() => navigate("/dashboard/recent-activities")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaStar className="me-2" />
                      {"Recent Activities"}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/dashboard/performance-metrics")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaRoute className="me-2" />
                      {"Performance Metrics"}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/dashboard/skill-breakdown")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaRoute className="me-2" />
                      {"Skill Breakdown"}
                    </Nav.Link>
                  </div>
                </Collapse>
                <Nav.Link
                  onClick={handleToggle3}
                  className="text-white d-flex align-items-center"
                >
                  <FaComment className="me-2" onClick={handleToggle} />
                  {open && (
                    <>
                      {"Goal Setting & Monitoring"}{" "}
                      {open3 ? <FaChevronUp /> : <FaChevronDown />}
                    </>
                  )}
                </Nav.Link>
                <Collapse in={open3}>
                  <div className="px-2">
                    <Nav.Link
                      onClick={() => navigate("/dashboard/learning-goals")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaCommentDots className="me-2" />
                      {"Learning Goals"}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() =>
                        navigate("/dashboard/progress-towards-goals")
                      }
                      className="text-white d-flex align-items-center"
                    >
                      <FaBell className="me-2" />
                      {"Progress Towards Goals"}
                    </Nav.Link>
                  </div>
                </Collapse>

                <Nav.Link
                  onClick={handleToggle4}
                  className="text-white d-flex align-items-center"
                >
                  <FaThumbsUp className="me-2" onClick={handleToggle} />
                  {open && (
                    <>
                      {"Communication Tools"}{" "}
                      {open4 ? <FaChevronUp /> : <FaChevronDown />}
                    </>
                  )}
                </Nav.Link>
                <Collapse in={open4}>
                  <div className="px-2">
                    <Nav.Link
                      onClick={() =>
                        navigate("/dashboard/messages-notifications")
                      }
                      className="text-white d-flex align-items-center"
                    >
                      <FaTrophy className="me-2" />
                      {"Messages & Notifications"}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/dashboard/teacher-feedback")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaLightbulb className="me-2" />
                      {"Teacher Feedback"}
                    </Nav.Link>
                  </div>
                </Collapse>

                <Nav.Link
                  onClick={handleToggle5}
                  className="text-white d-flex align-items-center"
                >
                  <FaTasks className="me-2" onClick={handleToggle} />
                  {open && (
                    <>
                      {"Engagement & Motivation"}{" "}
                      {open5 ? <FaChevronUp /> : <FaChevronDown />}
                    </>
                  )}
                </Nav.Link>
                <Collapse in={open5}>
                  <div className="px-2">
                    <Nav.Link
                      onClick={() =>
                        navigate("/dashboard/achievements-rewards")
                      }
                      className="text-white d-flex align-items-center"
                    >
                      <FaCalendarAlt className="me-2" />
                      {"Achievements & Rewards"}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() =>
                        navigate("/dashboard/encouragement-support")
                      }
                      className="text-white d-flex align-items-center"
                    >
                      <FaPaperPlane className="me-2" />
                      {"Encouragement & Support"}
                    </Nav.Link>
                  </div>
                </Collapse>

                <Nav.Link
                  onClick={handleToggle6}
                  className="text-white d-flex align-items-center"
                >
                  <FaTasks className="me-2" onClick={handleToggle} />
                  {open && (
                    <>
                      {"Administrative Tools"}{" "}
                      {open5 ? <FaChevronUp /> : <FaChevronDown />}
                    </>
                  )}
                </Nav.Link>
                <Collapse in={open6}>
                  <div className="px-2">
                    <Nav.Link
                      onClick={() => navigate("/dashboard/account-management")}
                      className="text-white d-flex align-items-center"
                    >
                      <FaCalendarAlt className="me-2" />
                      {"Account Management"}
                    </Nav.Link>
                    <Nav.Link
                      onClick={() =>
                        navigate("/dashboard/subscription-payments")
                      }
                      className="text-white d-flex align-items-center"
                    >
                      <FaPaperPlane className="me-2" />
                      {"Subscription & Payments"}
                    </Nav.Link>
                  </div>
                </Collapse>
              </Nav.Item>
            ) : null}
          </Nav>
        </div>

        <main className="content flex-grow-1 p-0 m-0">
          {/* <div style={{ minHeight: "500px" ,backgroundColor:"blue"}}> */}
          <div style={{ minHeight: "500px" }}>
            <div className="toolbar-spacer" />
            <Outlet />
          </div>
          {/* <Footer/> */}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
