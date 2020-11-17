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
app.get('/breeds/search/:name', async (req, res, next) => {
  //Parse the url to get the breedname
   const breedName = req.params.name
   try {   
    // Send request to the CAT API for the specific breed
    res.locals.breedInfo = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`)
    next()
  }catch(err) {console.log(err)}

  
  //Call second function to get the breed photos and add them to the response object
}, async function (req, res, next) {
    const breedInfo = res.locals.breedInfo
    //Get breed ID from breedInfo object. Use breed ID to request photos from Cat API
    const breedID = breedInfo.data[0].id
    
    try{
      const photoObj = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=9&breed_id=${breedID}`)

      //Parse the obj to only retrive the photo URL's and store in an array
      const photos = (photoObj.data.map(x=> x.url))
      console.log(photos)

      //Attach the photo array to the breedInfo obj
      breedInfo.data[0].photos = photos
      
      //Send the updated object to user's view 
      res.status(200).send(breedInfo.data)
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