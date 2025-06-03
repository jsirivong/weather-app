import { useState } from 'react'

const API_KEY = "c3bbc8af0d934c75a1d193859252605";
const BASE_URL = "http://api.weatherapi.com/v1";

export const fetchWeather = async (city : string) => {
    const [ data, setData ] = useState("");

    try {
        const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city.toLowerCase()}`);
        setData(await response.json())

        alert(data);

        if (!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }   
    } catch (error : any) {
        console.error(error.message);
    }
}