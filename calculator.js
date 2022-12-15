let input = 0;
let memory;
let operator = null;
const display = document.querySelector(".display");


document
    .querySelector(".button-container")
    .addEventListener("click", function(event) {
        // if(button.tagname === 'BUTTON'){
        // }
        //check if click is button
             if (click = button) {
             //check if button was an operation
             if (event.target.innerText === '/' || 'x' || '-' || '+') {
                //check for previous operator
                if (operator === null) {
                    if (input != 0){
                        typeChange();
                        makeMemory();
                        operator = event.target.innerText;
                    } else {
   
                    }
                //if previous operator calculate and reassign operator
                } else if (operator === '/') {
                    typeChange();
                    divide();
                    operator - event.target.innerText;
                } else if (operator === 'x') {
                    typeChange();
                    multiply();
                    operator - event.target.innerText;
                } else if (operator === '-') {
                    typeChange();
                    subtract();
                    operator - event.target.innerText;
                } else if (operator === '+') {
                    typeChange();
                    add();
                    operator - event.target.innerText;
                }
               
             // check if button was a number
             } else if (event.target.innerText === '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' ) {
                if(input === 0){
                    input = event.target.innerText;
                    display.innerText = event.target.innerText;
                } else {
                    input = input + event.target.innerText;
                    display.innerText = input;
                }
                console.log(input);
            // check if button was 0
             } else if (event.target.innerText === '0') {
                if(input === 0){
                    input = 0;
                    display.innerText = 0;
                } else {
                    input = input + event.target.innerText;
                    display.innerText = input;
                }
               //check if button was clear              
             } else if (event.target.innerText === 'C') {
                 clear();
             //check if button was equals
             } else if (event.target.innerText === '=') {
             //check if button was backspace
             } else if (event.target.innerText === '<-'){
             //length of input substring and delete last character
             } else {
                console.log('problem');
             }
                alert(`You clicked on button ${event.target.innerText}`);
        
         }   else {
            console.log('not a button');
            }
        });     
    
    function clear() {
        input = 0;
        display.innerText = 0;
        operator = null;
        memory = null;
    }

    function typeChange() {
        input = parseInt(input);
        display.innerText = 0;
        // memory = input;
        // memory = parseInt(memory);
        // input = 0;
        // display.innerText = 0;
        // return memory;
    }

    function evaluate() {
        
    }

    function makeMemory() {
        memory = input;
    }

    function divide() {
        memory = memory/input;
        input = 0;
        display.innerText = 0;
    }

    function add() {
        memory = memory+input;
        input = 0;
        display.innerText = 0;
    }

    function multiply() {
        memory = memory*input;
        input = 0;
        display.innerText = 0;
    }

    function subtract() {
        memory = memory-input;
        input = 0;
        display.innerText = 0;
    }