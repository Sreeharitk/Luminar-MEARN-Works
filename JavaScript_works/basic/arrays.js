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


// middile element in an array
// middleElement = a =>{
//     return a[Math.floor(a.length-1/2)]
// }
// console.log(middleElement([5,6,8,3,2]));


//common array 
// commonArray = (a1,a2) =>{
//     comArray = []
//     for(i of a1){
//         for(j of a2){
//             if(i==j){
//                 comArray.push(i)
//             }
//         }
//     }
//     return comArray
// }
// console.log(commonArray([1,2,3,4,5],[3,4,5,6,7,8]));


//array element present or not
// presentArray = (a,e) =>{
//     count = 0
//     for(i of a){
//         count++
//         if(i==e){
//             return `Its present ${count}`
//         }
//     }
//     return `Not present ${count}`
// }
// console.log(presentArray([1,2,55,77,99,23,45,67],67));


//splitting string elements using .split() method
// s = "hi,hello,how,hey"
// a = s.split(",")
// console.log(a);


//create a new array with elements starting with given character
//var s = "React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery."
// a = s.split(" ")
// startArray = (a,e) =>{
//     newArray = []
//     for(i of a){
//         i = i.toLowerCase()
//         if(i[0]==e){
//             newArray.push(i)
//         }
//     }
//     return newArray
// }
// console.log(startArray(a,"r"));

//find total no of words in s
// a = s.split(" ").length
// console.log(a);


//longest word in s
// var s ='Built with compatibility in mind'
// s = s.split(" ")
// longestWord = s =>{
//     long = s[0]
//     for(i of s){
//         if(i.length>long.length){
//             long = i
//         }
//     }
//     return long
// }
// console.log(longestWord(s));

    
// a = [6,4,2,3,1,5]
// sumOfArray = a =>{
//     sum = 5
//     for(i of a){
//         for(j of a){
//             if(i+j==sum){
//                 console.log([i,j]);
//             }
//         }
//     }
// }
// sumOfArray(a)

//count of words stating with a vowel
// vowelCount = s =>{
//     count = 0
//     var a = s.toLowerCase().split(" ")
//     for(i of a){
//         if(i[0]=='a'||i[0]=='e'||i[0]=='i'||i[0]=='o'||i[0]=='u'){
//             count++
//         }
//     }
//     return count
// }
// s = "Hi apple beans icecream"
// console.log(vowelCount(s));
//----------------------------------------------------------------------------


//sorting method
// a = [6,4,2,1,3,5]
// console.log(a.sort((n1,n2)=>n1-n2));
// console.log(a.sort((n1,n2)=>n2-n1));

//Binary search methon
// a = [1,2,55,77,99,23,45,67]
// binarySearch = (a,e)=>{
//     var count = 0
//     // var flag = 0
//     var lower = 0
//     var upper = a.length-1
//     a.sort((n1,n2)=>n1-n2)
//     while(lower<=upper){
//         count++
//         middleIndex = Math.floor((upper+lower)/2)
//         if(a[middleIndex]==e){
//             break
//         }else if(e>a[middleIndex]){
//             lower = middleIndex+1
//         }else if(e<a[middleIndex]){
//             upper = middleIndex-1
//         }
//     }
//     return a[middleIndex]==e?"Its present "+count:"Not present "+count
// }
// console.log(binarySearch([1,2,55,77,99,23,45,67],67));


//sum of 2 elements in array matching sum with dsa
//[6,4,3,5,1,2]
// sort above array
//if the to be found sum is greater than sum of lower and upper index then decrese the upper value
//if the to be found sum is less than sum of lwer and upper index then incrase the lower value
// sumArray = a =>{
//     count = 0
//     lower = 0 
//     upper = a.length-1 
//     sum = 8
//     a.sort((a1,b1)=>a1-b1) 
//     while(lower<=upper){
//         count++
//         if(a[lower]+a[upper]==sum){ 
//             console.log([a[lower],a[upper]]);
//             lower++
//             upper--
//         }
//         else if(a[lower]+a[upper]>sum){ 
//             upper--
//         }
//         else if(a[lower]+a[upper]<sum){ 
//             lower++
//         }
//     }
//     console.log(count);
// }
// sumArray([6,4,3,5,1,2])