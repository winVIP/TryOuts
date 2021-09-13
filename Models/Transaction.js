class Transaction {
    constructor({amount, date, currency, clientId}){
        this.amount = amount,
        this.date = date,
        this.currency = currency,
        this.clientId = clientId
    }

    getAmount() {
        return this.amount
    }
    getDate() {
        return this.date
    }
    getCurrency() {
        return this.currency
    }
    getClientId() {
        return this.clientId
    }

    setAmount(amount) {
        this.amount = amount
    }
    setDate(date) {
        this.date = date    
    }
    setCurrency(currency) {
        this.currency = currency    
    }
    setClientId(clientId) {
        this.clientId = clientId    
    }

    getJSON(){
        return {
            amount: this.amount,
            date: this.date,
            currency: this.currency,
            clientId: this.clientId
        }        
    }
}

module.exports = {
    Transaction
}