// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


function area (a,b){
let area = a*b;
console.log(area)
    return area
}
area (8,5);


// - створити функцію яка обчислює та повертає площу кола з радіусом r


function rad(radius) {
    let area =2*radius*Math.PI;
    console.log(area)
    return area
}
rad(8)


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function elips (h,radius){
    let area=2*Math.PI*radius*(h+radius);
    console.log(area)
    return area
}
elips(10,5)


// - створити функцію яка приймає масив та виводить кожен його елемент

function element(values){
    for (const elem of values){
    console.log(elem)}
}
element([3,5,7,9,0])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function Paragraph(p){
    document.write(`<p>${p}</p>`)
}
Paragraph('Hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list(text){
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}
list('Hello young man ')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list(text,numbers){
    document.write(`<ul>`)
    for (let i=0;i<numbers;i++){
    document.write(`<li>${text}</li>`)}
    document.write(`</ul>`)
}
list(`Hi,guys`,5)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


let file =[11,'Hello',false]
function column(element){
    document.write(`<ul>`)
    for (let elm of element)
    {
        document.write(`<li>${elm}</li>`)
    }
    document.write('</ul>')
}
column(file)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


let user = [
    {id: 1, name: 'Oleh', age: 24},
    {id: 2, name: 'Alex', age: 27},
    {id: 3, name: 'Sergiy', age: 36},
    {id: 4, name: 'Roma', age: 33},
]

function users(names){
    for (let i=0;i<names.length;i++){
        let arrName=names[i]
        document.write(`<div> id: ${arrName.id},name:${arrName.name},age:${arrName.age}</div>`)
    }
}
users(user)


// - створити функцію яка повертає найменьше число з масиву


let numbers=[1,3,5,7,9,10]
function minimun(figure){
    let one=Math.min(...figure)
    return one
}
let i=minimun(numbers);
console.log(i)



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


let numbers=[5,10,13]

function sum (arr){
let result =0
    for(let i=0;i<arr.length;i++){
        let arrElement=arr[i]
        result=result+arrElement
    }
    return result
}
let b=sum(numbers)
console.log(b)




// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let numbers = ([11,22,33,44])

function swap (arr, index1, index2) {
    let x = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = x;
    return arr
}
let c = swap(numbers, 0, 1)
console.log(c)


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange (UAH,currency,exchanges) {
    let exchangeValue = 0
    for (let i = 0; i < currency.length; i++){
        if (currency[i].currency === exchanges){
            exchangeValue = currency[i].value
        }
    }
    let result = UAH / exchangeValue
    return result
}
let y = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
console.log(y)