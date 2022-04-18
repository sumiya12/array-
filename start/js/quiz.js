// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
  ["whats ur name", "sumiya"],
  ["ur weight", "80"],
  ["ur height?", "183"],
  ["ur bmi?", "23"],
];

// 2. Store the number of questions answered correctly
// const createQuestion = (arr) => {
//   let items = " ";
//   for (let i = 0; i < arr.length; i++) {
//     let items2 = " ";
//     for (let j = 0; j < arr[i].length; j++) {
//       items2 += `<p> ${arr[i][j]} </p>`;
//     }
//     items += `<li> ${items2} </li>`;
//   }
//   return items;
// };
// document.querySelector("main").innerHTML = `<ol> ${createQuestion(
//   questions
// )} </ol>`;

// let question1 = prompt(`${question[0]}`);

let correctAnswer = 0;
let wrong = 0;
let wrongAnswer = "";
let correct = "";
let wrongstring = "";
for (let i = 0; i < questions.length; i++) {
  const question = questions[i][0];
  const answer = questions[i][1];
  const input = prompt(question);
  if (input == answer) {
    correctAnswer++;
    correct += `${question + ":  " + answer} </br> `;
  } else {
    wrong++;
    wrongAnswer = wrong - correctAnswer;
    wrongstring += `${question + ":  " + input} </br>`;
  }
}
// console.log(wrong1);

document.querySelector(
  "main"
).innerHTML = `<h1>Your correct answer is : ${correctAnswer}</h1> </br><li><b>${correct}<b></li>  </br> <h1>Your incorrect answer is : ${wrong}</h1></br> <li><b>${wrongstring}</b></li> `;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

// 4. Display the number of correct answers to the user
