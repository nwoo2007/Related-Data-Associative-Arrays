// Lesson 3: Associative Arrays & Data Options

// // Ex 1: English Grades
// let lastNames = ["Bacque", "Dunn", "Sabourin"];
// let grades = [65, 80, 100];
// let diploma = [false, true, true];

// // for (let i = 0; i < lastNames.length; i++) {
// //   console.log(
// //     `Student: ${lastNames[i]} Grade: ${grades[i]} Writing Dip: ${diploma[i]}`
// //   );
// // }

// // You try: Add  a few more entries to the arrays above.
// // Then, using the arrays above, output:

// // a. Only students with grades above 75
// console.log("Students with grades above 75%");
// for (let i = 0; i < lastNames.length; i++) {
//   if (grades[i] >= 75) {
//     console.log(
//       `Student: ${lastNames[i]} Grade: ${grades[i]} Writing Dip: ${diploma[i]}`
//     );
//   }
// }

// // b. only students who plan to write the diploma
// console.log("Students who plan to write the diploma");
// for (let i = 0; i < lastNames.length; i++) {
//     // == true is optional
//   if (diploma[i]) {
//     console.log(
//       `Student: ${lastNames[i]} Grade: ${grades[i]} Writing Dip: ${diploma[i]}`
//     );
//   }
// }

// // ex. Multi-dimensional Arrays
// var circlePositions = [
//   [100, 120],
//   [200, 50],
//   [300, 75],
// ];

// // Print the last array:
// console.log(circlePositions[2]);

// // Print 300 (In the last array);
// console.log(circlePositions[2][0]);

// // You try: print the [200, 50] array. Print the 120 in the first subarray
// console.log(circlePositions[1]);
// console.log(circlePositions[0][1]);

// // Ex. Multidimensional Rectangles
// let rectangles = [
//   [20, 50, 100, 100],
//   [100, 30, 70, 20],
//   [20, 200, 30, 90],
//   [300, 80, 60, 40],
// ];

// You Try:
// a. Use a loop to print the rectangles
// b. ad a 4th rectangle

// // Associate Arrays (objects)

// var otherPlayer = [500, 20, 12];

// var player = {
//   health: 500,
//   attackStat: 20,
//   defenseStat: 12,
// };

// // Keys: health, attackStat, defenceStat
// // Values: 500, 20, 12
// // Object contain key-value pairs

// alert(player.health); // prints 500

// // Change the attackStat to 100:
// player.attackStat = 100;

// // Increase Defence by 10:
// player.defenseStat += 10;

// // Add new key-value pairs. Add magic stat
// player.magicStat = 50;

// console.log(player);

// // Ex. Circle object

// let oneCircle = {
//   // keyname: value
//   x: 120,
//   y: cnv.height / 2,
//   radius: 50,
//   color: "maroon",
//   dx: 4,
//   dy: 3,
// };

// // You try:
// // When circle hits edge, it bounces & moves in opposite direction
// // Repeat exercise, but in the y-driection

// // Keyboard Control
// // a) When z is pressed, slow down the x-speed. WHen x is pressed, speed it up
// // b) choose 2 buttons to control the y speed

// // Keyboard event listener
// document.addEventListener("keypress", keypressHandler);

// function keypressHandler(event) {
//   // event.key displays what key(s) are being pressed
//   console.log(event.key);

//   // HORIZONTAL SPEED CONTROL
//   // Slow Down X
//   if (event.key == "z" && oneCircle.dx > 0) {
//     oneCircle.dx--;
//     // circle moves left, dx = -4 > dx = -5 --> actually speeding up
//     // therefore needs a counterbalance
//   } else if (event.key == "z" && oneCircle.dx < 0) {
//     oneCircle.dx++;
//   }

//   // Speed Up X
//   if (event.key == "x" && oneCircle.dx >= 0) {
//     oneCircle.dx++;
//   } else if (event.key == "x" && oneCircle.dx <= 0) {
//     oneCircle.dx--;
//   }

//   // VERTICAL SPEED CONTROL
//   // Slow Down Y
//   if (event.key == "a" && oneCircle.dy > 0) {
//     oneCircle.dy--;
//   } else if (event.key == "a" && oneCircle.dy < 0) {
//     oneCircle.dy++;
//   }

//   // Slow Down X
//   if (event.key == "s" && oneCircle.dy >= 0) {
//     oneCircle.dy++;
//   } else if (event.key == "s" && oneCircle.dy <= 0) {
//     oneCircle.dy--;
//   }
// }

// var oneLine = {
//   x: Math.random() * cnv.width,
//   y: Math.random() * cnv.clientHeight,
//   length: Math.random() * 100 + 20,
//   width: Math.random() * 5 + 1,
//   colour: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
//     Math.random() * 255
//   })`,
// };

var linesArray = [];

for (let i = 0; i < 100; i++) {
  linesArray.push({
    x: Math.random() * cnv.width,
    y: Math.random() * cnv.height,
    length: Math.random() * 100 + 20,
    width: Math.random() * 5 + 1,
    colour: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`,
    dx: Math.random() * (5 - 0.5) + 0.5,
    dy: Math.random() * (0.8 + 0.8) - 0.8,
  });
}

console.log(linesArray);
