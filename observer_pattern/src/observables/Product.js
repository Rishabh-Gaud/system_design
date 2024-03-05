import ProductInterface from '../interfaces/ProductInterface.js';
import ObserverInterface from '../interfaces/ObserverInterface.js';

class Product extends ProductInterface {
  constructor(name, price) {
    super();
    this.name = name;
    this.price = price;
    this.observers = [];
  }

  addObserver(observer) {
    if (!(observer instanceof ObserverInterface)) {
      throw new Error('Observer must implement the ObserverInterface.');
    }
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update(this);
    });
  }

  setPrice(newPrice) {
    this.price = newPrice;
    this.notifyObservers();
  }
}

export default Product;
