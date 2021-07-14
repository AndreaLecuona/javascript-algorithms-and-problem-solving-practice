const res = document.querySelector('#res');
const btns = document.querySelector('#btns');

function captureOperation(e) {
    let trigger = e.target.id;
    let userOperation = "";

    switch (trigger) {
        case 'btn0':
            res.innerHTML += '0';
            break;
        case 'btn1':
            res.innerHTML += '1';
            break;

        case 'btnClr':
            res.innerHTML = '';
            userOperation = '';
            break;

        case 'btnSum':
            res.innerHTML += '+';
            break;

        case 'btnSub':
            res.innerHTML += '-';
            break;

        case 'btnMul':
            res.innerHTML += '*';
            break;

        case 'btnDiv':
            res.innerHTML += '/';
            break;

        case 'btnEql':
            userOperation = res.innerHTML;
            
            if(userOperation !== ''){
                res.innerHTML = calculate(userOperation);
            } else {
                res.innerHTML = '';
                userOperation = '';
            }
            break;

        default:
            break;
    }
}


function calculate(validUserOperation){
    const regexOnlyNumbers = /(\d+)/g;

    let translateToBaseTen = validUserOperation.replace( regexOnlyNumbers, (originalNums) => { return parseInt(originalNums, 2); });

    let operation = Math.floor( eval(translateToBaseTen) );

    let resultToBaseTwo = operation.toString(2);

    return resultToBaseTwo
}


btns.addEventListener('click', captureOperation);
