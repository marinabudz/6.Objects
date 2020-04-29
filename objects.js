//HOMEWORK

// 1. Створити обєкт який описує тварину(назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:

//     Функція яка виведе всю інформацію про тварину.
//     Функція яка виведе за скільки тварина зможе подолати 1000 км.(врахуйте що тварина може рухатись не більше 12 годин у день).
//     Функція яка зможе змінити назву тварини на більш детальну.

let animal = (name, weight, age, averageSpeed) => {
    return {
        name,
        weight,
        age,
        averageSpeed,
        get allInfo() {
            return ` This anuimal's name: ${this.name}, weight: ${this.weight}, age: ${this.age} years and average speed: ${this.averageSpeed} k/m`;
        },
        get runDistance() {
            let maxRunHours = 12;
            let runTime = 1000 / this.averageSpeed;
            if (runTime > 12) {
                let daysToRun = runTime / maxRunHours
                return `${this.name} need approximately ${daysToRun.toFixed(0)} days to complete the distance of 1000 km`
            } else {
                return `${this.name} need approximately ${runTime.toFixed(0)} hours to complete the distance of 1000 km`
            }
        },
        set detailAnimalName(dateiledName) {
            this.name = dateiledName;
            return this.name
        }
    }
}
const lion = animal('lion', 20, 50, 10)
console.log(lion.allInfo);
console.log(lion.runDistance);
lion.detailAnimalName = 'super lion';
console.log(lion.name);



// 2. Створіть обєкт який має у собі 2 довжини сторін фігури.
// Додайте методи які будуть робити наступне - 
// рахувати площу фігури, 
// периметр фігури, 
// зроблять фігуру 3 - д, 
// зададуть назву фігури, 
// переведуть значення з сантиметрів у метри.

const rectangle = {
    firstSide: 3,
    secondSide: 2,
    get square() {
        return this.firstSide * this.secondSide
    },
    get perimeter() {
        return this.firstSide * 2 + this.secondSide * 2
    },
    get volume() {
        this.thirdSide = +prompt('insert the length of third side')
        return this.secondSideLength * this.firstSide * this.thirdSide
    },
    set nameSet(name) {
        this.name = name
        return this.name
    },
    get calcMeters() {
        this.firstSide /= 100;
        this.secondSide /= 100;
        this.thirdSide /= 100;
        return ` first side is ${this.firstSide}, second side is ${this.secondSide} and third side is ${this.thirdSide}`
    }
}
rectangle.nameSet = 'rectangular';
console.log(rectangle.calcMeters);



// 3. Створимо аналог списка покупок(мінімум 5 покупок з всіма заданими пропертями.)



const shoppingList = {
    tomato: {
        count: 5,
        price: 10,
        buy: false,
        outOfstore: true
    },
    potato: {
        count: 10,
        price: 5,
        buy: true,
        outOfstore: false
    },
    rice: {
        count: 1,
        price: 15,
        buy: false,
        outOfstore: false
    },
    milk: {
        count: 1,
        price: 15,
        buy: true,
        outOfstore: true
    },
    yogurts: {
        count: 5,
        price: 5,
        buy: true,
        outOfstore: false
    },
    apples: {
        count: 15,
        price: 3,
        buy: false,
        outOfstore: false
    },
    bananas: {
        count: 5,
        price: 5,
        buy: true,
        outOfstore: true
    },
    // Виводимо список покупок - спочатку ті які є в магазині потім яких немає,
    allItems() {
        let availableProducts = [];
        let notAvailableProducts = [];
        for (key in this) {
            if (this[key].outOfstore === false) {
                availableProducts.push(key)
            } else if (this[key].outOfstore === true) {
                notAvailableProducts.push(key)
            }
        }
        let allProductsList = availableProducts.concat(notAvailableProducts);
        console.log(allProductsList);
    },
    // Виводимо список покупок які ми купили.
    boughtItems() {
        let items = [];
        for (key in this) {
            if (this[key].buy === true) {
                items.push(key);
            }
        }
        return items;
    },

    // Додаємо функцію яка дозволить купити продукт.

    // Додаємо функцію яка просумує всі зроблені покупки і виведе результат.
    // (не забуваємо що є значення кількості та ціни за одиницю товару)
    totalItemsSum() {
        let totalSum = 0;
        for (key in this) {
            if (this[key].buy === true) {
                totalSum += this[key].price * this[key].count;
            }
        }
        return totalSum
    },

    // Додаємо можливість збільшувати кількість товару.
    increaseItemQuantity(product, quantity) {
        for (key in this) {
            if (product === key) {
                this[key].count += quantity;
            } else {
                console.log('no such products')
            }
        }
    },

    // Додаємо можливість зменшувати кількість товару(менше 0 бути не може).

    decreaseItemQuantity(product, quantity) {
        for (key in this) {
            if (product === key) {
                if (this[key].count >= quantity) {
                    this[key].count -= quantity;
                } else {
                    console.log('dont have that many items')
                }
            }
        }
    }
}


shoppingList.boughtItems();
shoppingList.totalItemsSum()
shoppingList.increaseItemQuantity('potato', 29);
shoppingList.decreaseItemQuantity('potato', 10);
console.log(shoppingList.potato.count)

// 4. Задана колекція . 
let peopleCollection = [{
    name: "Yura",
    age: 55,
    hobby: ["films", "games", "hiking"],
    type: "Admin"
}, {
    name: "Vitalii",
    age: 35,
    hobby: ["boxing", "running", "hiking"],
    type: "Sportsmen"
}, {
    name: "Petro",
    age: 40,
    hobby: ["films", "singing", "driving"],
    type: "Producer"
}, {
    name: "Nata",
    age: 19,
    hobby: ["singing", "running", "dancing"],
    type: "Artist"
}, {
    name: "Irina",
    age: 31,
    hobby: ["dancing", "reading", "painting"],
    type: "Admin"
}, {
    name: "Christina",
    age: 27,
    hobby: ["hiking", "swimming", "films"],
    type: "Artist"
}];
// Вивести всіх адмінів.
console.log(peopleCollection.filter(person => person.type === "Admin"))
// Вивести середній вік усіх працівників.
let totalAge = 0;
let peopleNumber = 0;
let averageAge = 0;
for (let i of peopleCollection) {
    peopleNumber++;
    totalAge += i.age;
    averageAge = totalAge / peopleNumber;
}
console.log(averageAge)

// Вивести тільки унікальні хоббі працівників.

let whatever = []
let allProffessions = [];
peopleCollection.filter(person => allProffessions.push(person.hobby));
console.log(allProffessions)
for (let i = 0; i < allProffessions.length; i++) {
    for (let j = 0; j < i; j++) {
        if (allProffessions[i][j] !== undefined) {
            whatever.push(allProffessions[i][j])
        }
    }
};
console.log(whatever)

const checkWork = (value, index, self) => {
    return self.indexOf(value) === index;
};
const uniqueHobby = whatever.filter(checkWork);
console.log(uniqueHobby);

// //CLASSWORK
// //1. Дано масив [2,-5, 0 -4, 7, 0 , 3, 9, -1, -8, 4]. 
// //Завдання - розбити масив на 2 масива - з додатними та від'ємними цифрами,число 0 ігнорувати.
// /// Вивести на екран 2 масива здодатними та від'ємними.

// let array = [2, -5, 0 - 4, 7, 0, 3, 9, -1, -8, 4];
// let positive = [];
// let negative = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//         positive.push(array[i])
//     } else if (array[i] < 0) {
//         negative.push(array[i])
//     }
// }
// console.log(positive);
// console.log(negative);
// //2.  Дано масив [4,3,1,8,4,7,4,6,2,5,7,9,5,3,2,7]. Знайти суму елементів
// //масиву між мінімальним та максимальним значенням. елементи мінімального
// //та максимального значення не враховувати.
// let arr = [4, 3, 1, 8, 4, 7, 4, 6, 2, 5, 7, 9, 5, 3, 2, 7];
// 8 + 4 + 7 + 4 + 6 + 2 + 5 + 7
// let sum = 0;
// let newArr = arr.slice(1, arr.length - 1);
// for (let i = 0; i < newArr.length; i++) {
//     sum += newArr[i]
// }

// console.log(sum)
// //3. Задано об'єкт з описом машини. Вивести всі проперті обєкта. 
// //Додати метод який буде виводити максимальну швидкість машини та обєм бензобаку. 
// //Створити метод який буде змінювати власника машини.

// let carDescription = {
//     model: 'Volvo',
//     year: '2018',
//     color: 'black',
//     'max speed': 200,
//     owner: undefined,
//     'gasoline': 20,
//     get maxSpeed() {
//         return this['max speed']
//     },
//     get gasolineVolume() {
//         return this['gasoline']
//     },
//     set changeUser(name) {
//         this.owner = name
//         return this.owner

//     }

// }
// for (let key in carDescription) {
//     console.log(`${key} : ${carDescription[key]}  `)
// }

// console.log(carDescription.maxSpeed);
// console.log(carDescription.gasolineVolume);
// carDescription.changeUser = 'Petro';
// console.log(carDescription.owner);

// //exercises

// //removes all elements from array
// let names = ["Andrew", "Edward", "Paul", "Chris", "John"];

// while ((i = names.shift()) !== undefined) {
//     console.log(i);
// }
// console.log(names);
// // Andrew, Edward, Paul, Chris, John
// //another way 
// let allNames = ["Andrew", "Edward", "Paul", "Chris", "John"];
// allNames.length = 0;
// console.log(allNames);

// //another way 
// let all = ["Andrew", "Edward", "Paul", "Chris", "John"];
// all = [];
// console.log(all);

// //slice 
// const animalsAll = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animalsAll.slice(2));
// // поверне все що після 2 індексу включаючи його самого
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animalsAll.slice(2, 4));
// // поверне все що після 2 індексу і до 4 не включаючи його самого
// // expected output: Array ["camel", "duck"]

// console.log(animalsAll.slice(1, 5));
// // поверне все що після 1 індексу і до 5 не включаючи його самого(навіть якщо його не існує)
// // expected output: Array ["bison", "camel", "duck", "elephant"]


// //indexOf()

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));
// // expected output: 1

// // start from index 2
// console.log(beasts.indexOf('bison', 4));
// // expected output: 4
// //оскільки indexOf повертає індекс того значення яке знайде перше
// //а нам скажімо треба індекс наступного елемент який має таке ж саме значення
// //то використовувати такий запис 

// console.log(beasts.indexOf('giraffe'));
// // expected output: -1

// //find all occurences 
// let indices = [];
// let anotherArray = ['a', 'b', 'a', 'c', 'a', 'd', 'c', 'a', 'd', 'c', 'a', 'd', 'c', 'a', 'd'];
// let element = 'c';
// let idx = anotherArray.indexOf(element);
// while (idx != -1) {
//     indices.push(idx);
//     idx = anotherArray.indexOf(element, idx + 1);

// }
// console.log(indices)


// // check for duplicated values

// function updateVegetablesCollection(veggies, veggie) {
//     if (veggies.indexOf(veggie) === -1) {
//         veggies.push(veggie);
//         console.log('New veggies collection is : ' + veggies);
//     } else if (veggies.indexOf(veggie) > -1) {
//         console.log(veggie + ' already exists in the veggies collection.');
//     }
// }

// var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

// updateVegetablesCollection(veggies, 'spinach');
// // New veggies collection is : potato,tomato,chillies,green-pepper,spinach
// updateVegetablesCollection(veggies, 'spinach');
// // spinach already exists in the veggies collection.
// let lastElem = veggies[veggies.length - 1];
// console.log(lastElem)
// console.log(veggies.toString());

// // The Array.of() method creates a new Array instance from a variable number of arguments, 
// //regardless of number or type of the arguments.

// let createArray = Array.of(2, 'stepan', true)
// console.log(createArray)

// //The concat() method is used to merge two or more arrays. 
// //This method does not change the existing arrays
// // but instead returns a new array.

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2, 1, 4, 'hello', true);

// console.log(array3);
// // expected output: Array ["a", "b", "c", "d", "e", "f"]




// //filter 


// //find prime numbers
// const calcPrimeNumbers = num => {
//     if (num <= 1) {
//         return false
//     } else if (num === 2) {
//         return true
//     } else {
//         for (let i = 2; i < num; i++) {
//             if (num % i == 0) {
//                 return false
//             }
//             return true
//         }
//     }
// };
// const primeNumbers = [2, 54, 34, 11, 536, 754, 334, 433, 665, 13, 7];
// console.log(primeNumbers.filter(calcPrimeNumbers));

// let arrID = [{
//         id: 15
//     },
//     {
//         id: -1
//     },
//     {
//         id: 0
//     },
//     {
//         id: 3
//     },
//     {
//         id: 12.2
//     },
//     {},
//     {
//         id: null
//     },
//     {
//         id: NaN
//     },
//     {
//         id: 'undefined'
//     }
// ]

// let invalidEntries = 0
// // check first  isNumber
// const checkNumber = num => {
//     return typeof (num) == 'number' && !isNaN(num) && num != undefined

// }

// //check second filter and >0
// const filterById = value => {
//     if (value.id !== 0 && checkNumber(value.id)) {
//         return true
//     }
//     invalidEntries++
//     return false

// }
// console.log(arrID.filter(filterById))
// console.log(invalidEntries)


// //find

// const arrayNum = [5, 130, 12, 8, 130, 44];
// //such return the first value thats bigger than 10
// const found = arrayNum.find(element => element > 10);
// console.log(found);

// //forEach'
// const items = ['item1', 'item2', 'item3']
// const copyItems = []
// items.forEach(element => {
//     copyItems.push(element)
// });
// console.log(copyItems);


// // some
// const arrayEven = [1, 2, 4, 4, 4, 4, 6, 8];
// // checks whether an element is even

// const evenNum = num => num % 2 === 0;
// console.log(arrayEven.some(evenNum))
// console.log(arrayEven.every(evenNum))

// //join

// console.log(items.join(' : '));
// console.log(items.toString());

// //map

// const arrayMap = [1, 4, 9, 16];

// // pass a function to map
// const map1 = arrayMap.map(x => x * 2);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]

// // splice
// console.log(arrayEven);
// arrayEven.splice(2, 0, '3');
// console.log(arrayEven);
// arrayEven.splice(4, 3, '5');
// console.log(arrayEven)
// console.log(arrayEven.length - 1)
// arrayEven.splice(6, 1, '7');
// console.log(arrayEven)


// //array


// const sumInput = () => {
//     let allAnswers = [];
//     let totalSum = 0;
//     while (true) {
//         let question = +prompt('number: ');
//         if (Boolean(question) === false || typeof (question) !== 'number') break;
//         allAnswers.push(+question);
//     };
//     for (value of allAnswers) {
//         totalSum += value;
//     }
//     return totalSum;


// };



// const people = [{
//         name: 'stepan',
//         work: 'programmer',
//         age: '40'
//     },
//     {
//         name: 'ola',
//         work: 'cooker',
//         age: '30'
//     },
//     {
//         name: 'devon',
//         work: 'programmer',
//         age: '23'
//     },
//     {
//         name: 'victor',
//         work: 'cooker',
//         age: '54'
//     },
//     {
//         name: 'margo',
//         work: 'lawyer',
//         age: '39'
//     },
//     {
//         name: 'oles',
//         work: 'lawyer',
//         age: '34'
//     },
//     {
//         name: 'kreshna',
//         work: 'writer',
//         age: '28'
//     },
//     {
//         name: 'kira',
//         work: 'designer',
//         age: '36'
//     },
//     {
//         name: 'lev',
//         work: 'businessmen',
//         age: '62'
//     },
//     {
//         name: 'angela',
//         work: 'designer',
//         age: '25'
//     },

// ];

// let proffessions = [];
// let allAges = [];

// //each user based on age criteria
// let ageGroup = {
//     under30: [],
//     between30and50: [],
//     older50: [],
//     checkAge(person) {
//         if (person.age < 30) {
//             this.under30.push(person)
//         } else if (person.age > 30 && person.age < 50) {
//             this.between30and50.push(person)
//         } else if (person.age > 50) {
//             this.older50.push(person)
//         }
//     }
// };
// //filter group members 
// let eachAge = people.filter(ageGroup.checkAge, ageGroup);
// // another way ->  people.filter(person => people.checkAge(person))
// console.log(ageGroup.under30)



// const checkWork = (value, index, self) => {
//     return self.indexOf(value) === index;
// };



// // console.log(people.find(person => person.work === 'lawyer'));
// // people.filter(person => proffessions.push(person.work));
// // const uniquePRoffessions = proffessions.filter(checkWork);
// // people.filter(person => allAges.push(person.age));
// // ageGroup.under30 = allAges.filter(checkAge);
// // console.log(uniquePRoffessions);


// const camelize = string => {
//     return string
//         .split('-')
//         .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//         .join('')
// };
// console.log(camelize('list-style-image'));

// const filterRange = (arr, a, b) => {
//     arr.forEach((i) => {
//         if (a <= i && i <= b) {
//             console.log(i)
//         }
//     })
// };

// // const filterRange = (arr, a, b) => {
// //     return arr.filter(item => {
// //         a <= item && item <= b
// //     })
// // };
// let whatever = [5, 3, 8, 1];
// filterRange(whatever, 1, 4);
// console.log(whatever)