import fetch from 'node-fetch'
// globalThis.fetch = fetch
// https://dog.ceo/api/breeds/image/random link for getting images on our platform'
// try fetch = require('https://dog.ceo/api/breeds/image/random ')
// const parse = require('node-fetch')
// Tryfetch = require('node-fetch')
fetch('https://dog.ceo/api/breeds/image/random')
.then(response =>response.json())
.then(json => console.log(json))
.then(json => console.log(json.message))
// import {fetch} from 'node-fetch';
// const response = await fetch('https://api.github.com/users/github');