const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/weather-app', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', () => {
  console.log('error connecting to db');
});

db.once('open', () => {
  console.log('connected to db');
});

const weatherSchema = new mongoose.Schema({
  zipCode: {
    type: Number,
    required: true,
  },
  locationName: {
    type: Number,
    required: true,
  },
});

const Weather = mongoose.model('Weather', weatherSchema);

const getWeatherObject = (zipCode) => {
  return Description.find({ zipCode: zipCode })
    .select('-_id -__v')
    .lean()
    .exec();
};

module.exports.Weather = Weather;
module.exports.db = db;
module.exports.getWeatherObject = getWeatherObject;
