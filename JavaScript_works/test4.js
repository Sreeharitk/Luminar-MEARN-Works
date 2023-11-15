// s = "Want new features sooner"
//1. find longest word in s
// longestWork = s =>{
//     s = s.split(" ")
//     a = s.reduce((a,b)=>a.length>b.length?a:b)
//     return a
// }
// console.log(longestWork("Want new features sooner"));

//2- find sum of even number in a
// a = [9,8,7,6,5,4,3,2,1]
// sumOfEven = a =>{
//     s = a.filter((i)=>i%2==0).reduce((a,b)=>a+b)
//     return s
// }
// console.log(sumOfEven([9,8,7,6,5,4,3,2,1]));


courses=[
    // id,course,fee,seats
    [1,"MEAN",50000,45],
    [2,"MERN",60000,25],
    [3,"Python",40000,60],
    [4,"Data Science",60000,25],
    [5,"Testing",30000,45],
    [6,"ML",50000,15]
]
//3.Find number of courses?
// numberOfCourses = c =>{
//     return c.map(i=>i[1]).length
// }
// console.log(numberOfCourses(courses));

// 4.Find course having lowest fee?
// lowestFee = c =>{
//     return c.reduce((a,b)=>a[2]<b[2]?a:b)[1]
// }
// console.log(lowestFee(courses));

//5.find number of seats for python
// function numberOfSeats(c){
//     return c.find(i=>i[1]=="Python")[3]
// }
// console.log(numberOfSeats(courses));

//6.find list of courses with fee 20000 to 40000 range?
// feeRange = c =>{
//     return c.filter(i => i[2]>=20000&&i[2]<=40000)
// }
// console.log(feeRange(courses));

//7.which course with highest seats
// moreSeat = c =>{
//     return c.reduce((a,b)=>a[3]>b[3]?a:b)[1]
// }
// console.log(moreSeat(courses));

//8.Total fee of all courses?
// totalFee = c =>{
//     return c.map(i=>i[2]).reduce((a,b)=>a+b)
// }
// console.log(totalFee(courses));

//9.find name of all courses available?
// nameOfCourse = c =>{
//     return c.map(i=>i[1])
// }
// console.log(nameOfCourse(courses));

//10.find fee of ML?
// mlFee = c =>{
//     return c.find(i=>i[1]=="ML")[2]
// }
// console.log(mlFee(courses));

//11.Find total fee of both MEAN and MERN?
// meanMern = c =>{
//     a = c.find(i=>i[1]=="MEAN")[2]
//     b = c.find(i=>i[1]=="MERN")[2]
//     return a+b
// }
// console.log(meanMern(courses));

