class Product {
  constructor(name, category, price, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }

  toString() {
    return `${this.name} (${this.category}): ${this.price} (${this.stock} in stock)`;
  }
}

class Inventory {
  constructor() {
    this.inventory = [];
  }

  addProduct(product) {
    if (product instanceof Product) {
      this.inventory.push(product);
      console.log(`Product ${product.name} added to inventory successfully.`);
    } else {
      console.log("Invalid product object.");
    }
  }

  deleteProduct(name) {
    for (const product of this.inventory) {
      if (product.name === name) {
        this.inventory.splice(this.inventory.indexOf(product), 1);
        console.log(`Product ${name} removed from inventory successfully.`);
        return true;
      }
    }

    console.log(`Product ${name} not found in inventory.`);
    return false;
  }
}

// Example usage:

const inventory = new Inventory();

// Add products to inventory
const product1 = new Product("Apple", "Fruit", 1.0, 10);
const product2 = new Product("Orange", "Fruit", 0.75, 5);
const product3 = new Product("Milk", "Dairy", 2.5, 3);

inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

// Delete a product from inventory
inventory.deleteProduct("Orange");

// Print the inventory
for (const product of inventory.inventory) {
  console.log(product.toString());
}
