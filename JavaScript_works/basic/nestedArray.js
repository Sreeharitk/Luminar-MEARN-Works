//nested array
// a = [[34,56],[12,87,5],[9,0,3,2,67]]
// console.log(a);
//print each element which is greater than 10
// greaterThan10 = a =>{
//     for(i of a){
//         for(j of i){
//             if(j>10){
//                 console.log(j); 
//             }
//         }
//     }
// }
// greaterThan10(a);


employees = [
    [3,"Sreehari","developer","Kochi",950000,3],
    [2,"Jazim","product engineer","Dubai",900000,3],
    [5,"Suni","tester","Rain forest",30000,4],
    [1,"Revanth","developer","Kochi",50000,1],
    [4,"Aron","tester","Rajasthan",40000,2]
]
//sorting nested array
// console.log(employees.sort((a,b)=>a[0]-b[0]));

//display all employee names
// nameEmployees = (e) =>{
//     for(i of e){
//        console.log([i[1]]);
//     }
// }
// nameEmployees(employees)

//find testers name
// nameEmployees = (e) =>{
//     for(i of e){
//        if(i[2]=="tester"){
//         console.log([i[1],i[2]]);
//        }
//     }
// }
// nameEmployees(employees)

//find employee with lowest salary
// lowSalary = e =>{
//     // for(i of e){
//     //     return `employee with lowest salary is: ${i[1]}`;
//     // }
//     // console.log(employees.sort((a,b)=>a[4]-b[4])[0][1]);
//     e = employees.sort((a,b)=>a[4]-b[4])
//     return e
// }
// lowSalary(employees);

// console.log(employees.reduce((a,b)=>a[4]<b[4]?a:b)[1]) //with reduce method


//employee with highest experience
// highExp = e =>{
//     console.log(e.sort((a,b)=>b[5]-a[5])[0][1]);
// }
// highExp(employees);

// console.log(employees.reduce((a,b)=>a[5]>b[5]?a:b)[4]); //with array method(reduce)


//details of suni
// suniDet = e =>{
//     for(i of e){
//         if(i[0]==5){
//             return i
//         }
//     }
// }
// console.log(suniDet(employees));

// console.log(employees.find(i=>i[1]=="Suni"));


//find developers from kochi
// devKochi = e =>{
//     for(i of e){
//         if(i[2]=="developer"&&i[3]=="Kochi"){
//             console.log(i[1]);
//         }
//     }
// }
// devKochi(employees);

//total salary of of employees
// console.log(employees.map(i=>i[4]).reduce((a,b)=>a+b));