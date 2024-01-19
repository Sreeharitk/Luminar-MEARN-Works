//candy
// function candies(n,k){
//     candy = []
//     for(s=0;s<k;s++){
//         candy.push(0)
//     }
//     i = 1

//     while(n>0){
//         for(j=0;j<k;j++){
//             if(n>=i){
//                 candy[j] += i
//                 n -= i
//                 i += 1
//             }else{
//                 candy[j] += n
//                 n = 0
//                 break
//             }
//         }  
//     }
//     return candy
// }

// console.log(candies(26,5));

//magic sticks
// function magic(n,lengths,cost){
//     minCost = Number(Infinity)
    
//     for(j of new Set(lengths)){
//         current_cost = 0

//         for(i=0;i<n;i++){
//             diff = Math.abs(lengths[i]-j)
//             current_cost += diff*cost[i]
//         }
//         minCost = Math.min(minCost,current_cost)
//     }
//     return minCost
// }

// console.log(magic(2,[1,2],[10,20]));

//arithemtic

// function ariGeoFeb(series){
//     for(nums of series){
//         if(series.length<2){
//             return "-999"
//         }
//     }
// }