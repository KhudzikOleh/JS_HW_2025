// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================

let num = +localStorage.getItem('number') || 0;
let newNum = num + 1
const block = document.getElementById('number')
block.innerText = newNum
localStorage.setItem('number', newNum)