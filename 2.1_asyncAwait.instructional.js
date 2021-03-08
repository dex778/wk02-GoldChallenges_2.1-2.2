/* 
    1. Write a fat arrow async function that does the following:
        - uses await to fetch data from this endpoint - 'https://swapi.co/api/people/<number here>'
        - uses await to jsonify the response received from the fetch
        - console.log's the results of the fetch before console.logging a message saying 'this should print last'
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

   
     fetch("https://swapi.dev/api/people/3/")
    .then((res) => {
        return res.json()
    })

    ,then(json => {
        console.log(json)
    })
    // console.log(res);

// fetch('https://rickandmortyapi.com/api/character')
// .then ((res) => {
//     return res.json()
// })

// .then(json => {
//     console.log(json);
//     rickAndMorty(json);
// } ) 
 
/*
function rickAndMorty(character){
        let rick = character.results[0].image
        let morty = character.results[1].image
        image1.src= rick
        image2.src= morty
        console.log(rick)
        console.log(morty)
        
    }


*/