import React from "react";

const apiKeys = {
    key: "bccf8fe7f752ac28bdc64bdcdba6922d",
    base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
    const dateBuilder = (d) => {
        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        let date = d.getDate();

        return `${day} ${month} ${year} ${date}`;
    };
    return (
        <div className="container">
            <main>
                <div className="search-box">
                    <input
                        type="text"
                        className="searchfield"
                        placeholder="Enter City Name"
                    ></input>
                </div>
                <div className="location-box">
                    <div className="location">NY City</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weather-box">
                    <div className="temperature">20° C</div>
                    <div className="weather">Sunny</div>
                </div>
            </main>
        </div>
    );
}

export default App;
