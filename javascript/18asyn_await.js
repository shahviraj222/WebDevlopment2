// this file run only in the browser not in node environment environment
// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response =>response.json())
// .then(json => console.log(json))
// .then(json => console.log(json.message))

const getresponce= async ()=>
{
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data=await response.json();
    console.log(data.message);
}

getresponce();