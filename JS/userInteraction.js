/**User Interaction
JavaScript provides a way to interact with users within visiting web pages. We will discuss how to create and use our own functions in more detail later, but for now we can use the following functions to display messages and get input from the user.

    Alert
Have you ever seen a dialog box pop-up with a message when you are browsing a website? This was most likely a JavaScript alert message. The syntax for the alert function is as follows:*/

    alert("Message goes here.");
//As you can see, the alert function takes in a string message as an argument. This message will be displayed to a user with an OK button to close the dialog.

/**    Confirm
 If you'd like to confirm that a certain action should be taken before performing it (I'm not a robot etc..). This could be useful for something like emptying your trash folder in you email account. Confirm function is a great way to do so.:

// the following line will show the OK/CANCEL confirm dialog*/
var confirmed = confirm('Are you sure you want to do XYZ?');
console.log(confirmed); // will be either true or false
//If the user clicks 'OK', the confirm function call will evaluate to true, and will evaluate to false if the user clicks 'CANCEL'.

/**    Prompt
 The prompt function will display a dialog box that allows a user to type in a response to a question that is asked. The syntax for the prompt */

    var userInput = prompt('Please type something:');
console.log('The user entered: ' + userInput);
//The prompt function will give us a string value that contains whatever the user typed, or null if the 'Cancel' button is clicked.

/**
 TODO:
 Create an alert function to show a welcome message to the use*/

/**
 TODO:
 USe prompt ask the user for their favorite food, use the user's response to alert a message that says the food you entered is your favorite food too
 For Example: if the user enters "pizza", your code should alert a message that says: 'Awesome, pizza is my favorite food too*/
