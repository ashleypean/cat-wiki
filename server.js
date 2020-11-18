const express = require('express')
const axios = require('axios')
require('dotenv').config()

const app = express()

const PORT = 3001

//Default AXIOS settings - Alllow cors and enable API key
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('x-api-key', process.env.API_KEY)
  next();
});

//BREED SEARCH RESULTS
//Get breed info for specific cat that was searched
app.get('/breeds/search/:name', async(req, res, next) => {
  try {   
    //Parse the url to get the breedname
    const breedName = req.params.name
    
    //Fetch breed info from CAT API and set as local variable 
    const breedInfo = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`)
    res.locals.breedInfo = breedInfo.data

    next()
  }catch(err) {console.log(err)}
}, 
 async function(req, res) {
   //Store local breedInfo variable 
  const breedInfo = res.locals.breedInfo[0]
  //Get breed ID in order to fetch photos
  const breedID = breedInfo.id

  try {
    const photoObj = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=8&breed_id=${breedID}`)

    //Extract photos from object and store into an array
    const photos = photoObj.data.map(obj => obj.url)
    
    //Append the photos to the breedInfo obj
    //First photo will be the main, all other photos will go in the 'other photos' component
    breedInfo.photos = photos

    //Send entire breedInfo object back 
    res.status(200).send(breedInfo)
  }catch(err){console.log(err)}
})



//HOME PAGE
//Get list of all cat breeds 
app.get('/', async function (req, res){
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds')

    const names = response.data.map(breed => breed.name)
    const top10 = response.data.filter(breed => breed.adaptability === 5 && breed.intelligence === 5).splice(0,10)

    res.status(200).send({names, top10})
  }catch(err) {console.log(err)}
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})