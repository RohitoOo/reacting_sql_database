const express = require("express")

const cors = require("cors")

const app = express()
app.use(cors())

app.get("/", (req, res) => {
  res.send("Okay You Go me")
})

const port = 3000
app.listen(port, () => {
  console.log("We are live on port ", port)
})
