let textContent = document.querySelector("#text-area");

let person = document.querySelector("span");

let newQuote = document.querySelector("button");


const quotes = [
{
    quote:`"What's worth doing, worth doing well."`, person:"Philip Stanhop"

},
{
    quote:`"Doing what needs to be done may not make you happy, but it will make you great."`, person:"George Banerd Shaw"

},
{
    quote:`"Stay hungry, stay foolish."`, person:"Steve Jobs"
},
{
    quote:`"Success is not final, failure is not fatal: it is the courage to continue that counts."`, person:" Winston Churchill"
},
{
    quote:`"You miss 100% of the shots you don’t take."`, person:"Wayne Gretzky"
},
{
    quote:`"The computer was born to solve problems that did not exist before."`, person:"Bill Gates"
},
{
    quote:`"Everything should be made as simple as possible, but not simpler."`, person:"Albert Einstein"
},
{
    quote:`"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."`, person:"Martin Fowler"
},
{
    quote:`"Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases."`, person:" Norman Augustine"
},
{
    quote:`"Simplicity is the ultimate sophistication"` , person:"Leonardo da Vinci"
},
{
    quote:`"Your time is limited, so don’t waste it living someone else’s life."` , person:"Steve Jobs"
},
{
    quote:`"First, solve the problem. Then, write the code."` , person:"John Johnson"
},
{
    quote:`"Programs must be written for people to read, and only incidentally for machines to execute."`, person:"Harold Abelson"
}];

newQuote.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);

    textContent.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

    
});

