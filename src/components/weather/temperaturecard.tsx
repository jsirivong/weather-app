import { useEffect, useState } from "react";

interface IProps {
    temp_f: number;
    temp_c: number;
    condition_icon: string;
    condition_status: string;
    feelslike_f: number;
    feelslike_c: number;
}

export default function TemperatureCard({ temp_f, temp_c, condition_icon, condition_status, feelslike_f, feelslike_c }: IProps){
    const [ temperatureSign, setTemperatureSign ] = useState("Fahrenheit") // useState returns an array of a value and a method
    
    const fahrenheitText = `${temp_f}°F`
    const celsiusText = `${temp_c}°C`
    const feelsLikeFahrenheitText = `Feels like ${feelslike_f}°F`;
    const feelsLikeCelsiusText = `Feels like ${feelslike_c}°C`;

    return (
        <div className="bg-gray-800 shadow-xl shadow-indigo-500 lg:w-4xl lg:h-60 m-7 top-20 relative flex items-center rounded-2xl md:h-30 md:w-2xl sm:h-15 sm:w-xl">
            <h2 className="text-white text-8xl ml-10">{temperatureSign === "Fahrenheit" ? fahrenheitText : celsiusText} </h2>
            <button type='button' onClick={(): void => {
                if (temperatureSign === "Fahrenheit"){
                    setTemperatureSign("Celsius")
                } else if (temperatureSign === "Celsius"){
                    setTemperatureSign("Fahrenheit")
                } else {
                    throw new Error("Not a valid unit measurement of temperature.")
                }
                }} className="text-center hover:text-gray-400 text-white hover:cursor-grab">Switch</button>
            <img src={condition_icon} alt={condition_status} className="scale-120 m-5"/>
            <h2 className="text-white text-4xl">{condition_status}</h2>
            <h2 className="text-white text-4xl m-10">{temperatureSign === "Fahrenheit" ? feelsLikeFahrenheitText : feelsLikeCelsiusText}</h2>
        </div>
    )
}