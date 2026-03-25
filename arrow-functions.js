// Arrow Functions - Complete Guide

// 1. Basic Syntax
const add = (a, b) => a + b;
const greet = name => `Hello, ${name}`;
const sayHi = () => "Hi!";

// 2. Single vs Multiple Parameters
const square = x => x * x;
const multiply = (x, y) => x * y;
const noParams = () => "no parameters";

// 3. Block Body vs Expression Body
const expressionBody = x => x * 2;
const blockBody = x => {
    const result = x * 2;
    return result;
};

// 4. Returning Objects
const createUser = (name, age) => ({ name, age });

// 5. Array Methods with Arrow Functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

// 6. Arrow Function Hoisting (Not Hoisted)
// arrowFunc(); // Error: arrowFunc is not defined
const arrowFunc = () => "This will error if called before declaration";

// 7. this Binding (Lexical this)
const obj = {
    name: "Object",
    regularFunc: function() {
        console.log(this.name); // "Object"
    },
    arrowFunc: () => {
        console.log(this.name); // undefined (inherits outer this)
    }
};

// 8. Closures
const makeCounter = () => {
    let count = 0;
    return () => ++count;
};

// 9. Chaining
const compose = (f, g) => x => f(g(x));
const addOne = n => n + 1;
const double = n => n * 2;
const addOneThenDouble = compose(double, addOne);

// 10. Default Parameters
const greetUser = (name = "Guest") => `Welcome, ${name}`;

function calcution(a , b){
    
}