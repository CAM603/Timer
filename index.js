// Create button a component
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

    // Add event listener
    //button.addEventListener(obj.listener, obj.func);

    return buttonDiv;
}

// Create buttons
const buttonOne = buttonCreator({buttonClass: 'one', buttonText: 'Start'});

const buttonTwo = buttonCreator({buttonClass: 'two', buttonText: 'Begin'});

const buttonThree = buttonCreator({buttonClass: 'three', buttonText: 'Go'});

// Add to DOM
let buttons = document.querySelector('.buttonContainer');

buttons.appendChild(buttonOne);
buttons.appendChild(buttonTwo);
buttons.appendChild(buttonThree);

// Add event listeners
buttonOne.addEventListener('click', () => {
    start();
}, {once : true})

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

        if (digitThreeNum === 10) {
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

// // Create a start button for the first function
// let buttonOne = document.querySelector('.button, .one');
// buttonOne.addEventListener('click', () => {
//     start();
// }, {once : true});


