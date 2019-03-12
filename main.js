const express = require("express")
const mysql = require("mysql")

const app = express()
const credentials = require("./credentials")

var connection = mysql.createConnection({
  host: credentials.host,
  user: credentials.user,
  password: credentials.password,
  database: credentials.database
})

connection.connect(err => {
  if (err) {
    console.log(err)
  } else {
    console.log("Connected to MySQL")
  }
})

app.listen(3000, () => {
  console.log("We Are Live On Port 3000")
})
