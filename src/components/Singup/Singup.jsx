import React,{useState}from 'react'
import axiox from  'axios'
import styles from '../styles/styles.css'
import { Link,useNavigate } from 'react-router-dom'


const Singup = () => {
  const [name,setName] = useState('')
const [email,setEmail] =useState('')
const [phone,setPhone] = useState('')
const [password,setPassword] = useState('')
const [field,setField] = useState('')
const [age,setAge] = useState('')
const [experience,setExperience] = useState('')

  let navigate = useNavigate();

const clickSignUp = async(event)=>{
  event.preventDefault();
  try{
    const res = await axiox.post('http://localhost:5000/api/user/signup',{email,password,phone,name,field,age,experience})
    if(res.status===200){
    // alert("signedup succesfully")
    navigate('/login')
    console.log(res)
    }
    else{
      alert("something went wrong")
    }
  }
  catch(err){
    console.log(email,password)
    alert(err)
  }
}
// console.log(email,password)
  return (
    <>
    <div className="wrapper">
      <div className="title">SignUp Form</div>
      <form action="#">
        <div className="field">
        <input type="text" required=""  name = 'name'  placeholder = 'name'  value= {name} onChange = {(e)=> {setName(e.target.value)} }/>
          
        </div>
        <div className="field">
        <input type="text" required=""  name = ' email'  placeholder = 'email'  value= {email} onChange = {(e)=> {setEmail(e.target.value)} }/>
          
        </div>
        <div className="field">
        <input type="text" required=""  name = ' phone'  placeholder = 'phone'  value= {phone} onChange = {(e)=> {setPhone(e.target.value)} }/>
          
        </div>
        <div className="field">
        <input type="password" name = 'password' placeholder = 'password' value = {password} onChange ={(e)=> {setPassword(e.target.value)}} />
          
        </div>
        <div className="field">
        <input type="text" className='inpu1' name='field' placeholder='field' value={field} onChange={(e)=>{setField(e.target.value)}}/>
        </div>
        <div className="field">
        <input type="text" className='inpu1' name='age' placeholder='age' value={age} onChange={(e)=>{setAge(e.target.value)}}/>
        </div>
        <div className="field">
        <input type="text" className='inpu1' name='experience' placeholder='experince' value={experience} onChange={(e)=>{setExperience(e.target.value)}}/>
     
        </div>
        
        <div className="field">
          <input  onClick = {clickSignUp} type="submit"   />
     

        </div>
        <div className="signup-link">
          already have an account? <Link to ="/login">Login now</Link>
        </div>
      </form>
    </div>
    
    </>
  )
}

export default Singup