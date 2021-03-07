/* 
    1. Write a fat arrow async function that does the following:
        - uses await to fetch data from this endpoint - 'https://swapi.co/api/people/<number here>'
        - uses await to jsonify the response received from the fetch
        - console.log's the results of the fetch before console.logging a message saying 'this should print last'
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

async swapi() => {
    await fetch("https://swapi.dev/api/people/3/")
    .then(res => res.json())
    .then(json => {
    console.log(json))
    console.log("this should print last")
    }
}
 swapi();
// console.log("this should print last")


// function slowResult (){
//     fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
//     .then(res => res.json())
//     .then(json => {json.lolProperty = 'this is a random property!'; return json;})
//     .then(json => console.log(json))
//     console.log('this is a message')
// }

// slowResult();