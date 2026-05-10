let yourName = prompt("welcome to the game! please enter your name"); // aske the player his name
alert("hello " + yourName +"!"); // respond the player
let playerChoice= prompt("who are you: Bear,Ninja or Hunter"); // aske the player to choosse
const computerChoice= "Bear"; // computer choice
let resultMessage= yourName + " you choose " + playerChoice + " the computer choose "+ computerChoice; // create the game message
document.getElementById("result").innerHTML= resultMessage; // display message on webpage
console.log(resultMessage); // display message in console
