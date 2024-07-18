// controllers/weatherController.js
let weatherData = {};
 
exports.getWeather = (req, res) => {
    res.status(200).json(weatherData);
}
 
exports.postWeather = (req, res) => {
    const { city, temperature, description } = req.body;
    weatherData = { city, temperature, description };
    res.status(200).json(weatherData);
}

exports.deleteWeather = (req, res) => {
    weatherData =  {};
    res.status(200).json(weatherData);
}