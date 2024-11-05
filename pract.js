// // Exercise 1
// var userFirst = prompt("What is your first name?");
// var userLast = prompt("What is your last name?");
// var userHeight = +prompt("What is your height in cm?");

// var firstNames = ["Bones", "Welma", "Frank", "Han", "Jack", userFirst];
// console.log(firstNames);

// var lastNames = ["Smith", "Seger", "Mathers", "Solo", "Jackles", userLast];
// console.log(lastNames);

// var heights = [158, 169, 172, 183, 201];

// for (let i = 0; i < heights.length; i++) {
//   if (userHeight > heights[i] && userHeight < heights[i + 1]) {
//     console.log(i);
//     heights.splice(i + 1, 0, userHeight);
//     break;
//   }
// }

// console.log(heights);

// // Exercise 2
// let ticTacToeBoard = [
//   ["X", "X", "O"],
//   ["", "X", "O"],
//   ["", "", ""],
// ];
// displayBoard(ticTacToeBoard);

// // user input
// var userRow = +prompt(
//   "What row do you want to place X in? \n(0 is the top, 1 is the middle, 2 is the bottom)"
// );
// var userColumn = +prompt(
//   "What column do you want to place X in? \n(0 is left, 1 is middle, 2 is right"
// );
// // check
// while (true) {
//   if (ticTacToeBoard[userRow][userColumn] == "") {
//     break;
//   }
//   userRow = +prompt("Enter a new row");
//   userColumn = +prompt("Enter a new column");
// }
// // output
// ticTacToeBoard[userRow][userColumn] = "X";

// // Check for Win
// let results = checkForWinner("X", ticTacToeBoard);
// console.log(results);

// // FUNCTIONS

// function displayBoard(array) {
//   console.log(array);
// }

// function checkForWinner(letter, array) {
//   if (array[0][1] == "X" && array[1][1] == "X" && array[2][1] == "X") {
//     return true;
//   } else if (array[0][0] == "X" && array[1][1] == "X" && array[2][2] == "X") {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Exercise 3
// var dragon = {
//   health: 100,
//   atkString: ">",
//   attackPwr: 15,
// };
// // console.log(dragon);

// // a.
// function attack(character) {
//   let output = "";
//   for (let i = 0; i < character.attackPwr; i++) {
//     output += character.atkString;
//   }
//   console.log(output);
// }

// // b.
// var player = {
//   health: Math.floor(Math.random() * (101 - 80) + 80),
//   atkString: "!",
//   attackPwr: Math.floor(Math.random() * (20 - 10) + 10),
// };
// // console.log(player);

// // c.
// console.log("Dragon attacks!");
// attack(dragon);

// player.health -= dragon.attackPwr;
// console.log(
//   `The player is struck for ${dragon.attackPwr} and has ${player.health} health remaining.`
// );

// console.log("The player attacks!");
// attack(player);

// dragon.health -= player.attackPwr;
// console.log(
//   `The dragon is struck for ${player.attackPwr} and has ${dragon.health} health remaining.`
// );

// QUESTIONS

// 1.
// When you have arrays with related data you need to change all of them when you modify one

// // 2.
// var cities = ["Edmonton", "Calgary", "Vancouver"];
// var popByThousands = [1469, 1543, 2737];

// cities.splice(2, 0, "Winnipeg");
// popByThousands.splice(2, 0, 850);

// console.log(cities);
// console.log(popByThousands);

// // 3.
// // Name: Bulbasaur , Element: poison , Total Stats: 318
// let pokemon = [
//   ["Bulbasaur", "grass", 318],
//   ["Charmander", "fire", 309],
//   ["Squirtle", "water", 314],
// ];
// console.log(pokemon);

// // a.
// console.log(pokemon[1]);

// // b.
// pokemon[0][1] = "poison";

// // c.
// pokemon[2][2] -= 10;

// // d.
// pokemon.push(["Caterpie", "bug", 195]);

// // e.
// for (let i = 0; i < pokemon.length; i++) {
//   console.log(
//     `Name: ${pokemon[i][0]}, Element: ${pokemon[i][1]}, Total Stats: ${pokemon[i][2]}`
//   );
// }

// 4.
var abdiDog = {
  breed: "Goldren Retriever",
  weight: "30kg",
  furColor: "Dark Golden",
};
console.log(abdiDog);

var accountHolder = {
  firstName: "Tifa",
  lastName: "Lockhart",
  accountNum: 2157,
  balance: 537,
};
console.log(accountHolder);

// 5.
var car = { make: "Hyundai", model: "Tucson", weight: 950, color: "black" };

// a.
