/**Functions
A JavaScript function is a contained block of code. It can perform a task or calculation and accept arguments. One of the main reasons to use a function is to write reusable code that can produce different results each time it is run (depending on the values passed to it).

Declaration
Before a function can be used, it must be declared (or defined). A function is declared with the function keyword, and follows the same rules for naming as variables.

    A function is written as function() {}. Here is a simple “Hello, World!” in a function.

function greeting() {
    return "Hello, World!";
}
Invocation
In order to invoke (use) the function, type the name followed by parentheses.

greeting(); // returns "Hello, World!"
Parameters and Arguments
A function can also accept arguments and perform calculations. An argument is a value passed into a function. A parameter is a local variable that the function accepts and executes.

    A local variable is a variable that will only work inside a specific code block.

    In the example, we’re creating a function called addTwoNumbers that, well, adds two numbers together (seriously, good naming is important). We will send the numbers 7 and 3 through as arguments, which will be accepted by the function as the parameters x and y.

    function addTwoNumbers(x, y) {
    return x + y;
}

addTwoNumbers(7, 3); // returns 10
Since 7 + 3 = 10, the function will return 10. Below, you will see how functions are reusable, as we’ll pass different arguments to the exact same function to produce a different output.

    function addTwoNumbers(x, y) {
    return x + y;
}

addTwoNumbers(100, 5); // returns 105*/



//Warming-up These exercises are based on the variables exercises, so you may start from those (your solutions) or start from scratch.

/**
 * TODO:The Fortune Teller
 * Why pay a fortune teller when you can just program your fortune yourself?

 Write a function named tellFortune that:
 takes 4 arguments: number of children, partner's name, geographic location, job title.
 outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
 Call that function 3 times with 3 different values for the arguments.

 */


/**
 * TODO: The Puppy Age Calculator
 * You know how old your dog is in human years, but what about dog years? Calculate it!

 Write a function named calculateDogAge that:
 takes 1 argument: your puppy's age.
 calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
 outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
 Call the function three times with different sets of values.
 Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years
 */


/**
 * TODO: The LifeTime Supply Calculator
 * Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

 Write a function named calculateSupply that:
 takes 2 arguments: age, amount per day.
 calculates the amount consumed for rest of the life (based on a constant max age).
 outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
 Call that function three times, passing in different values each time.
 Bonus: Accept floating point values for amount per day, and round the result to a round number.
 */


/**
 * TODO: The Temperature Converter
 *It's hot out! Let's make a converter based on the steps here.

 Create a function called celsiusToFahrenheit:

 Store a celsius temperature into a variable.
 Convert it to fahrenheit and output "NN°C is NN°F".
 Create a function called fahrenheitToCelsius:

 Now store a fahrenheit temperature into a variable.
 Convert it to celsius and output "NN°F is NN°C."
 */


////////////////END OF WARM-UP/////////////////////



/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 * Example
 * > sayHello("SuperNova") // returns "Hello, SuperNova!"
 */







/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */






/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */



/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 /*Above code is solution
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 */



/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
