/* 
    1. Write a fat arrow async function that does the following:
        - uses await to fetch data from this endpoint - 'https://swapi.co/api/people/<number here>'
        - uses await to jsonify the response received from the fetch
        - console.log's the results of the fetch before console.logging a message saying 'this should print last'
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

   
    async function char (){
    let swapi = await fetch("https://swapi.dev/api/people/3/")
    let second = await swapi.json();
    console.log(swapi);
    console.log(second);
    console.log("this should print last");

    }

    char();

    // async function fetchQuote(){
    //     const response =  await fetch(baseURL);
    //     const json = await response.json();
    //     console.log('Async/Await: ', json)
    // }

  

    