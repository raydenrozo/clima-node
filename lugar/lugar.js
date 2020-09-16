const axios = require('axios').default;


const getLugarLatLng =  async ( ciudad, appid ) => {
    
    const ciudadUri = encodeURI(ciudad);

    const appidUri = encodeURI(appid);
    

    const instance = axios.create({

        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${ciudadUri}&appid=${appidUri}`,
        // `https://api.openweathermap.org/data/2.5/onecall?lat=${latUri}&lon=${lonUri}&exclude=${excludeUri}&appid=${appidUri}`,
        //timeout: 1000,
        headers: {'x-rapidapi-key': '8ef5ae7392msh55a0f013802c46ap1be66ajsn6eb2440f4b17'}
    });  
    const resp = await instance.get();
    if (resp.data.length === 0) {
        throw new Error('No hay resultados para la direccion ingresada');
    } 

    const data = resp.data;

    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    // instance.get().then(resp => {
    //     console.log(resp.data);
    // }).catch(err => {
    //     console.error(err);
    // });
    return {
        ciudad,
        lat,
        lng,
    };
}

module.exports = {
    getLugarLatLng
}
// axios.get('https://api.openweathermap.org/data/2.5/onecall?', {
//     params: {
//         lat: 33.441792,
//         lon: -94.037689,
//         exclude: 'hourly,daily',
//         appid: '9e220eb37580e4675d53f6a08c310236'
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });