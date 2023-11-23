products = [
    [1,"Hide&Seek",60,4],
    [3,"Oreo",30,15],
    [2,"Parle-G",10,60],
    [4,"Moms-Magic",20,34],
    [5,"Tiger",10,40],
]

//find price of Oreo
// console.log(products.filter(i=>i[1]=="Oreo")[0][2]);
// console.log(products.find(i=>i[1]=="Oreo")[2]);

//name product we can buy with 20rs
// console.log(products.filter(i=>i[2]<=20).map(j=>j[1]));

//find name of products with 20 or greater stock values
// console.log(products.filter(i=>i[3]>=20).map(j=>j[1]));


//find item with lowest stock value
// console.log(products.reduce((a,b)=>a[3]<b[3]?a:b)[1]);
// console.log(products.find(i=>i[3]==4)[1]);
// console.log(products.sort((a,b)=>a[3]-b[3])[0][1]);


//find stock value of product with the highest price
// console.log(products.reduce((a,b)=>a[2]>b[2]?a:b)[3]);
// console.log(products.find(i=>i[2]==60)[3]);
// console.log(products.sort((a,b)=>b[2]-a[2])[0][3]);


//find id of tiger
// console.log(products.find(i=>i[1]=="Tiger")[0]);


//re-aarange products according to their id
// console.log(products.sort((a,b)=>a[0]-b[0]));

//total price of all products
// console.log(products.map(i=>i[2]).reduce((a,b)=>a+b));


//lowest price product
// console.log(products.reduce((a,b)=>a[2]<b[2]?a:b)[1]);//Reduce 
// console.log(products.reduceRight((a,b)=>a[2]<b[2]?a:b)[1]);//reduceRight


