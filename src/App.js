import { useState } from "react";
import "./App.css";
import { WEATHER_API_URL } from "./api";
import Search from "./components/search/search";
import CurrentWeather from "./components/weather/weather";
import Forecast from "./components/forecast/forecast";

function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(
            `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        );
        const forecastFetch = fetch(
            `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        );

        Promise.all([currentWeatherFetch, forecastFetch])
            .then(async (response) => {
                const weatherResp = await response[0].json();
                const forecastResp = await response[1].json();

                setCurrentWeather({ city: searchData.label, ...weatherResp });
                setForecast({ city: searchData.label, ...forecastResp });
            })
            .catch((err) => console.log(err));
    };

    console.log(currentWeather);
    console.log(forecast);

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange} />
            {currentWeather && <CurrentWeather data={currentWeather} />}
            {forecast && <Forecast data={forecast} />}
        </div>
    );
}

export default App;
