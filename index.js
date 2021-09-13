const commisionAPI = require("./APIs/CommisionAPI/API")
const express = require("express")

const port = 8000
const app = express()
app.use(express.json())

app.use("/commisions", commisionAPI.router)

app.listen(port, () => console.log("Running"))