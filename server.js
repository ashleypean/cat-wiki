require('dotenv').config()

const express = require('express')
const cors = require('cors')
const axios =require('axios')

const app = express()
app.use(express.json())
const PORT = 3005

axios.defaults.headers.common['x-api-key'] = process.env.API_KEY
axios.defaults.baseURL = process.env.BASE_URL


//Router for home page
app.get('/', async(req, res) => {
try {
  let breedList = await axios.get('/breeds?attach_breed=')
  breedList = breedList.data
  res.status(200).send(breedList)
}catch(err) {
  console.log(err)
}
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})