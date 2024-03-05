// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world'
console.log(str1.length)
let str2 = 'lorem ipsum'
console.log(str2.length)
let str3 = 'javascript is cool'
console.log(str3.length)


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str4 = 'hello world';
let str5 = 'lorem ipsum';
let str6 = 'javascript is cool';

console.log(str4.toUpperCase());
console.log(str5.toUpperCase());
console.log(str6.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str7 = 'HELLO WORLD';
let str8 = 'LOREM IPSUM';
let str9 = 'JAVASCRIPT IS COOL';

console.log(str7.toLowerCase());
console.log(str8.toLowerCase());
console.log(str9.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str10 = ' dirty string   ';
console.log(str10.trim())


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


const stringToArray = () => {
    string = string.split(' ');
    return string
}
let string = 'Ревуть воли як ясла повні';
console.log(stringToArray())

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.


let mas = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let any = mas.map(obj => obj + '');
console.log(any)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let sortNum = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.slice().sort((a, b) => a - b)
    } else if (direction === 'descending') {
        return nums.slice().sort((a, b) => b - a)
    }
}
let nums = [11, 21, 3]
console.log(sortNum(nums, 'ascending'))
console.log(sortNum(nums, 'descending'))

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration


let sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sort)


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(filter)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let map = (coursesAndDurationArray.map((items, index) => ({...items, id: index+1})));
console.log(map)

// описати колоду карт (від 6 до туза без джокерів)

let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},

    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},

    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},

    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'}
];


// - знайти піковий туз
let Card = (cards.find((card => card.cardSuit === 'spade' && card.value === 'ace')));
console.log(Card);
// - всі шістки
let Card1 = (cards.filter((card => card.value === '6')))
console.log(Card1)
// - всі червоні карти
let Card2 = (cards.filter((card => card.color === 'red')))
console.log(Card2)
// - всі буби
let Card3 = (cards.filter((card => card.cardSuit === 'diamond')))
console.log(Card3)
// - всі трефи від 9 та більше
let Card4 = (cards.filter(card => card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)))
console.log(Card4)

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єк
let Cards = {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
};
let res = cards.reduce((acc, card) => {
    if (card.cardSuit === 'spade') {
        acc.spades.push(card);
    } else if (card.cardSuit === 'clubs') {
        acc.clubs.push(card);
    } else if (card.cardSuit === 'heart') {
        acc.hearts.push(card);
    } else {
        acc.diamonds.push(card);
    }
    return acc;
}, Cards);

console.log(res);


// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

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

// --написати пошук всіх об'єктів, в який в modules є sass
let modules = coursesArray.filter((item => item.modules.includes('sass')))
console.log(modules)

// --написати пошук всіх об'єктів, в який в modules є docker
let modules2 = coursesArray.filter((item => item.modules.includes('docker')))
console.log(modules2)
