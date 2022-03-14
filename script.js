let firstEntry = [];
let temp = [];
let tempSize = 0;
let firstSize = 0;
let operatorEntry;

const oneBtn = document.querySelector('#oneBtn');
const twoBtn = document.querySelector('#twoBtn');
const threeBtn = document.querySelector('#threeBtn');
const fourBtn = document.querySelector('#fourBtn');
const fiveBtn = document.querySelector('#fiveBtn');
const sixBtn = document.querySelector('#sixBtn');
const seveBtn = document.querySelector('#sevenBtn');
const eightBtn = document.querySelector('#eightBtn');
const nineBtn = document.querySelector('#nineBtn');
const zeroBtn = document.querySelector('#zeroBtn');
const multiplyBtn = document.querySelector('#multiplyBtn');
const addBtn = document.querySelector('#addBtn');
const subtractBtn = document.querySelector('#subtractBtn');
const equalBtn = document.querySelector('#equalBtn');
const current = document.querySelector('#currentTotal');
const running = document.querySelector('#runningTotal');
const clear = document.querySelector('#clearBtn');
const deleteBtn = document.querySelector('#deleteBtn');
oneBtn.addEventListener('click', () => {
    temp.push('1');
    tempSize++;
    current.innerHTML = temp.join('');
})
twoBtn.addEventListener('click', () => {
    temp.push('2');
    tempSize++;
    current.innerHTML = temp.join('');
});
threeBtn.addEventListener('click', () => {
    temp.push('3');
    tempSize++;
    current.innerHTML = temp.join('');
});
fourBtn.addEventListener('click', () => {
    temp.push('4');
    tempSize++;
    current.innerHTML = temp.join('');
});
fiveBtn.addEventListener('click', () => {
    temp.push('5');
    tempSize++;
    current.innerHTML = temp.join('');
});
sixBtn.addEventListener('click', () => {
    temp.push('6');
    tempSize++;
    current.innerHTML = temp.join('');
});
sevenBtn.addEventListener('click', () => {
    temp.push('7');
    tempSize++;
    current.innerHTML = temp.join('');
});
eightBtn.addEventListener('click', () => {
    temp.push('8');
    tempSize++;
    current.innerHTML = temp.join('');
});
nineBtn.addEventListener('click', () => {
    temp.push('9');
    tempSize++;
    current.innerHTML = temp.join('');
});
zeroBtn.addEventListener('click', () => {
    temp.push('0');
    tempSize++;
    current.innerHTML = temp.join('');
});
addBtn.addEventListener('click', () => {
    firstEntry = temp.splice(0, tempSize);
    firstSize = tempSize;
    tempSize = 0;
    operatorEntry = '+';
    running.innerHTML = firstEntry.join('') + " " + operatorEntry; 
});
multiplyBtn.addEventListener('click', () => {
    firstEntry = temp.splice(0, tempSize);
    firstSize = tempSize;
    tempSize = 0;
    operatorEntry = 'x';
    running.innerHTML = firstEntry.join('') + " " + operatorEntry; 
});
subtractBtn.addEventListener('click', () => {
    firstEntry = temp.splice(0, tempSize);
    firstSize = tempSize;
    tempSize = 0;
    operatorEntry = '-';
    running.innerHTML = firstEntry.join('') + " " + operatorEntry; 
});
divideBtn.addEventListener('click', () => {
    firstEntry = temp.splice(0, tempSize);
    firstSize = tempSize;
    tempSize = 0;
    operatorEntry = '/';
    running.innerHTML = firstEntry.join('') + " " + operatorEntry; 
});
equalBtn.addEventListener('click', () => {
    operate(operatorEntry, firstEntry, temp);

});
clearBtn.addEventListener('click', () => {
    firstEntry = [];
    temp = [];
    tempSize = 0;
    firstSize = 0;
    operatorEntry = '';
    running.innerHTML = '';
    current.innerHTML = '';
});
deleteBtn.addEventListener('click', () => {
    if(tempSize != 0){
        tempSize--;
        temp.pop();
        current.innerHTML = temp.join('');
    }
});
function add(){
    running.innerHTML = firstEntry.join('') + " " + operatorEntry + " " + temp.join('') + " =";
    current.innerHTML = parseInt(firstEntry.join("")) + parseInt(temp.join(""));
}
function subtract(){
    running.innerHTML = firstEntry.join('') + " " + operatorEntry + " " + temp.join('') + " =";
    current.innerHTML = parseInt(firstEntry.join("")) - parseInt(temp.join(""));  
}

function multiply(){
    running.innerHTML = firstEntry.join('') + " " + operatorEntry + " " + temp.join('') + " =";    
    current.innerHTML = parseInt(firstEntry.join("")) * parseInt(temp.join(""));
}

function divide(){
    running.innerHTML = firstEntry.join('') + " " + operatorEntry + " " + temp.join('') + " =";
    current.innerHTML = parseInt(firstEntry.join("")) / parseInt(temp.join(""));
    
}

function operate(operator, firstNum, secondNum){
    if(operator === '+'){
        add(firstNum, secondNum);
    }
    else if(operator === '-'){
        subtract(firstNum, secondNum);
    }
    else if(operator === 'x'){
        multiply(firstNum, secondNum);
    }
    else{
        divide(firstNum, secondNum);
    }
}


