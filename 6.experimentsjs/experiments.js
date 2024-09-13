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
// console.log("".padStart(ti))