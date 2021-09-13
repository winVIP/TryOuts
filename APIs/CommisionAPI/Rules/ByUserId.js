async function commision(amount, currency, clientId, date){
    const commisions = {
        "42": 0.05,
        "43": 0.06
    }
    return commisions[clientId]
}

module.exports = {
    commision
}