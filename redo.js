let input = 0;
let memory;
let operator = null;
const display = document.querySelector(".display");


document
    .querySelector(".button-container")
    .addEventListener("click", function(event) {
       if (event.target.tagName === 'BUTTON') {
             //check if button was an operation
             if (event.target.classList.contains('operator')) {
                if (input != 0) {
                    //check for previous operator
                    if (operator === null) {
                            typeChange();
                            makeMemory();
                            input = 0;
                            operator = event.target.innerText;
                    //if previous operator calculate and reassign operator
                    } else if (operator === '/') {
                            typeChange();
                            divide();
                            console.log(memory);
                            operator = event.target.innerText;
                        }
                    } else if (operator === 'x') {
                        typeChange();
                        multiply();
                        console.log(memory);
                        operator = event.target.innerText;
                    } else if (operator === '-') {
                        typeChange();
                        subtract();
                        console.log(memory);
                        operator = event.target.innerText;
                    } else if (operator === '+') {
                        typeChange();
                        add();
                        operator = event.target.innerText;
                        console.log(memory);
                    }
                
             // check if button was a number
             } else if (event.target.classList.contains('number')) {
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
                evaluate();
             //check if button was backspace
             } else if (event.target.innerText === '<-'){
                backspace();
             } else {
                console.log('problem');
                alert(`You clicked on button ${event.target.innerText}`);
             }

        
         }   
         else {
            console.log('not a button');
         }
        }
    );     
    
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
        if (operator === '/') {
            typeChange();
            divide();
            erase ();
        } else if (operator === 'x') {
            typeChange();
            multiply();
            erase ();
        } else if (operator === '-') {
            typeChange();
            subtract();
            erase ();
        } else if (operator === '+') {
            typeChange();
            add();
            erase ();
        }
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
    function erase() {
        display.innerText = memory;
        operator = null;
        input = memory;
    }

    function backspace() {
        if (display.innerText.length > 1) {
            display.innerText = display.innerText.slice(0, -1)
            input = display.innerText;
        } else {
            display.innerText = 0;
            input = 0;
        }

    }