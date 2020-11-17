/**There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT).

 Operator	Description	                                                                            Example
    &&	    Logical AND: true if both the operands are true, else returns false	                    x && y

    ||	    Logical OR: true if either of the operands is true; returns false if both are false	    x || y

    !	    Logical NOT: true if the operand is false and vice-versa.	                              !x


Example using Logical Operators
 */
// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false


/**In Depth Example
 * 3.	Let’s say we had a variable called age and we wanted to program a computer to determine whether a person was a teenager or not. We know a teenager is a person whose age is between 13 and 19 inclusive so we will need to tell the computer to compare age to these two values. To do this we ask three questions:
 o	is the value of age greater than or equal to 13?
 o	is age less than or equal to 19?
 o	is age greater than or equal to 13 AND is age less than or equal to 19?

 The first two questions can be expressed in JavaScript using comparison operators as follows
 -	age >= 13
 -	age <= 19

 We form our compound condition by using the logical and operator, && to combine the two simple conditions as follows:
 -	((age >= 13) && (age <= 19))




 In order to evaluate the above compound expression, the following four possibilities need to be considered:
 1)	age >= 13 is false and age <= 19 is false. There is no possible age that could be both less than 13 and greater than 19. So, the only logical conclusion is that the person is not a teenager.
 2)	age >= 13 is false but age <= 19 is true. (For example, the age could be 12.) In this case the overall expression evaluates to false and the computer can conclude that the person is not a teenager.
 3)	age >= 13 is true but age <= 19 is false. (For example, the age could be 21.) In this case the overall expression evaluates to false and the computer can conclude that the person is not a teenager.
 4)	age >= 13 is true and age <= 19 is true. (For example, the age could be 16.) In this case the overall expression evaluates to true and the computer can conclude that the person is a teenager.

 The four possibilities are summarised in the table below. The first two columns contain the inputs, the output is displayed in the third column. As can be seen there is only one situation that yields an output of true (highlighted). This occurs when the age is between 13 and 19 inclusive. In all other cases the outputs are false.

 age >= 13       age <= 19           age >=13 && age <=19
    false           false                   false
    false           true                   false
    true            false                  false
    true            true                   true
 */
