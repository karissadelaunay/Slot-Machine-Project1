const smLookup = {
    heart: {
        imageUrl: 'https://i.imgur.com/y6Ke2h1.jpg',
    },
    cry: {
        imageUrl: 'https://i.imgur.com/WHwjsY6.jpg',
    },
    crazy: {
        imageUrl: 'https://i.imgur.com/T7sxx5o.jpg',
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
        imgEl: document.querySelector('#i-results img'),
    },
    choiceTwo: {
        imgEl: document.querySelector('#i-results img'),
    },
    choiceThree: {
        imgEl: document.querySelector('#i-results img'),
    },
};
console.log(choicesEl)
