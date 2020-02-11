const axios = require('axios')

const getClima = async(lon, lat) => {


    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=a2e240ece4af4783160ba4da9d315be0&units=metric`)
        // console.log(resp);


    return resp.data.main.temp;




}

module.exports = {
    getClima
}