import axios from 'axios';

const getWeatherInformationByZipcode = async (zipCode) => {
  let response = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=655dfc390726be35679ee1f171b45301`
  );
};
