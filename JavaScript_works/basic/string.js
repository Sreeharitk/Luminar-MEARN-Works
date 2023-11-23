//accessing chars using index
// var data = "Sreehari"
// console.log(data[0]);
// console.log(data[3]);
// //count of chars or elements
// console.log(data.length);

//last element of a string
// function stringQ(s){
//     return s[s.length-1]
// }
// console.log(stringQ("sreehari"));

//iteration
// var a = "sreehari"
//for elements in a
// for(let i of a){
//     console.log(i);
// }
//for index of those elements
// for(let i in a){
//     console.log(i);
// }

//string concatenation
// var a = "sreehari"
// var b = ""
// for(i of a){
//     b+=i
//     console.log(b);
// }
// console.log(b);

//count of letter
// countElemt = (string,elmnt)=>{
//     count = 0
//     for(i of string){
//         if(i==elmnt){
//             count += 1
//         }
//     }
//     return count
// }
// console.log(countElemt("Luminar Technolab","a"));

//remove elements/words in a string
// removeElmnt = (s,e)=>{
//     snew = ""
//     for(i of s){
//         if(i!=e){
//             snew += i
//         }
//     }
//     return snew
// }
// console.log(removeElmnt("sreehari","s"));

//math.floor = removes the decimal point(does not do rounding function)
// console.log(Math.floor(2.5));

//middle element in a string
// elemnt = e =>{
//     return e[Math.floor(e.length/2)]
// }
// console.log(elemnt("hen"));

//Q1)write a function to find the number of vowels in string
// nVowels = s =>{
//     count = 0
//     for(i of s){
//         if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
//             count += 1
//         }
//     }
//     return count
// }
// console.log(nVowels("luminar technolab"));

//Q2)write a function to remove vowels in string
// rVowels = (s)=>{
//     snew = ""
//     for(i of s){
//         if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
//             continue
//         }
//         snew += i    
//     }
//      return snew
// }
// console.log(rVowels("luminar technolab"));

//write a function to get the count of vowels and consonants in a string
// strCount = s =>{
//     countOfV = 0
//     // countOfC = 0
//     for(i of s){
//         if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
//             countOfV += 1}
//         // }else if(i!=" "){
//         //     countOfC += 1
//         // }
//     }
//     return `Count of vowels are ${countOfV} and count of consonants are ${s.length - countOfV} `
// }
// console.log(strCount("apple"));

//Lowercase and Uppercase transformation
// var s = "hello"
// var a = "HI"

// var s = s.toUpperCase()
// console.log(s);

// console.log(a.toLowerCase());
//--------------------------------------------------

//startsWith and endsWith
// var s = "sreehari"
// console.log(s.startsWith("sree"));
// console.log(s.endsWith("sree"));
//----------------------------------------------------

//write a function to check if number is indian number or not
// validIndNum = num =>{
//     if(num.startsWith("+91") && num.length==13){
//         return "Valid"
//     }else{
//         return "Invalid"
//     }
// }
// console.log(validIndNum("+918921275692"));

//string slicing-------------------------------------
// var s = "sreehari"
// console.log(s.slice(3,6));
// console.log(s.slice(2,));
// console.log(s.slice(-1,));
// console.log(s.slice(-4,-1));
// console.log(s.slice(-6,));
//--------------------------------------------------

//write a function to remove the last element in a string
// removeElmnt = s =>{
//     return s.slice(0,-1)
// }
// console.log(removeElmnt("apple"));

//write a function to rotate a string(last 2 words should be rotated)
// rotate = s =>{
//     return  s.slice(-2,)+s.slice(0,-2)
// }
// console.log(rotate("luminar"));

//type conversion and decimal to whole number and vice versa
// var s = Number("10")
// console.log(s);
// console.log(typeof(s));
// var a = parseInt("11.5")
// console.log(a);
// console.log(typeof(a));
// var b = parseFloat("12.5")
// console.log(b);
// console.log(typeof(b));
// var c = String(10)
// console.log(c);
// console.log(typeof(c));
// var d = Boolean("")
// console.log(d);
// console.log(typeof(d));

//string concat mixed with addition
// var s = 10 + "10"
// console.log(s);