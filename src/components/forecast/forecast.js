import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInAWeek)
    );

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img
                                        alt="weather"
                                        className="icon-small"
                                        src={`icons/${item.weather[0].icon}.png`}
                                    />
                                    <label
                                        className="day"
                                        data-testid={`forecast-day-${index}`}
                                    >
                                        {forecastDays[index]}
                                    </label>
                                    <label
                                        className="description"
                                        data-testid={`forecast-description-${index}`}
                                    >
                                        {item.weather[0].description}
                                    </label>
                                    <label
                                        className="min-max"
                                        data-testid={`forecast-temperature-${index}`}
                                    >
                                        {Math.round(item.main.temp_max)}°C /
                                        {Math.round(item.main.temp_min)}°C
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div
                                    className="daily-details-grid-item"
                                    data-testid={`forecast-pressure-${index}`}
                                >
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div
                                    className="daily-details-grid-item"
                                    data-testid={`forecast-humidity-${index}`}
                                >
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div
                                    className="daily-details-grid-item"
                                    data-testid={`forecast-clouds-${index}`}
                                >
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div
                                    className="daily-details-grid-item"
                                    data-testid={`forecast-wind-speed-${index}`}
                                >
                                    <label>Wind speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div
                                    className="daily-details-grid-item"
                                    data-testid={`forecast-sea-level-${index}`}
                                >
                                    <label>Sea level:</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div
                                    className="daily-details-grid-item"
                                    data-testid={`forecast-feels-like-${index}`}
                                >
                                    <label>Feels like:</label>
                                    <label>
                                        {Math.round(item.main.feels_like)}°C
                                    </label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default Forecast;
