import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const SelectedWeatherItem = () => {
  return (
    <Card style={{ marginTop: '30px' }}>
      <Card style={{ marginTop: '0px' }}>
        <div className="card-body" style={{ marginTop: '0px' }}>
          <h4 className="card-title">
            <b>Los Angeles California</b>
          </h4>
          <div className="row">
            <div className="col-sm-4">
              <h1>72°</h1>
              <h6>Fair</h6>
            </div>
            <div className="col-sm-4 col-5"></div>
            <div className="col-sm-4">
              <h5>Precipitation 7%</h5>
              <h5>Humidity 90%</h5>
              <h5>Wind 8 mph</h5>
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
