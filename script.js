const display = document.querySelector('.display')
const result = document.querySelector('.result')
const buttons = document.querySelectorAll('button')

let currentNumber=''
let previousNumber=''
let operationType=''

function operate(first,second,operation){
    first= parseFloat(first)
    second= parseFloat(second)
    switch (operation){
        case '+':
            return first+second
        case '-':
            return first-second
        case '*':
            return first*second
        case '/':
            
            return first/second
    }
}

function getData(buttonPressed){

    switch (buttonPressed){
    
        case 'C':
            currentNumber=''
            break
        case 'DEL':
            currentNumber=''
            previousNumber=''
            operationType=''
            break
        case 'ENT':
            if(currentNumber!='' && previousNumber!='' && operationType!=''){

                previousNumber= operate(previousNumber,currentNumber,operationType)
                currentNumber= ''
            }
            else{
                getData('DEL')
            }
            break
        case '+':
        case '-':
        case '/':
        case '*':

            if(previousNumber == ''){
                previousNumber = currentNumber
                operationType = buttonPressed
                currentNumber = '' 
            }else if(currentNumber ==''){
                operationType = buttonPressed
            }
            else{
                getData('ENT')
                operationType= buttonPressed
            }
            break
        default:
        currentNumber+=buttonPressed
    }     

    display.textContent = currentNumber
    result.textContent =  previousNumber
}


buttons.forEach((button) => 
    button.addEventListener('click', ()=> getData(button.textContent)))

