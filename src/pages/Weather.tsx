import TemperatureCard from "../components/weather/temperaturecard";
import { useLocation, Link } from "react-router-dom";
import type CurrentWeatherData from "../types/WeatherData";
import Title from "../components/weather/weathertitle";
import ForecastCard from "../components/weather/forecastcard";

export default function Weather(){
    const location = useLocation()

    const data: CurrentWeatherData = location.state.data || null

    return (
        <div>
            <Link to={"/"}>
                <a className="hover:underline text-lg text-white mx-10 absolute top-5">{`< Back`}</a>
            </Link>
            <Title location={data.location.name} region={data.location.region} country={data.location.country} localtime={data.location.localtime}/>
            <TemperatureCard temp_f={data.current.temp_f} temp_c={data.current.temp_c} condition_status={data.current.condition.text} condition_icon={data.current.condition.icon}
            feelslike_c={data.current.feelslike_c} feelslike_f={data.current.feelslike_f}/>
            <ForecastCard uv={data.current.uv} wind_kph={data.current.wind_kph} wind_mph={data.current.wind_mph} humidity={data.current.humidity}/>
        </div>
    )
}