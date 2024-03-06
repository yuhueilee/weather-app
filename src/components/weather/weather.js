import "./weather.scss";

const weather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">London</p>
                    <p className="description">Rainy</p>
                </div>
                <img
                    alt="weather"
                    className="weatherIcon"
                    src="icons/01d.png"
                />
            </div>
            <div className="bottom">
                <p className="temperature">18C</p>
                <div className="details">
                    <div className="parameterRow">
                        <span className="parameterLabel">Details</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Feels like</span>
                        <span className="parameterValue">22C</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Wind</span>
                        <span className="parameterValue">2 m/s</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Humidity</span>
                        <span className="parameterValue">15%</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Pressure</span>
                        <span className="parameterValue">15 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default weather;
