import { useEffect, useState } from "react";
import { FaSearchLocation, FaCloud, FaSun } from "react-icons/fa";
import loader from "../assets/images/mausam-loader.gif";
const MAUSAM_KEY = "8ea6880a2521095166643611c6b4123a";
const Weather = () => {
  let [query, setQuery] = useState("");
  let [data, setData] = useState("Delhi");
  let [weather, setweather] = useState();
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    getLatLong();
  }, [data]);

  // Handling Query
  function handleQuery(event) {
    setQuery(event.target.value);
  }

  // Search Funtionality
  function searchWeather(e) {
    setData(query);
    e.preventDefault();
  }

  function getLatLong() {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${data}&appid=${MAUSAM_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((latLong) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latLong[0].lat}&lon=${latLong[0].lon}&units=metric&appid=${MAUSAM_KEY}`
        )
          .then((response) => response.json())
          .then((finalData) => {
            setweather(finalData);
            setLoading(false);
          });
      });
  }

  return (
    <>
      <section className="weather">
        <div className="container">
          <div className="row">
            <div className="hero-img">
              <div className="weather-head">
                <div className="queryHead">
                    <div className="curr-day-date">
                        <h3>Sunday</h3>
                        <p>25 September, 2022 Delhi, India</p>
                    </div>
                    <div className="curr-weather-details">
                        <h2>32 °C</h2>
                        <p>Cloudy</p>
                    </div>
                  {/* <h2>
                    {data}
                    <span className="queryCountry">, IN</span>
                  </h2>
                  {loading && (
                    <img
                      src={loader}
                      className="mausam-loader"
                      alt="Mausam Loader"
                    />
                  )}
                  {!loading ? (
                    <div>
                      <h2>{weather.main.temp} °C</h2>
                      <p>{weather.name}</p>
                    </div>
                  ) : (
                    ""
                  )} */}

                </div>
                <div className="query">
                  <form id="search-form" onSubmit={searchWeather}>
                    <input
                      type="text"
                      name="q"
                      id="query"
                      value={query}
                      onChange={handleQuery}
                      placeholder = "Search"
                    />
                    <button>
                      <FaSearchLocation />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="weathers">
              <div className="mausam-week">
                <div className="week">
                  <p className="week-day">Sun</p>
                  <FaCloud />
                  <p className="week-tem">30 °C</p>
                </div>
                <div className="week">
                  <p className="week-day">Mon</p>
                  <FaCloud />
                  <p className="week-tem">30 °C</p>
                </div>
                <div className="week">
                  <p className="week-day">Tue</p>
                  <FaSun />
                  <p className="week-tem">30 °C</p>
                </div>
                <div className="week">
                  <p className="week-day">Wed</p>
                  <FaSun />
                  <p className="week-tem">30 °C</p>
                </div>
                <div className="week">
                  <p className="week-day">Thu</p>
                  <FaSun />
                  <p className="week-tem">30 °C</p>
                </div>
                <div className="week">
                  <p className="week-day">Fri</p>
                  <FaSun />
                  <p className="week-tem">30 °C</p>
                </div>
                <div className="week">
                  <p className="week-day">Sat</p>
                  <FaSun />
                  <p className="week-tem">30 °C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Weather;
