function sockMerchant(n, ar) {
  // this is the right solution
  const sortedAr = ar.sort();
  console.log(sortedAr);
  let single=0
  let pair =0;
  let pairCounter = 0;

 for(let i=0;i<ar.length;i++){
single =sortedAr[i];
   pair=sortedAr[i+1];
   if(single===pair){
     pairCounter++;
     i++;
   }
 }
return pairCounter;
} 

let result = sockMerchant(12, [10, 10, 20, 20, 10, 10, 30, 50, 10, 20, 20,10]);
console.log(result);