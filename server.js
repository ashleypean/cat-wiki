require('dotenv').config()

const express = require('express')
const axios = require('axios')

const app = express()


//Default AXIOS settings - Alllow cors and enable API key
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('x-api-key', process.env.API_KEY)
  next();
});

const PORT = 3001

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
    breedInfo.photos = photos

    //Send entire breedInfo object back 
    res.status(200).send(breedInfo)
  }catch(err){console.log(err)}
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