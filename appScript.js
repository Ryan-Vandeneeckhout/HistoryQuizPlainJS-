
// Global Variable List Start// 

let choice1 = "";
let choice2 = "";
let choice3 = "";
let choice4 = "";
let answer = ""; 
let score = 0;
let TIMER;
let playaudio = 0; 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const shuffledNumbers = numbers.sort((a, b) => 0.5 - Math.random());
let questionsnumbers = 1;

// Global Variable List End//

//Start Quiz Function - Removes Main Menu, Nav Colours, and Makes the Quiz Visible and Populates the Quiz Inputs With the Question List// 


function startQuestions () {
  
    removeStartMenu();
    navChangeForQuiz();
    quizComponentsVisibility();
    questionList(); 

}

//Removes Main Menu to allow Quiz to be Seen

function removeStartMenu () {

    var startmenu = document.getElementById("startmenu");
    startmenu.remove();
    var creditremove = document.getElementById("credits");
    creditremove.remove(creditremove.childNodes); 

}

//Allows the Quiz to become Visible Also allows for the Background Video to be seen// 

function quizComponentsVisibility () {

    quiz.style.visibility = "visible";
    quiz.style.position = "static"; 
    extracon.style.visibility = "visible";
    extracon.style.position = "static";
    myVideo.style.visibility = "visible"; 

}

//Allows for Quiz Dependent Coloured Navs Outside of the Main Site// 

function navChangeForQuiz() {

    document.body.style.backgroundImage = "url('nicholas_habbe_britannia_rules_the_waves_1')"; 
    document.body.style.backgroundColor = "#012169";
    document.getElementById("boot").style.backgroundColor = "#C8102E";
    document.getElementById("boot").style.border = "2px solid white";

}

// Start of QuizList 

function questionList () {
        
    let count = shuffledNumbers.shift();

    document.getElementById("sbox").innerHTML = "<p>" + "Question Number " + questionsnumbers + "</p>";
    

    if (count > 0 ) {
    question = "Which Country Was Never a Formal Part of The British Empire?";
    choice1 = "Sudan";
    choice2 = "Belize";
    choice3 = "Afghanistan";
    choice4 = "South Africa";
    answer = "Afghanistan"; 
 
    }
        
    if (count > 1 ) {
    question = "What is the First Colony of the British Empire?";
    choice1 = "Wales";
    choice2 = "North American Colonies";
    choice3 = "Scotland";
    choice4 = "Ireland";
    answer = "Ireland"; 

    //Deprecated Function No Longer Needed 

    let inputElements = document.querySelectorAll(".quiz input");

        for (let i = 0, max = inputElements.length; i < max; i++) {
            inputElements[i].classList.add("blue");
        }

    }

    //End

    if (count > 2 ) {
    question = "Who is the Black Prince?";
    choice1 = "Henry I";
    choice2 = "Henry IV";
    choice3 = "Edward III";
    choice4 = "Edward of Woodstock";
    answer = "Edward of Woodstock"; 

    }

    if (count > 3 ) {
    question = "Who is the Longest Regining British Monarch?";
    choice1 = "Alfred the Great";
    choice2 = "Cnut the Great";
    choice3 = "Elizabeth II";
    choice4 = "Elizabeth I";
    answer = "Elizabeth II"; 

    }

    if (count > 4 ) {
    question = "When Did the British Empire End?";
    choice1 = "1967";
    choice2 = "1978";
    choice3 = "1801";
    choice4 = "1997";
    answer = "1997"; 

    }

    if (count > 5 ) {
    question = "What is the Jewel in the British Empire's Crown? - Territory";
    choice1 = "Canada";
    choice2 = "The 13 Colonies";
    choice3 = "India";
    choice4 = "Austraila";
    answer = "India"; 

    }
    
    if (count > 6 ) {
    question = "The British Empire Reached its Greatest Extent in...";
    choice1 = "1914";
    choice2 = "1800";
    choice3 = "1930";
    choice4 = "1999";
    answer = "1930"; 
 
    }

    if (count > 7 ) {
    question = "Who was the British Prime Minster During World War Two?";
    choice1 = "Lord Dudley";
    choice2 = "Winston Churchill";
    choice3 = "Lord Hailfax";
    choice4 = "Andrew Jackson";
    answer = "Winston Churchill"; 
 
    }

    if (count > 8 ) {
    question = "During Which War did English Kings conquer large areas of France?";
    choice1 = "The Crusades";
    choice2 = "World War Two";
    choice3 = "The Norman Conquest";
    choice4 = "The Hundred Years' War";
    answer = "The Hundred Years' War"; 
 
    }

    if (count > 9 ) {
    question = "In the 1700s, the English Were at War with?";
    choice1 = "Spain";
    choice2 = "France";
    choice3 = "India Princedoms";
    choice4 = "All of the Above";
    answer = "All of the Above"; 
 
    } 
    
    if (count > 10 ) {
    question = "Which Country's Colonies where given to Great Britain by the Treaty of Versailes in 1919?";
    choice1 = "Spain";
    choice2 = "France";
    choice3 = "Germany";
    choice4 = "The Netherlands";
    answer = "Germany"; 
 
    } 

    if (count > 11 ) {
    question = "The English became the Dominant Power in India after which Battle?";
    choice1 = "Battle of Crete";
    choice2 = "Battle of Plassey";
    choice3 = "Battle of Waterloo";
    choice4 = "None of the Above";
    answer = "Battle of Plassey"; 
 
    } 
    
    if (count > 12 ) {
    question = "How Many Overseas Territories remain under British Sovereignty?";
    choice1 = "None";
    choice2 = "Three";
    choice3 = "Fourteen";
    choice4 = "Six";
    answer = "Fourteen"; 
 
    } 
    
    if (count > 13 ) {
    question = "The Great Game Refers to the Cold War Conflict between Great Britain and...?";
    choice1 = "Russia";
    choice2 = "France";
    choice3 = "Germany";
    choice4 = "The United States";
    answer = "Russia"; 
 
    } 
    
    if (count > 14 ) {
    question = "The British Empire Relied Primarily on Its ... Power to Defend itself";
    choice1 = "Naval";
    choice2 = "Army";
    choice3 = "Industrial Might";
    choice4 = "The English Spirit";
    answer = "Naval"; 
 
    } 
    
    if (count > 15 ) {
    question = "Which General Defeated Napoleon the I at the End of the Napoleonic Wars?";
    choice1 = "William III";
    choice2 = "The Duke of Wellington";
    choice3 = "Charles II";
    choice4 = "The Duke of Hanover";
    answer = "The Duke of Wellington"; 
 
    } 
    
    if (count > 16 ) {
    question = "Women Were Fully Allowed to Vote in Great Britain in____?";
    choice1 = "1914";
    choice2 = "1925";
    choice3 = "1903";
    choice4 = "1928";
    answer = "1928"; 
 
    } 
    
    if (count > 17 ) {
    question = "What is the Square Root of X-2?";
    choice1 = "HELL if I Know!";
    choice2 = "Lol Math";
    choice3 = "I'm a Nerd";
    choice4 = "Math is Great!";
    answer = "HELL if I Know!"; 
 
    } 

    if (questionsnumbers > 18) {

    quiz.style.visibility = "hidden"; 
    sbox.style.visibility = "hidden"; 
    showscoreboard(); 

    }
    
    renderQuestion();
    
    
}

//End of Quiz List Section

// Render Question Function Start

function renderQuestion (){
    
    document.getElementById("choiceA").value = choice1;
    document.getElementById("choiceB").value = choice2;
    document.getElementById("choiceC").value = choice3;
    document.getElementById("choiceD").value = choice4;
    document.getElementById("Qanswer").value = answer;
    document.getElementById("questionHeading").innerHTML = question;
    document.getElementById("scorebox").innerHTML = "<p>" + "Current Score " + score + "/18" + "</p>";
    
}

//Render Question Function End

//Audio Functions Section Start 

var lol = new Audio('audio/yousuck.mp3'); //Audio Played at the End of Quiz 
var lol1 = new Audio('audio/001.mp3');
var lol2 = new Audio('audio/002.mp3');
var lol3 = new Audio('audio/003.mp3');
var lol4 = new Audio('audio/004.mp3');

//Background Music Play// 

function play() {
    var audio = document.getElementById("audio");
    audio.play();

}

//Background Music Pause/Start Function// 

function pauseAudio() {

    if (playaudio === 0) {
        var audio = document.getElementById("audio");
        audio.pause();
        playaudio++;
    }

    else {
        var audio = document.getElementById("audio");
        audio.play();
        playaudio--; 

    }

}

//Audio Functions Section End  

function renderCounter() {
    
    document.getElementById("timer").innerHTML = TIMER; 

}

//Click Sound for Nav Bar

var beepThree = $("#beep-three")[0];
$("#boot a")
	.mouseenter(function() {
		beepThree.pause();
		beepThree.play();
});

//Click Sound for Quiz Inputs

var beepTwo = $("#beep-three")[0];
$("input")
	.mouseenter(function() {
		beepTwo.pause();
		beepTwo.play();
});

//Start of Four Check Answer Functions 
//Check Answer Function 1 Input Id A 

function checkAnswer1(){
    
    let choice1 = document.getElementById("choiceA").value;
    let answer = document.getElementById("Qanswer").value;
    questionsnumbers++;

    if (answer === choice1) {
        questionWasRightAddScore();
        questionWasRightTimeoutFunction();
    
    }

    else {

        scorebox.style.backgroundColor = "red";
        wrongAnswerSound();
        questionWasWrongTimeoutFunction();
    
    }

}

function questionWasRightTimeoutFunction() {
    
    setTimeout(function(){ 
        questionList ();  
        scorebox.style.backgroundColor = "rgb(71, 168, 201)";
        element.classList.remove("choices");
        element.classList.add("choices");

     }, 1500);
    
}

function questionWasWrongTimeoutFunction() {
    
    setTimeout(function () {
        questionList ();  
        scorebox.style.backgroundColor = "rgb(71, 168, 201)";

     }, 2000);

}


//Check Answer Function 2 Input Id B


function checkAnswer2 (){
    
    let choice2 = document.getElementById("choiceB").value;
    let answer = document.getElementById("Qanswer").value;
    questionsnumbers++;


    if (answer === choice2) {
        questionWasRightAddScore();     
        questionWasRightTimeoutFunction();
    
    }

    else {

        scorebox.style.backgroundColor = "red";
        wrongAnswerSound();
        questionWasWrongTimeoutFunction();

    }

}

//Check Answer Function 3 Input Id C

function checkAnswer3(){
    
    let choice3 = document.getElementById("choiceC").value;
    let answer = document.getElementById("Qanswer").value;
    questionsnumbers++;

    if (answer === choice3) {

        questionWasRightAddScore();      
        questionWasRightTimeoutFunction();
    
    }

    else {

        scorebox.style.backgroundColor = "red";
        wrongAnswerSound();
        questionWasWrongTimeoutFunction();

    }

}

//Check Answer Function 4 Input Id D

function checkAnswer4 (){
    
    let choice4 = document.getElementById("choiceD").value;
    let answer = document.getElementById("Qanswer").value;
    questionsnumbers++;

    if (answer === choice4) {
        
        questionWasRightAddScore();
        questionWasRightTimeoutFunction();
    
    }

    else {

        scorebox.style.backgroundColor = "red";
        wrongAnswerSound();
        questionWasWrongTimeoutFunction();

    }

}

//Function Called when UserAnswer Was Right 

function questionWasRightAddScore() {
    
    scorebox.style.backgroundColor ="green";
    score++;
    rightAnswerSound();
    
}

function rightAnswerSound() {
    var audio = document.getElementById("right");
    audio.play();

}

function wrongAnswerSound() {
    var audio = document.getElementById("wrong");
    audio.play();

}

//Ending ScoreBoard Strings and Sound

function showscoreboard () {

    var quizmenu = document.getElementById("quiz");
    quizmenu.remove();
    
    scorebox.style.backgroundColor = "transparent";
    document.getElementById("scorebox").classList.add("mystyle");
    pauseAudio();
    
    if (score > -1) {

        document.getElementById("scorebox").innerHTML = "<p id = 'p1'>" + "You Completed The British Empire Quiz!" + "</p>" + "<p id = 'p2'>" + "Quiz Score " + score + "/18" + "</p>" + "<p id = 'p3'>" + "Unfortunate Score, Try Again";
        lol.play(); 
    }

    if (score > 4) {
        
        lol.pause();
        document.getElementById("scorebox").innerHTML = "<p id = 'p1'>" + "You Completed The British Empire Quiz!" + "</p>" + "<p id = 'p2'>" + "Quiz Score " + score + "/18" + "</p>" + "<p id = 'p3'>" + "Hope You are Doing Better in the Sciences!";
        lol1.play();
        
    }

    if (score > 11) {
        
        lol.pause();
        lol1.pause();
        document.getElementById("scorebox").innerHTML = "<p id = 'p1'>" + "You Completed The British Empire Quiz!" + "</p>" + "<p id = 'p2'>" + "Quiz Score " + score + "/18" + "</p>" + "<p id = 'p3'>" + "Not Bad, But Could be Better";
        lol2.play(); 
    }

    if (score > 16) {
        
        lol1.pause();
        lol2.pause();
        document.getElementById("scorebox").innerHTML = "<p id = 'p1'>" + "You Completed The British Empire Quiz!" + "</p>" + "<p id = 'p2'>" + "Quiz Score " + score + "/18" + "</p>" + "<p id = 'p3'>" + "You are a History Nerd!" + "</p>";
        lol3.play(); 
    }

    if (score > 17) {

        lol1.pause();
        lol2.pause();
        lol3.pause(); 
        document.getElementById("scorebox").innerHTML = "<p id = 'p1'>" + "You Completed The British Empire Quiz!" + "</p>" + "<p id = 'p2'>" + "Quiz Score " + score + "/18" + "</p>" + "<p id = 'p3'>" + "Go OutSide, Get Some Sun Bookworm!" + "</p>";
        lol4.play();
        
    }

}
const canvasWidth = canvas.width + 900
Math.random() * canvasWidth - canvasWidth / 2
