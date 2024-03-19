



let date = new Date();

let num = +localStorage.getItem('number') || 0;
const block = document.getElementById('number');
block.innerText = num.toString();
let lastSavedVisit = new Date(localStorage.getItem('lastVisit'));
const diffTime = Math.abs(date - lastSavedVisit);
const diffSeconds = Math.ceil(diffTime / 1000);
if (diffSeconds > 10) {
    console.log(diffSeconds)
    let newNum = num + 10;
    localStorage.setItem('number', newNum);
    localStorage.setItem('lastVisit', date.toString());
}