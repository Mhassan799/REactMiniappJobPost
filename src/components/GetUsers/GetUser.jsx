import ReactDOM from "react-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const GetUser = () => {

const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    axios.get('http://localhost:5000/api/user/getUser',{
        headers:{
            Authorization:'Bearer ' +localStorage.getItem('token')
        }
    })
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("You Need To Login first To Users Details");
        setLoading(false);
      });
  }, []);  // The empty dependency array means this useEffect runs once when the component mounts.

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
    <h1>Users List</h1>
    <ul>
      {users.map(user => (
        <li key={user._id}>{user.name} - {user.email}- {user.phone} - {user.age}</li>
      ))}
    </ul>
  </div>
  );
}

export default GetUser