import ObserverInterface from '../interfaces/ObserverInterface.js';

class Notification extends ObserverInterface {
  update(product) {
    console.log(`Notification: Price of ${product.name} has changed to $${product.price}`);
  }
}

export default Notification;
