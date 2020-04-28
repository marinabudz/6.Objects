//1. Дано масив [2,-5, 0 -4, 7, 0 , 3, 9, -1, -8, 4]. 
//Завдання - розбити масив на 2 масива - з додатними та від'ємними цифрами,число 0 ігнорувати.
/// Вивести на екран 2 масива здодатними та від'ємними.

let array = [2, -5, 0 - 4, 7, 0, 3, 9, -1, -8, 4];
let positive = [];
let negative = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        positive.push(array[i])
    } else if (array[i] < 0) {
        negative.push(array[i])
    }
}
console.log(positive);
console.log(negative);
//2.  Дано масив [4,3,1,8,4,7,4,6,2,5,7,9,5,3,2,7]. Знайти суму елементів
//масиву між мінімальним та максимальним значенням. елементи мінімального
//та максимального значення не враховувати.
let arr = [4, 3, 1, 8, 4, 7, 4, 6, 2, 5, 7, 9, 5, 3, 2, 7];
8 + 4 + 7 + 4 + 6 + 2 + 5 + 7
let sum = 0;
let newArr = arr.slice(1, arr.length - 1);
for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i]
}

console.log(sum)
//3. Задано об'єкт з описом машини. Вивести всі проперті обєкта. 
//Додати метод який буде виводити максимальну швидкість машини та обєм бензобаку. 
//Створити метод який буде змінювати власника машини.

let carDescription = {
    model: 'Volvo',
    year: '2018',
    color: 'black',
    'max speed': 200,
    owner: undefined,
    'gasoline': 20,
    get maxSpeed() {
        return this['max speed']
    },
    get gasolineVolume() {
        return this['gasoline']
    },
    set changeUser(name) {
        this.owner = name
        return this.owner

    }

}
for (let key in carDescription) {
    console.log(`${key} : ${carDescription[key]}  `)
}

console.log(carDescription.maxSpeed);
console.log(carDescription.gasolineVolume);
carDescription.changeUser = 'Petro';
console.log(carDescription.owner);

//exercises

//removes all elements from array
let names = ["Andrew", "Edward", "Paul", "Chris", "John"];

while ((i = names.shift()) !== undefined) {
    console.log(i);
}
console.log(names);
// Andrew, Edward, Paul, Chris, John
//another way 
let allNames = ["Andrew", "Edward", "Paul", "Chris", "John"];
allNames.length = 0;
console.log(allNames);

//another way 
let all = ["Andrew", "Edward", "Paul", "Chris", "John"];
all = [];
console.log(all);

//slice 
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// поверне все що після 2 індексу включаючи його самого
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// поверне все що після 2 індексу і до 4 не включаючи його самого
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// поверне все що після 1 індексу і до 5 не включаючи його самого(навіть якщо його не існує)
// expected output: Array ["bison", "camel", "duck", "elephant"]


//indexOf()

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 4));
// expected output: 4
//оскільки indexOf повертає індекс того значення яке знайде перше
//а нам скажімо треба індекс наступного елемент який має таке ж саме значення
//то використовувати такий запис 

console.log(beasts.indexOf('giraffe'));
// expected output: -1

//find all occurences 
let indices = [];
let anotherArray = ['a', 'b', 'a', 'c', 'a', 'd', 'c', 'a', 'd', 'c', 'a', 'd', 'c', 'a', 'd'];
let element = 'c';
let idx = anotherArray.indexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = anotherArray.indexOf(element, idx + 1);

}
console.log(indices)


// check for duplicated values

function updateVegetablesCollection(veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach');
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.
let lastElem = veggies[veggies.length - 1];
console.log(lastElem)
console.log(veggies.toString());

// The Array.of() method creates a new Array instance from a variable number of arguments, 
//regardless of number or type of the arguments.

let createArray = Array.of(2, 'stepan', true)
console.log(createArray)

//The concat() method is used to merge two or more arrays. 
//This method does not change the existing arrays
// but instead returns a new array.

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2, 1, 4, 'hello', true);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]




//filter 


//find prime numbers
const calcPrimeNumbers = num => {
    if (num <= 1) {
        return false
    } else if (num === 2) {
        return true
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false
            }
            return true
        }
    }
};
const primeNumbers = [2, 54, 34, 11, 536, 754, 334, 433, 665, 13, 7];
console.log(primeNumbers.filter(calcPrimeNumbers));

let arrID = [{
        id: 15
    },
    {
        id: -1
    },
    {
        id: 0
    },
    {
        id: 3
    },
    {
        id: 12.2
    },
    {},
    {
        id: null
    },
    {
        id: NaN
    },
    {
        id: 'undefined'
    }
]

let invalidEntries = 0
// check first  isNumber
const checkNumber = num => {
    return typeof (num) == 'number' && !isNaN(num) && num != undefined

}

//check second filter and >0
const filterById = value => {
    if (value.id !== 0 && checkNumber(value.id)) {
        return true
    }
    invalidEntries++
    return false

}
console.log(arrID.filter(filterById))
console.log(invalidEntries)


//find

const arrayNum = [5, 130, 12, 8, 130, 44];
//such return the first value thats bigger than 10
const found = arrayNum.find(element => element > 10);
console.log(found);

//forEach'
const items = ['item1', 'item2', 'item3']
const copyItems = []
items.forEach(element => {
    copyItems.push(element)
});
console.log(copyItems);


// some
const arrayEven = [1, 2, 4, 4, 4, 4, 6, 8];
// checks whether an element is even

const evenNum = num => num % 2 === 0;
console.log(arrayEven.some(evenNum))
console.log(arrayEven.every(evenNum))

//join

console.log(items.join(' : '));
console.log(items.toString());

//map

const arrayMap = [1, 4, 9, 16];

// pass a function to map
const map1 = arrayMap.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

// splice
console.log(arrayEven);
arrayEven.splice(2, 0, '3');
console.log(arrayEven);
arrayEven.splice(4, 3, '5');
console.log(arrayEven)
console.log(arrayEven.length - 1)
arrayEven.splice(6, 1, '7');
console.log(arrayEven)