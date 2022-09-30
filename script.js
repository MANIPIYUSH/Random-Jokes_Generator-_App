const btnn = document.getElementById("jokeBtn");
const quoteText = document.getElementById("joke");
const quoteApi = "https://api.quotable.io/random";  //Api Link
//const emoji =document.querySelectorAll(".laughing-man");


btnn.addEventListener('click',randomQuoteGenerator);



function randomQuoteGenerator() {
    // Fetching the data from API
    fetch(quoteApi)
      .then(response => response.json())
      .then(data => {
        quoteText.innerText = `${data.content}`;
        
        
      });
  }
  randomQuoteGenerator();

 // emoji.addEventListener('click',)