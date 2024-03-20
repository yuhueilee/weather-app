import { http, HttpResponse } from "msw";
import { GEO_API_URL, WEATHER_API_URL } from "../api";

export const handlers = [
    http.get(`${GEO_API_URL}/cities`, () => {
        return HttpResponse.json({
            data: [
                {
                    name: "Greater London",
                    countryCode: "GB",
                    latitude: 51.5,
                    longitude: -0.083333333,
                },
                {
                    name: "London",
                    countryCode: "GB",
                    latitude: 51.507222222,
                    longitude: -0.1275,
                },
            ],
        });
    }),
    http.get(`${WEATHER_API_URL}/weather`, () => {
        return HttpResponse.json({
            coord: {
                lon: -0.0833,
                lat: 51.5,
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n",
                },
            ],
            base: "stations",
            main: {
                temp: 9.14,
                feels_like: 7.43,
                temp_min: 6.83,
                temp_max: 10.12,
                pressure: 1014,
                humidity: 89,
            },
            visibility: 10000,
            wind: {
                speed: 3.09,
                deg: 250,
            },
            clouds: {
                all: 100,
            },
            dt: 1710738897,
            sys: {
                type: 2,
                id: 2075535,
                country: "GB",
                sunrise: 1710742013,
                sunset: 1710785384,
            },
            timezone: 0,
            id: 2643744,
            name: "City of London",
            cod: 200,
        });
    }),
    http.get(`${WEATHER_API_URL}/forecast`, () => {
        return HttpResponse.json({
            cod: "200",
            message: 0,
            cnt: 40,
            list: [
                {
                    dt: 1710741600,
                    main: {
                        temp: 9.14,
                        feels_like: 8.12,
                        temp_min: 7.59,
                        temp_max: 9.14,
                        pressure: 1014,
                        sea_level: 1014,
                        grnd_level: 1014,
                        humidity: 89,
                        temp_kf: 1.55,
                    },
                    weather: [
                        {
                            id: 804,
                            main: "Clouds",
                            description: "overcast clouds",
                            icon: "04n",
                        },
                    ],
                    clouds: {
                        all: 100,
                    },
                    wind: {
                        speed: 2.08,
                        deg: 231,
                        gust: 6.44,
                    },
                    visibility: 10000,
                    pop: 0,
                    sys: {
                        pod: "n",
                    },
                    dt_txt: "2024-03-18 06:00:00",
                },
                {
                    dt: 1710752400,
                    main: {
                        temp: 9.56,
                        feels_like: 8.1,
                        temp_min: 9.56,
                        temp_max: 10.41,
                        pressure: 1014,
                        sea_level: 1014,
                        grnd_level: 1014,
                        humidity: 84,
                        temp_kf: -0.85,
                    },
                    weather: [
                        {
                            id: 803,
                            main: "Clouds",
                            description: "broken clouds",
                            icon: "04d",
                        },
                    ],
                    clouds: {
                        all: 78,
                    },
                    wind: {
                        speed: 2.81,
                        deg: 234,
                        gust: 5.7,
                    },
                    visibility: 10000,
                    pop: 0,
                    sys: {
                        pod: "d",
                    },
                    dt_txt: "2024-03-18 09:00:00",
                },
            ],
        });
    }),
];
