var num1 = 7;
// Variable Name must not start with a number
var num2 = 6;

console.log(num1 + num2);

var answer = num1 > num2;

console.log(answer);

// Calculating the Discount Percentage
// D = (L - S)/L * 100 -> This is the Formula
var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log('Discount Percentag is: ' + discountPercent);

displayDiscountPercenatge = Math.round(discountPercent);

console.log(displayDiscountPercenatge + '% off');

var result = listingPrice > sellingPrice;

console.log(typeof(result)); // We can also write it like "console.log(typeof result);"
