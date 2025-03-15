let textContent = document.querySelector("#text-area");

let person = document.querySelector("span");

let newQuote = document.querySelector("button");


const quotes = [
{
    quote:`"BASIC TECHNOLOGIES OF THE WEB EXPLAINED (INCLUDING USE CASES)"`, person:"Philip Stanhop"

},
{
    quote:`"INTRODUCTION TO HYPERTEXT MARK-UP LANGUAGE (HTML)"`, person:"George Banerd Shaw"

},
{
    quote:`"CASCADING STYLE SHEET (CSS)"`, person:"Steve Hawkins"
},
{
    quote:`"BASIC TECHNOLOGIES OF THE WEB EXPLAINED"`, person:"Albert Einstein"
},
{
    quote:`"INTRODUCTION TO HYPERTEXT MARK-UP LANGUAGE"`, person:"Micheal Faraday"
},
{
    quote:`"coming"`, person:"Mahat Magandi"
},
{
    quote:`"empty"`, person:"Fela Kuti"
},
{
    quote:`"later"`, person:"Ada Lovelace"
},
{
    quote:`"for all of us"`, person:"Alan Turin"
},
{
    quote:`"me too"` , person:"Charles Barbage"
},
{
    quote:`"byeee"`, person:"Abdulkadir Musa"
}];

newQuote.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);

    textContent.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

    
});

