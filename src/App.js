import { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");

  function handleCity(evt) {
    setCity(evt.target.value);
  }

  function getWeather() {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c34a0c0169abbfeb0c46422e7c278ca7`)
      .then((response) => {
        console.log(response.data);
        setWeather(response.data.weather[0].main);
        setDesc(response.data.weather[0].description);
        setTemp(response.data.main.temp);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }

  return (
    <>
      <div className="bg-black p-20">
        <div className="bg-purple-400 p-10 border-purple-400 border rounded-xl">
          <h1 className="text-3xl font-bold text-white">WEATHER REPORT</h1>
          <p>--I Can Give You A Weather Report About Your City--</p>
          <input
            type="text"
            placeholder="Enter Your City name"
            onChange={handleCity}
            className="bg-white p-2 border rounded-md"
          />
          <br />
          <button
            onClick={getWeather}
            className="bg-black text-white p-1 border rounded-md mt-3"
          >
            Get Report
          </button>
          <div className="mt-3">
            <h1 className="font-extrabold">
              <b>Weather:</b> {weather}
            </h1>
            <h1 className="font-extrabold">
              <b>Temperature:</b> {temp} °C
            </h1>
            <h1 className="font-extrabold">
              <b>Description:</b> {desc}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
