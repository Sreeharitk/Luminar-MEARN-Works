st1 = { college: 'SOE', name: 'Sreehari', roll: 82, 123:10 }
//key-value pair and is heterogeneous
// console.log(st1);//get the entire st1 object

//data access as []
// console.log(st1["college"]);//gets the collge(key)'s name(value) of st1 object    
// console.log(st1[123]);//here we gave the key's name as number itself without qoutes
//data access as .
// console.log(st1.name);

//adding new data 
// st1["place"] = "Kochi"
// st1.age = 23
// console.log(st1);

//Updating data
// st1.roll = 84
// console.log(st1);

//check a key is present in an object or not
// console.log("name" in st1); //output will be true or false


//Object can only be iterated using the keyword "in"
    // for(i in st1){
    //     console.log(i);
    // }
    // console.log("-----------------");
    // for(i in st1){
    //     console.log(st1[i]);
    // }

// car = {name:"Honda City", manufature:"Honda", price:1300000}
// //name of car
// console.log(car.name);

// //check manufacture present or not
// console.log("manufature" in car);

// //increment price by 100000
// car.price += 100000
// // console.log(car.price);

// //add property varient-manual/automatic
// car.varient = "Manual"
// // console.log(car);

// //add colors - white,black,grey
// car.colors = ["White","Black","Grey"]
// console.log(car);


// a = [10,20,20,10,10,30]
// //count = {10:3,20:2,30:1}
// count = {}
// for(i of a){ //using loops
//     if(i in count){
//         count[i]+=1
//     }else{
//         count[i]=1
//     }
// }
// console.log(count);
//without loops
// a.map(i=>i in count?count[i]+=1:count[i]=1)
// console.log(count);


// s="h1 hello luminar hello"
//count of each words
// count = {}
// s.split(" ").map(i=>i in count?count[i]+=1:count[i]=1)
// console.log(count);

// s="abcabcd"
// //find recursive/repeating elements in s
// n = {}
// str = ""
// s.split("").map(i=>i in n?str+=i:n[i]=1)
// console.log(str)        


//Join()method - convertion from array to a string
// s="h1 hello luminar hello"
// s = s.split(" ").join("")
// console.log(s);
// console.log(typeof(s));


// s = "Luminar Technolab"
// //write a function to find first and last recursive elements in s
// recurs = s =>{
//     str = ""
//     n = {}
//     s.toLowerCase().split("").map(i=>i in n?str+=i:n[i]=1)
//     console.log(n);
//     return `first recursive letter is ${str[0]} and last recursive letter is ${str[str.length-1]}`
// }
// console.log(recurs(s));