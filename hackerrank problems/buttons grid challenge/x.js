// const btn = document.querySelector('#btn');

// let clicks = 0;

// btn.addEventListener('click', () => {
//     clicks += 1;
//     btn.innerHTML = clicks;
// });






// const trigger = document.querySelector('#btn5');

// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// const btn3 = document.querySelector('#btn3');
// const btn4 = document.querySelector('#btn4');
// const btn6 = document.querySelector('#btn6');
// const btn7 = document.querySelector('#btn7');
// const btn8 = document.querySelector('#btn8');
// const btn9 = document.querySelector('#btn9');



trigger.addEventListener('click', () => {
    console.log('triggered');
    let first = btn1.innerHTML;
    btn1.innerHTML = btn4.innerHTML;
    btn4.innerHTML = btn7.innerHTML;
    btn7.innerHTML = btn8.innerHTML;
    btn8.innerHTML = btn9.innerHTML;
    btn9.innerHTML = btn6.innerHTML;
    btn6.innerHTML = btn3.innerHTML;
    btn3.innerHTML = btn2.innerHTML;
    btn2.innerHTML = first;
})
