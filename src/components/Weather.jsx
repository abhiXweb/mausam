import { useEffect, useState } from "react"
import { FaSearchLocation } from 'react-icons/fa';
import loader from "../assets/images/mausam-loader.gif"
const MAUSAM_KEY = '8ea6880a2521095166643611c6b4123a';
const Weather = () => {
    let [query, setQuery] = useState("");
    let [data, setData] = useState("Mandi");
    let [weather, setweather] = useState();
    let [loading, setLoading] = useState(true);


    useEffect(() => {
        getLatLong()
    }, [data])

    // Handling Query
    function handleQuery(event) {
        setQuery(event.target.value);
    }

    // Search Funtionality
    function searchWeather(e) {
        setData(query)
        e.preventDefault();
    }

    function getLatLong() {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${data}&appid=${MAUSAM_KEY}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((latLong) => {
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latLong[0].lat}&lon=${latLong[0].lon}&appid=${MAUSAM_KEY}`)
                    .then(response => response.json())
                    .then((finalData) => {
                        setweather(finalData)
                        setLoading(false)
                    })
            })
    }
    return (
        <section className="weather">
            <div className="container">
                <div className="row">
                    <div className="hero-img">
                        <div className="weather-head">
                            <div className="queryHead">
                                <h2>{data}<span className="queryCountry">, IN</span></h2>
                                {loading && <img src={loader} className="mausam-loader" alt="Mausam Loader" />}
                                {!loading ?
                                    <div>
                                        <h2>{weather.main.temp}</h2>
                                        <p>{weather.name}</p>
                                    </div>
                                    : ""}
                            </div>
                            <div className="query">
                                <form id="search-form" onSubmit={searchWeather}>
                                    <input type="text" name="q" id="query" value={query} onChange={handleQuery} />
                                    <button><FaSearchLocation /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="weathers">
                        <ul>
                            <li>Mon</li>
                            <li>Tue</li>
                            <li>Wed</li>
                            <li>Thu</li>
                            <li>Fri</li>
                            <li>Sat</li>
                            <li>Sun</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Weather