function sockMerchant(n, ar) {
    // Write your code here
    let pairarr = [];
    let outputarr = [];
  
    for (let i = 0; i < ar.length; i++) {
    let pn = pairarr.length;
      for (let j = 0; j < ar.length; j++) {
        if (ar[i] > pairarr) {
            pairarr.push(ar[i]);
            outputarr.push(pairarr);
              }
          if (pairarr[i] === ar[j]) {
            pairarr.push(ar[j]);
  
            if (pn === 2) {
              pairarr.push(ar[(i, j)]);
            }
        }
      
  
      return outputarr.length;
    
    }
  }

}
let result = sockMerchant(9, [10, 10, 20, 20, 10, 10, 30, 50, 10, 20, 20]);
console.log(result);