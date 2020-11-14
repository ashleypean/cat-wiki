require('dotenv').config()

const express = require('express')
const axios =require('axios')

const app = express()
app.use(express.json())

//Default AXIOS settings - Alllow cors and enable API key
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('x-api-key', process.env.API_KEY)
  next();
});

const PORT = 3005

axios.defaults.baseURL = process.env.BASE_URL



//Router for home page
app.get('/', async(req, res) => {
try {
  const options = {cors: 'no-cors'}
  let breedList = await axios.get('/breeds', options)
  res.status(200).send(breedList.data)
  console.log('server!')
}catch(err) {
  console.log(err)
}
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})