const axios = require('axios').default;

const getClima = async (lat, lng, appid) => {
    
    const latUri = encodeURI(lat);
    const lngUri = encodeURI(lng);
    const appidUri = encodeURI(appid);
    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latUri}&lon=${lngUri}&appid=${appidUri}`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}