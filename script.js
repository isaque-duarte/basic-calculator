/*Creator: Isaque */

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator-keys')
const display = document.querySelector('#calculator-screen')

let lastValue = false
let nextValue = false
let previousValue, currentValue, operator

function calculate (previousValue, currentValue, operator) {

    this.previousValue = parseFloat(previousValue)
    this.currentValue = parseFloat(currentValue)
    this.operator = operator

    if (isNaN(previousValue) && isNaN(currentValue)) {
        alert("Is not a number!")
        previousValue = 0
        currentValue = 0
        operator = ''
        return
    }

    if (previousValue === 0 && operator === 'divide') {
        alert("Can't divide by zero!")
        previousValue = 0
        currentValue = 0
        operator = ''
        return
    } else {
        switch (operator) {
            case 'plus':
                display.textContent = previousValue + currentValue;
                break;
        }
    }

   
}
//TODO:
function checkLastChar (str){

    var last = str.slice(-1)
    return last
}

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            //TODO:
            var last = checkLastChar(displayedNum)
            
            if (!isNaN(last)){ 
                if (!nextValue){
                    previousValue = displayedNum
                    nextValue = true
                }

                key.classList.add('is-depressed')
            }    
        }

        if (!action) {
            if (displayedNum === '0') {
                
                display.textContent = keyContent
                
            } else {
                
                display.textContent = displayedNum + keyContent
                
            }
        }

        if (action === 'decimal') {
            if (!isNaN(checkLastChar(displayedNum))){
            
                display.textContent = displayedNum + ','
            }
        }

        if (action === 'add') {
            if (!isNaN(checkLastChar(displayedNum))) {

                operator = "plus"
                
                display.textContent = displayedNum + '+'
            }    
        }
        
        if (action === 'subtract') {
            if (!isNaN(checkLastChar(displayedNum))) {
                operator = "minus"
                display.textContent = displayedNum + '-'
            }
        }
        
        if (action === 'multiply') {

            if (!isNaN(checkLastChar(displayedNum))) {
                operator = "multiply"
                display.textContent = displayedNum + '.'
            }
        
        }
        
        if (action === 'divide') {
            if (!isNaN(checkLastChar(displayedNum))){
                operator = "divide"
                display.textContent = displayedNum + '/'
            }
        }

        if (action === 'clear') {
            display.textContent = '0'
            
        }

        if (action === 'calculate') {
            var exp = display.textContent

            if (operator === 'plus') {
                const values = exp.split("+")
                previousValue = parseFloat(values[0])
                currentValue = parseFloat(values[1])       
                var res = previousValue + currentValue         

                display.textContent = res

            }

            if (operator === 'minus') {
                const values = exp.split("-")
                previousValue = parseFloat(values[0])
                currentValue = parseFloat(values[1])       
                var res = previousValue - currentValue         

                display.textContent = res
            }

            if (operator === 'multiply') {
                const values = exp.split("-")
                previousValue = parseFloat(values[0])
                currentValue = parseFloat(values[1])       
                var res = previousValue * currentValue         

                display.textContent = res
            }

            if (operator === 'divide') {
                const values = exp.split("/")
                previousValue = parseFloat(values[0])
                currentValue = parseFloat(values[1])
                

                //check division by zero
                if (!Number.isFinite(previousValue / currentValue)) {
                    res = "Undefined"
                } else {
                    var res = previousValue / currentValue
                }
                
                display.textContent = res
            }






        }
    }
})
