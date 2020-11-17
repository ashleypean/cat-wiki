require('dotenv').config()

const express = require('express')
const axios =require('axios')

const app = express()


//Default AXIOS settings - Alllow cors and enable API key
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('x-api-key', process.env.API_KEY)
  next();
});

const PORT = 3005

//BREED SEARCH RESULTS
//Get breed info for specific cat that was searched
app.get('/breeds/search/:name', async(req, res) => {
  try {   
    //Parse the url to get the breedname
    const breedName = req.params.name
    //Send a request to the CAT API and get the response object for the specific breed
    //Send to frontend
    res.status(200).send(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`)
  }catch(err) {
    console.log(err)
  }
})



//HOME PAGE
//Get list of all cat breeds 
app.get('/', async(req, res) => {
  try {
     const breedList = await axios.get('https://api.thecatapi.com/v1/breeds')
    res.status(200).send(breedList.data)
  }catch(err) {
    console.log(err)
  }
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})