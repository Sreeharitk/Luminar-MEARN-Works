
//hoistin 
// add()
//without argument------------------
// function add(){
//     var n1 = 5
//     var n2 = 15
//     var sum = n1 + n2
//     console.log(sum);
// }

// add()

//with arguments---------------------
// function add(n1,n2){
//     var sum = n1 + n2
//     console.log(sum);
// }

// add(5,20)

//factorial pgm 
// function fact(num1){
//     factorial = 1
//     for(;num1>1;num1--){
//         factorial *= num1
//     }
//     console.log(factorial);
// }

// fact(5)

//prime check
// function prime(n){
//     for(i=2;i<n;i++){
//         if(n%i==0){
//             break
//         }
//     }
//     console.log(n==i?`${n} is a prime`:`${n} is not prime`);
// }
// prime(5)

//fibonacci
// function fibo(n,num1,num2){
//     // var num1 = 0
//     // var num2 = 1
//     for(;n>0;n--){
//         console.log(num1);
//         sum = num1 + num2
//         num1 = num2
//         num2 = sum
//     }
// }
// fibo(10,0,1)

//sum of non prime number from range1 to range 2
// function nprime(r1,r2){
//     sum = 0
//     for(;r1<=r2;r1++){
//         for(i=2;i<r1;i++){
//             if(r1%i==0){
//                 sum += r1
//                 break
//             }
//         }
//     }
//     console.log(sum);
// }
// nprime(3,15)

//global variable
// function demo(){
//     // var n = 5
//     // const
//     //let       these are all local scoped or block scoped variables
//     n = 5 // this is a global scoped variables
//     console.log("inside fn",n);
// }
// demo()
// console.log("outside fn",n);

// function prime(n1,n2){
//     for(;n1<=n2;n1++){
//         for(var i=2;i<n1;i++){
//             if(n1%i==0){
//                 break
//             }
//         }
//         if(n1==i){
//             console.log(n1);
//         }
//     }
// }
// prime(3,10)

function sum(a,s){
    var sum = a + s
    console.log(sum);
}
