/**JavaScript Data Types
 There are eight basic data types in JavaScript. They are:
 DataTypes	    Description	                                        Example

 String	        represents textual data	                            'hello', "hello world!" etc

 Number	        an integer or a floating-point number	             3, 3.234, 3e-2 etc.

 BigInt	        an integer with arbitrary precision	                 900719925124740999n , 1n etc.

 Boolean	    Any of two values: true or false	                 true and false

 undefined	    a data type whose variable is not initialized	     let a;

 null	        special keyword denoting a null value	             let a = null;

 Symbol	        data type whose instances are unique and immutable	let value = Symbol('hello');

 Object	        key-value pairs of collection of data	             let student = { };

 Above, all data types except Object are primitive data types, whereas Object is non-primitive





 DataType String Example

 //strings example
 const name = 'ram';
 const name1 = "hari";
 const result = `The names are ${name} and ${name1}`;

 Single quotes and double quotes are practically the same and you can use either of them.

 Backticks are generally used when you need to include variables or expressions into a string. This is done by wrapping variables or expressions with ${variable or expression} as shown above.






 DataType Number Example

 Number represents integer and floating numbers (decimals and exponentials). For example,

 const number1 = 3;
 const number2 = 3.433;
 const number3 = 3e5 // 3 * 10^5



 A number type can also be +Infinity, -Infinity, and NaN (not a number). For example,

 const number1 = 3/0;
 console.log(number1); // returns Infinity

 const number2 = -3/0;
 console.log(number2); // returns -Infinity

 // strings can't be divided by numbers
 const number3 = "abc"/3;
 console.log(number3);  // returns NaN






 DataType BigInt Example

 In JavaScript, Number type can only represent numbers less than (253 - 1) and more than -(253 - 1). However, if you need to use a larger number than that, you can use the BigInt data type.

 A BigInt number is created by appending n to the end of an integer. For example,


 // BigInt value
 const value1 = 900719925124740998n;

 // Adding two big integers
 const result1 = value1 + 1n;
 console.log(result1); // returns "900719925124740999n"

 const value2 = 900719925124740998n;

 // Error! BitInt and number cannot be added
 const result2 = value2 + 1;
 console.log(result2);

 //Output
 900719925124740999n
 Uncaught TypeError: Cannot mix BigInt and other types




 DataType Boolean Example

 This data type represents the logical entity. Boolean represents one of two values: true or false. It is easier to think of it as a yes/no switch. For example,

 const dataChecked = true;
 const valueCounted = false;

 You will learn more about booleans in the JavaScript Comparison and Logical Operators tutorial.




DataType Undefined Example

 The undefined data type represents value is not assigned. If a variable is declared but the value is not assigned, then the value of that variable will be undefined. For example,

 let name;
 console.log(name); // returns undefined

 It is also possible to explicitly assign a variable value undefined. For example,

 let name = undefined;
 console.log(name); // returns undefined

 Note: It is recommended not to explicitly assign undefined to a variable. Usually, null is used to assign 'unknown' or 'empty' value to a variable.



 DataType null Example
 In JavaScript, null is a special value that represents empty or unknown value. For example,

 const number = null;

 The code above suggests that the number variable is empty.

 Note: null is not the same as NULL or Null.




 DataType Symbol Example

 This data type was introduced in a newer version of JavaScript (from ES2015).

 A value having the data type Symbol can be referred to as a symbol value. Symbol is an immutable primitive value that is unique. For example,

 // two symbols with the same description

 const value1 = Symbol('hello');
 const value2 = Symbol('hello');

 Though value1 and value2 both contain 'hello', they are different as they are of the Symbol type.






 DataType Object Example

 An object is a complex data type that allows us to store collections of data. For example,

 const student = {
    firstName: 'ram',
    lastName: null,
    class: 10
};

 You will learn about JavaScript Objects in the later tutorial.




 DataType Type Example

 JavaScript is a dynamically typed (loosely typed) language. JavaScript automatically determines the variables' data type for you.

 It also means that a variable can be of one data type and later it can be changed to another data type. For example,

 // data is of undefined type
 let data;

 // data is of integer type
 data = 5;

 // data is of string type
 data = "JavaScript Programming";


 DataType typeOf Example

 To find the type of a variable, you can use the typeof operator. For example,

 const name = 'ram';
 typeof(name); // returns "string"

 const number = 4;
 typeof(number); //returns "number"

 const valueChecked = true;
 typeof(valueChecked); //returns "boolean"

 const a = null;
 typeof(a); // returns "object"


 YOU WILL BECOME MORE FAMILIARIZED WITH DATA TYPES AS YOU WORK THROUGH THE VARIOUS LESSONS IN THIS REPOSITORY*/


