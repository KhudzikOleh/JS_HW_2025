// - створити блок,

let Div = document.createElement('div')
Div.innerText = 'Hi,Sergio'
//     - додати йому класи wrap, collapse, alpha, beta
Div.classList.add('wrap', 'collapse', 'alpha', 'beta')

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
Div.style.backgroundColor = 'silver'
Div.style.color = 'yellow'
Div.style.fontSize = '25px'
// - додати цей блок в body.
document.body.appendChild(Div)

// - клонувати його повністю, та додати клон в body.
let DivClone = Div.cloneNode(true)
document.body.appendChild(DivClone)


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let arr = ['Main', 'Products', 'About us', 'Contacts']
let ul = document.createElement('ul')
for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li')
    li.innerText = arr[i];
    ul.appendChild(li)
}
document.body.appendChild(ul)

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


let Div2 = document.createElement('div')
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let div2Element = document.createElement('div');
    div2Element.innerText = `title:${coursesAndDurationArray[i].title},monthDuration:${coursesAndDurationArray[i].monthDuration}`
    Div2.appendChild(div2Element)
}
document.body.appendChild(Div2)


// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (let coursesAndDurationArray2El of coursesAndDurationArray2) {

    let divItems = document.createElement('div');
    divItems.classList.add('item');
    document.body.appendChild(divItems);

    let h1Head = document.createElement('h1');
    h1Head.classList.add('heading');
    h1Head.innerText = `Title${coursesAndDurationArray2El.title}`;
    divItems.appendChild(h1Head);

    let pDuration = document.createElement('p');
    pDuration.classList.add('heading');
    pDuration.innerText = `Duration month:${coursesAndDurationArray2El.monthDuration}`;
    divItems.appendChild(pDuration);
}


// let div3 = document.createElement('div')
// for (let i = 0; i < coursesAndDurationArray2.length; i++) {
//     let div = document.createElement('div')
//     let h1 = document.createElement('h1')
//     let p = document.createElement('p')
//     h1.innerText = `Title ${coursesAndDurationArray2[i].title}`;
//     p.innerText = `MonthDuration${coursesAndDurationArray2[i].monthDuration}`
//     div.appendChild(h1);
//     div.appendChild(p);
//     div3.appendChild(div);
// }
// document.body.appendChild(div3)


// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту


let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    }]

let div4 = document.createElement('div');
for (let i = 0; i < simpsons.length; i++) {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let img = document.createElement('img')
    h1.innerText = `Name:${simpsons[i].name},Surname:${simpsons[i].surname}`;
    p1.innerText = `Age:${simpsons[i].age}`;
    p2.innerText = `Information:${simpsons[i].info}`;
    img.src = simpsons[i].photo;
    div.appendChild(h1);
    div.appendChild(p1);
    div.appendChild(p2)
    div.appendChild(img);
    div4.appendChild(div);
}
document.body.appendChild(div4)


// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним файлом

let div5 = document.createElement('div');
for (let i = 0; i < coursesArray.length; i++) {
    let div = document.createElement('div')
    let h1 = document.createElement('h1');
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    h1.innerText = `Title: ${coursesArray[i].title}`;
    span1.innerText = `Month Duration: ${coursesArray[i].monthDuration}`;
    span2.innerText = `Hour Duration: ${coursesArray[i].hourDuration}`;
    span2.style.marginLeft = '40px';
    let ul = document.createElement('ul');
    for (let y = 0; y < coursesArray[i].modules.length; y++) {
        let li = document.createElement('li')
        li.innerText = coursesArray[i].modules[y]
        ul.appendChild(li)
    }
    div.appendChild(h1);
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(ul);
    div5.appendChild(div);
}
document.body.appendChild(div5)
