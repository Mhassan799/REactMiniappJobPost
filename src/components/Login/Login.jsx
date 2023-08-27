import React,{useState}from 'react'
import axiox from  'axios'
import styles from '../styles/styles.css'
import {Link, useNavigate } from 'react-router-dom'



const Login = () => {
const [email,setEmail] =useState('')
const [password,setPassword] = useState('')

let navigate = useNavigate();

const login = async(event)=>{
  event.preventDefault();
  try{


    const res = await axiox.post('http://localhost:5000/api/user/login',{email,password})
    if(res.status===200){
      // alert("logged in succesfully")
      console.log(res.data.token)
      localStorage.setItem('token', res.data.token)
      navigate('/')
      }
      else{
        alert("something went wrong")
      }
  }
  catch(err){
    console.log(err)
    alert(err)
    console.log(email,password)
  }
}
  return (
    <>
    
    <div className="wrapper">
      <div className="title">Login Form</div>
      <form action="#">
        <div className="field">
        <input type="text" required=""  name = ' email'  placeholder = 'email'  value= {email} onChange = {(e)=> {setEmail(e.target.value)} }/>
          
        </div>
        <div className="field">
        <input type="password" name = 'password' placeholder = 'password' value = {password} onChange ={(e)=> {setPassword(e.target.value)}} />
          
        </div>
        <div className="content">
          <div className="checkbox">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div className="pass-link">
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <div className="field">
          <input type="submit" onClick = {login} value="Login" />
        </div>
        <div className="signup-link">
          Not a member? <Link to ="signup">Signup now</Link>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login