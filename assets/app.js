
let playerMove = prompt("Your Move");

let computerMove = ["rock", "paper","scissors"].at(Math.floor(Math.random() * 3));


if (playerMove === computerMove ) {
    console.log ("Draw!");
} else if (
    (playerMove.toLowerCase() === "rock" && computerMove === "scissors") || 
    (playerMove.toLowerCase() === "scissors" && computerMove === "paper") ||
    (playerMove.toLowerCase() === "paper" && computerMove === "rock"))  {
    console.log("Fatality!");
} else if (
    (computerMove === "rock" && playerMove.toLowerCase() === "scissors") ||
    (computerMove === "scissors" && playerMove.toLowerCase() === "paper") ||
    (computerMove === "paper" && playerMove.toLowerCase() === "rock")) {
    console.log("Computer win!");

} else {
    console.log("Invalid Move!")
}


        

    
     

    