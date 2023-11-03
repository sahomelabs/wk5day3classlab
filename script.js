let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-titleID element. 
  // Remember there are a couple of ways to query id. Change the text of the title to something shorter.
  let mainTitle = document.getElementById('main-title')
  mainTitle.textContent ='Shorter Title'


  // Part 2
  // Select the body and change the background-color to a new color of your choice.
  let bodyElement = document.querySelector('body');
  bodyElement.style.backgroundColor = 'green';

  // Part 3
  // Select DOM's Favorite Things list and remove the last list item.
  let favoriteThingsList = document.getElementById("favorite-things");
  let lastItemInFavouritesList = favoriteThingsList.lastChild;
  favoriteThingsList.removeChild(lastItemInFavouritesList);

  // Part 4
  // Select all .special-titleclass elements and change their font-sizeto 2rem. Remember you might have to iterate through the list of elements
  const elements = document.querySelectorAll('.special-title');
    for (const element of elements) {
    element.style.fontSize = '2rem';
  }


// Part 5
// Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
let pastRacesList = document.getElementById('past-races')
    let raceListItem = pastRacesList.children[3]
    pastRacesList.removeChild(raceListItem);
 

// Part 6
// Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.
const pastListRaces = document.querySelector('li');
pastListRaces.textContent = 'New York';
const pastRaces = document.querySelector('.past-races');
pastRaces.appendChild(pastListRaces);



  // Part 7


  // Part 8
  // When you reload the page, the script.jsfile loads a random DOM quote. Let's play with the included function:
  // const randomQuote = function() {
  //   document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  // };
  // Query select the #quote-titleID element and add a click event handler. That event handler should use the function randomQuotewhenever #quote-titleis clicked
  // const randomQuote = function() {
  //   document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  // };


  // Part 9
  // Select all .blog-postclass elements. Iterate through the list of .blog-postclass elements and apply two event handlers to each node.The first event handler should be listening for mouseoutevents while the second handler should be listening for mouseenterevents. The mouseouthandler should toggle the class .purpl The mouseenterhandler should toggle the class .red


  





});
