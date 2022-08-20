'use strict';

const cart = {
  items: [],
  // totalPrice: 0,
  sum: 0,
  count: 0,
  add(nameProduct, priceProduct, amountProduct = 1) {
    const product = {
      name: nameProduct,
      price: priceProduct,
      amount: amountProduct,
    };

    this.items.push(product);
    this.increaseCount(product.amount);
    this.totalPrice;
  },
  increaseCount(num) {
    return this.count += num;
  },
  calculateItemPrice() {
    let sum = 0;
    this.items.forEach((item) => {
      sum += item.amount * item.price;
    });
    return sum;
  },
  clear() {
    this.items = [];
    // this.totalPrice;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log('Общая стоимость:', this.totalPrice);
  },
  get totalPrice() {
    return this.calculateItemPrice();
  },
};

cart.add('стул', 400, 11);
cart.add('стол', 500);
cart.add('лампа', 200, 5);

cart.print();
