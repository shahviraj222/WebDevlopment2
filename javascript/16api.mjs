// api runing asynchronously 
// here one mre thing is promise fetch return and than we must have to convert into json and than print the json.message
// superhero.com api's token
// https://www.superheroapi.com/api.php/10223569763528853/30
import fetch from 'node-fetch'

fetch('https://dog.ceo/api/breeds/image/random')
.then(response =>response.json())
.then(json => console.log(json))
.then(json => console.log(json.message))
