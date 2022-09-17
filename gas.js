const axios = require('axios')

async function getGas() {
    try {
        const options = {
            method: 'GET',
            url: `https://ethgasstation.info/json/ethgasAPI.json`,
        }
        let result = await axios(options)
        if (result && result.data) {
            // console.log(result.data)
        }
        let gas = result.data.fast / 10
        let finalGas = gas
        return String(finalGas)
    } catch (error) {
        console.log(`getGas error `, error)
        console.log(`return default gas`)
        return '100'
    }
}

module.exports = {
    getGas
}
