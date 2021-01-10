import ListGroup from 'react-bootstrap/ListGroup';
import WeatherListItem from './WeatherListItem';

const ListOfPlaces = () => {
  return (
    <ListGroup>
      <WeatherListItem/>
      <WeatherListItem/>
      <WeatherListItem/>
    </ListGroup>
  );
};

export default ListOfPlaces;