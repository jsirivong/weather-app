import type API_DATA from "../types/ApiData";
import type CurrentWeatherData from "../types/WeatherData";

const BASE_URL = "http://api.weatherapi.com/v1"

export default async function getWeatherData({ city, api_method }: API_DATA){
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_ENDPOINT = `${BASE_URL}${api_method}?key=${API_KEY}&q=${city}`

    try {
        const response = await fetch(API_ENDPOINT); // response object

        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: CurrentWeatherData = await response.json();

        return data;
    } catch (error) {
        console.error("An error occurred: ", error)
        return null;
    }
}