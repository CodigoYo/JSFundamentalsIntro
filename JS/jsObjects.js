/**In the JavaScript data types tutorial, you learned about 7 different primitive data types. And here, you are going to learn about the eighth data-type(JavaScript object). JavaScript object is a non-primitive data-type that allows you to store multiple collections of data. Let's look at an example*/
// object
const student = {
    firstName: 'ram',
    class: 10
};


//Below, an object object_name is defined. Each member of an object is a key: value pair separated by commas and enclosed in curly braces {}.
//The syntax to declare an object is:

const object_name = {
    key1: value1,
    key2: value2
}

//Example of creating an object below
// object creation
const person = {
    name: 'John',
    age: 20
};
console.log(typeof person); // object

//You can also define an object in a single line.
const personOne = { name: 'John', age: 20 };





/*A JavaScript Object is similar to a natural object you know; for example, a cup, a house, a car etc.

These objects can:

1) contain several things
2) have unique features
3) can contain other objects
4) can be used for several purposes
5) be able to accept several actions done on them

For example, a cup can have a smaller cup in it, drinking water from a cup, breaking a cup, driving a car, putting a kid or a toy car in a car and the list goes on.


/*The curly brackets denote the object and elements in the Object make up the object. Object values come in Key: Value pairs and these values can either be properties of the object or methods (functions). Properties are features or attributes of the Object, whereas methods are functions or actions that can be performed on the Object.*/



/*Basically, almost everything in JavaScript is an Object. For this reason, JavaScript is seen as an object-oriented language by many. In the browser, once a window loads, an instance of the Document object is created and every other thing displayed on the browser is a child of the document object and document methods are used to manipulate the parent object.*/

//Objects can also be nested let's see an example of a nested object

const myObject = {
    first:  { key:  'thing', key2: 2 },
    second: { key3: 'otherThing' },
    third:  { key4: 'my string' }
};

/*When we say everything is an object, that means that JavaScript wraps all of types with an object that provides methods for that type. To clarify this, let's look at the following code:*/

// create a message with a string value
const myMessage = 'look at me go!';

// convert to uppercase
myMessage.toUpperCase();

/*How were we able to call a method .toUpperCase() on this string? We usually are only able to call methods on objects. When we create a string, JavaScript actually wraps that string with the object of type string. The following is the same*/

// simple way to create a string
// const myMessage = 'look at me go!';

// what javascript sees
// const myOtherMessage = String('look at me go!');

// myMessage === myOtherMessage; // true

//Creating objects

/*Object literal-This is done as shown above by placing the key: value pairs and methods in curly brackets. This is also known as literal notation.*/
const obj = {
    firstName: 'William',
    lastName:  'Imoh',
    married:   true,
    greet:     function() {
        alert("Hello everyone, i'm " + this.firstName);
    }
}
//From the code above, we can access these properties and methods by calling:

console.log(obj.firstName);   // William

console.log(obj.lastName);    // Imoh
obj.greet();     // Will alert, Hello everyone, i'm William
/*You may wonder why we used this in our code instead of obj.firstName. Well, this serves like a pronoun that refers to the parent object in which it is called. We will learn more about this in the next lesson.*/

//SECOND EXAMPLE CREATING AN OBJECT

//This involves creating an object instance using the new keyword:

const house = new Object();

house.color     = 'red';
house.houseType = 'bungalow';
house.location  = 'Lagos';

/*All we did was create an object instance, assign it to the variable house, then edit its properties and their individual values.*/

//THIRD EXAMPLE
//USING FUNCTION CONSTRUCTOR TO CREATE OBJECT OR MULTIPLE PROJECTS

function University(name, location, size) {
    this.name     = name;
    this.location = location;
    this.size     = size;
}

const theUniversity = new University('caritas', 'enugu', 20000);

console.log(theUniversity.name);     // caritas
console.log(theUniversity.size);     // 20000
/*Here, a function was constructed with arguments. Notice that the function name is in Capital case which is a convention for constructor functions. The function is passed arguments, these arguments are the primary values of the object’s properties as defined by this.property.*/
//A new Object is constructed with the new keyword calling the function and passing it parameters matching the parameters defined in the function. Run this;
console.log(theUniversity)

/*Expected result
University {
  name:     'caritas',
  location: 'enugu',
  size:     '20000'
}
 */

//Accessing an object
/*The properties of Objects can be accessed in two ways using:
1) Dot notation
2) Square Bracket Notation*/

//Example using dot notation
// const objectName = {
//     objectProp: 'my super duper value',
// };
//
// console.log(objectName.objectProp); // my super duper value

//Example using Square Bracket Notation
/*The square bracket notation is an alternative to the dot notation and is written as such:*/
// const objectName = {
//     objectProp: 'super cool yo!',
// };
//
// console.log(objectName['objectProp']); // super cool yo!

/*Since the beginning of modern programming languages, using the for-loop to traverse data sets has been priceless, in Objects, there are a number of ways to traverse or iterate through object properties and they are:

for…in loop: This is the most common one and is used to iterate over each enumerable property of the object and its prototype chain.
Object.keys(o): The object.keys(o) method is used to traverse an object o and returns an array containing all enumerable property names.
Object.getOwnPropertyNames(o): A lesser known method, it iterates over an object o and returns an array of all natural property names of the object, enumerable or not.*/



/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */




/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 *
 * Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */



/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */



/** TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */



/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */



/**
 * Bonus:
 * - Create a function named `createBook` that accepts a title and author
 *   name and returns a book object with the properties described
 *   previously. Refactor your code that creates the books array to instead
 *   use your function.
 * - Create a function named `showBookInfo` that accepts a book object and
 *   outputs the information described above. Refactor your loop to use your
 *   `showBookInfo` function.
 */
