import React,{useState} from 'react'
// import {useNavigate} from 'react-router-dom'
import styles from '../styles/styles.css'
const Home = () => {
    // const navigate = useNavigate()
    // const [roomCode , setRoomCode] = useState('')
    // const changeRoom = ()=>{
    //     navigate(`/room/${roomCode}`)
    // }
  return (
    <div className='home'>
      <h1 >This is Homepage</h1>
    {/* <input type="text" name="" id="" placeholder='enter room id' value={roomCode} onChange={(e)=>setRoomCode(e.target.value)} />
    <button onClick={changeRoom}>join room</button> */}
    </div>
  )
}

export default Home