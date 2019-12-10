// Create a button component
function buttonCreator(obj) {
    // Create Elements
    let buttonDiv = document.createElement('div');
    let button = document.createElement('button');
    // Add class
    buttonDiv.classList.add('buttonDiv');
    button.classList.add('button');
    button.classList.add(obj.buttonClass);
    // Add text content
    button.textContent = obj.buttonText;
    // Append
    buttonDiv.appendChild(button);

    return buttonDiv;
}

// Create button
const buttonStart = buttonCreator({buttonClass: 'one', buttonText: 'Start'});
const buttonStop = buttonCreator({buttonClass: 'two', buttonText: 'Reset'})

// Add to DOM
let buttons = document.querySelector('.buttonContainer');

buttons.appendChild(buttonStart);
buttons.appendChild(buttonStop);


// Add event listeners
buttonStart.addEventListener('click', () => {
    start();
}, {once : true});

buttonStop.addEventListener('click', () => reset());

// Assign elements
let digitOne = document.getElementById('digitOne');
let digitTwo = document.getElementById('digitTwo');
let digitThree = document.getElementById('digitThree');
let digitFour = document.getElementById('digitFour');

// Assign starting values
let digitOneNum = 0;
let digitTwoNum = 0;
let digitThreeNum = 0;
let digitFourNum = 0;

// Create function to start timer
function start() {
    let timer = setInterval(function() {
        digitFourNum += 1;
        digitFour.textContent = digitFourNum;

        if (digitFourNum === 10) {
            digitFour.textContent = 0;
            digitThreeNum += 1;
            digitThree.textContent = digitThreeNum;
            digitFourNum = 0;
        }

        if (digitThreeNum === 6) {
            digitThree.textContent = 0;
            digitTwoNum += 1;
            digitTwo.textContent = digitTwoNum;
            digitThreeNum = 0;
        }

        if (digitTwoNum === 10) {
            digitTwo.textContent = 0;
            digitOneNum += 1;
            digitOne.textContent = digitOneNum;
            digitTwoNum = 0;
        }
        if (digitOneNum === 1) {
            clearInterval(timer);
        }
        
    }, 10);
}

function reset() {
    digitOne.textContent = '-' ;
    digitTwo.textContent = '-' ;
    digitThree.textContent = '-' ;
    digitFour.textContent = '-' ;
}
