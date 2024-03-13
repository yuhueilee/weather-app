import { render, screen } from "@testing-library/react";
import Weather from "./weather";

const MockData = {
    city: "London",
    weather: [{ description: "Broken cloud", icon: "04n" }],
    main: {
        temp: 11.59,
        feels_like: 11.3,
        humidity: 89,
        pressure: 1012,
    },
    wind: {
        speed: 4.63,
    },
};

describe("weather component", () => {
    it("should display city name", () => {
        render(<Weather data={MockData} />);
        const cityElement = screen.getByText("London");
        expect(cityElement).toBeInTheDocument();
    });

    it("should display weather description", () => {
        render(<Weather data={MockData} />);
        const descriptionElement = screen.getByText("Broken cloud");
        expect(descriptionElement).toBeInTheDocument();
    });

    it("should display weather icon", () => {
        render(<Weather data={MockData} />);
        const imageElement = screen.getByAltText("weather");
        expect(imageElement).toHaveAttribute("src", "icons/04n.png");
    });

    it("should display rounded temperature", () => {
        render(<Weather data={MockData} />);
        const temperatureElement = screen.getByText("11°C");
        expect(temperatureElement).toBeInTheDocument();
    });

    it("should display rounded feels like", () => {
        render(<Weather data={MockData} />);
        const feelsLikeElement = screen.getByText("12°C");
        expect(feelsLikeElement).toBeInTheDocument();
    });

    it("should display wind speed", () => {
        render(<Weather data={MockData} />);
        const windSpeedElement = screen.getByText("4.63 m/s");
        expect(windSpeedElement).toBeInTheDocument();
    });

    it("should display humidity", () => {
        render(<Weather data={MockData} />);
        const humidityElement = screen.getByText("89%");
        expect(humidityElement).toBeInTheDocument();
    });

    it("should display pressure", () => {
        render(<Weather data={MockData} />);
        const pressureElement = screen.getByText("1012 hPa");
        expect(pressureElement).toBeInTheDocument();
    });
});
