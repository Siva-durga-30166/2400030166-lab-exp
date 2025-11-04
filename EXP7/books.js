// books.js
import { books } from "./data.js";

export function displayBooks() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  books.forEach((book, index) => {
    const div = document.createElement("div");
    div.classList.add("book-item");
    div.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Price:</strong> ₹${book.price}</p>
      <p><strong>Status:</strong> ${book.availability}</p>
      <button ${book.availability === "Out of Stock" ? "disabled" : ""} data-index="${index}">
        Add to Cart
      </button>
    `;
    bookList.appendChild(div);
  });
}
