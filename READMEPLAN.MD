Main page will just be one page that is a box with buttons in the box


use objects to print out the questions and answers to the page using .innerText
// save the user choice somehow?
let the question card change out for a new question
// rewatch for content refresh?


use an array of the question objects to be pulled at random
mainQuestionBank = [ {askA}, {askB} {askC} ]

mainQuestionBank[0] = { 
<!-- questionName: askA,
questionOrder: 1,
questionAsked: "what tag is needed to link javascripcode?",
questionOptions: [ "<link>", "<javascript>", "<script>", 
questionAnswer: "<script>",    } -->

TOO LONG AND NOT EASY TO PULL FROM
USEING NEW FORMAT

randomize function runs and makes new array
// NEED TO USE SORT FOR THIS
userQuestions = [ {askB}, {askA}, {askC} ]
when user presses next button, object fills out the quiz card using innerText

// need an array for user answers to quiz, use objects
// CLONE THE QUESTIONS ASKED ARRAY USING THE FEATURE AND ADD 
// CREATE A FUNCTION THAT TAKES THE OBJECT INFO OF QUESTION ASKED IN userQuestion ARRAY AND SET IT TO RUN WHEN THE QUESTION IS LOADED FOR THE USER (SET CONDITIONAL IF SOMETHING CHANGES ON THE CARD?), LET CLONE OF userQuestions OBJECT INFO UP TO ANSWER BE CREATED IN THE userAnswers ARRAY TO AWAIT THE THE LAST PART questionAnswer TO BE FILLED IN BY USER CHOICE

BETTER WAY USING DATA METHOD FROM EVAN


// WHEN A QUESTION IS LOADED, COPY THE QUESTION OBJECT FROM THE USER QUESTIONS ARRAY, MAKE A NEW OBJECT IN THE USER ANSWERS ARRAY THAT THE USER INPUT WILL ADD TO

userAnswers = [ {userAnswerA}, etc]
// NEED TO COME UP WITH A FUNCTION TO COPY THE userQuestion OBJECT KEYS AND VALUES AND PUT THEM IN THE userAnswers ARRAY AS A NEW OBJECT

userAnswers = [ {userAnswerA}, etc]
         
        {
        questionName: askA,
         questionOrder: userQuestions[0], //MAYBE???? if not match to question bank questionOrder to take the number of the placement it was randomized in????
         questionAsked: "what tag is needed to link javascript code?",
         questionOptions: [ "<link>", "<javascript>", "<script>"], 
         questionAnswer: "<script>",    }


BETTER WAY 

    {question:"Inside which HTML element do we put the JavaScript?",
    answers: [
        { text: "<script>", correct: true },
        { text: "<javascript>", correct: false },
        { text: "<scripting>", correct: false },
        { text: "<link>", correct: false }, ]
    },

function functionUserPlacename (choice?) {
            userAnswers.push(choice)???? //LOOK UP HOW TO ADD TO OBJECT??? PUSH TO AN OBJECT???
}
if (user action) {
functionThatCreates

userAnswerA = {

// CONDITIONAL: IF question.Answer OF THE OBJECT IN userQuestions[0] and userAnswers[0] is !== THEN PENALTY


// need an array that will hold all the users attempts and numbers at the end, filled by objects



need logic to tell what button the user clicked
DONE AND MADE WORK AROUND

need logic to tell if button was right answer
DONE FROM NEW METHOD

need logic that counts time and points for every correct answer