const productProfitArray = [
    ["Product A", -22],
    ["Product B", 37],
    ["Product C", -81],
    ["Product D", -1],
    ["Product E", -54],
    ["Product F", -70]
  ];
  
  console.log("Highest sales profit:", topProduct(productProfitArray));         // Output: "Product B"
  console.log("Lowest sales profit:", bottomProduct(productProfitArray));      // Output: "Product C"
  console.log("Profit nearest to zero:", zeroProfitProduct(productProfitArray));  // Output: "Product D"



function topProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
      return "No Data";
    }
  
    let maxProfit = Number.NEGATIVE_INFINITY;
    let topProduct = null;
  
    for (let i = 0; i < productProfitArray.length; i++) {
      const [product, profit] = productProfitArray[i];
      if (profit > maxProfit) {
        maxProfit = profit;
        topProduct = product;
      }
    }
  
    return topProduct;
  }
  
  function bottomProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
      return "No Data";
    }
  
    let minProfit = Number.POSITIVE_INFINITY;
    let bottomProduct = null;
  
    for (let i = 0; i < productProfitArray.length; i++) {
      const [product, profit] = productProfitArray[i];
      if (profit < minProfit) {
        minProfit = profit;
        bottomProduct = product;
      }
    }
  
    return bottomProduct;
  }
  
  function zeroProfitProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
      return "No Data";
    }
  
    let closestToZero = Number.POSITIVE_INFINITY;
    let zeroProduct = null;
  
    for (let i = 0; i < productProfitArray.length; i++) {
      const [product, profit] = productProfitArray[i];
      if (Math.abs(profit) < Math.abs(closestToZero) || (profit === closestToZero && profit > 0)) {
        closestToZero = profit;
        zeroProduct = product;
      }
    }
  
    return zeroProduct;
  }