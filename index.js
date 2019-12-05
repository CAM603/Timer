// Assign elements
let digitOne = document.getElementById('digitOne');
let digitTwo = document.getElementById('digitTwo');
let digitThree = document.getElementById('digitThree');
let digitFour = document.getElementById('digitFour');
console.log(digitOne)
// Assign starting values
let digitOneNum = 0;
let digitTwoNum = 0;
let digitThreeNum = 0;
let digitFourNum = 0;
console.log(digitThree)
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
            colorRed();
        }

    }, 10);
    
}
//start();