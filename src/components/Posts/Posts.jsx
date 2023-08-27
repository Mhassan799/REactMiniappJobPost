
import ReactDOM from "react-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';




const Posts = () => {

    const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    axios.get('http://localhost:5000/api/post/getJobs',{
        headers:{
            Authorization:'Bearer ' +localStorage.getItem('token')
        }
    })
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("You Need To login First to get Job Post details");
        setLoading(false);
      });
  }, []);  // The empty dependency array means this useEffect runs once when the component mounts.

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
     <div>
      <h1>Job Post List</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.jobTitle} - {user.salary}- {user.location} - {user.jobtype}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts