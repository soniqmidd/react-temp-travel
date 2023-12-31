import React from "react";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Temp Travel</h1>

        <div class="Weather">
          <div class="weather-app-wrapper">
            <div class="weather-app">
              <form id="search-form" class="mb-3">
                <div class="row">
                  <div class="col-6">
                    <input
                      type="search"
                      placeholder="Search a city .."
                      class="form-control"
                      id="city-input"
                      autocomplete="off"
                      autoFocus="on"
                    />
                  </div>

                  <div class="col-3">
                    <input
                      type="submit"
                      value="Submit"
                      class="btn btn-primary w-100"
                    />
                  </div>
                  <div class="col-3">
                    <input
                      type="submit"
                      value="Current"
                      class="btn btn-secondary w-100"
                    />
                  </div>
                </div>
              </form>
              <div class="overview">
                <h2 id="city">Houston</h2>
                <ul>
                  <li>
                    <span id="date">Last updated Wednesday at 08:38</span>
                  </li>
                  <li>
                    <span>Clear Sky</span>
                  </li>
                </ul>
              </div>

              <div class="row">
                <div class="col-6">
                  <div class="outdoorfix weather-temperature">
                    <img
                      src="	https://openweathermap.org/img/wn/01d@2x.png"
                      alt="clear sky"
                      id="icon"
                      class="float-left"
                    />
                    <div class="float-left">
                      <strong id="temperature">74</strong>
                      <span class="units">°F</span>
                    </div>
                  </div>
                </div>

                <div class="col-6">
                  <ul>
                    <li>Humidity: 91%</li>
                    <li>Wind: 21 mph</li>
                  </ul>
                </div>
              </div>
              <div class="weather-forecast" id="forecast">
                <ul>
                  <li>
                    Mon
                    <img
                      src="https://openweathermap.org/img/wn/10d@2x.png"
                      alt="rain"
                    />{" "}
                    <span className="maxtemp">81°F </span>
                    <span className="mintemp">68°F</span>
                  </li>

                  <li>
                    Tue
                    <img
                      src="https://openweathermap.org/img/wn/10d@2x.png"
                      alt="rain"
                    />{" "}
                    <span className="maxtemp">81°F </span>
                    <span className="mintemp">68°F</span>
                  </li>

                  <li>
                    Thu
                    <img
                      src="https://openweathermap.org/img/wn/04d@2x.png"
                      alt="broken clouds"
                    />{" "}
                    <span className="maxtemp">57°F </span>
                    <span className="mintemp">49°F</span>
                  </li>

                  <li>
                    Fri
                    <img
                      src="https://openweathermap.org/img/wn/04d@2x.png"
                      alt="broken clouds"
                    />{" "}
                    <span className="maxtemp">63°F </span>
                    <span className="mintemp">48°F</span>
                  </li>

                  <li>
                    Sat
                    <img
                      src="https://openweathermap.org/img/wn/02d@2x.png"
                      alt="few clouds"
                    />{" "}
                    <span className="maxtemp">81°F </span>
                    <span className="mintemp">68°F</span>
                  </li>

                  <li>
                    Sun
                    <img
                      src="https://openweathermap.org/img/wn/10d@2x.png"
                      alt="rain"
                    />{" "}
                    <span className="maxtemp">81°F </span>
                    <span className="mintemp">68°F</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <small>
            <a
              href="https://github.com/soniqmidd/react-temp-travel"
              target="_blank"
              rel="noreferrer"
            >
              Open Source code
            </a>
            by Sonique Middleton
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
