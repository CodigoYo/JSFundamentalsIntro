/**Arrays
 An array is a data structure that holds an ordered list of items. Each slot in a JavaScript array can hold any type of data.

 Declaring an Array
 In JavaScript, arrays are denoted by square brackets, []. The items in an array are called elements, and are separated by commas.

 Let's take a look at an array literal. We have seen number literals (such as 42) and string literals before (such as 'codeup'). Here are several array literals:*/

//Example 1                    [] // an empty array

//Example 2                    [1] // an array with one element

//Example 3                    [1, 2, 3, 4, 5] // an array with 5 elements

//Example 4                    ["one", 42, [8, 9, 10]] // an array with 3 elements all of different types
 // notice that the array above does *not* have 5 elements, rather the last
 // element is itself an array with 3 elements in it

//Example of an array stored in a variable,  an array of 4 strings. Inside the brackets is a comma separated list of value
 var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// Counting Array Items
//use the length property. Here is an example:

 var shapes = ['square', 'rectangle', 'circle', 'triangle'];

 console.log(shapes.length); // 4

//Accessing Array Elements
// to use the data inside the array for something. Arrays are zero-indexed, which means the first slot in an array is actually 0.


// Array elements are accessed by adding an opening and closing square bracket with the index of the item to be accessed inside the brackets. Here are some examples:

 var numbers = [1, 2, 3, 4];
 console.log(numbers[0]); // 1
 console.log(numbers[1]); // 2
 console.log(numbers[2]); // 3
 console.log(numbers[3]); // 4
 var shapes = ['square', 'rectangle', 'circle', 'triangle'];

 console.log('There are ' + shapes.length + ' shapes in the array');

 console.log('The first shape is: ' + shapes[0]);
 // The first shape is: square

 console.log('The second shape is: ' + shapes[1]);
 // The second shape is: rectangle

 console.log('The third shape is: ' + shapes[2]);
 // The third shape is: circle

 console.log('The fourth shape is: ' + shapes[3]);
 // The fourth shape is: triangle

 console.log('The fifth shape is: ' + shapes[4]);
 // The fifth shape is: undefined as there is no value (existence) in this slot

// Iterating Arrays
// To iterate means to repeat a process to achieve a desired result. When you iterate over an array, it means that you cycle/traverse through the indices and elements of the array. We can use the looping statements we learned earlier to iterate through arrays in JavaScript.

// For Loop
 var shapes = ['square', 'rectangle', 'circle', 'triangle'];

 // loop through the array and log the values
 for (var i = 0; i < shapes.length; i++) {
    console.log('The shape at index ' + i + ' is: ' + shapes[i]);
}
// Above in the example a for loop that starts at zero (this index of the first element in any array), and ends at the length of the array minus one (the index of the last element in any array). We can then use i to index our array and refer to every element sequentially.

/** For-Each Loop
 JavaScript arrays have a forEach method that can be used as an alternative to a for loop.

 The forEach method on an array takes another function as a parameter and doesn't have a return value. The function passed to forEach takes in up to 3 parameters that will provide access to the array element, the corresponding index, and the array itself. We can refer to the function passed to .forEach as a callback function. The callback function will be called for every item in the array.

 someArray.forEach(function(element, index, array) {
    // ...
})
 By convention, we will name our arrays a plural noun, and refer to individual elements by the singular version of the noun. In previous examples, we had used an array named shapes which means we can define the parameter name of the .forEach callback as shape.*/

 var shapes = ['square', 'rectangle', 'circle', 'triangle'];

 // loop through the array and log the values
 shapes.forEach(function(shape) {
    console.log('Here is a lovely shape: ' + shape + '.');
});




 //Creating Arrays

/*Example 1 Array Literal-Using the array literal is the most common way of creating arrays. Array values are enclosed in square brackets.*/
const arr = [];
const entertainment = ['drinks', 'music', 'dance', 'beer', 'more beer'];

// an array of objects
const coocoo = [
    { key:  'thing', key2: 2 },
    { key3: 'otherThing' },
    { key4: 'my string' }
];

/*Array Constrictor-This is another way of creating arrays using the new keyword, it is considered bad practice by many as it could bring about unforeseen behaviors in your script. The array values are passed as arguments to the constructor.*/
const bar = new Array('beer', 'music', 'beer', 'more beer');

console.log(bar);  // ['beer', 'music', 'beer', 'more beer']

/*Accessing Arrays-Unlike objects, array values are accessed using their index position starting from zero (arrays are zero-indexed). Objects use lettered indexes while arrays use numbered indexes. Arrays are accessed like this:*/
const myArr = [10, 40, 50, 70, 20, 2, 100];

myArr[0] // 10//Index starts at zero.
myArr[3] // 70
myArr[7] // 100


/*Array methods-Just like Objects, arrays also have methods which can be used to manipulate them. These methods are built-in or can be constructed. There are several array methods and they can be found here.*/

// const fig = [2, 5, 10, 30, 20];

arr.length;   // returns the length of the array = 5
//Iterating over an array is quite seamless using the for-loop. Using the above example:
const fig = [2, 5, 10, 30, 20];

for (let i = 0; i < fig.length; i++) {
    console.log(fig[i]);
}//using this for loop we can iterate through all the items in the array. Expected result:
// 2
// 5
// 10
// 30
// 20
/*Other Array methods include
 pop(): removes the last element from an array and returns that element

slice(): returns a shallow copy of a portion of an array into a new array

shift(): removes the first element from an array and returns that element

unshift(): adds one or more elements to the beginning of an array and returns the new length of the array

Array methods can be grouped into mutator methods, accessor methods and iteration methods. Mutator methods are those methods that actually alter or modifies the array, for example, the array.push() method adds a specified element to an array and returns the modified array.*/
// const fig = [10, 20, 30, 40];

fig.push(80);
console.log(fig);    // [10, 20, 30, 40, 80]


//SLICE METHOD EXAMPLE
// const fig = [10, 20, 30, 40];
const b   = fig.slice(1);

console.log(b);      // [20, 30, 40]
console.log(fig);    // [10, 20, 30, 40]


/*Iteration methods as the name implies are used to iterate over an array while sampling the length of the array and evaluating each element of the array with a callback function as defined in the method. This includes .forEach() and .map() methods.*/
//EXAMPLE USING MAP METHOD
 const fig = [10, 20, 30, 40]; //here is our array

const newFig = fig.map(function(val) { //calls a function on each element of the array
    return val + 10;
});

console.log(newFig) // [20,30,40,50]


//Below are some problems provided to practice using arrays



/*Problem 1
Write a function toArray that takes 2 values and returns these values in an array.
Example: toArray(5, 9) should return the array [5, 9].
 */




// Getting array Elements
/*
The elements of an array are accessed by an index beginning with 0.
let languages = ['C', 'C++', 'Java'];    //here is our array

let c = languages[0];  //Expected result 'C'

let cPlusPlus = languages[1];  //Expected result 'C++'

let java = languages[2];  //Expected result 'Java'
 */

/*Problem 2
Write a function getFirstElement that takes an array and returns the first element of the array.
Example: getFirstElement([1, 2]) should return 1.
 */












// Setting array Elements
/*Just as you can get array elements by an index, you can set them by this index. It does not matter whether the array was previously filled or empty.
let languages = [];
languages[0] = 'C';
languages[1] = 'C++';
languages[2] = 'Java';
Here an empty array is filled successively with the listed values.
 */


/*Problem 3 setting array elements in practice
Write a function setFirstElement that takes an array and an arbitrary variable. The variable should be inserted as the first element in the array. The array should be returned.
Example: setFirstElement([1, 2], 3) should return [3, 2]. */









// Using Array length
/*Like strings, arrays have the property length. Here it returns the number of elements in the array:
let languages = [];
let len0 = languages.length;
languages[0] = 'C';
let len1 = languages.length;
languages[1] = 'C++';
let len2 = languages.length;
The empty array contains no elements. len0 is 0. Now we fill the array step by step. len1 is 1 and len2 is 2.

 */

/*Problem 4 putting length in Array to practice
Write a function getLastElement that takes an array and returns the last element of the array.
Example: getLastElement([1, 2]) should return 2.
 */





// Sorting Arrays
/*Problem 5
Write a function sort that takes an array filled with 3 numbers and returns these 3 numbers sorted in ascending order as an array.
Example: sort([2, 3, 1]) should return [1, 2, 3].
 */




//Array Shift() and push()
/*Like strings, arrays have several methods. Two of these methods are shift and push. To remind you: Methods are functions that are applied to an object, here an array. Methods are appended with a point to the object.

The array method shift removes the first element from an array and returns that element. The length of the array is reduced by 1.

let languages = ['C', 'Java', 'JavaScript'];
let firstLanguage = languages.shift();

The array languages is created with 3 programming languages. After shift the array languages contains only 2 items, viz. ['Java', 'JavaScript']. The value 'C' is stored in firstLanguage.

The method push adds a new element to an array. The new element is passed as a parameter and is added to the end of the array.

let languages = [];
languages.push('C');
languages.push('Java');
languages.push('JavaScript');

Here an empty array is filled successively with the passed values. Finally we get the array ['C', 'Java', 'JavaScript'].
 */


/*Problem 6 putting shift and push into practice
Write a function rotate that rotates the elements of an array. All elements should be moved one position to the left. The 0th element should be placed at the end of the array. The rotated array should be returned.
Example: rotate(['a', 'b', 'c']) should return ['b', 'c', 'a'].

 */















//Array: indexOf()
/*The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present. Counting starts with 0.
let systems = ['Debian', 'Ubuntu', 'Mint'];
let i1 = systems.indexOf('Mint');
let i2 = systems.indexOf('Windows');
For complete reference please navigate to the link below
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

 */

/*Problem 7
Write a function add that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
Example: add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2].

 */






/**
 * TODO:
 * Create an array of 4 people's names and store it in a variable called
 * 'names'.
 */
var names = ["Isaac", "Benosas", "Samson", "Iyarodi"];












/**
 * TODO:
 * Create a log statement that will log the number of elements in the names
 * array.
 */






/**
 * TODO:
 * Create log statements that will print each of the names individually by
 * accessing each element's index.
 */








/** TODO:
 * Write some code that uses a for loop to log every item in the names
 * array.









/** TODO:
 * Refactor your above code to use a `forEach` loop
 */










/** TODO:
 * Create the following three functions, each will accept an array and
 * return an an element from it
 * - first: returns the first item in the array
 * - second: returns the second item in the array
 * - last: returns the last item in the array
 *
 * Example:
 *  > first([1, 2, 3, 4, 5]) // returns 1
 *  > second([1, 2, 3, 4, 5]) // returns 2
 *  > last([1, 2, 3, 4, 5]) // return 5
 */


