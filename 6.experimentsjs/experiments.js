const timesToRepeat = 10; // Number of times to repeat the character
const character = '🐩';    // The character to repeat

// some loop that takes that character and repeats it that many times
let answer="";
for(let i = 0; i< timesToRepeat; i++){
    answer = answer + character;
}

//write your code here
console.log(answer);      // "🐩🐩🐩🐩🐩🐩🐩🐩🐩🐩"
 


//cheating way to do
 console.log("".padStart(timesToRepeat,character));



 //F(x) = x+2;  Function

 function addTwo(number) {  //addTwo(5)
    return number + 2;  
  }
  
  const finalAnswer = addTwo(5);
  console.log(finalAnswer);  //output-7

  const otherAnswer = addTwo(10);
  console.log(otherAnswer);  //output-12


  function greet(firstName, lastName, honorific, greeting) {
    return `${greeting} ${honorific} ${lastName}! I’m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
  }
  
  console.log(greet("Brian", "Holt", "Lord", "Salutations"));
  console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));

//functions
const myHomeCity = "Seattle";
const myHomeState = "Washington";
const myHomeCountry = "USA";

function logOutYourHome(city, state, country) {
  console.log(`You are from ${city}, ${state} ${country}.`);
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry);
logOutYourHome("Minneapolis", "Minnesota", myHomeCountry);
logOutYourHome("Bergamo", "italy", "Lombardy");

//woof, meeeeew ,chirp chirp
function bark() {
    console.log("woof");
  }
  
const meow = function () {
    console.log("meeeeeeeow");
  };
  
  // the => is just = > put together, the font just combines them to one glyph
const chirp = () => {
    console.log("chirp chirp");
  };

const chirp = (birdNoise) => {  //const let var
    console.log("chirp chirp");
  };


console.log(meow); //output:   [Function meow]
console.log(meow); //output:   undefined
  
bark();
meow();
chirp();
