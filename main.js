window.addEventListener('load', init);

//global variables

//available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 1
};

//to change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

//Words
const words = [
    'stubborn',
    'joke',
    'symptom',
    'laughter',
    'master',
    'definition',
    'space',
    'pizzas',
    'suburban',
    'assuming',
    'obstinance',
    'bioinformatics',
    'Canadian',
    'India',
    'Association',
    'structure',
    'databases',
    'UK',
    'turbojet',
    'troopers',
    'equipment',
    'Boeing',
    'thrust',
    'fuselage',
    'propeller'
];

//Init game
function init() {
    //show number of seconds in UI
    seconds.innerHTML = currentLevel;
    // load word from array
    showWord(words);
    // start matching on word input
    wordInput.addEventListener('input', startMatch);
    // call countdown every second
    setInterval(countdown, 1000);
    // check game status
    setInterval(checkStatus, 50);
}

// start match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    //if score is -1 display 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }

}

//match currentWord to wordInput
function matchWords() {

    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

//Pick and show random words
function showWord(words) {
    //generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //output random word
    currentWord.innerHTML = words[randIndex];
}

//countdown timer
function countdown() {
    // check time is not runout
    if (time > 0) {
        // decreasethe time
        time--;
    } else if (time === 0) {
        //game over
        isPlaying = false;
    }
    // show time
    timeDisplay.innerHTML = time;
}

// check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game over!';
        score = -1;
    }
}
