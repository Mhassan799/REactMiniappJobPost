import React,{useState} from 'react'
import axios from 'axios'
import styles from '../styles/styles.css'
import { useNavigate } from 'react-router-dom'



const Jobpost = () => {
    const [jobTitle,setjobTitle] =useState('')
    const [salary,setsalary] = useState('')
    const [location,setlocation] = useState('')
    const [jobtype,setjobtype] = useState('')
    const [experience,setexperience] = useState('')
    const nevigate = useNavigate();
    // const ClickPost = async(e)=>{
    //   e.preventDefault();
    //   try{
    //     const res = await axios.post('http://localhost:5000/api/post/createPost',{jobTitle,salary,location,jobtype,experience},{
    //       headers:{
    //           Authorization:'Bearer ' +localStorage.getItem('token')
    //       }
    //   })
    //   if(res.status===200){
    //     // alert("logged in succesfully")
    //     // console.log(res.data.token)
    //     // localStorage.setItem('token', res.data.token)
    //     alert("succesfully posted")
    //     nevigate('/home')
    //     }
    //     else{
    //       alert("something went wrong")
    //     }
      
    // }
    // catch(err){
    // //  console.log(email,password)
    //   alert(err)
    //   setError("You Need To Login first To Users Details");

    // }
    // }
    const ClickPost = async (e) => {
      e.preventDefault();
    
      // Check if token exists
      const token = localStorage.getItem('token');
      if (!token) {
        alert("You need to login first.");
        return; // Stop the function execution here
      }
    
      try {
        const res = await axios.post('http://localhost:5000/api/post/createpost',
          { jobTitle, salary, location, jobtype, experience },
          {
            headers: {
              Authorization: 'Bearer ' + token
            }
          });
    
        if (res.status === 200) {
          alert("Successfully posted");
          nevigate('/');
        } else {
          alert("Something went wrong");
        }
      } catch (err) {
        console.error(err);
        if (err.response && err.response.status === 401) {  // 401 typically means Unauthorized
          alert("You need to login first to view user details");
        } else {
          alert("An error occurred");
        }
      }
    };
    
      return (
        <>
         <div className="wrapper">
      <div className="title">Apply</div>
      <form action="#">
        <div className="field">
        <input type="text" className='inpu1' name='email' placeholder='title' value={jobTitle} onChange={(e)=>{setjobTitle (e.target.value)}} />
          
        </div>
        <div className="field">
        <input type="text" className='inpu1' name='email' placeholder='salary' value={salary} onChange={(e)=>{setsalary(e.target.value)}}/>
          
        </div>
        <div className="field">
        <input type="text" className='inpu1' name='email' placeholder='location' value={location} onChange={(e)=>{setlocation(e.target.value)}}/>          
        </div>
        <div className="field">
        <input type="text" className='inpu1' name='email' placeholder='type' value={jobtype} onChange={(e)=>{setjobtype(e.target.value)}}/>
        </div>
        <div className="field">
        <input type="text" className='inpu1' name='email' placeholder='experience' value={experience} onChange={(e)=>{setexperience(e.target.value)}}/>
       
        </div>
        
        
        
        <div className="field">
          <input  onClick = {ClickPost} type="submit"   />
     

        </div>
        
      </form>
    </div>
        
        </> 
      )
}


export default Jobpost