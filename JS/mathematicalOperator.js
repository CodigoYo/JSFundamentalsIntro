/*JavaScript contains operators that perform an operation on single or multiple operands (data value)
and returns a result. For example 3 + 5, where the + sign is an operator and 3 is the left operand and 5 is the right operand. The + operator adds the two numeric values and produces a result which in this case is 8.

Syntax:
<Left operand> operator <right operand>

<Left operand> operator

 JavaScript includes the following operators
1) Arithmetic Operators// We will cover only this one in this file
2) Comparison Operators
3) Logical Operators
4) Assignment Operators
5) Conditional Operators
Operator	Description
    +	        Adds two numeric operands.

    -	        Subtract right operand from left operand

    *	        Multiply two numeric operands.

    /	        Divide left operand by right operand.

    %	        Modulus operator. Returns remainder of two                 operands.

    ++	        Increment operator. Increase operand value                 by one.

    --	        Decrement operator. Decrease value by one.







    The order of precedence for basic JavaScript operators are as follows:

1.      Grouping or parenthesis

2.      Incrementing or decrementing (++ or --)

3.      Multiplication, division, or the modulus remainder operator

4.      Addition and subtraction

5.      Equality (greater than or less than)

An acronym to remember these rules is PEMDAS
P (parenthesis)
E (exponents)
M (multiplication)
D (Division)
A (addition)
S (Subtraction)

 */
// Example logging arithmetic operators
console.log(2+2);
console.log(8*3);
console.log(17%3);
/*The following example demonstrates how arithmetic operators perform different tasks on operands.
Example: Arithmetic Operator*/
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;

//below can be seen in browser console
console.log(sum, diff, mult, div, remainder); // ->7,1,12,1.33,1

let PI = 3.14;
let radius = 100;          // length in meter

const gravity = 9.81;      // in m/s2
let mass = 72;             // in Kilogram
const boilingPoint = 100;  // temperature in oC, boiling point of water
const bodyTemp = 37;       // body temperature in oC

// Lets calculate area of a circle

const areaOfCircle = PI * radius * radius;
//below can be seen in browser console
console.log(areaOfCircle); // -> 314 m

// Lets calculate weight of a substance
const weight = mass * gravity;
//below can be seen in browser console
console.log(weight); // -> 706.32 N(Newton)







 //Practice using Arithmetic Operators in JS
let operandOne = 4;
let operandTwo = 3;

/**Warming-up, For Each of the following code blocks, analyze the code and predict what the result of evaluating it would be, then execute the statements in Chrome console.*/

var x = 1;
var y = x++;
var z = ++x;

/*Using the above operands apply different JavaScript arithmetic operators to complete the problems below.*/






/**
 Problem 1 Addition
 simple addition with numbers, for example adding 10 and 20, using the plus sign (+).

 // Assign values to x and y
 let x;
 let y;

 // Add x and y and assign the sum to z
 let z;

 console.log(z);

 **/


/**Problem 2 Subtraction
 * we use the minus sign (-) to subtract numbers or variables representing numbers.


 * // Assign values to x and y
 let x;
 let y;

 // Subtract x from y and assign the difference to z
 let z;

 console.log(z);
 */


/** Problem 3 Multiplication
 * An asterisk (*) is used to represent the multiplication operator.

 // Assign values to x and y
 let x;
 let y;

 // Multiply x by y to get the product store this formula in z
 let z;

 console.log(z);
 */


/**Problem 4 Division
 * A slash (/) is used to represent the division operator.

 // Assign values to x and y
 let x;
 let y;

 // Divide y into x to get the quotient store this formula in z
 let z = x / y;

 console.log(z);
 */


/** Modulo (remainder)
 * One arithmetic operator that is slightly less familiar is the modulo (sometimes known as modulus) operator, which calculates the remainder of a quotient after division. Modulo is represented by a percentage sign (%).
 *Examples
 *  12 % 5  // result  2
    1 % -2 // result 1
    1 % 2  // result  1
    2 % 3  // result  2
    5.5 % 2 // result 1.5
 *
 * Problem 5
 * // Assign values to x and y
 let x;
 let y;
 // Use modulo within a formula where the remainder is 0 in z
 Example
 let z = x % y; //result 0
 */


/**
 * Increment and Decrement
 Increment and decrement operators increase or reduce the numerical value of a variable by one. They are represented by two plus signs (++) or two minus signs (--), and are often used with loops.
 *
 *
 *
 * Problem 6
 * // Assign a whole number value to x
        let x;

 // Use the prefix increment operation on x assign to variable prefix; Make a developer note of the result.

 let prefix;

 console.log(prefix)
 */



/** Problem 7
 * // Assign a whole number value to x
        let x;

 // Use the decrement operation on x assign to variable prefix; Make a developer note of the result.

 let prefix;

 console.log(prefix)
 */










/**
 Problem 8

 *   Calculate the area of a rectangle.


 *  Create a variable length: The length of the rectangle and assign a number.


 *    Create a variable width: The width of the rectangle and assign a number.


 *  Create a variable area: that will Return a number denoting the rectangle's area.





 /**
 Problem 9

 *   Calculate the perimeter of a rectangle.


 *  Create a variable length: The length of the rectangle and assign a number.


 *  Create a variable width: The width of the rectangle and assign a number.



 * Create a variable perimeter:  Return a number denoting the perimeter of a rectangle.


 **/


/**
 Problem 10 logging and observing
 What will the following output of variable say be and why is it not 5?

 */
pa = 1
ma = 1
kids = 3
let say = "There are " + pa + ma + kids + " people in this family." ;

console.log(say)








/*JavaScript also has a Math module which contains more advanced functions:
*/
/**Math.abs calculates the absolute value of a number it takes a number inside the parameter and returns the absolute value. Let's look at an example before we use this built in javascript method
 * syntax: Math.abs(value)
 *  Math.abs(-4)  //expected result 4*/


// Sample problem using math.abs()

/** Problem 1

Create a variable and store the math.abs() method in the parameter put the datatype of null. What is the output result on the console.log(math.abs(null))?*/





/**Problem 2 using math.abs()
 * Create a variable and store the math.abs() method in the parameter () of the method place a negative number
 * What is the absolute value output of the console*/




/** The Math.pow() function returns the base to the exponent power, that is, baseexponent, the base and the exponent are in decimal numeral system.
Syntax Math.pow(base, exponent)
Math.pow(x,y) calculates the result of x to the power of y Example below*/
Math.pow(7, 2);    // 49
Math.pow(7, 3);    // 343


/**Problem 3 Create a variable named exponent store math.pow() inside the variable, in the parameters place two numbers to return the output of 1024.*/


/**Math.floor rounds a number downward to the nearest integer
 * syntax Math.floor(x)

  Problem 4 create a variable named lowest store the Math.floor method and a number in a parameter that will round down to 2*/




/**Math.random() will give a random number syntax Math.random( );
 * Problem 5
 *  var random = Math.random( );
 *  1) Create a variable named message store a string in the variable that states 'My random number is ' use concatenation to add the variable random to the string
 *  2) Use the console.log to view message variable in browser console refresh the page and watch the random number generate
 *  */
var random = Math.random( );
var message = 'My random number is ' + random;
console.log(message)

/**Math.sqrt(x) returns the square root
The Math.sqrt() method is used to calculate the square root of a number: Math.sqrt(x) = x

If the number is negative, NaN is returned. Here is an example

 let root = Math.sqrt(4);
console.log(root) //result 2   */


/**Problem 6 Store Math.sqrt in a variable use a number in the parameters that will return the output of 0.5 log your variable to verify*/
//answer Math.sqrt(0.25)

/**ONCE YOU HAVE FINISHED THIS REVIEW AS IT IS A BASIC AND WE CANNOT COVER EVERYTHING HERE DUE TO TIME BOXING PLEASE NAVIGATE TO THE URL PROVIDED BELOW TO FURTHER YOUR UNDERSTANDING OF THE MATH OBJECT AND BECOME AWARE OF EVERYTHING THE MATH OBJECT HAS TO OFFER IN JS. SUCH AS Math.min(), Math.max(), Math.PI and much more, feel free to use the Test yourself resource available to strengthen your JS mathematical operator skills! Happy Coding*/

//https://www.w3schools.com/js/js_math.asp

