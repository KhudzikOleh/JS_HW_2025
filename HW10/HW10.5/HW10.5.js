// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
    //


    let p = document.getElementById('text');
let button = document.getElementById('button');

button.onclick = function (e) {
    if (p.style.display === 'none') {
        p.style.display = 'block'
    } else {
        p.style.display = 'none'
    }
}