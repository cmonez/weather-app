import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import getWeatherInformationByZipcode from '../helpers';

const NavBar = ({ setWeather }) => {
  const [zipCode, setZipCode] = useState('');
  const onChange = (event) => {
    console.log('zipcode', event.target.value);
    setZipCode(event.target.value);
  };

  const searchTheZipCode = (zip) => {
    getWeatherInformationByZipcode(zipCode).then(({ data }) => {
<<<<<<< HEAD
      setWeather({
        name: data.name,
        description: data.weather[0].description,
        windSpeed: data.wind.speed,
        temperature: data.main.temp,
      });
=======
      console.log('Here you go', data);
>>>>>>> b89e1b6d96b1aeb177858807fc025aeed388bfd4
    });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Form inline>
          <FormControl
            type="text"
            placeholder="Zip Code"
            className="mr-sm-2"
            onChange={onChange}
          />
          <Button variant="outline-success" onClick={searchTheZipCode}>
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
