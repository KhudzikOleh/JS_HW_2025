// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


let area =(a,b)=>(a*b)
let result = area(5,7)
console.log(result)


// - створити функцію яка обчислює та повертає площу кола з радіусом r


let Radius=(radius)=>(2*radius*Math.PI)
let result=Radius(5)
console.log(result)


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let height = (h, rad) => (2 * Math.PI * rad*(rad + h))
let result = height(5, 10)
console.log(result)

// - створити функцію яка приймає масив та виводить кожен його елемент


let element=(items)=>{
    for(let elem of items){
        {
            console.log(elem)
        }
    }
}
element([12,13,14,15])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragraph=(p)=>{
    document.write(`<p>${p}</p>`)
}
paragraph('azazaz')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let text = (side) => {
    document.write(`<ul>`)
    document.write(`<li>${side}</li>`)
    document.write(`<li>${side}</li>`)
    document.write(`<li>${side}</li>`)
    document.write(`</ul>`)
}
text(`hello`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


let grand=(text,number)=>{
    document.write(`<ul>`)
    for (let i=0;i<number;i++){
        document.write(`<li>${text}</li>`)
    }
document.write(`</ul>`)
}
grand(`Hi,bro`,3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


const arr = [15, 'Ivan', true]
let Elem = (items) => {
    document.write (`<ul>`)
    for (const Arr of items) {
        document.write(`<li> ${Arr} </li>`)
    }
    document.write (`</ul>`)
}
Elem(arr)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


let user = [
    {id: 1, name: 'Oleh', age: 24},
    {id: 2, name: 'Alex', age: 27},
    {id: 3, name: 'Sergiy', age: 36},
    {id: 4, name: 'Roma', age: 33},
]

let funUser = (fun) => {
    for (let i = 0; i < fun.length; i++) {
        const funElement = fun[i]
        document.write(`<div> id: ${funElement.id} , name:${funElement.name} , age:${funElement.age}</div>`)
    }
}
funUser(user)

// - створити функцію яка повертає найменьше число з масиву


let numbers = [1, 3, 5, 7, 9, 10]
let minim = (number) => {
    let littleNum = number[0];
    for (let i = 0; i < number.length; i++) {
        if (number[0] < littleNum) {
            littleNum = number[i];
        }
    }
    return littleNum
}
let a = minim(numbers)
console.log(a)


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


let numbers = [1, 2, 10]

let  suma = (arr) => {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        const arrElem = arr[i]
        result = result + arr[i]
    }
    return result
}
let a = suma(numbers)
console.log (a)


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

//
let numbers = [11,22,33,44]

let swap = (arr, index1, index2) => {
    let x = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = x;
    return arr
}
let a = swap(numbers, 0, 1)
console.log(a)


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


let exchange = (UAH,Values,exchange) => {
    let exchangeValue = 0
    for (let i = 0; i < Values.length; i++){
        if (Values[i].currency === exchange){
            exchangeValue = Values[i].value
        }
    }
    let result = UAH / exchangeValue
    return result
}
let a = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
console.log(a)