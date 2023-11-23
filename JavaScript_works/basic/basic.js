console.log("Hello world");
console.log(231);
console.log(true);

x = "hello world " + 10
y = true
console.log(typeof(x));
console.log(typeof(y));

// var let and const ...............

var num = 100
num = 120
var num = 150
console.log(num);

const num2 = 30
// const num2 = 50 // -error
// num2 = 50 // -error assignment to constant value
console.log(num2)

{
    let n = 2
    // let n = 4 //-error
    n = 3
    console.log(n);
}
// console.log(n); // -error not defined in global scope

// ...........................................................