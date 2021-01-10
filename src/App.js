import NavBar from './components/NavBar';
import ListOfPlaces from './components/ListOfPlaces';
import SelectedWeatherItem from './components/SelectedWeatherItem';

function App() {
  return (
    <div className="container">
      <NavBar></NavBar>
      <ListOfPlaces></ListOfPlaces>
      <SelectedWeatherItem></SelectedWeatherItem>
    </div>
  );
}

export default App;
