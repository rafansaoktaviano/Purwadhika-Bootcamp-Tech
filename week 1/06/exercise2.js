// CLASS
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

class Transaction {
  products = [];
  total = 0;

  addToCart(product) {
    this.products.push(product);
    this.total += product.price;
  }

  showTotal() {
    console.log("Transaction total is: ", this.total);
  }

  checkout() {
    return { products: this.products, total: this.total };
  }
}

// MAIN.js
function main() {
  // LIST PRODUCT
  let productNvidia = new Product("NVIDIA 4090", 10_000_000);
  let productAmd = new Product("AMD 5600XT", 8_000_000);

  let transaction = new Transaction();
  transaction.addToCart(productNvidia);
  transaction.addToCart(productAmd);
  transaction.showTotal();
  const results = transaction.checkout();

  console.log(results);
}

main();
