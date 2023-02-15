function sockMerchant(n, ar) {
  // Write your code here
  let pairarr = [];
  let outputarr = [];

  for (let i = 0; i <= ar.length; i++) {
    if (ar[i] > 0) {
      pairarr.push(ar[i]);

      for (let j = 1; j < ar.length; j++) {
        let pn = pairarr.length;
        if (pairarr[i] === ar[j]) {
          pairarr.push(ar[j]);

          if (pn === 2) {
            pairarr.push(ar[(i, j)]);
          }
          outputarr.push(pairarr);
        }
      }
    }

    return outputarr.length;
  }
}
let result = sockMerchant(9, [10, 10, 20, 20, 10, 10, 30, 50, 10, 20, 20]);
console.log(result);
