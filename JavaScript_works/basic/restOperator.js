//rest operator(...)

// function add(...n){ //(... is the operator and n is the parameter where arguments are stored in an array)
//     console.log(n.reduce((a,b)=>a+b));//(since n is an array we can use array methods)
// }
// add(10,20,40)


//Spread Operator(...)(expands an iterable into its individual elements)
//working on strings(splits elements)
// s = "hello"
// console.log([...s]);

//working on an array(joins to arrays)
// a = [1,2,3,4]
// b = [5,6,7,8]
// console.log([...a,...b]);

//working on objects(adding and updating an object)
// obj = {1:10,2:40}
// console.log({...obj,3:20,1:80});