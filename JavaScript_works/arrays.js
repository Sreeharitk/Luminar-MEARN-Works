//sample array
// var n = [2,4,12,45,64,23,true,"hello",6.3]
// console.log(n);
// console.log(n.length);
// console.log(n[2]);
// console.log(n[n.length-1]);

//adding new elements to array using .push() method
// n.push("hello","world",10)
// console.log(n);

//remove elements using .pop()(last element)
// n.pop()
// console.log(n);

//updating data using index values
// n[1] = 40
// console.log(n);


//--------------------------------------------

// var a = [2,5,3,1,4]
//iteration using of and in
//for data values
// for(i of a){
//     console.log(i);
// }
// //for data index values
// for(i in a){
//     console.log(i);
// }


//empty array
// var b = []
// b.push(2,5,3)
// console.log(b);


//square values of nums to bo stored in empty array nums2
// squareArray = a=>{
//     var a2 = []
//     for(i of a){
//         a2.push(i**2)
//     }
//     return a2
// }
// console.log(squareArray([2,5,7,9,3,9]));

//update new array with number-1 if number<5 or number+1 if number>5
// newArray = a =>{
//     a2 = []
//     for(i of a){
//         if(i<5){
//             a2.push(i-1)
//         }else if(i>5){
//             a2.push(i+1)
//         }
//     }
//     return a2
// }
// console.log(newArray([2,9,6,3,1]));

//split positive and negative numbers into different arrays
// posNegArray = a =>{
//     apos = []
//     aneg = []
//     for(i of a){
//         i>0?apos.push(i):i<0?aneg.push(i):""
//     }
//     console.log(apos,aneg);
// }
// posNegArray([1,-4,2,6,-7,-6,100,-29]);


//finding maximum of an array
// maxExpense = e =>{
//     max = 0
//     for(i of e){
//         if(i>max){
//             max = i
//         }
//     }
//     return max
// }
// console.log(maxExpense([20000,6000,15000,10000,50000,13000]));

//finding min expenses
// minExpense = e =>{
//     min = e[0]
//     for(i of e){
//         if(i<min){
//             min = i
//         }
//     }
//     return min
// }
// console.log(minExpense([20000,6000,15000,10000,50000,13000]));

//total expense
// totExpense = e =>{
//     sum = 0
//     for(i of e){
//         sum += i
//     }
//     return [sum]
// }
// console.log(totExpense([20000,6000,15000,10000,50000,13000]))


//prime and non-prime array
// primeArray = a =>{
//     prime = []
//     nonprime = []
//     for(i of a){
//         for(j=2;j<i;j++){
//             if(i%j==0){
//                 break
//             }
//         }
//         j==i?prime.push(i):nonprime.push(i)
//     }
//     console.log("Prime Array:",prime,"And","Non Prime Array:",nonprime);
// }
// primeArray([2,5,8,9,34,56,11]);