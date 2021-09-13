const { Transaction } = require("../Models/Transaction")
const { db } = require("./firebase")

async function addTransaction(transaction){
    await db.collection("Transactions").add(transaction.getJSON())
}

async function getTransactionsById(clientId){
    const query = await db.collection("Transactions").where("clientId", "==", clientId).get()

    const transactions = query.docs.map(doc => new Transaction(doc.data()))

    return transactions
}

module.exports = {
    addTransaction,
    getTransactionsById
}
