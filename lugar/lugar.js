const axios = require('axios')



const getLugar = async(des) => {
    const decodedURL = encodeURI(des)


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${decodedURL}`,
        headers: { 'x-rapidapi-key': '4d85ec4edbmsh3cbb8fa5595257bp11e4c3jsna98c75457690' }
    });

    const resp = await instance.get()
        // console.log(resp);

    if (resp.data.Results.length === 0 || resp.data.Results[0].lat === '-9999.000000') {
        throw new Error(`El Clima de ${des} no se pudo determinar`)
    } else {
        const lat = resp.data.Results[0].lat
        const lon = resp.data.Results[0].lon
        const name = resp.data.Results[0].name

        return {
            lat,
            lon,
            name
        }
    }




}

module.exports = {
    getLugar
}