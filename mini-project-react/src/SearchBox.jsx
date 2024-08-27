import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
export default function SearchBox({updateInfo}){
    const API_URL = "";//Weatherapiurl
    const API_KEY = "";//apikeyfromtheWeatherapi
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let getWeatherInfo = async ()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let jsonResponse = await response.json();
            let result = {
                 city: city,
                 temp: Math.round(jsonResponse.main.temp-273.15),
                 tempMin: Math.round(jsonResponse.main.temp_min-273.15),
                 tempMax: Math.round(jsonResponse.main.temp_max-273.15),
                 humidity: jsonResponse.main.humidity,
                 feelsLike: Math.round(jsonResponse.main.feels_like-273.15),
                 weather: jsonResponse.weather[0].description,
                }
            console.log(result);
            return result;
        }
        catch(error){
            throw error;
        }
    }
    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch(error){
            setError(true);
        }
    }
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" value={city} onChange={handleChange} label="City Name" variant="outlined" required/>
                <br /><br />
                <Button type="submit" variant="contained" >Search</Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
                <br /><br />
            </form>
        </div>
    );
}