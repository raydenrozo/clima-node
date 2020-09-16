
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        demand: true,
        desc: 'Nombre de la ciudad para obtener el clima'
    },
    latitude: {
        alias: 'lat',
        demand: false,
        desc: 'Latitude del lugar para obtener el clima'
    },
    longitude: {
        alias: 'lon',
        demand: false,
        desc: 'Longitude de la ciudad para obtener el clima'
    },
    exclude: {
        alias: 'exclude',
        demand: false,
        desc: 'Exlcuye paramatros',
        default: 'hourly,daily'
    },
    appid: {
        alias: 'appid',
        demand: false,
        default: '9e220eb37580e4675d53f6a08c310236',
        desc: 'Api ID de la App de la ciudad para obtener el clima'
    }
}).argv;

// lugar.getLugarLatLng(argv.ciudad, argv.appid)
//     .then(( resp =>  console.log(resp)));

// clima.getClima(40.750000,-74.000000,argv.appid)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async (ciudad, appid) => {

    try {
        const coords = await lugar.getLugarLatLng(ciudad, appid);
        const temp = await clima.getClima(coords.lat,coords.lng, appid);

        return  `El clima de ${coords.ciudad} es de ${temp}.`;
    } catch (e) {

        return `No se pudo determeinar el clima de la ciudad ${argv.ciudad}`;
    }
    
}

getInfo(argv.ciudad,argv.appid)
    .then(console.log)
    .catch( console.log);