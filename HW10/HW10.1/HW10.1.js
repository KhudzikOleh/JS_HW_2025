// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form = document.forms.f1;

form.onsubmit = function (e) {

    e.preventDefault();

    let block = document.createElement('div');
    let divName = document.createElement('div');
    let divSurname = document.createElement('div');
    let divAge = document.createElement('div');

    divName.innerText = `Name: ${this.name.value}`;
    divSurname.innerText = `Surname: ${this.surname.value}`;
    divAge.innerText = `Age: ${this.age.value}`;

    block.append(divName, divSurname, divAge);

    document.body.appendChild(block);
}