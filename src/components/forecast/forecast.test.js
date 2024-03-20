import Forecast from "./forecast";
import { render, screen } from "@testing-library/react";

const mockData = {
    city: "London, GB",
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
};

describe("forecast component", () => {
    it("should display title", () => {
        render(<Forecast data={mockData} />);
        const titleElement = screen.getByText(/daily/i);
        return expect(titleElement).toBeInTheDocument();
    });
});
