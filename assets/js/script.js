'use strict';


// 0 means orange
// 1 means grape

// VARIABLES
const orangeOrGrapeQuesEl = document.querySelector('.OrangeOrGrapeQuestion');
const orangeOptionEl = document.querySelector('.orange-option');
const grapeOptionEl = document.querySelector('.grape-option');
const glassesAndPitchersEl = document.querySelector('.glasses-pitchers');
const glassesEl = document.querySelector('.glasses');
const leftGlassEl = document.querySelector('.left-glass');
const rightGlassEl = document.querySelector('.right-glass');
const leftImageGlassEl = document.querySelector('.left-image-glass');
const rightImageGlassEl = document.querySelector('.right-image-glass');
const orangePitcherImageEl = document.querySelector('.image-0-pitcher');
const grapePitcherImageEl = document.querySelector('.image-1-pitcher');
const orangePitcherAmountEl = document.querySelector('.pitcher-amount-0');
const grapePitcherAmountEl = document.querySelector('.pitcher-amount-1');
const btnNewGame = document.querySelector('.new-game');
const btnRefillEl = document.querySelector('.refill-glasses');
const winMessageEl = document.querySelector('.win-message');
const lostMessageEl = document.querySelector('.lost-message');


let likedFruit = null;
let foundout;
let randomNumber;
let randomFiller;
let leftGlassContent;
let rightGlassContent;
let orangePitcherLevel;
let grapePitcherLevel;






// FUNCTIONS
const init = function () {
    foundout = false;
    glassesEl.classList.remove('deactive');
    winMessageEl.classList.add('hidden');
    lostMessageEl.classList.add('hidden');
    randomNumber = Math.trunc(Math.random() * 50) + 1;
    randomFiller = randomNumber % 2 === 0 ? 0 : 1;
    leftGlassContent = randomFiller === 0 ? 0 : 1;
    rightGlassContent = randomFiller === 0 ? 1 : 0;
    leftImageGlassEl.src = 'assets/image/unclear-glass.png';
    rightImageGlassEl.src = 'assets/image/unclear-glass.png';
    orangePitcherLevel = 0;
    grapePitcherLevel = 0;
    orangePitcherImageEl.src = 'assets/image/orange-pitcher.png';
    grapePitcherImageEl.src = 'assets/image/grape-pitcher.png';
    orangePitcherAmountEl.textContent = orangePitcherLevel;
    grapePitcherAmountEl.textContent = grapePitcherLevel;
}
const fillGlasses = function () {
    foundout = true;
    leftImageGlassEl.src = `assets/image/${leftGlassContent}-juice-glass.png`;
    rightImageGlassEl.src = `assets/image/${rightGlassContent}-juice-glass.png`;
}
const fillPithers = function (glassContent) {
    if (glassContent === 0) {
        orangePitcherLevel++;
        orangePitcherImageEl.src = `assets/image/orange-pitcher-${orangePitcherLevel}--10.png`;
        orangePitcherAmountEl.textContent = orangePitcherLevel;
        if (orangePitcherLevel === 10 && likedFruit === 0) {
            winMessageEl.classList.remove('hidden');
            glassesEl.classList.add('deactive');
        } else if (orangePitcherLevel === 10) {
            lostMessageEl.classList.remove('hidden');
            glassesEl.classList.add('deactive');
        }
    } else {
        grapePitcherLevel++;
        grapePitcherImageEl.src = `assets/image/grape-pitcher-${grapePitcherLevel}--10.png`;
        grapePitcherAmountEl.textContent = grapePitcherLevel;
        if (grapePitcherLevel === 10 && likedFruit === 1) {
            winMessageEl.classList.remove('hidden');
            glassesEl.classList.add('deactive');
        } else if (grapePitcherLevel === 10) {
            lostMessageEl.classList.remove('hidden');
            glassesEl.classList.add('deactive');
        }
    }
}


init();


orangeOptionEl.addEventListener('click', function () {
    likedFruit = 0;
    orangeOrGrapeQuesEl.classList.add('hidden');
    glassesAndPitchersEl.classList.remove('hidden');
})
grapeOptionEl.addEventListener('click', function () {
    likedFruit = 1;
    glassesAndPitchersEl.classList.remove('hidden');
    orangeOrGrapeQuesEl.classList.add('hidden');

})

leftGlassEl.addEventListener('click', function () {
    if (!foundout) {
        fillGlasses();
        fillPithers(leftGlassContent);
    }
})
rightGlassEl.addEventListener('click', function () {
    if (!foundout) {
        fillGlasses();
        fillPithers(rightGlassContent);
    }
})
btnRefillEl.addEventListener('click', function () {
    foundout = false;
    randomNumber = Math.trunc(Math.random() * 50) + 1;
    randomFiller = randomNumber % 2 === 0 ? 0 : 1;
    leftGlassContent = randomFiller === 0 ? 0 : 1;
    rightGlassContent = randomFiller === 0 ? 1 : 0;
    leftImageGlassEl.src = `assets/image/unclear-glass.png`;
    rightImageGlassEl.src = `assets/image/unclear-glass.png`;
})

btnNewGame.addEventListener('click', init);

