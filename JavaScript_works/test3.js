//1.Write a functions to count the number of 0 in given number?
// eg: countOfZero(10010)  
// out: count of zero is 3
// countOfZero = n =>{
//     count = 0
//     // num = String(n)
//     for(i of String(n)){
//         if(i == 0){
//             count++
//         }
//     }
//     return `count of zero is ${count}`
// }
// console.log(countOfZero(10010));

//Write a function to remove the given symbols from the string. The symbols are !?.,-
// removeSymbols = para =>{
//     newPara = ""
//     for(i of para){
//         if(i=="!"||i=="?"||i=="."||i==","||i=="-"){
//             continue
//         }
//         newPara += i
//     }
//     return newPara 
// }
// var s = "So the next time you’d like to really unplug and rewind?, consider one of these beautiful car-free places around the world, from Kenya to Kyoto!. Just remember to pack comfortable shoes."
// console.log(removeSymbols(s));

//Write a function to find first and last vowels in a string?
// eq: firstAndLastV("luminar technolab")
// out: first vowel = u
// last vowel = a


// vowelCheck = i =>{
//         if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
//             return true 
//         }
// }
// firstAndLastV = v =>{
//     var first = ""
//     var last = ""
//     f = 0
//     l = 0
//     i = 0
//     j = v.length-1
//     while(i<v.length && j>0){
//         if(f==0){
//             if(vowelCheck(v[i])){
//                 first = v[i]
//                 f += 1
//             }
//         }
//         if(l==0){
//             if(vowelCheck(v[j])){
//                 last = v[j]
//                 l += 1
//             }
//         }  
//         i += 1
//         j += -1   
//     }
//     return `first vowel is ${first} and second vowel is ${last}`
// }
// console.log(firstAndLastV("luminar technolab"));
//------------------------best way--------------------------------------//
// firstAndLastV = s =>{
//     newS = ""
//     for(i of s){
//         if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
//             newS += i
//         }
//     }
//     console.log("first vowel is: ",newS[0]);
//     console.log("second vowel is: ",newS.slice(-1,));
// }
// firstAndLastV("luminar technolab")



//4.Write a function to find the number of words in given paragraph?
// wordCount = s =>{
//     count = 1
//     if(s==""){
//         count = 0
//     }else{
//         for(i of s){
//             if(i==" "){
//                 count +=1
//             }
//         }
//     }
//     return count
// }
// console.log(wordCount("hey bro"));



//5.Write a function to find the common characters in two strings?
// commonElements = (s,p) =>{
//     common = ""
//     for(i of s.toLowerCase()){
//         for(j of p.toLowerCase()){
//             if(i==j){
//                 common += i
//             }
//         }
//     }
//     return common
// }
// console.log(commonElements("Education","Menu"));