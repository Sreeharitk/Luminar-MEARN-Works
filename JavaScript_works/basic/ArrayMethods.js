//map() example - usually to get output for elements in the input array
// a = [1,2,3,4,5,6]
// console.log(a.map(i=>i**2));

//filter() example - usually contains conditions
// a = [1,2,3,4,5,6]
// console.log(a.filter(i=>i%2==0));

//find() example - will give us the first element that satisfies the condition
// a=[1,2,3,4,5,6]
// console.log(a.find(i=>i%2==0));


//if more than 5 i++ else i--
// a = [4,7,2,9]
// console.log(a.map(i=>i>5?i+=1:i-=1));


// employees = [
//     [3,"Sreehari","developer","Kochi",950000,3],
//     [2,"Jazim","developer","Dubai",900000,3],
//     [5,"Suni","tester","Rain forest",30000,4],
//     [1,"Revanth","developer","Kochi",50000,1],
//     [4,"Aron","tester","Rajasthan",40000,2]
// ]

//details of suni
// console.log(employees.filter(i=>i[1]=="Suni")[0][1]);


//names of developers from kochi
// console.log(employees.filter(i=>i[2]=="developer"&&i[3]=="Kochi").map(j=>j[1]));


//display all employee names
// console.log(employees.map(i=>i[1]));


//find testers name
// console.log(employees.filter(i=>i[2]=="tester").map(j=>j[1]));


//-----------------Reduce method-------------
// a = [1,2,3,4,5,6]
//sum of each elements
// console.log(a.reduce((a,b)=>a+b));
//greatest element
// console.log(a.reduce((a,b)=>a>b?a:b));
//smallest element
// console.log(a.reduce((a,b)=>a<b?a:b));


//--------------------Some Method---------------------
// a = [9,4,3,5]
// Checking if an even number present or not
// console.log(a.some(i=>i%2==0));


//--------------------Includes Method---------------------
// a = [9,4,3,5]
// //checking if an element is present or not
// console.log(a.includes(3));

//--------------------forEach Method---------------------
// a = [1,2,3,4]
// a.forEach(i=>console.log(i**3))

//--------------------flat Method---------------------
// a = [
//     [34,65],
//     [5,66],
//     [11,2]
// ]
//elements greater than 10
// console.log(a.flat().filter(i=>i>10));