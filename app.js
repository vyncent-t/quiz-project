let startButton = document.getElementById('beginbutton')
let welcomePart = document.querySelector('#welcome')
let quizElite = document.querySelector('#quizContent')
let questionAsk = document.querySelector('#questionprompt')
let quizBody = document.querySelector('.quizcard')
let buttonWork = document.querySelector('#answercontainer')
let nextButton = document.querySelector('#nextcard')
let answerField = document.querySelector('#answercontainer')
startButton.addEventListener('click', startQuiz)
let randomQuestions
let currentQuestion
let nextCount = 0



if (currentQuestion >= 9) {
    nextButton.classList.add('hide')
}


function startQuiz()  {
    console.log('pogu')
    welcomePart.classList.add('hide')
    randomQuestions = mainQuestionBank.sort(() => {
        return Math.random() - .5
    })
    currentQuestion = 0
    quizElite.classList.remove('hide')
    nextButton.classList.add('hide')
    readyQuestion()
}

function readyQuestion() {
    console.log(`question of array ${currentQuestion}`)
    createQuestion(randomQuestions[currentQuestion])
}

function createQuestion(questionInput) {
    questionAsk.innerText = questionInput.question

    questionInput.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.addEventListener('click',chooseAnswer)
        buttonWork.appendChild(button)
    });


}

function middleFunction() {
    nextCount++
    if (nextCount >= 10) {
        nextButton.classList.add('hide')
        questionAsk.innerText = 'Quiz done'
        // FUNCTION FOR LEADERBOARD RUN
    }
    nextButton.classList.add('hide')
    console.log(`answered ${nextCount}`)
    if (currentQuestion <= 9) {
        resetQuestion()
        readyQuestion()}
}

function resetQuestion() {
currentQuestion++;
        while (buttonWork.firstChild) {
            buttonWork.removeChild
            (buttonWork.firstChild)
        }
}

function chooseAnswer() {
    nextButton.classList.remove('hide')
    nextButton.addEventListener('click', middleFunction)
}


//     // leaderboard launch func

// }

const mainQuestionBank = [
    {question:"Inside which HTML element do we put the JavaScript?",
    answers: [
        { text: "<script>", correct: true },
        { text: "<javascript>", correct: false },
        { text: "<scripting>", correct: false },
        { text: "<link>", correct: false }, ]
    },

    {question:"What is the correct syntax for referring to an external script?",
    answers: [
        { text: '<script src="xxx.js">', correct: true },
        { text: '<script href="xxx.js">', correct: false },
        { text: '<script name="xxx.js">', correct: false }, ]
    },

    {question:"Inside which HTML element do we put the JavaScript?",
    answers: [
        { text: "<script>", correct: true },
        { text: "<javascript>", correct: false },
        { text: "<scripting>", correct: false },
        { text: "<link>", correct: false }, ]
    },

    {question:"How do you create a function in JavaScript?",
    answers: [
        { text: "function:myFunction()", correct: false },
        { text: "function = myFunction()", correct: true },
        { text: "function myFunction()", correct: false }, ]
    },

    {question:"How do you call a function named myFunction?",
    answers: [
        { text: "call myFunction()", correct: false },
        { text: "myFunction()", correct: true },
        { text: "call function myFunction()", correct: false }, ]
    },

    {question:"How to write an IF statement in JavaScript?",
    answers: [
        { text: "if i = 1 then", correct: false },
        { text: "if i == 1 then", correct: false },
        { text: "if i = 1", correct: false },
        { text: "if (i == 1)", correct: true }, ]
    },

    {question:"How to write an IF statement for executing some code if i is NOT equal to 1?",
    answers: [
        { text: "if i != 1 then", correct: false },
        { text: "if i /== 1 then", correct: false },
        { text: "if i != 1", correct: false },
        { text: "if (i != 1)", correct: true }, ]
    },

    {question:"What is the correct while loop?",
    answers: [
        { text: "while (i <= 1)", correct: true },
        { text: "while i = 1 to 10", correct: false },
        { text: "while (i <= 1; i++)", correct: false },
        { text: "while loop = 1", correct: false }, ]
    },

    {question:"What is the correct for loop?",
    answers: [
        { text: "for (i = 1; i <= 5; i++)", correct: true },
        { text: "for i <= 1", correct: false },
        { text: "for (i = 1 to 10", correct: false },
        { text: "for (i = 1)", correct: false }, ]
    },

    {question:"How can you add a comment in a JavaScript?",
    answers: [
        { text: "//comment", correct: true },
        { text: "!comment", correct: false },
        { text: "<!-- comment", correct: false },
        { text: "~Comment", correct: false }, ]
    },
]