import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ListOfPlaces from './components/ListOfPlaces';
import SelectedWeatherItem from './components/SelectedWeatherItem';
import getWeatherInformationByZipcode from './helpers';

function App() {
  const [selectedWeather, setSelectedWeather] = useState({
    name: 'San Rafael',
    description: 'Fair',
    windSpeed: 9,
    temperature: 8,
  });

  useEffect(() => {
    getWeatherInformationByZipcode('94901').then(({ data }) => {
      setSelectedWeather({
        name: data.name,
        description: data.weather[0].description,
        windSpeed: data.wind.speed,
        temperature: data.main.temp,
      });
    });
  }, []);

  return (
    <div className="container">
      <NavBar setWeather={setSelectedWeather}></NavBar>
      <ListOfPlaces></ListOfPlaces>
      <SelectedWeatherItem
        weatherToDisplay={selectedWeather}
      ></SelectedWeatherItem>
    </div>
  );
}

export default App;
