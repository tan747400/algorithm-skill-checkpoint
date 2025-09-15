function findProductPrice(products, name) {
  let result = -1;
  for (i=0; i<products.length; i++) {
    if (products[i].name === name) {
      return products[i].price;
    }
  }
  return result;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1