import React, {useState} from 'react'
import './App.css'



function App() {
  const apiKey ='a859c2ffab15b3fef27a713f789ac040'
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")

  const getWeather= (event) => {
    if (event.key == 'Enter'){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(
        Response => Response.json()
      ).then(
        data => {
          setWeatherData(data)
          setCity('')
        }
      )
    }
  }
  return (
    <div className='container'>
      <input
      className='input'
      onChange={ e => setCity(e.target.value)}
      value={city}
      onKeyDown={getWeather}
      placeholder='Enter the city...'></input>

      {typeof weatherData.main === 'underfine'? (
        <div>
          <p>Welcome to weather app! Enter a city</p>
        </div>
      ): (
        <div>
          <p>{weatherData.name}</p>
          <p>{weatherData.main ? <p>{weatherData.main.temp}°F</p>: null}</p>
        </div>
      )}
    </div>
  )
}

export default App