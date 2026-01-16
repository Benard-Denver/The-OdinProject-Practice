console.log("Hello world");

let firstName = "Ben";
let lastName = "Doe";

console.log(firstName);
console.log(lastName);

//use let for a variable
//use const for a constant 
//JS follows PEMDAS or BODMAS(standard) for calculations (order of operations).


// == -> is for loose equality
// 5 == "5"  the answer will be true
// 0 == false the answer will be true
// null == undefined the answer will be true
// compares value not type
// converts values to a common type before commparing them(type coercion)


// === -> strict equality
// comapares value and type
// 5 === "5" the answer will be false
// 0 == false the answer will be false
// null == undefined the answer will be false
// retuns false if the types of operands are different (no type coercion)

// You should almost use the === always because
// It has predictable behavior
// Fewer bugs
// Clearer intent
//Industry standard best practice

//when declaring variables alwasy try to avois using the var keyword:
// It can be redeclared without errors or warnings
// It is initialized to undefined values and it makes debugging difficult.
// let and const when declared they are not initialized, accessing them before the declaration results in reference error.

const name = 'Benard';
console.log(name);