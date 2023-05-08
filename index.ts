/* 
 * 1. Convert the following JavaScript array into a TypeScript tuple
 * const userInfo = [101, "Ema", "John", true,  , "2023"];
 */

const userInfo : [number, string, string, boolean, undefined, string] = 
    [101, "Ema", "John", true,  , "2023"];


/**
 * 2. Write a TypeScript function that takes in two arrays of numbers as parameters.
 * The function should compare the elements in both arrays and return a new array
 * that contains only the elements that are present in both arrays.
 */

function getCommonItems (arr1: number[], arr2 : number[]) : number[] {
    let common : number[] = [];

    arr1.forEach(i => {
        arr2.forEach(j => {
            if (i === j && common.indexOf(i) === -1) {
                common.push(j);
            }
        })
    });

    return common;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 4, 6, 8];

const result = getCommonItems(array1, array2); // [2, 4]


/**
 * 3. You have an interface for Product, containing the product's id,
 * name, price, and category. You want to filter an array of Products 
 * based on a specific criterion and value.
 * 
 * | Write a TypeScript generic function that takes this array,
 * | a criterion , and returns a new array containing only the products 
 * | that match the given criterion and value. Use a generic type parameter
 * | in the function signature to ensure type safety.
 */

interface Product {
    id       : number;
    name     : string;
    price    : number;
    category : 'clothes' | 'electorics' | 'toys';
}

const products : Array<Product> = [
    {
        id       : 1,
        name     : 'Shirt',
        price    : 200,
        category : 'clothes'
    },
    {
        id       : 2,
        name     : 'NOVA TV',
        price    : 20_000,
        category : 'electorics'
    },
    {
        id       : 3,
        name     : 'Racing Car Toy',
        price    : 300,
        category : 'toys'
    },
    {
        id       : 4,
        name     : 'Jacket',
        price    : 300,
        category : 'clothes'
    },
    {
        id       : 5,
        name     : 'Spider-Man Mask',
        price    : 50,
        category : 'toys'
    },
];

function filterProducts<T>(productsArray: Array<T>, criterion : string) : T[] {
    return productsArray.filter((pd) => (pd as Product).category === criterion);
}

const res = filterProducts<Product>(products, 'electorics');
// console.log(res);


/**
 * 4. Suppose you have an array of tuples, where each tuple represents a
 * product and contains the product name, price, and quantity. Write a
 * TypeScript function that calculates the total cost of all the products
 * in the array, using a generic type for the tuple and a type alias for the array.
 */

const products4 : Array<[string, number, number]> = [
    ['shirt', 30, 20],
    ['t-shirt', 10, 20],
    ['Macbook Air M2', 1700, 5]
];

type pdArray<T> = T[];

function calculateAll<T>(products : pdArray<T>) : number {
    let total = 0;
    products.forEach(pd => {
        total += pd[1];
    });

    return total;
}

const res4 = calculateAll<[string, number, number]>(products4);
// console.log(res4);


/**
 * 5. Suppose you have an array of numbers in TypeScript, and you want to find the sum of all
 * the even numbers in the array. How would you approach this problem and write code to solve it?
 */

const numbersArray : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 10];

function getTotalOfEvenNums(array : number[]) : number {
    let total = 0;

    array.forEach(num => {
        if (num % 2 === 0) {
            total += num;
        }
    })

    return total;
}

const res5 = getTotalOfEvenNums(numbersArray);
// console.log(res5);

/**
 * 6. Create an interface called Person that includes properties for name (string),
 * age (number), and email (string). Then create an array of Person objects and write
 * a function that takes the array and a string email as parameters, and returns the
 * Person object that matches the email or null if no match is found.
 */

interface Person {
    name  : string;
    age   : number;
    email : string;
}

const arrayOfPerson : Person[] = [
    {
        name  : 'Siam',
        age   : 18,
        email : 'siam@gmail.com'
    },
    {
        name  : 'Joy',
        age   : 17,
        email : 'joy@gmail.com'
    },
    {
        name  : 'Auntik',
        age   : 16,
        email : 'auntik@gmail.com'
    },
];

function findByEmail(users : Person[], email : string) : Person | undefined {
    return users.find(user => user.email === email);
}

const res6 = findByEmail(arrayOfPerson, 'joy@gmail.com');
// console.log(res6);


/**
 * 7. Create a TypeScript program that declares an array of numbers.
 * Use the spread operator to pass the elements of the array as arguments to a
 * function that finds the minimum and maximum values of the array. Use destructuring
 * to assign the minimum and maximum values to separate variables, and log them to the console.
 */

const minMaxArr : number[] = [20, 30, 2, 49, 4, 39, 498, 932, 10230, 203];

function findMinMax(...array : number[]): void {
    let obj = {max : array[0], min : array[0]};
    array.forEach(item => {
        if (item > obj.max) {
            obj.max = item;
        }
        if (item < obj.min) {
            obj.min = item;
        }
    });

    // console.log(obj);
}

findMinMax(...minMaxArr);

/**
 * 8. Create a TypeScript program that declares a function that takes a string parameter
 * with a literal type of "red", "green", or "blue", and an optional boolean parameter.
 * If the boolean parameter is true, log the string parameter in uppercase. If the boolean
 * parameter is false or not provided, log the string parameter in lowercase.
 */

function upperOrLower(color : 'red' | 'blue' | 'green', isUpper = false) {
    const result = isUpper ? color.toUpperCase() : color;
    // console.log(result);
}

upperOrLower('blue');
