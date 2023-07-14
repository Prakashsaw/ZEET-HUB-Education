import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Services from "./pages/Services/Services";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import LoginStudent from "./pages/Student/LoginStudent";
import RegisterStudent from "./pages/Student/RegisterStudent";
import StudentDashboard from "./pages/Student/StudentDashboard";
import LoginSchool from "./pages/School/LoginSchool";
import RegisterSchool from "./pages/School/RegisterSchool";
import ContentCreatorDashBoard from "./pages/ContentCreator/ContentCreatorDashBoard";
import LoginContentCreator from "./pages/ContentCreator/LoginContentCreator";
import RegisterContentCreator from "./pages/ContentCreator/RegisterContentCreator";
import UploadVideos from "./pages/ContentCreator/UploadVideos";
import AdminDashBoard from "./pages/ContentModerator/AdminDashBoard";
import LoginAdmin from "./pages/ContentModerator/LoginAdmin";



function App() {

  return (
    <>
      <BrowserRouter>

        <NavBar />
        {/* <Home/> */}
        {/* <Services /> */}
        {/* <LoginStudent/> */}
        {/* <RegisterStudent/> */}
        <StudentDashboard />
        {/* <br/> */}

        {/* <LoginSchool/>
        <RegisterSchool/>
        <br/>

        <ContentCreatorDashBoard/>
        <LoginContentCreator/>
        <RegisterContentCreator/>
        <UploadVideos/>
        <br/>

        <AdminDashBoard/>
        <LoginAdmin/> */}

        <Routes>
          {/* <Route path="/" exact component={Home}></Route> */}
          {/* <Route path="/services" component={Services}></Route> */}
          {/* <Route path="/signup" component={Signup}></Route>
          <Route path="/marketing" component={Marketing}></Route>
          <Route path="/development" component={Development}></Route>
          <Route path="/design" component={Design}></Route>
          <Route path="/consulting" component={Consulting}></Route> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
