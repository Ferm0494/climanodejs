const { getLugar } = require('./lugar/lugar')
const { getClima } = require('./clima/clima')
const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            demandOption: true

        }

    }).argv
    //New York == New%20York .... para meter en url.


// getLugar(argv.direccion).then(x => {
//     console.log(x);
// }).catch(e => {
//     console.log(e);
// })

const getInfo = async(dir) => {
    const Lugar = await getLugar(dir)
        // console.log(`Fefi ${Lugar.lat}`);
    const Temp = await getClima(Lugar.lon, Lugar.lat)

    return `El clima de ${Lugar.name} es de ${Temp}`





}

getInfo(argv.direccion).then(x => {
    console.log(x);
}).catch(e => {
    console.log(e);
})


// getClima(139, 35).then(x => {
//     console.log(x);
// }).catch(e => {
//     console.log("Error" + e);
// })