import { render, screen } from "@testing-library/react";
import Weather from "./weather";

const mockData = {
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
        render(<Weather data={mockData} />);
        const cityElement = screen.getByText("London");
        return expect(cityElement).toBeInTheDocument();
    });

    it("should display weather description", () => {
        render(<Weather data={mockData} />);
        const descriptionElement = screen.getByText("Broken cloud");
        return expect(descriptionElement).toBeInTheDocument();
    });

    it("should display weather icon", () => {
        render(<Weather data={mockData} />);
        const imageElement = screen.getByAltText("weather");
        return expect(imageElement).toHaveAttribute("src", "icons/04n.png");
    });

    it("should display rounded temperature", () => {
        render(<Weather data={mockData} />);
        const temperatureElement = screen.getByText("11°C");
        return expect(temperatureElement).toBeInTheDocument();
    });

    it("should display rounded feels like", () => {
        render(<Weather data={mockData} />);
        const feelsLikeElement = screen.getByText("12°C");
        return expect(feelsLikeElement).toBeInTheDocument();
    });

    it("should display wind speed", () => {
        render(<Weather data={mockData} />);
        const windSpeedElement = screen.getByText("4.63 m/s");
        return expect(windSpeedElement).toBeInTheDocument();
    });

    it("should display humidity", () => {
        render(<Weather data={mockData} />);
        const humidityElement = screen.getByText("89%");
        return expect(humidityElement).toBeInTheDocument();
    });

    it("should display pressure", () => {
        render(<Weather data={mockData} />);
        const pressureElement = screen.getByText("1012 hPa");
        return expect(pressureElement).toBeInTheDocument();
    });
});
