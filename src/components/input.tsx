import { useEffect, useState, type FormEvent } from "react"
import { useNavigate } from 'react-router-dom'
import getWeatherData from "../services/api";
import type CurrentWeatherData from "../types/CurrentWeatherData";

export default function Input(){
    const [ input, setInput ] = useState("");
    const navigate = useNavigate()

    const handleWeather = async<T,>(data: T): Promise<void> => {
        if (data === null) return;

        const weatherData: T = await data;  

        if (weatherData) {
            setInput("");
            navigate("/weather", {state: {data: weatherData}});
        } else {
            return;
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        if (!input.trim()){
            return
        }

       getWeatherData({city: input, api_method: "/current.json"}).then(data => handleWeather<CurrentWeatherData | null>(data))
    }
    
    useEffect(() => {
        
    }, [input])

    return (
        <form className="flex items-center" onSubmit={handleSubmit}>
            <input value={input} onChange={(e) => setInput(e.target.value)} className="bg-white items-center p-2 rounded-md mx-auto w-xl translate-y-20 shadow-emerald-500 shadow-xl text-gray-600 hover:bg-gray-300" placeholder="Search for a city."/>
            <button type="submit" className="bg-white shadow-xl shadow-emerald-500 -translate-95 relative rounded px-4 py-1.5 translate-y-20 text-gray-400 hover:bg-gray-300">Search</button>
        </form>
    )
}  