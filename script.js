const question = document.getElementById('question');
const choices =Array.from(document.getElementsByClassName("choice-text"));
let score = document.getElementById('score_value');
console.log(choices);
let currentQuestion = {};
let acceptAnswers = false;
let questionCounter = 0;
let availableQuestion = [];

let questions = [{
question: "What is the capital of France?",
choice1: "Paris",
choice2: "London",
choice3: "Berlin",
choice4: "Rome",
Answer: 1
},
{
question: "Who invented the telephone?",
choice1: "Alexander Graham Bell",
choice2: "Thomas Edison",
choice3: "Nikola Tesla",
choice4: "Guglielmo Marconi",
  answer: 1
}
,{
question: "Who painted the Mona Lisa?",
choice1: "Michelangelo",
choice2: "Leonardo da Vinci",
choice3: "Raphael",
choice4: "Rembrandt",
 answer: 2
  },
  {
question: "Who wrote the novel 'Pride and Prejudice'?",
choice1: "Jane Austen",
choice2: "Charles Dickens",
choice3: "Mark Twain",
choice4: "William Shakespeare",
 answer: 1
  },

  {
question: "What is the highest mountain peak in the world?",
choice1: "Mount Everest",
choice2: "K2",
choice3: "Kilimanjaro",
choice4: "Denali",
 answer: 1
  }
]
const CORRECT_BONUS = 10;
const MAX_QUESTION = 5;
 
startGame =() =>{
    if(availableQuestion === 0 || questionCounter >= MAX_QUESTION){
    //go to end
    console.log("peter ngacaga");
    // return window.location.assign("/end.html");
}

    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions]
    console.log(availableQuestion);
    getNewQuestion();
};
getNewQuestion = () => {
    questionCounter++;
    score ++;
    score.innerText = 4;
    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText =currentQuestion.question;

     choices.forEach(choice =>{
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number]; 
     });
     availableQuestion.splice(questionIndex, 1);
     acceptAnswers = true

};

choices.forEach(choice =>{
    choice.addEventListener("click", e =>{
        if(!acceptAnswers)return;

        acceptAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"]; 
        const classToApply =  

        getNewQuestion();
    } )
})

startGame();