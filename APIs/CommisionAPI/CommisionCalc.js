const fs = require("fs")

async function getCommision(amount, currency, clientId, date){
    let commision = undefined

    const rules = fs.readdirSync("./APIs/CommisionAPI/Rules")

    for (let i = 0; i < rules.length; i++) {
        const tempCommision = await require(`./Rules/${rules[i]}`).commision(amount, currency, clientId, date)
        if(commision == undefined || commision > tempCommision) commision = tempCommision
    }

    return commision.toFixed(2)
}

module.exports = {
    getCommision
}