require('dotenv').config()

const express = require('express')
const app = express()

//Router for home page



app.listen(3000, () => {
  console.log('Listening on port 3000')
})