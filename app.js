const catHead = document.querySelector('#cathead');
const catBack = document.querySelector('#catback');
const catBelly = document.querySelector('#catbelly');
const catButtons = document.querySelectorAll('.catbutton')
const banana = document.querySelector('#banana');
const restart = document.querySelector('#restart');
const allButtons = document.querySelectorAll('.button')
const pointsDisplay = document.querySelector('#points');
const commentaryDisplay = document.querySelector('#commentary')

let points = 0

// document.addEventListener('pageload', function() {
//     document.querySelector('#restart').style.display = "none";
// });


function win() { // had to refer to chatGPT for part of this one :|
    if (points >= 500) {
        commentaryDisplay.textContent = 'You have sufficiently pet the cat you WIN';
        allButtons.forEach((button) => {  // hides all buttons and ends the game
            button.style.display = "none";
        });
        restart.style.display = "grid"; // unhides restart button
    }
}

banana.addEventListener('click', () => {
    points = points - 100
    commentaryDisplay.textContent = `The name of the game is not "Pet That Banana."\n
    How could you be so STUPID\n
    get out of my SIGHT you DUMB IDIOT`;
    pointsDisplay.textContent = "NO POINTS You LOSE";
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
    if (points >= 30) {
        commentaryDisplay.textContent = 'Wow, the cat must really like you for it to let you pet its belly!'
        points = points + 50; // if you have over 30 points, you get another 50 and the commentary display changes
    } else {
        points = points - 10; // if you have under 30 points, you lose 10 points and commentary changes
        commentaryDisplay.textContent = 'You must befriend the cat before you pet its belly! (Try petting it elsewhere a little longer)'
    }
    pointsDisplay.textContent = points;
    win();
});

