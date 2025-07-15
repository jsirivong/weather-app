import { useState } from 'react';

interface IProps {
    uv: number;
    wind_mph: number;
    wind_kph: number;
    humidity: number;
}

export default function ForecastCard({ uv, wind_mph, wind_kph, humidity }: IProps){
    const [ windSpeedSign, setWindSpeedSign ] = useState("Miles") // useState returns an array of a value and a method
    
    return (
        <div className="bg-gray-800 shadow-xl shadow-indigo-500 lg:w-4xl lg:h-60 m-7 top-20 relative flex rounded-2xl md:h-30 md:w-2xl sm:h-15 sm:w-xl">
            <div className='block m-5'>
                <h2 className='text-white font-bold text-lg'>UV Index: {uv}</h2>
                <h2 className='text-white font-bold text-lg'>Humidity: {humidity}%</h2>
                <h2 className='text-white font-bold text-lg'>Wind Speed: {windSpeedSign === "Miles" ? `${wind_mph} mph` : `${wind_kph} kph` }</h2>
                <button className='text-white size-2 hover:text-gray-400 hover:cursor-grab' onClick={()=>{
                    windSpeedSign === "Miles" ? setWindSpeedSign("Kilometers") : setWindSpeedSign("Miles");
                }}>Switch</button>
            </div>
        </div>
    )
}