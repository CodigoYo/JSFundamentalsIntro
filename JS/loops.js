/**There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times. (Note that it's possible that number could be zero!)

/* We will discuss the following Types of loops in JavaScript
1) For loop
2) while loop
3)Do While Loop
4) Break and Continue
 There are other loops in js that we will not cover please navigate to the url below to read and understand more on loops in javascript


 */

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide



/**JavaScript for loop syntax

  for(initialExpression; condition; updateExpression) {
    // for loop body
}



 In the example above,
 The initialExpression initializes and/or declares variables and executes only once.
 The condition is evaluated.
 If the condition is false, the for loop is terminated.
 if the condition is true, the block of code inside of the for loop is executed.
 The updateExpression updates the value of initialExpression when the condition is true.
 The condition is evaluated again.This process continues until the condition is false.
 */

//Example using for loop to print the number 1 - 10
for (var input = 1; input <= 10; input++) {
    console.log(input);
}
/**The for loop in JavaScript has the same syntax as in Java and C. It has three parts:

    1) Initialization - Initializes the iterator variable i. In this example, we initialize i to 0.
    2) Condition - As long as the condition is met, the loop continues to execute. In this example, we check that i is less than or equal to 10.
    3)Increment - A directive which increments the iterator. In our case, we increment it by 1 on every loop.
 This will print the numbers 1-10*/


//EXAMPLE 2 OF for loop
/**To iterate over an array and print out all of its members, we usually use the for statement. Here's an example:*/

var myArray = ['A', 'B', 'C'];
for (var i = 0; i < myArray.length; i++)
{
    console.log('The member of myArray in index ' + i +  ' is '  + myArray[i]);
}


/**
 * TODO:
 * In this exercise, you must write a for loop that iterates on the oneArray variable and prints out all of its members.*/
var oneArray = ['Apples','Oranges', 'Pears','Peaches','Grapes']


/**While loop
 * The syntax of the while loop is:

 while (condition) {
    // body of loop
}


 Here,

 A while loop evaluates the condition inside the parenthesis ().
 If the condition evaluates to true, the code inside the while loop is executed.
 The condition is evaluated again.
 This process continues until the condition is false.
 When the condition evaluates to false, the loop stops.

 Example below

 */
// While loop program to display numbers from 1 to 5
// initialize the variable
let i = 1, n = 5;

// while loop from i = 1 to 5
while (i <= n) {
    console.log(i);
    i += 1;
}


/**Example 2: Sum of Positive Numbers Only
 // program to find the sum of positive numbers
 // if the user enters a negative numbers, the loop ends
 // the negative number entered is not added to sum*/

 let sum = 0;

 // take input from the user
 let number = parseInt(prompt('Enter a number: '));

 while(number >= 0) {

    // add all positive numbers
    sum += number;

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));
}

 // display the sum
 console.log(`The sum is ${sum}.`);


 //Output
// Enter a number: 2
// Enter a number: 5
// Enter a number: 7
// Enter a number: 0
// Enter a number: -3
// The sum is 14.

/**In the above program, the user is prompted to enter a number.

    Here, parseInt() is used because prompt() takes input from the user as a string. And when numeric strings are added, it behaves as a string. For example, '2' + '3' = '23'. So parseInt() converts a numeric string to number.

    The while loop continues until the user enters a negative number. During each iteration, the number entered by the user is added to the sum variable.

    When the user enters a negative number, the loop terminates. Finally, the total sum is displayed.*/


/**JavaScript do...while Loop
 The syntax of do...while loop is:

 do {
    // body of loop
} while(condition)


 Here,

 1) The body of the loop is executed at first. Then the condition is evaluated.
 2) If the condition evaluates to true, the body of the loop inside the do statement is executed again.
 3) The condition is evaluated once again.
 4) If the condition evaluates to true, the body of the loop inside the do statement is executed again.
 5) This process continues until the condition evaluates to false. Then the loop stops.
 Note: do...while loop is similar to the while loop. The only difference is that in do…while loop, the body of loop is executed at least once.
 */

//Example do while to display numbers 1-5

// program to display numbers
let i = 1;
const n = 5;

// do...while loop from 1 to 5
do {
    console.log(i);
    i++;
} while(i <= n);

//Example 2 do while
// to find the sum of positive numbers
// if the user enters negative number, the loop terminates
// negative number is not added to sum

let sum = 0;
let number = 0;

do {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
} while(number >= 0)

console.log(`The sum is ${sum}.`);


/**break and continue statements
 The break statement allows to stop the execution of a loop. For example, we can create a loop that loops forever using while(true) and use the break statement to break inside the loop instead by checking that a certain condition was met.

 The syntax of the break statement is:
 break [label];
 */

//Example break with for loop
// program to print the value of i
for (let i = 1; i <= 5; i++) {
    // break condition
    if (i == 3) {
        break;
    }
    console.log(i);
}//result is 2

//Example 2: break with while Loop
// program to find the sum of positive numbers
// if the user enters a negative numbers, break ends the loop
// the negative number entered is not added to sum

let sum = 0, number;

while(true) {

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));

    // break condition
    if(number < 0) {
        break;
    }

    // add all positive numbers
    sum += number;

}

// display the sum
console.log(`The sum is ${sum}.`);

// Output
//
// Enter a number: 1
// Enter a number: 2
// Enter a number: 3
// Enter a number: -5
// The sum is 6.

/**Description of Example
 * When the user enters a negative number, here -5, the break statement terminates the loop and the control flow of the program goes outside the loop.

 The while loop continues until the user enters a negative number.
 */
