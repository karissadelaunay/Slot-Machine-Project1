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

        console.log(smLookup[choices[choice]].imageUrl);

        if(scores.wins === choice){
            choicesEl[choice].borderEl.style.borderColor = 'yellow';
        } else {
            choicesEl[choice].borderEl.style.borderColor = 'white';
        }
        console.log(choicesEl[choice].imgEl.src)
    }

}   


function playRound() {
    console.log('play round function working');


choices.choiceOne = getRandomSM();
choices.choiceTwo = getRandomSM();
choices.choiceThree = getRandomSM();

if (choices.choiceOne === choices.choiceTwo && choices.choiceOne === choices.choiceThree) {
    scores.wins++;
} else {
    scores.losses++;
    }

render();

}



function getRandomSM() {
    const choices = ['heart', 'crazy', 'cry'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    
    return choices[randomIndex];
}

render();
