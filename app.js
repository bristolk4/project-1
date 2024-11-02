// =====================CONSTANTS======================

const catHead = document.querySelector('#cathead');
const catBack = document.querySelector('#catback');
const catBelly = document.querySelector('#catbelly');
const catButtons = document.querySelectorAll('.catbutton')
const banana = document.querySelector('#banana');
const restart = document.querySelector('#restart');
const allButtons = document.querySelectorAll('.button')
const pointsDisplay = document.querySelector('#points');
const commentaryDisplay = document.querySelector('#commentary')
const timerDisplay = document.querySelector('#timer'); 

let points = 0
let timeLeft = 30; // game duration in seconds
let timerInterval;

// =====================FUNCTIONS========================

function startTimer() { // had to ask chatGPT about timer stuff, but I understand it
    timerDisplay.textContent = `${timeLeft}s`;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval); // stops timer
            endGame(false); // end game if time runs out without winning
            commentaryDisplay.textContent = `Time's up! The cat is unsatisfied.`;
        }
    }, 1000); // 1000 represents the interval in milliseconds for how often setInterval should run.
              // so "run setInterval every 1 second"
}

function endGame(hasWon) {
    allButtons.forEach((button) => {
        button.style.display = "none";
    });
    restart.style.display = "grid"; 
    if (hasWon === true) {
        commentaryDisplay.textContent = 'You have sufficiently pet the cat, you WIN!'        
    } else {
        commentaryDisplay.textContent = `Time's up! The cat is unsatisfied.`
    }
}

function win() { // had to google for part of this...
    if (points >= 400) {
        clearInterval(timerInterval); // stops timer
        commentaryDisplay.textContent = 'You have sufficiently pet the cat you WIN';
        allButtons.forEach((button) => {  // hides all buttons and ends the game
            button.style.display = "none";
        });
        restart.style.display = "grid"; // unhides restart button
    }
}

banana.addEventListener('click', () => {
    commentaryDisplay.textContent = `The name of the game is not "Pet That Banana."\n
    How could you be so STUPID\n
    get out of my SIGHT you DUMB IDIOT`;
    pointsDisplay.textContent = "NO POINTS You LOSE";
    clearInterval(timerInterval);
    allButtons.forEach((button) => {
        button.style.display = "none";
     })
    restart.style.display = "grid"; // unhides restart button
});

catHead.addEventListener('click', () => {
    points = points + 2; // when you click the cathead button, you get 2 points
    pointsDisplay.textContent = points;
    win(); // each time you click one of the cat buttons, run the "win" function to see if points are high enough to win/end game
});


// take into consideration: is it more difficult to pet a cat's head or back? depends on the cat
catBack.addEventListener('click', () => {
    points = points + 5; // +5 points when clicking the catback button
    pointsDisplay.textContent = points;
    win();
});

catBelly.addEventListener('click', () => {
    if (points >= 40) {
        commentaryDisplay.textContent = 'Wow, the cat must really like you for it to let you pet its belly!'
        points = points + 50; // if you have over 30 points, you get another 50 and the commentary display changes
    } else {
        points = points - 10; // if you have under 30 points, you lose 10 points and commentary changes
        commentaryDisplay.textContent = 'You must befriend the cat before you pet its belly! (Try petting it elsewhere a little longer)'
    }
    pointsDisplay.textContent = points;
    win();
});

document.addEventListener('DOMContentLoaded', () => { // starts timer on page load
    startTimer();
});