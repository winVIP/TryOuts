const monthlyTurnover = require("../MonthlyTurnover")

async function commision(amount, currency, clientId, date){
    if(await monthlyTurnover.applyDiscount(clientId, date)){
        return 0.03
    }
}

module.exports = {
    commision
}