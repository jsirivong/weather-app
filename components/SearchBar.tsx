import { useState } from 'react'
import "../css/SearchBar.css"
import {fetchWeather} from "../services/api.ts"

export default function SearchBar(){
    const [city, setCity] = useState("");

    return (
        <form onSubmit={() => {
            fetchWeather(city);
        }}>
            <input type="search" className="search-bar" onChange={e => setCity(e.target.value)}placeholder="Search for a city."></input><br/>
            <input type="submit" value="Find" className="find-button"></input>
        </form>
    ); 
}