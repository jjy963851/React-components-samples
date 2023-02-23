import React from 'react'
import Clock from './practice/Clock'
import Library from './practice/Library'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Layout from './practice/Pages/Layout';
import Home from './practice/Pages/Home';
import Blogs from './practice/Pages/Blogs';
import CommentList from './Chapter.05/CommentList';
import Count from './Chapter.05/Chapter.07/Count';
import Measure from './Chapter.05/Chapter.07/Measure';
import Accomodate from './Chapter.08/Accomodate';
import ConfirmButton from './Chapter.09/ConfirmButton';
import LoginControl from './Chapter.09/LoginControl';
import ToolBar from './Chapter.10/ToolBar';
import LandingPage from './Chapter.10/LandingPage';
import AttendanceBook from './Chapter.10/Chapter.11/AttendanceBook';
import NameForm from './Chapter.11/NameForm';
import TemparatureInput from './Chapter.12/TemparatureInput';
import Calculator from './Chapter.12/Calculator';
import WelcomeDialog from './Chapter.13/WelcomeDialog';
import FancyBorder from './Chapter.13/FancyBorder';
import ProfileCard from './Chapter.13/ProfileCard';
import MainContent from './Chapter.14/MainContent';
import ThemeContext from './Chapter.14/ThemeContext';
import DarkOrLight from './Chapter.14/DarkOrLight';
import MainPage from './Style/MainPage';
import Blocks from './Chapter.15/Blocks';

function App() {
  return (
    <BrowserRouter>
    <header>
      <h1>hello world</h1>
    </header>
    <nav>
      <NavLink to ="">Home</NavLink>
      <NavLink to="Blogs">blogs</NavLink>
    </nav>
    <Routes>
      <Route path = "Blogs" element = {<Blogs/>}/>

    </Routes>
       {/* <CommentList/>
      <Count/>
      <Measure/>
      <Accomodate/>
      <ConfirmButton/>
      <LoginControl/>
      <LandingPage/>
      <AttendanceBook/>
      <NameForm/>
      <Calculator/> 
      <WelcomeDialog/>
      <ProfileCard/>
     <DarkOrLight/>*/}
     <MainPage/>
     <Blocks/>
    </BrowserRouter>
  )
}

export default App


