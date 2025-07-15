interface WeatherData {
    location: {
        lat: number,
        lon: number,
        name: string,
        region: string,
        country: string,
        tz_id: string,
        localtime_epoch: number,
        localtime: string
    }
}

export default interface CurrentWeatherData extends WeatherData {
    current: {
        last_updated: string,
        last_updated_epoch: string,
        temp_c: number,
        temp_f: number,
        feelslike_c: number,
        feelslike_f: number,
        windchill_c: number,
        windchill_f: number,
        heatindex_c: number,
        heatindex_f: number,
        dewpoint_c: number,
        dewpoint_f: number,
        condition: {
            text: string,
            icon: string,
            code: number
        },
        wind_mph: number,
        wind_kph: number,
        wind_degree: number,
        wind_dir: string,
        pressure_mb: number,
        pressure_in: number,
        precip_mm: number,
        precip_in: number,
        humidity: number,
        cloud: number,
        is_day: number,
        uv: number,
        gust_mph: number,
        gust_kph: number
    };
}