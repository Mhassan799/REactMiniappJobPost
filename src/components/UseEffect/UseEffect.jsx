import React,{useState,useEffect} from 'react'
import axios from 'axios'
const UseEffect = () => {
    const [weatherData,setWeather]= useState([])
    const [city,setCity]=useState("")
    console.log(weatherData)
    const apiKey = "daff2652b6f168feac89e292fe74e6f2";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=${apiKey}`;
        const changeWeather =async ()=>{

            try{
                const res = await axios.get(`${apiUrl}
                `) 
                console.log(res.data.list)
                setWeather(res.data.list)
            }
            catch(err)
            {
                console.log(err)
            }
        }

  return (
    <div>

    <input type="text" placeholder='enter your city name'
    value={city}
    onChange={(e)=>{setCity(e.target.value)}}
    />
    <br />
    <button onClick={changeWeather}>check Weather</button>
   {
    weatherData.map((value)=>{
    return(
        <>
        <div>{value.main.temp}</div>
        </>
    )
    })
   }
    </div>
  )
}

export default UseEffect