// *
// * *
// * * *
// * * * *
// for(row=1;row<=4;row++){
//     star = ""
//     for(col=1;col<=row;col++){
//         star += "* "
//     }
//     console.log(star);
// }
//--------------------------------


// for(row=1;row<=4;row++){
//     star = ""
//     for(col=4;col>=row;col--){
//         star += "* "
//     }
//     console.log(star);
// }


// for(row=1;row<=4;row++){
//     star = ""
//     for(col=1;col<=row;col++){
//         if(row==3 && col==2){
//             star += "  "
//         }else{
//             star += "* "
//         }
//     }
//     console.log(star);
// }


// for(row=1;row<=5;row++){
//     star = ""
//     for(col=1;col<=5;col++){
//         star += "* "
//     }
//     console.log(star);
// }


// for(row=1;row<=8;row++){
//     star = ""
//     if(row<=4){
//         for(col=1;col<=row;col++){
//             star += "* "
//         }
//     }else{
//         for(col=8;col>row;col--){
//             star += "* "
//         }
//     }
//     console.log(star);
// }


//*
//* *
//*   *
//*     *
//*   *
//* *
//*
// for(row=1;row<=8;row++){
//     star = ""
//     if(row<=4){
//         for(col=1;col<=row;col++){
//             if((row==3&&col==2)||(row==4&&col==2)||(row==4&&col==3)){
//                 star += "  "
//             }else{
//                 star += "* "
//             }
//         }
//     }else{
//         for(col=8;col>row;col--){
//             if(row==5 && col==7){
//                 star += "  "
//             }else{
//                 star += "* "
//             }
//         }
//     }
//     console.log(star);
// }
//---------------------------------------------------------
// var count = 0 // => this helps figure out the code performance when using loops
// for(row=1;row<=7;row++){
//     count++ // => count increases for each iteration
//     star = ""
//     if(row<=4){
//         for(col=1;col<=row;col++){
//             count++ // => count increases for each iteration
//             if(col==1 || col==row){
//                 star += "* "
//             }else{
//                 star += "  "
//             }
//         }
//     }else{
//         for(col=7;col>=row;col--){
//             count++ // => count increases for each iteration
//             if(col==7 || col==row){
//                 star += "* "
//             }else{
//                 star += "  "
//             }
//         }
//     }
//     console.log(star);
// }
// console.log(count); // => count final output
//---------------------------------------------------------

//    *
//   * *
//  * * *
// * * * *
// space = 4
// for(row=1;row<=4;row++){
//     s = ""
//     for(k=space;k>0;k--){
//         s += " "
//     }
//     space--
//     for(col=1;col<=row;col++){
//         s += "* "
//     }
//     console.log(s);
// }
// let k = 4
// for(row=1;row<=4;row++){
//     s = ""
//     for(j=1;j<=4;j++){
//         if(j>=k){
//             s += "* "
//         }else{
//             s += "  "
//         }
//     }
//     k--
//     console.log(s);
// }
// star=''
// for(row=1;row<=4;row++){  
//     space=''
//     for(j=1;j<=(4-row);j++){
//     space+=' '
//     }
//     star+='* '
//     console.log(space+star);
// }

//--------------------------------------
//* * * * 
// * * * * 
//  * * * * 
//   * * * * 
// for(row=1;row<=5;row++){
//     s = ""
//     for(k=1;k<=row;k++){
//         s += " "
//     }
//     for(j=1;j<=5;j++){
//         s += "* "
//     }
//     console.log(s);
// }
//------------------------------

//1
//2 2
//3 3 3
//4 4 4 4
// for(row=1;row<=4;row++){
//     s = ""
//     for(col=1;col<=row;col++){
//        s += row+" "
//     }
//     console.log(s);
// }
//-------------------------------------

//1
//1 2
//1 2 3
//1 2 3 4
// for(row=1;row<=4;row++){
//     s = ""
//     for(col=1;col<=row;col++){
//         s += col+" "
//     }
//     console.log(s);
// }
//---------------------------------------

//1
//2 4
//3 6 9
//4 8 12 16
// for(row=1;row<=4;row++){
//     s = ""
//     for(col=1;col<=row;col++){
//         s += row*col+" "
//     }
//     console.log(s);
// }
//--------------------------------------------

//1
//2 3
//4 5 6
//7 8 9 10
// num = 1
// for(i=1;i<=4;i++){
//     s = ""
//     for(j=1;j<=i;j++){
//         s += num+" "
//         num++
//     }
//     console.log(s);
// }
//---------------------------------------------

//0 0 0 0
// 0   0
//  0 0
//   0
// space = 0
// for(i=1;i<=4;i++){
//     s =""
//     for(k=space;k>0;k--){
//         s += " "
//     }
//     space++
//     for(j=4;j>=i;j--){
//         if(i==2&&j==3){
//             s += "  "
//         }else{
//             s += 0+" "
//         }
//     }
//     console.log(s);
// }
//-------------------------------------

//      *
//    * * //2
//  * * * //4
//* * * * //6
// space = 6
// for(i=1;i<=4;i++){
//     s = ""
//   for(k=space;k>0;k--){
//     s += " "
//   }
//   space -= 2
//   for(j=1;j<=i;j++){
//     s += "* "
//   }
//   console.log(s);
// }
//----------------------------------------

