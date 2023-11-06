//function with return keyword
// function add(n1,n2){
//     var sum = n1+n2
//     return `${sum} ${n1}`
// }
// console.log(add(5,5));
// var a = add(10,20)
// console.log(a);

//---------------------------------------
// function display(){
//     for(i=1;i<=5;i++){
//         return i
//     }
// }
// console.log(display());

// //factorial
// function factorial(n){
//     var fact = 1
//     for(;n>1;n--){
//         fact *= n
//     }
//     return fact
// }
// // console.log(factorial(5));

// function rangeFactorial(r1,r2){ // callback function => function which has another function which is getting called
//     for(;r1<=r2;r1++){
//         console.log(factorial(r1));
//     }
// }
// rangeFactorial(2,6)

//greatest among two numbers
// function greatestOfTwo(n1,n2){
//     // if(n1>n2){
//     //     return `${n1} is greater`
//     // }else if(n1<n2){
//     //     return `${n2} is greater`
//     // }else{
//     //     return"both are equal" 
//     // }
//     return(n1>n2?`${n1} is greater than ${n2}`:n2>n1?`${n2} is greater ${n1}`:"both are equal")
// }
// console.log(greatestOfTwo(13,5));

//prime check
// function isPrime(n){
//     for(var i=2;i<n;i++){
//         if(n%i==0){
//             // return "not prime"
//             return false    
//         }
//     }
//     return true
//     // return(n==i?`${n} is a prime number`:`${n} is not a prime number`)
// }
// // console.log(isPrime(12));
// function rangeOfPrime(r1,r2){ // this is a callback function
//     for(;r1<=r2;r1++){
//         if(isPrime(r1)){
//             console.log(r1);
//         }
//     }
// }
// rangeOfPrime(3,10)  

//---------------------------------------

//Rrecursive Functions------------------------
// function hello(){
//     console.log("Hello");
//     hello()
// }
// hello()

// function sum(n){
//     if(n==0){
//         return n
//     }else{
//         return n+sum(n-1) //5+sum(4)= 15
//                             //4+sum(3) = 10
//                              //3+sum(2)= 6
//                               //2+sum(1) = 3
//                                //1+sum(0) = 1
//                                 //0
//     }
// }
// console.log(sum(5));

//factorial
// function fact(n){
//     return n==1?n:n*fact(n-1)
// }
// console.log(fact(5));

//fibonacci
// function fibo(n){
//     if(n<=1){
//         return n
//     }else{
//         return fibo(n-1)+fibo(n-2)
//     }
// }
// for(i=0;i<10;i++){
//     console.log(fibo(i));
// } 