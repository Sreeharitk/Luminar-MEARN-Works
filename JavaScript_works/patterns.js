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
//     if(row<=3){
//         for(col=1;col<=row;col++){
//             if(row==3&&col==2){
//                 star += "  "
//             }else{
//                 star += "* "
//             }
//         }
//     }else if(row==4){
//         for(col=1;col<=row;col++){
//             if(col==2 || col==3){
//                 star += "  "
//             }else{
//                 star += '* '
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
// for(row=1;row<=7;row++){
//     star = ""
//     if(row<=4){
//         for(col=1;col<=row;col++){
//             if(col==1 || col==row){
//                 star += "* "
//             }else{
//                 star += "  "
//             }
//         }
//     }else{
//         for(col=7;col>=row;col--){
//             if(col==7 || col==row){
//                 star += "* "
//             }else{
//                 star += "  "
//             }
//         }
//     }
//     console.log(star);
// }
//---------------------------------------------------------