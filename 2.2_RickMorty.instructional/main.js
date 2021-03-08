// 'https://rickandmortyapi.com/api/character'
/*
    - Use the provided HTML, CSS, and JS files to fetch images of two separate characters from the Rick and Morty API. You will not need to edit/change anything in the HTML file, everything you need is already there.
    - Your fetch call to the specified endpoint is already defined in the script.js file. Finish coding the necessary promise resolvers for your fetch to access character information from the API.
    - Once you are seeing character information in the console, define a function that will be used to display the data. Your jsonified data from the API will need to be passed to this function.
    Inside the display function you will need to:
    1. Declare two variables used to store the separate character image links from the API.
    2. Grab each image element from the index.html file, and set the src to be the image link you stored in a variable during step 1.
    After you are seeing images of two different characters, use the attached style.css file to style each image with the following properties:
    1. Each image must have a border-radius
    2. Each image must have a border
    3. Each image must be centered
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS
const image1 = document.querySelector('#imageOne')//.src // these two variables are used to to retrieve my .html. This is where we use DOM manipulation to connect to my .js file. Here I'm "grabbing".
const image2 = document.querySelector('#imageTwo')

    fetch('https://rickandmortyapi.com/api/character')
    .then ((res) => {  //here is where I am calling my API data.
        return res.json() // Here is where I get it to "print" in a jsonified data to be read in the console.
    })
    
    .then((json) => {  //.then takes up to 2 arguments. The first argument is a callback function for the resolved case of the promise. Here, it is taking the 'json' and 
        console.log(json);
        rickAndMorty(json); //here we are declaring the function which we will use write so that it does something with the data starting on line 29. json is the whole jsonified object.
    } ) 
    
    function rickAndMorty(character){ //here, character is the parameter that will be used to pass the data we are grabbing from the json object that has been fetched from lines, 19-27.
        let rick = character.results[0].image //in lines 30-31, I am grabbing two objects that I specifically want from the json and setting them to variables that will be later used. 
        // console.log(character) to get the jsonified object. Character here is the same as line 26 json.
        let morty = character.results[1].image// "Results" is the property inside the json I am using to grab the image links to be downloaded for them to show up on my screen.
        image1.src = rick //here I am calling the variables that are using DOM. 
        image2.src = morty

        /* ALTERNATE WAY OF GRABBING HTML AND LINKING IT TO .JS */ 
        // This wouldn't require lines 16 and 17.
        // document.getElementById("imageOne").src = rick // 
        // document.getElementById("imageTwo").src = morty

        console.log(rick)
        console.log(morty)
        
    }

    
/*
    

// const baseURL = 'https://api.spacexdata.com/v2/rockets';
// const searchForm = document.querySelector('form');
// const spaceShips = document.querySelector('ul');
// searchForm.addEventListener('submit', fetchSpace);
// function fetchSpace(e){
//     e.preventDefault();    
//     fetch(baseURL)
//       .then(result => result.json())
//       .then(json => {
//           console.log(json);
//           displayRockets(json);
//       })    
// }

// function displayRockets(rockets){
//     rockets.forEach(r => {
//         let rocket = document.createElement('li');
//         rocket.innerText = r.name;
//         spaceShips.appendChild(rocket);
//     })
// }
*/
