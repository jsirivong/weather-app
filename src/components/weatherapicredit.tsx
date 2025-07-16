export default function WeatherAPICredit() {
    return (
        <div className='text-center absolute bottom-0 left-1/2 -translate-x-1/2 my-5'>
            <span className="text-white font-bold text-lg">Powered by WeatherAPI</span>
            <a href="https://www.weatherapi.com/" title="Free Weather API" className='text-white font-bold text-lg'>
                <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" className="mx-auto"/>
            </a>
        </div>
    )
}   