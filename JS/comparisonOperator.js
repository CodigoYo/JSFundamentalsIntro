/**Comparison operators compare two values and give back a boolean value: either true or false. Comparison operators are used in decision making and loops.
 * Operator 	            Description	                                                                            Example

     ==	        Equal to: true if the operands are equal	                                                        5 == 5

     !=	        Not equal to: true if the operands are not equal	                                                5 != 5

     ===	    Strict equal to: true if the operands are equal and of the same type	                            5 === '5'

    !==	        Strict not equal to: true if the operands are equal but of different type or not equal at all	    5 !== '5'

      >	        Greater than: true if the left operand is greater than the right operand	                        3 > 2

     >=	        Greater than or equal to: true if the left operand is greater than or equal to the right operand	3 >= 3

     <	        Less than: true if the left operand is less than the right operand	                                3 < 2

     <=	        Less than or equal to: true if the left operand is less than or equal to the right operand	        2 <= 2
 */




/**Example 1: Equal to Operator*/
const c = 3, b = 2,  a = 'hello';

//Using the equal to operator
console.log(c == 3); //result true
console.log(b == '2'); //true
console.log(a == 'Hello') //false



/**Example 2: Not Equal to Operator*/
const t = 3, s = 'hello';

// not equal operator
console.log(t != 2); // true
console.log(s != 'Hello'); // true
//!= evaluates to true if the operands are not equal.


/**Example 3: Strict Equal to Operator
  === evaluates to true if the operands are equal and of the same type. Here 2 and '2' are the same numbers but the data type is different. And === also checks for the data type while comparing.


 Note: The difference between == and === is that:

 == evaluates to true if the operands are equal, however, === evaluates to true only if the operands are equal and of the same type
 */

const q = 2;

// strict equal operator
console.log(q === 2); // true
console.log(q === '2'); // false








/**Example 4: Strict Not Equal to Operator
  !== evaluates to true if the operands are strictly not equal. It's the complete opposite of strictly equal ===.

 In the above example, 2 != '2' gives true. It's because their types are different even though they have the same value.
 */
//Strict Not Equal to Operator Example
const l = 2, j = 'hello';

// strict not equal operator
console.log(l !== 2); // false
console.log(j !== '2'); // true
console.log(j !== 'Hello'); // true






/**Example 5: Greater than Operator
 > evaluates to true if the left operand is greater than the right operand. > evaluates to true if the left operand is greater than the right operand.
 */
//Greater than example
const m = 3;

// greater than operator
console.log(m > 2); // true


/**Example 6: Greater than or Equal to Operator
 >= evaluates to true if the left operand is greater than or equal to the right operand.
 */
//Greater than or Equal to Operator
const r = 3;

// greater than or equal operator
console.log(r >= 3); //true


/**Example 7: Less than Operator
 < evaluates to true if the left operand is less than the right operand.
 */

//Less than operator
const w = 3, z = 2;

// less than operator
console.log(w < 2); // false
console.log(z < 3); // true


/**Example 8: Less than or Equal to Operator
  <= evaluates to true if the left operand is less than or equal to the right operand.
 */
//Less than or Equal to Operator
const i = 2;

// less than or equal operator
console.log(i <= 3) // true
console.log(i <= 2); // true


/**Practice by analyzing see if you can guess the boolean value output of the code below then console.log(variable here) each one to see if you guessed correctly*/


var ab = 3;
var bc = 5;
var cd = 2;
var de = 3;

var tu = ab > 0;
var uv = ab == de;
var vw = de >= bc;
var wx = bc > cd;
var xy = ab != de;
var yz = de <= ab;
var zz = 4 <= cd;

console.log(tu);//true
console.log(uv);//true
console.log(vw);//false
console.log(wx);//true
console.log(xy);//false
console.log(yz);//true
console.log(zz);//false
