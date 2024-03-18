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
                lon: 44.5144,
                lat: 40.1814,
            },
            weather: [
                {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03n",
                },
            ],
            base: "stations",
            main: {
                temp: 7.05,
                feels_like: 5.27,
                temp_min: 7.05,
                temp_max: 7.05,
                pressure: 1016,
                humidity: 71,
            },
            visibility: 10000,
            wind: {
                speed: 2.57,
                deg: 360,
            },
            clouds: {
                all: 40,
            },
            dt: 1710730100,
            sys: {
                type: 1,
                id: 8851,
                country: "AM",
                sunrise: 1710731304,
                sunset: 1710774691,
            },
            timezone: 14400,
            id: 616052,
            name: "Yerevan",
        });
    }),
    http.get(`${WEATHER_API_URL}/forecast`, () => {
        return HttpResponse.json({
            city: {
                id: 616052,
                name: "Yerevan",
                coord: {
                    lat: 40.1814,
                    lon: 44.5144,
                },
                country: "AM",
                population: 1093485,
                timezone: 14400,
                sunrise: 1710731304,
                sunset: 1710774691,
            },
            list: [
                {
                    dt: 1710730800,
                    main: {
                        temp: 7.05,
                        feels_like: 5.97,
                        temp_min: 7.05,
                        temp_max: 7.6,
                        pressure: 1016,
                        sea_level: 1016,
                        grnd_level: 901,
                        humidity: 71,
                        temp_kf: -0.55,
                    },
                },
                {
                    dt: 1710741600,
                    main: {
                        temp: 8.26,
                        feels_like: 8.26,
                        temp_min: 8.26,
                        temp_max: 10.67,
                        pressure: 1016,
                        sea_level: 1016,
                        grnd_level: 901,
                        humidity: 63,
                        temp_kf: -2.41,
                    },
                },
            ],
        });
    }),
];
