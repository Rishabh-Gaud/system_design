// main.js
import Product from './observables/Product.js';
import Notification from './observers/Notification.js';

const laptop = new Product('Laptop', 80000);
const Phone = new Product('Phone', 16000);

const user1 = new Notification();
const user2 = new Notification();

laptop.addObserver(user1);
laptop.addObserver(user2);
Phone.addObserver(user2);

laptop.setPrice(12000);

laptop.removeObserver(user2);

laptop.setPrice(1500);
Phone.setPrice(1000)