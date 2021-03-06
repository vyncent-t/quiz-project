let startButton = document.getElementById('beginbutton')
let welcomePart = document.querySelector('#welcome')
let quizElite = document.querySelector('#quizContent')
let questionAsk = document.querySelector('#questionprompt')
let quizBody = document.querySelector('.quizcard')
let buttonWork = document.querySelector('#answercontainer')
let nextButton = document.querySelector('#nextcard')
let answerField = document.querySelector('#answercontainer')
let wallCard = document.querySelector('#leaderwall')
startButton.addEventListener('click', startQuiz)
startButton.addEventListener('click', quizTimer)
let retry = document.querySelector('#redoquiz')
let clickLeader = document.querySelector('#leaderboardbutton')

let randomQuestions
let currentQuestion
let nextCount = 0
let userLocation = 0


//setting leaderboard object
let allPlayers = localStorage.getItem("leaderBoard");
let currentPlayer = {
    name: '',
    points: 0,
}

//leaderboard part
let playerList = document.querySelector('#previousPlays')


function playerInfo() {
    const games = document.createElement('li')
    games.innerText = `${currentPlayer.name} | ${currentPlayer.points}`
    playerList.appendChild(games)
    if(allPlayers === null){
        localStorage.setItem('leaderBoard', JSON.stringify([currentPlayer]));
    } else {
        let parsed = JSON.parse(allPlayers);
        parsed.push(currentPlayer);
        localStorage.setItem('leaderBoard', JSON.stringify(parsed));
        allPlayers = localStorage.getItem("leaderBoard");
    }
    
}

// time settings
let timeRemaining = document.querySelector('#timer')
timeRemaining.classList.add('hide')
let timerMaxMinutes = 6;
let totalTimer = timerMaxMinutes * 60;

function quizTimer() {
    

   let timer =  setInterval(function() {
    let quizMinutes = Math.floor(totalTimer / 60);
    let quizSeconds = totalTimer % 60;
    timeRemaining.innerText = `${quizMinutes} minutes and ${quizSeconds} remaining`;
    totalTimer--;
   if(totalTimer <= 0) {
    clearInterval(timer)
    timeRemaining.innerText = `Out of time!`
    nextButton.classList.add('hide')
    leaderboard()
    questionAsk.innerText = `Quiz complete! ${currentPlayer.name} earned ${currentPlayer.points} / 10`
   }
}
, 1000)

}

// free placements
wallCard.classList.add('hide')
clickLeader.addEventListener('click', leaderboard)

if (currentQuestion >= 9) {
    nextButton.classList.add('hide')
}

// launches quiz
function startQuiz()  {
    if(allPlayers !== null){
        playerList.innerHTML = "";
        parsed = JSON.parse(allPlayers);
        parsed.forEach(player => {
            let item = document.createElement('li');
            item.innerText = `${player.name} | ${player.points}`
            playerList.appendChild(item)
        })
    }

    currentPlayer.name = document.querySelector('#nameInput').value
    timeRemaining.classList.remove('hide')
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

// mkaes quiz questions
function readyQuestion() {
    console.log(`question of array ${currentQuestion}`)
    createQuestion(randomQuestions[currentQuestion])
}

function createQuestion(questionInput) {
    questionAsk.innerText = questionInput.question

    questionInput.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('available')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',chooseAnswer)
        buttonWork.appendChild(button)
    });


}

// bridge function
function middleFunction() {
    nextCount++
    if (nextCount >= 10) {
        nextButton.classList.add('hide')
        questionAsk.innerText = `Quiz complete! ${currentPlayer.name} earned ${currentPlayer.points} / 10`
        leaderboard ()
    }
    nextButton.classList.add('hide')
    console.log(`answered ${nextCount}`)
    if (currentQuestion <= 9) {
    readyQuestion()}
}

function resetQuestion() {
currentQuestion++;
userLocation++
questionAsk.innerText = `Quiz question ${userLocation}/10 complete! `
        while (buttonWork.firstChild) {
            buttonWork.removeChild
            (buttonWork.firstChild)
        }
}


function removeChoice () {
document.querySelectorAll('.available').classList.add('hide')
}

function chooseAnswer(e) {
    const userChoice = e.target
    const correctChoice = userChoice.dataset.correct
    userChoice.classList.remove('available')


    nextButton.classList.remove('hide')
    nextButton.addEventListener('click', middleFunction)
    if (correctChoice) {
        currentPlayer.points++
    } else if (!correctChoice) { 
        totalTimer = totalTimer - 60
        console.log(` wrong answer. player points ${currentPlayer.points}`) }
    console.log(`player points ${currentPlayer.points}`)
    resetQuestion()

}

function reloadpage() {
    location.reload()
}

function leaderboard () {
    quizBody.classList.add('hide')
    wallCard.classList.remove('hide')
    retry.addEventListener('click', reloadpage)
    playerInfo()
}

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
        { text: "while (i <= !)", correct: false },
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