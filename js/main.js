const smLookup = {
    crazy: {
        imageUrl: 'imgs/crazy.jpg',
    },
    cry: {
        imageUrl: 'imgs/cry.jpg',
    },
    heart: {
        imageUrl: 'imgs/heart.jpg',
    },
};
//state variables(use an object)
let scores;
console.log(scores)
let choices;

// cache changing variables to the DOM
const scoreEls = {
    wins: document.querySelector('#w-score'),
    losses: document.querySelector('#l-score'),
};

const choicesEl = {
    choiceOne: {
        borderEl: document.querySelector('#i-results'),
        imgEl: document.querySelector('#imgOne'),
    },
    choiceTwo: {
        borderEl: document.querySelector('#i-results'),
        imgEl: document.querySelector('#imgTwo'),
    },
    choiceThree: {
        borderEl: document.querySelector('#i-results'),
        imgEl: document.querySelector('#imgThree'),
    },
};

//add eventListener to buttons
document.querySelector('button').addEventListener('click', playRound)
document.querySelector('button').addEventListener('click', backgroundAnimation)

//call init
init();

function init() {
    scores = {
        wins: 0,
        losses: 0,
    };

    choices = {
        choiceOne: 'heart',
        choiceTwo: 'cry',
        choiceThree: 'crazy',
    };

//call render
render();

}

function render() {

    for (let score in scores) {
        if(scoreEls[score] && scoreEls[score].innerText) {
            scoreEls[score].innerText = scores[score].toString(); 
        }
    };

    for(let choice in choices) {
        choicesEl[choice].imgEl.src = smLookup[choices[choice]].imageUrl;
    }
}   

function playRound() {

backgroundAnimation();

setTimeout(()=> {choices.choiceOne = getRandomSM()},1000);
setTimeout(()=> {choices.choiceTwo = getRandomSM()},1000);
setTimeout(()=> {choices.choiceThree = getRandomSM()},1000);

setTimeout(()=> {
    if (choices.choiceOne === choices.choiceTwo && choices.choiceOne === choices.choiceThree) {
    scores.wins++;
} else {
    scores.losses++;
    }
},1005);

setTimeout(() => {render()},1010);

}

function getRandomSM() {
    const choices = ['heart', 'crazy', 'cry'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function backgroundAnimation() {
    setTimeout(()=> {choicesEl.choiceOne.imgEl.src = 'imgs/crazy.jpg';},100)
    setTimeout(()=> {choicesEl.choiceOne.imgEl.src = 'imgs/cry.jpg';},200)
    setTimeout(()=> {choicesEl.choiceOne.imgEl.src = 'imgs/heart.jpg';},300)

    setTimeout(()=> {choicesEl.choiceOne.imgEl.src = 'imgs/crazy.jpg';},400)
    setTimeout(()=> {choicesEl.choiceOne.imgEl.src = 'imgs/cry.jpg';},500)
    setTimeout(()=> {choicesEl.choiceOne.imgEl.src = 'imgs/heart.jpg';},600)

    setTimeout(()=> {choicesEl.choiceOne.imgEl.src = 'imgs/crazy.jpg';},700)
    setTimeout(()=> {choicesEl.choiceOne.imgEl.src = 'imgs/cry.jpg';},800)
    setTimeout(()=> {choicesEl.choiceOne.imgEl.src = 'imgs/heart.jpg';},900)

    setTimeout(()=> {choicesEl.choiceTwo.imgEl.src = 'imgs/cry.jpg';},100)
    setTimeout(()=> {choicesEl.choiceTwo.imgEl.src = 'imgs/heart.jpg';},200)
    setTimeout(()=> {choicesEl.choiceTwo.imgEl.src = 'imgs/crazy.jpg';},300)

    setTimeout(()=> {choicesEl.choiceTwo.imgEl.src = 'imgs/cry.jpg';},400)
    setTimeout(()=> {choicesEl.choiceTwo.imgEl.src = 'imgs/heart.jpg';},500)
    setTimeout(()=> {choicesEl.choiceTwo.imgEl.src = 'imgs/crazy.jpg';},600)

    setTimeout(()=> {choicesEl.choiceTwo.imgEl.src = 'imgs/cry.jpg';},700)
    setTimeout(()=> {choicesEl.choiceTwo.imgEl.src = 'imgs/heart.jpg';},800)
    setTimeout(()=> {choicesEl.choiceTwo.imgEl.src = 'imgs/crazy.jpg';},900)

    setTimeout(()=> {choicesEl.choiceThree.imgEl.src = 'imgs/heart.jpg';},100)
    setTimeout(()=> {choicesEl.choiceThree.imgEl.src = 'imgs/crazy.jpg';},200)
    setTimeout(()=> {choicesEl.choiceThree.imgEl.src = 'imgs/cry.jpg';},300)

    setTimeout(()=> {choicesEl.choiceThree.imgEl.src = 'imgs/heart.jpg';},400)
    setTimeout(()=> {choicesEl.choiceThree.imgEl.src = 'imgs/crazy.jpg';},500)
    setTimeout(()=> {choicesEl.choiceThree.imgEl.src = 'imgs/cry.jpg';},600)

    setTimeout(()=> {choicesEl.choiceThree.imgEl.src = 'imgs/heart.jpg';},700)
    setTimeout(()=> {choicesEl.choiceThree.imgEl.src = 'imgs/crazy.jpg';},800)
    setTimeout(()=> {choicesEl.choiceThree.imgEl.src = 'imgs/cry.jpg';},900)
}


    




