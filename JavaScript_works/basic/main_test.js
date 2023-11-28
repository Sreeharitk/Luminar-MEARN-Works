countryData=[
    {
      "name": "India",
      "topLevelDomain": [
        ".in"
      ],
      "alpha2Code": "IN",
      "alpha3Code": "IND",
      "callingCodes": [
        "91"
      ],
      "capital": "New Delhi",
      "altSpellings": [
        "IN",
        "Bhārat",
        "Republic of India",
        "Bharat Ganrajya"
      ],
      "subregion": "Southern Asia",
      "region": "Asia",
      "population": 1380004385,
      "latlng": [
        20.0,
        77.0
      ],
      "demonym": "Indian",
      "area": 3287590.0,
      "gini": 35.7,
      "timezones": [
        "UTC+05:30"
      ],
      "borders": [
        "AFG",
        "BGD",
        "BTN",
        "MMR",
        "CHN",
        "NPL",
        "PAK",
        "LKA"
      ],
      "nativeName": "भारत",
      "numericCode": "356",
      "flags": {
        "svg": "https://flagcdn.com/in.svg",
        "png": "https://flagcdn.com/w320/in.png"
      },
      "currencies": [
        {
          "code": "INR",
          "name": "Indian rupee",
          "symbol": "₹"
        }
      ],
      "languages": [
        {
          "iso639_1": "hi",
          "iso639_2": "hin",
          "name": "Hindi",
          "nativeName": "हिन्दी"
        }
      ],
      
      "flag": "https://flagcdn.com/in.svg",
      "regionalBlocs": [
        {
          "acronym": "SAARC",
          "name": "South Asian Association for Regional Cooperation"
        }
      ],
      "cioc": "IND",
      "independent": true
    }
]

// 1- Find The Capital?
// capital = (c)=>{
//    return c.map(i=>i.capital)
// }
// console.log(capital(countryData));

//2.Find Population?
// population = (p)=>{
//     return p.map(i=>i.population)
// }
// console.log(population(countryData));

//3.display list of borders ?
// borders = (b)=>{
//     return b.map(i=>i.borders).flat()
// }
// console.log(borders(countryData));

// 4.Find Language name?
// lang = (l)=>{
//     return l.map(i=>i.languages).flat().map(i=>i.name)
// }
// console.log(lang(countryData));

//5.find currency code?
// cur = (c)=>{
//     return c.map(i=>i.currencies).flat().map(i=>i.code)
// }
// console.log(cur(countryData));

//6.Find total count of borders?
// len = (l)=>{
//     return l.map(i=>i.borders.length)
// }
// console.log(len(countryData));


a=[10,20,10,20,20,30,10,20,20,30]  

// create an element count object for array a?
// objCount = (a)=>{
//     newObj = {}
//     a.map(i=>i in newObj?newObj[i]+=1:newObj[i]=1)
//     return newObj
// }
// console.log(objCount(a));

//patter question 1
// space = 6
// for(row=1;row<=8;row++){
//     s = ""
//    if(row<=4){
//     for(k=space;k>0;k--){
//         s += " "
//     }
//     space--
//     for(col=1;col<=row;col++){
//         if(row==3 && col==2){
//             s += "  "
//         }else{
//             s += "* "
//         }
//     } 
//    }else{
//     for(k=0;k<space+2;k++){
//         s += " "
//     }
//     space++
//     for(col=8;col>row;col--){
//         if(row==5 && col==7){
//             s += "  "
//         }else{
//             s += "* "
//         }
//     } 
//    }
//    console.log(s);
// }


names=["amal","vinu","ashok ram","amal","arun","anu","vonod "]
//9.Find the longest and shortest names from array names
// longShort = (n)=>{
//     long = n.reduce((a,b)=>a.length>b.length?a:b)
//     short = n.reduce((a,b)=>a.length<b.length?a:b)
//     return `longest name is: ${long} and shortest name is: ${short}`
// }
// console.log(longShort(names));


// a=[1,2,4,5,6,8,10]
// b = a.length
// // create a function to find missing numbers in given array ?
// missingNum = (arr,L)=>{
//     c = 0
//     for(i=arr[0];i<=arr[L-1];i++){
//         if(arr[c]==i){
//             c++
//         }else{
//             console.log(i+" ");
//         }
//     }
// }
// missingNum(a,b);


//patter question 2
// for(row=1;row<=8;row++){
//     star = ""
//     if(row<=4){
//         for(col=1;col<=row;col++){
//             if((row==3&&col==2)||(row==4&&col==2)||(row==4&&col==3)){
//                 star += "  "
//             }else{
//                 star += 1+" "
//             }
//         }
//     }else{
//         for(col=8;col>row;col--){
//             if(row==5 && col==7){
//                 star += "  "
//             }else{
//                 star += 1+" "
//             }
//         }
//     }
//     console.log(star);
// }

