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

//TOP 10 PAGE
app.get('/top-10', async(req, res) => {
  try {
    const fetchString = 'https://api.thecatapi.com/v1/images/search?limit=1&breed_id='
    const ids = ['beng', 'sava', 'norw', 'srex', 'jbob', 'rblu', 'soma','amis', 'mcoo', 'snow']

    //Store the response in an iterable array 
    const response = []

    //Loop over all breeds and fetch from the Cat API
    for(let i = 0; i < ids.length; i++) {
      const r = await axios.get(fetchString + ids[i])

      //Store the name, description, and url in a variable 
      const name = r.data[0].breeds[0].name
      const description = r.data[0].breeds[0].description
      const url = r.data[0].url

      //Return only the name, description, and url as a single object
      response.push({name: name, description: description, url: url})
    }
    
    res.status(200).send(response)
  }catch(err){console.log(err)}
})

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
app.get('/', async function (req, res, next){
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds')

    const names = response.data.map(breed => breed.name)
    res.locals.names = names
    next()
  }catch(err) {console.log(err)}
}, 
async function(req, res) {
  const names = res.locals.names

  //Get image url and name for Bengal(beng), Savannah(sava), Norweigan Forest Cat(norw), Selkirk Rex(srex)
  const id = ['beng', 'sava', 'norw', 'srex']
  const fetchString = 'https://api.thecatapi.com/v1/images/search?limit=1&breed_id='

  const bengResponse = await axios.get(fetchString + id[0])
  const beng = {
    url: bengResponse.data[0].url,
    name: bengResponse.data[0].breeds[0].name
  }

  const savaResponse = await axios.get(fetchString + id[1])
  const sava = {
    url: savaResponse.data[0].url,
    name: bengResponse.data[0].breeds[0].name
  }

  const norwResponse = await axios.get(fetchString + id[2])
  const norw = {
    url: norwResponse.data[0].url, 
    name: norwResponse.data[0].breeds[0].name
  }

  const srexResponse = await axios.get(fetchString + id[3])
  const srex = {
    url: srexResponse.data[0].url,
    name: norwResponse.data[0].breeds[0].name
  }

  //Store in object to return as response to frontend
  const top4 = {beng, sava, norw, srex}

  // res.status(200).send(bengResponse.beng[0].breeds[0].name)
  res.send({top4, names})
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})