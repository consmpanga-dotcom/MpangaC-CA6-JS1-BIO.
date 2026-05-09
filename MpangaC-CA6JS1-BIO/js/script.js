let yourName = prompt("welcome to the game! please enter your name");
alert("hello " + yourName +"!");
let playerChoice= prompt("who are you: Bear,Ninja or Hunter");
const computerChoice= "Bear";
let resultMessage= yourName + " you choose " + playerChoice + " the computer choose "+ computerChoice;
document.getElementById("result").innerHTML= resultMessage;
console.log(resultMessage);
