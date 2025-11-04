// cart.js
import { books } from "./data.js";

let cart = [];

export function addToCart(index) {
  const book = books[index];
  cart.push(book);
  updateCartDisplay();
}

export function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

export function getCart() {
  return cart;
}

export function calculateTotal() {
  return cart.reduce((total, book) => total + book.price, 0);
}

import { updateCartDisplay } from "./ui.js";
