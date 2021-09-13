const target = require("../APIs/CommisionAPI/MonthlyTurnover")
const dbFunctions = require("../database/dbFunctions")

const sinon = require("sinon")
const assert = require("assert")
const { Transaction } = require("../Models/Transaction")

describe("CommisionAPI", () => {
    describe("MonthlyTurnover", () => {
        afterEach(() => {
            sinon.restore()
        })
        it("should return true if turnover is more than or equal to 1000", async () => {
            sinon.stub(dbFunctions, "getTransactionsById").returns([
                new Transaction({
                    amount: 500,
                    date: "2021-01-01",
                    currency: "EUR",
                    clientId: 1
                }),
                new Transaction({
                    amount: 500,
                    date: "2021-01-02",
                    currency: "EUR",
                    clientId: 1
                }),
                new Transaction({
                    amount: 500,
                    date: "2021-02-01",
                    currency: "EUR",
                    clientId: 1
                })
            ])

            const result = await target.applyDiscount(1, "2021-01-03")

            assert.equal(result, true)
        })
    })
})