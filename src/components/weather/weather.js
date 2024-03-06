import "./weather.scss";

const weather = () => {
    return (
        <div className="weather">
            <div className="top">
                <p className="city">London</p>
                <p className="description">Rainy</p>
                <img
                    alt="weather"
                    className="weatherIcon"
                    src="icons/01d.png"
                />
            </div>
        </div>
    );
};

export default weather;
