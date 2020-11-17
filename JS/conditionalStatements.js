/**
 Conditional Statements
 If you’ve ever encountered a block of JavaScript code, you’ve most likely noticed the familiar English words if and else. These are conditional statements, or blocks of code that execute based on whether a condition is true or false.

 All the comparison and logical operators we just learned will come in handy when evaluating these statements.

 Conditional statements can be thought of as flow charts that will produce different outcome based on different results.

 If / Else
 If
 An if statement will always be written with the keyword if, followed by a condition in parentheses (()), and the code to be executed in curly braces ({}). This would be written as if () {}. Since if statements usually contain a larger amount of code, they’re written on multiple lines with indentation.

 if () {
}
 In an if statement, the condition will only run if the statement in parentheses is true. If it is false, the entire block of code will be ignored.

 if (condition) {
  // execute code
}
 First, it can be used to test for the existence of a variable.

 var age = 21;

 if (age) {
  console.log("Your age is " + age + ".");
}
 In the above example, an age variable exists, therefore the code will print to the console. if (age) is shorthand for if (age === true), since the if statement evaluates to true by default.

 We can use the comparison operators we learned earlier to make this condition more powerful. If you’ve ever seen the website for an alcoholic product, they usually have an age limit you must enter to view the site. In America, the age is 21. They might use an if statement to test if the user’s age is greater than or equal to 21.

 var age = 21;

 if (age >= 21) {
  console.log("Congratulations, you can view this site.");
}
 Else
 If you wanted to display a different message for users who don’t meet the condition, you would use an else statement. If the first condition isn’t true, the first code block will be ignored and the else code block will be executed.

 if (condition) {
  // execute code
} else {
  // execute other code
}
 Here is an example with a younger user. Since the user does not meet the condition, the second code block will run.

 var age = 18;

 if (age >= 21) {
  console.log("Congratulations, you can view this site.");
} else {
  console.log("You must be 21 to view this site.");
}
 Else If
 If there are more than two options, you can use an else if statement to execute code based on multiple conditions.

 var country = "Spain";

 if (country === "England") {
  console.log("Hello");
} else if (country === "France") {
  console.log("Bonjour");
} else if (country === "Spain") {
  console.log("Buenos días");
} else {
  console.log("Please enter your country.");
}
 In the above example, the output will be "Buenos Días" since the value of country is set to "Spain".

 Switch
 There is another type of conditional statement, known as a switch statement. It is very similar to an if statement, and performs the same function, but is written differently.

 A switch statement is useful when evaluating many possible outcomes, and is usually preferable to using many else if statements.

 A switch statement is written as switch () {}.

 switch (expression) {
  case x:
    // execute code
    break;
  case y:
    // execute code
    break;
  default:
    // execute code
}
 Within the statement, you’ll see the case, break, and default keywords. We’ll use the same example as we did for else if with a switch statement to understand better.

 var country = "Spain";

 switch (country) {
  case "England":
    console.log("Hello");
    break;
  case "France":
    console.log("Bonjour");
    break;
  case "Spain":
    console.log("Buenos días");
    break;
  default:
    console.log("Please enter your country.");
}
 In this example, we’re evaluating the variable for a certain string, and a block of code will execute based on each case. The break keyword will prevent further code from running once a match is found. If no match is found, the default code block will execute, similar to an else statement.

*/




//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * if what the user enters is not a number, use an alert to tell them that, and
//  * do *not* display any of the above information.
//  *
//  * Can you refactor your code to use functions?
//  */

//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message that related to that
//  * color. Only worry about the colors defined below, if the color passed is not
//  * one of the ones defined below, return a message that says so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */

//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];//     UNCOMMENT THIS LINE FOR THE TODO
// var randomColor = colors[Math.floor(Math.random() * colors.length)];//     UNCOMMENT THIS LINE FOR THE TODO
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
// console.log(randomColor);
// console.log(analyzeColor(randomColor));
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */

//
//
//
//
//
//
//
//
//
//

// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function (switch case is optional) named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */

// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 6.
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var totalBill = prompt("What is your total bill?");
// console.log(luckyNumber);
// alert("Your total bill is: $" + calculateTotal(luckyNumber, totalBill).toFixed(2));


