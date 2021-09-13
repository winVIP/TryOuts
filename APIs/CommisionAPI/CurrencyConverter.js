const axios = require("axios").default

async function convertToEur(amount, originalCurrency, date){
    const result = await axios.get("https://api.exchangerate.host/" + date)

    const rate = result.data.rates[originalCurrency]

    return amount * rate
}

module.exports = {
    convertToEur
}