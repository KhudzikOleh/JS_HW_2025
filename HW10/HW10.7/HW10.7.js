// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)



const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const button = document.getElementById('button');
const contentDiv = document.getElementById('content');

button.onclick = () => {
    contentDiv.innerHTML = ''
    let lines = +input1.value;
    let cells = +input2.value;
    let content = input3.value;
    console.log(lines, cells, content);
    console.log(input1);
    let table = document.createElement('table')
    for (let i = 0; i < lines; i++) {
        let tr = document.createElement('tr');
        for (let y = 0; y < cells; y++) {
            let td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    contentDiv.appendChild(table)
}