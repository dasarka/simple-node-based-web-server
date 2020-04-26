const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=d1271b2b03f130f532abdce75be6e05e&query='+ longitude +','+ latitude +'&units=m';
    //const url = 'https://api.darksky.net/forecast/a9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
   
    request({ url:url,json:true }, (error,response) => {
        if (error) {
            callback('Unbale to connect to weather services due to internet connection interrupted!',undefined);
        }
        else if (response.body.error) {
            callback('Unbale to find the location. Try another search.',undefined);
        } else {
            callback(undefined, `${response.body.current.weather_descriptions[0]} . It is currently ${response.body.current.temperature} degrees out.It feels like ${response.body.current.feelslike} degrees out.`);
 
        }
    })
}

module.exports = forecast