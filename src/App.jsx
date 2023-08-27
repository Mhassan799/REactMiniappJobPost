import React from 'react'

import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './components/Home/Home'
import Room from './components/Home/Room/Room'
import Login from './components/Login/Login'
import Singup from './components/Singup/Singup'
import Jobpost from './components/Jobpost/Jobpost'
import Navbar from './components/NavBar/Navbar'
// import PostJob from '../../postJobB-master/model/PostJob'
import Posts from '../src/components/Posts/Posts'
import GetUser from './components/GetUsers/GetUser'
// import Jobpost from './components/Jobpost/Jobpost'


const App = () => {
  return (
    <>  
  
   <BrowserRouter>
   
    <Navbar/>
   <Routes>
   <Route path="/" element={<Home/>}></Route>
   
   <Route path="users/deshboard" element={<GetUser/>}></Route>
    
   <Route path="jobs/deshboard" element={<Posts/>}></Route>
    <Route path="/singup" element={<Singup />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/jobpost" element={<Jobpost />}></Route>
   </Routes>
   </BrowserRouter>
   </>

  
  )
}

export default App