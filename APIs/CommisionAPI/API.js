const commisionCalc = require("./CommisionCalc")
const dbFunctions = require("../../database/dbFunctions")

const express = require("express")
const { Transaction } = require("../../Models/Transaction")
const router = express.Router()

router.post("/", POSTcommision)
async function POSTcommision(req, res){
    try{
        const amount = Number(req.body.amount)
        const date = req.body.date
        const currency = req.body.currency
        const clientId = Number(req.body.client_id)

        if(/^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/.test(date) == false){
            return res.status(400).send("Incorrenct date format")
        }
        else if(Number.isNaN(amount)){
            return res.status(400).send("Incorrenct amount format")
        }
        else if(Number.isNaN(clientId)){
            return res.status(400).send("Incorrect id format")
        }

        const transaction = new Transaction({amount, date, currency, clientId})

        const commision = await commisionCalc.getCommision(amount, currency, clientId, date)

        // if(fs.existsSync(`./TransactionHistory/${clientId}.json`)){
        //     const history = JSON.parse(fs.readFileSync(`./TransactionHistory/${clientId}.json`))

        //     history.push({
        //         date: date,
        //         amount : amount
        //     })

        //     fs.writeFileSync(`./TransactionHistory/${clientId}.json`, JSON.stringify(history))
        // }
        // else{
        //     fs.writeFileSync(`./TransactionHistory/${clientId}.json`, JSON.stringify([{
        //         date: date,
        //         amount : amount
        //     }]))
        // }

        await dbFunctions.addTransaction(transaction)

        return res.status(200).send({
            amount: commision,
            currency: "EUR"
        })
    }
    catch(e){
        console.log(e)
        return res.status(500).send("Unexpected error")
    }
}

module.exports = {
    router,
    POSTcommision
}