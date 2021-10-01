// first();

// function first() {

//     console.log('first');
// }; //function declaration
// ----------------------------------------------
// const second = function() {
//     console.log('second');
// }; //function expression

// second();


// (function () {
//     second();
// }); //IIFE

// console.log('finish');

// ----------------------------------------------
// a = 3;
// b = 2;



// const addToNumbers = function (p1, p2) {
//     // console.log('param first: ', p1);
//     // console.log('param second: ', p2);
//     // console.log(p1 + p2);
//     return p1 + p2;
// };

// const result = addToNumbers(3, 2);

// console.log(`result`, result);

// const result2 = addToNumbers(9, 5);

// console.log(`result2`, result2);

// -------------------------------------------------------

// const array = [1, 2, 2, 3, 4, 5];

// const findCountNumbers = function (notUniqArray, num) {
//     const array = [];

//     for (const element of notUniqArray) {
//         // console.log(`element`, element);
//         if(element === num) {
//             array.push(num);
//         }
//     }

//    return array.length;
    
// };

// const result = findCountNumbers(array, 2);

// console.log(`result`, result);

// -------------------------------------------------------

const test = function () {
    console.log(arguments);

    const convertToArray = Array.from(arguments);

    console.log(`convertToArray`, convertToArray);
};

test(32, 323, 546, 'friday', 56, 7);

console.log('array :', [32, 323, 546, 'friday', 56, 7]);