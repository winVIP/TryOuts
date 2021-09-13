const dbFunctions = require("../../database/dbFunctions")

async function applyDiscount(clientId, date){
    const transactions = await dbFunctions.getTransactionsById(clientId)

    if(transactions.length > 0){
        const data = transactions.map(x => x.getJSON())

        const filteredHistory = data.filter(x => {
            const month = x.date.split("-")[1]
            const transactionMonth = date.split("-")[1]

            if(transactionMonth == month) return true
            else return false
        })

        let turnover = 0
        for (let i = 0; i < filteredHistory.length; i++) {
            turnover += filteredHistory[i].amount            
        }

        if(turnover >= 1000) return true
        else return false
    }
    else return false

    // if(fs.existsSync(path.resolve(`./TransactionHistory/${clientId}.json`))){
    //     const transactionHistory = JSON.parse(fs.readFileSync(path.resolve(`./TransactionHistory/${clientId}.json`)))

        // const filteredHistory = transactionHistory.filter(x => {
        //     const month = x.date.split("-")[1]
        //     const transactionMonth = date.split("-")[1]

        //     if(transactionMonth == month) return true
        //     else return false
        // })

        // let turnover = 0
        // for (let i = 0; i < filteredHistory.length; i++) {
        //     turnover += filteredHistory[i].amount            
        // }

        // if(turnover >= 1000) return true
        // else return false
    // }
    // else return false
}

module.exports = {
    applyDiscount
}