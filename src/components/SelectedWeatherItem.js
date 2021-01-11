import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const SelectedWeatherItem = ({ weatherToDisplay }) => {
  return (
    <Card style={{ marginTop: '30px' }}>
      <Card style={{ marginTop: '0px' }}>
        <div className="card-body" style={{ marginTop: '0px' }}>
          <h4 className="card-title">
            <b>{weatherToDisplay.name}</b>
          </h4>
          <div className="row">
            <div className="col-sm-4">
              <h1>{weatherToDisplay.temperature}°</h1>
              <h6>{weatherToDisplay.temperature}</h6>
            </div>
            <div className="col-sm-4 col-5"></div>
            <div className="col-sm-4">
              <h5>Precipitation 7%</h5>
              <h5>Humidity 90%</h5>
              <h5>
                Wind
                {weatherToDisplay.windSpeed}
                mph
              </h5>
              <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4 col-5"></div>
                <div className="col-sm-4"></div>
              </div>
            </div>
          </div>
          <a href="#" className="btn btn-primary">
            Add to favorites
          </a>
        </div>
      </Card>
    </Card>
  );
};

export default SelectedWeatherItem;
