// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

function age() {
    let age = document.getElementById('ageInput').value;

    if (age < 18) {
        document.getElementById('result').innerText = 'Ваш вік менше 18 років!';
    } else {
        document.getElementById('result').innerText = 'Ваш вік 18 років або більше.';
    }
}