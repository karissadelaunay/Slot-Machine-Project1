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

const countDownEl = document.querySelector('#countdown');
console.log(countDownEl)

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

buttonEl = document.querySelector('button').addEventListener('click', function() {
    document.getElementById('startBtn');
console.log('message produced when clicked')

});
//   console.log(buttonEl)
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
    console.log('check render');

    for (let score in scores) {
        scoreEls[score].innerText = scores[score];
    };

    for(let choice in choices) {
        choicesEl[choice].imgEl.src = smLookup[choices[choice]].imageUrl;
        console.log(choicesEl[choice].imgEl.src)
    }
    

}

