import { useEffect, useState } from "react"
import { FaSearchLocation } from 'react-icons/fa';
// const MAUSAM_KEY = 'dafa96e48ec2198246b41aac88ca77b3';
const Weather = () => {
    const [query, setQuery] = useState("");
    // const [data, setData] = useState("");
    // const [error, setError] = useState("");
    // const [loading, setLoading] = useState(true);


    // useEffect(() => {
    //     fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=dafa96e48ec2198246b41aac88ca77b3`)
    //         .then(response => response.json())
    //         .then(finalData => console.log(finalData))
    //         .catch(err => console.log(err))
    //         .finally(console.log("LOADED FINALLY"))
    // }, [])

    // Handling Query
    function handleQuery(event) {
        setQuery(event.target.value);
    }

    // Search Funtionality
    function searchWeather(e) {
        e.preventDefault();
        alert(query);
    }

    return (
        <section className="weather">
            <div className="container">
                <div className="row">
                    <div className="hero-img">
                        <div className="weather-head">
                            <div className="queryHead">
                                <h2>Mandi<span className="queryCountry">, IN</span></h2>
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