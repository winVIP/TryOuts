const target = require("../index")
const axios = require("axios").default
const { db } = require("../database/firebase")

const assert = require("assert")

describe("CommisionAPI", () => {
    describe("CommisionAPI", () => {
        it("should return amount 0.05 if client_id is 42", async () => {
            const bodys = [
                {
                    data:{
                        "date": "2021-01-02",
                        "amount": "2000.00",
                        "currency": "EUR",
                        "client_id": 42
                    },
                    result: 0.05
                },
                {
                    data:{
                        "date": "2021-01-03",
                        "amount": "500.00",
                        "currency": "EUR",
                        "client_id": 1
                    },
                    result: 2.50
                },
                {
                    data:{
                        "date": "2021-01-04",
                        "amount": "499.00",
                        "currency": "EUR",
                        "client_id": 1
                    },
                    result: 2.50
                },
                {
                    data:{
                        "date": "2021-01-05",
                        "amount": "100.00",
                        "currency": "EUR",
                        "client_id": 1
                    },
                    result: 0.50
                },
                {
                    data:{
                        "date": "2021-01-06",
                        "amount": "1.00",
                        "currency": "EUR",
                        "client_id": 1
                    },
                    result: 0.03
                },
                {
                    data:{
                        "date": "2021-02-01",
                        "amount": "500.00",
                        "currency": "EUR",
                        "client_id": 1
                    },
                    result: 2.50
                }                
            ]

            for (let i = 0; i < bodys.length; i++) {
                axios.post("http://localhost:8000/commisions", bodys[i].data).then(x => {
                    assert.equal(x.data.amount, bodys[i].result)
                })
            }

            const query = await db.collection("Transactions").get()

            query.docs.map(async doc => await doc.ref.delete())
        })
    })
})