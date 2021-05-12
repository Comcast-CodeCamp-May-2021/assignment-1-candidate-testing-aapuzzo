const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["1) Who was the first American woman in space? ", "2) True or False: 5000 meters == 5 Kilometers. ", "3) (5+3)/2*10= ? ", "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "5) What is the minimum crew size for the iss? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function makeSpacer(){
  console.log("-----------------------------");
}

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(let i = 0; i < questions.length; i++)
  candidateAnswers.push(input.question(questions[i]));
  makeSpacer();
}

function gradeQuiz(candidateAnswers) {
  let correctCount = 0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (let i = 0; i < candidateAnswers.length; i++)
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      console.log(`Good job ${candidateName}, ${candidateAnswers[i]} is correct.`);
      makeSpacer();
      correctCount++
    }
    else {
      console.log(`I am sorry ${candidateName}, but ${candidateAnswers[i]} is wrong. \nThe correct answer is ${correctAnswers[i]}.`);
      makeSpacer();
    }


  let grade = (correctCount/questions.length)*100;
  if (grade >= 80){
    console.log(`>>> Overall Grade: ${grade}% (${correctCount} of ${questions.length} correct) <<<`);
    console.log(`>>> Status: PASS <<<`);
  } 
  else {
    console.log(`>>> Overall Grade: ${grade}% (${correctCount} of ${questions.length} correct) <<<`);
    console.log(`>>> Status: Failed <<<`);
  }
    
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hello ${candidateName}, good luck on your exam!`);
  makeSpacer();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};