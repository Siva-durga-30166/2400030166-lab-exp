// app.js
import { displayBooks } from "./books.js";
import { addToCart } from "./cart.js";
import { updateCartDisplay } from "./ui.js";

displayBooks();
updateCartDisplay();

// Add event listener for Add to Cart buttons
document.getElementById("book-list").addEventListener("click", e => {
  if (e.target.tagName === "BUTTON" && e.target.textContent === "Add to Cart") {
    const index = e.target.dataset.index;
    addToCart(index);
  }
});
