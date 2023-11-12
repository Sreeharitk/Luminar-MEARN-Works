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
// console.log(products.find(i=>i[3]==4)[1]);


//find stock value of product with the highest price
// console.log(products.find(i=>i[2]==60)[3]);


//find id of tiger
// console.log(products.find(i=>i[1]=="Tiger")[0]);


//re-aarange products according to their id
// console.log(products.sort((a,b)=>a[0]-b[0]));

console.log(products);