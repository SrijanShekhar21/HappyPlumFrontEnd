import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import HomePage from "./LandingHome";
import Layout from "./Layout";
import MainLayout from "./MainLayout";
import Dashboard from "./student_dashboard/Dashboard";
import Homework from "./student_dashboard/Homework";
import Goal from "./student_dashboard/Goal";
import StudentPerformance from "./student_dashboard/StudentPerformance";
import ReviewSheet from "./student_dashboard/ReviewSheet";
import Rubric from "./student_dashboard/Rubric";
import RealLifeScenario from "./student_dashboard/RealLifeScenario";
import Lessons from "./student_dashboard/Lessons";
import Profile from "./Profile";
import CulturalHighlights from "./student_dashboard/CulturalHighlights";
import FlashCards from "./student_dashboard/FlashCards";
import TestAssessments from "./student_dashboard/TestAssessments";
import Project from "./student_dashboard/Project";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../redux/action";
import Result from "./student_dashboard/ResultForm";
import CommunicationTool from "./teacher_dashboard/CommunicationTool";
import ClassOverview from "./teacher_dashboard/ClassOverview";
import AttendanceTracking from "./teacher_dashboard/AttendanceTracking";
import StudentList from "./teacher_dashboard/StudentList";
import StudentProfile from "./teacher_dashboard/StudentProfile";
import PerformanceGraphs from "./teacher_dashboard/PerformanceGraphs";
import AssignmentManager from "./teacher_dashboard/AssignmentManager";
import CreateAssignment from "./teacher_dashboard/CreateAssignment";
import SubmissionReview from "./teacher_dashboard/SubmissionReview";
import ResourceLibrary from "./teacher_dashboard/ResourceLibrary";
import ContentCreation from "./teacher_dashboard/ContentCreation";
import UploadShare from "./teacher_dashboard/UploadShare";
import Inbox from "./teacher_dashboard/Inbox";
import ComposeMessage from "./teacher_dashboard/ComposeMessage";
import GroupMessages from "./teacher_dashboard/GroupMessages";
import PerformanceOverview from "./teacher_dashboard/PerformanceOverview";
import EngagementReports from "./teacher_dashboard/EngagementReports";
import ProgressTracking from "./teacher_dashboard/ProgressTracking";
import CustomReports from "./teacher_dashboard/CustomReports";
import OverallPerformance from "./parent_dashboard/OverallPerformance";
import DetailedReports from "./parent_dashboard/DetailedReports";
import ProgressOvertime from "./parent_dashboard/ProgressOvertime";
import StrengthImprovement from "./parent_dashboard/StrengthImprovement";
import ProgressReports from "./teacher_dashboard/ProgressReports";
import TeacherHome from "./teacher_dashboard/TeacherHome";
import ClassList from "./teacher_dashboard/ClassList";
import StudentChats from "./student_dashboard/StudentChats";

// import Assignments from "./teacher_dashboard/Communication";
const Routing = () => {
  const [types, setTypes] = useState({});
  const dispatchLogin = useDispatch();
  const [type, setType] = useState();
  const { user } = useSelector((state) => state.LoginReducer);
  // console.log("waesdrgh",user)
  const renderAuth=async()=>{
    const auth = await sessionStorage.getItem("user");
    const token = await sessionStorage.getItem("token");
 
      const auth1 =await JSON.parse(auth);
      const token1 =await JSON.parse(token);
      dispatchLogin({ type: LOGIN, isAuthenticated: true, token:token1,user: auth1});
      // Now you can use the object
      if(token1){
      console.log("myobject", token1)
      }
      
      console.log("myobject",user)


  }


    useEffect(() => {
      renderAuth();
  
    }, [ ]);
    React.useEffect(() => {
      const auth = sessionStorage.getItem("user");
      if (auth) {
        const myObject = JSON.parse(auth);
        // Now you can use the object
        setTypes(myObject);
        // setAdmintype(myObject);
      }
    }, []);


    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Layout/>} >
          <Route index element={<HomePage/>} />
          {/* login page & register */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Route>
          <Route path="/dashboard" element={<MainLayout/>} >
          
          {types?.type==="Student"||user?.type==="Student"?(<>
            <Route index element={<Dashboard/>} />
          <Route path={'/dashboard/homework'} element={<Homework types={types}/>}>
          
          </Route>
          <Route path={'/dashboard/homework/result'} element={<Result/>}/>
          <Route path={'/dashboard/test-assessment/result'} element={<Result/>}/>
          <Route path={'/dashboard/goal'} element={<Goal/>}/>
          <Route path={'/dashboard/student-chat'} element={<StudentChats/>}/>
          <Route path={'/dashboard/student-performance'} element={<StudentPerformance/>}/>
          <Route path={'/dashboard/review-sheet'} element={<ReviewSheet/>}/>
          <Route path={'/dashboard/rubric'} element={<Rubric/>}/>
          <Route path={'/dashboard/real-life-scenario'} element={<RealLifeScenario/>}/>
          <Route path={'/dashboard/lessons'} element={<Lessons/>}/>
          <Route path={'/dashboard/profile'} element={<Profile/>}/>
          <Route path={'/dashboard/cultural-highlights'} element={<CulturalHighlights/>}/>
          <Route path={'/dashboard/flash-cards'} element={<FlashCards/>}/>
          <Route path={'/dashboard/test-assessments'} element={<TestAssessments/>}/>
          <Route path={'/dashboard/project'} element={<Project/>}/>
          </>):types?.type==="Teacher"||user?.type==="Teacher"?(<>
            <Route index element={<TeacherHome/>} />
          {/* class */}
            <Route path={'/dashboard/class-list'} element={<ClassList/>}/>
            <Route path={'/dashboard/class-overview'} element={<ClassOverview/>}/>
            <Route path={'/dashboard/attendance-tracking'} element={<AttendanceTracking/>}/>
        
         {/*student  */}
            <Route path={'/dashboard/student-list'} element={<StudentList/>}/>
            <Route path={'/dashboard/student-profile'} element={<StudentProfile/>}/>
            <Route path={'/dashboard/performance-graphs'} element={<PerformanceGraphs/>}/>
            

           {/*assignment  */}
           <Route path={'/dashboard/assignment-manager'} element={<AssignmentManager types={types}/>}/>
            <Route path={'/dashboard/create-assignment'} element={<CreateAssignment types={types}/>}/>
            <Route path={'/dashboard/submission-review'} element={<SubmissionReview types={types}/>}/>
            
            <Route path={'/dashboard/submission-review/result'} element={<Result/>}/>

            {/*resources  */}
           <Route path={'/dashboard/resource-library'} element={<ResourceLibrary/>}/>
            <Route path={'/dashboard/upload-share'} element={<UploadShare types={types}/>}/>
            <Route path={'/dashboard/content-creation'} element={<ContentCreation types={types}/>}/>

            {/*messages  */}
           <Route path={'/dashboard/inbox'} element={<Inbox types={types}/>}/>
            <Route path={'/dashboard/compose-message'} element={<ComposeMessage types={types}/>}/>
            <Route path={'/dashboard/group-messages'} element={<GroupMessages/>}/>

           {/*Analytics  */}
           <Route path={'/dashboard/performance-overview'} element={<PerformanceOverview/>}/>
            <Route path={'/dashboard/engagement-reports'} element={<EngagementReports/>}/>
            <Route path={'/dashboard/progress-tracking'} element={<ProgressTracking/>}/>
            <Route path={'/dashboard/custom-reports'} element={<CustomReports/>}/>

            {/* parenttttt */}
            {/*progress  */}
           <Route path={'/dashboard/overall-performance'} element={<OverallPerformance/>}/>
            <Route path={'/dashboard/detailed-reports'} element={<DetailedReports/>}/>
            <Route path={'/dashboard/progress-overtime'} element={<ProgressOvertime/>}/>
            <Route path={'/dashboard/strength-improvement'} element={<StrengthImprovement/>}/>
            <Route path={'/dashboard/progress-reports'} element={<ProgressReports/>}/>
             <Route path={'/dashboard/communication-tools'} element={<CommunicationTool/>}/>
           </>)
           
           :null}
          {/* login page & register */}
          {/* <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/> */}
        </Route>
        {/* Absolute route path "/homework" nested under path "/dashboard" is not valid. An absolute child route path must start with the combined path of all its parent routes. */}
        
        </Routes>
        </BrowserRouter>
    </>
  );
};

export default Routing;