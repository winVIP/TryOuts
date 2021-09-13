const currencyConverter = require("../CurrencyConverter")

async function commision(amount, currency, clientId, date){
    const convertedAmount = await currencyConverter.convertToEur(amount, currency, date)

    let commision = convertedAmount * 0.005
    if(commision < 0.05) commision = 0.05
    return commision
}

module.exports = {
    commision
}