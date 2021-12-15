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

let choices;

//initial value 
//{
// wins: 0,
//losses: 0,
//}

//{
//choiceOne: 'heart , 'cry', 'crazy',
//choiceTwo: 'heart , 'cry', 'crazy',
//choiceThree: 'heart , 'cry', 'crazy',  
//}

// cache changing variables to the DOM

const scoreEls = {
    wins: document.querySelector('#w-score'),
    losses: document.querySelector('#l-score'),
};
console.log(scoreEls)

//const countDownEl = document.querySelector('#countdown');
//console.log(countDownEl)

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
console.log(choicesEl)

//add eventListener to buttons

// document.querySelector('button').addEventListenerObject('click', );

document.querySelector('button').addEventListener('click', playRound)
document.querySelector('button').addEventListener('click', backgroundAnimation)
   console.log(playRound)
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

    render();
}

function render() {
    //console.log('check render');

    for (let score in scores) {
        if(scoreEls[score] && scoreEls[score].innerText) {
            console.log(score, 'line 85')
            scoreEls[score].innerText = scores[score].toString(); 
        }
    };

    for(let choice in choices) {
        choicesEl[choice].imgEl.src = smLookup[choices[choice]].imageUrl;

        console.log(smLookup[choices[choice]].imageUrl, 'line 94 render function');

        if(scores.wins === choices){
            choicesEl[choice].borderEl.style.borderColor = 'yellow';
        } else {
            choicesEl[choice].borderEl.style.borderColor = 'white';
        }
        console.log(choicesEl[choice].imgEl.src, 'my ing src in render')
    }

}   


function playRound() {
    console.log('play round function working');

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
   console.log('hey there', choices[randomIndex]) 
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




