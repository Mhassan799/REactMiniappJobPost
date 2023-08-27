import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from 'react-router-dom'
import styles from '../styles/styles.css'


const Navbar = () => {

  let nevigate = useNavigate();

  const logoutHandler = ()=>{
    localStorage.clear();
    
    nevigate('/login');
  }


  return (
    <>
     

     <nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
  <div className="container-fluid ">
    <Link to ="/" className="navbar-brand" href="#">
      <h1>JobPost</h1>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to = "/Jobpost"   className="nav-link " aria-current="page" href="#">
            PostJobs
          </Link>
        </li>
        <li className="nav-item">
        <Link to = "/jobs/deshboard" className="nav-link " aria-current="page" href="#">
            GetJobs
          </Link>
        </li>
        <li className="nav-item">
        <Link to = "/users/deshboard" className="nav-link " aria-current="page" href="#">
            GetUsers
          </Link>
        </li>
       
        
      </ul>
      
        <Link to= "/login" className="btn  button" >
          Login
        </Link>
        <Link to= "/singup" className="btn  button" >
          SignUp
        </Link>
        <Link onClick = {logoutHandler} className="btn  button" >
          LogOut
        </Link>
      
    </div>
  </div>
</nav>

    </>
  );
};

export default Navbar;
