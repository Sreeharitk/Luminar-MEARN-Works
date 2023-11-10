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


// employees = [
//     [3,"Sreehari","developer","Kochi",950000,3],
//     [2,"Jazim","product engineer","Dubai",900000,3],
//     [5,"Suni","tester","Rain forest",30000,4],
//     [1,"Revanth","developer","Calicut",50000,1],
//     [4,"Aron","tester","Rajasthan",40000,2]
// ]
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