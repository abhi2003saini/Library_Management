import React from "react";
import "./AllBook.css"; 

function AllBook() {
  const data = [
    {
      id: 1,
      imagePath: require("Englishbook.png"),
      btn: "Click on image for read book",
      Book: "To Kill a Mockingbird",
      author: "Harper Lee",
    },
    {
      id: 2,
      imagePath: require("greenline.png"),
      btn: "Click on image for read book",
      Book: "Pride and Prejudice",
      author: "Jane Austen",
    },
    {
      id: 3,
      imagePath: require("Alone.png"),
      btn: "Click on image for read book",
      Book: "Moby-Dick",
      author: "Herman Melville",
    },
    {
      id: 4,
      imagePath: require("springbook.png"),
      btn: "Click on image for read book",
      Book: "The Alchemist",
      author: "Paulo Coelho",
    },
    {
      id: 5,
      imagePath: require("funneral.png"),
      btn: "Click on image for read book",
      Book: "War and Peace",
      author: "Leo Tolstoy",
    },
    {
      id: 6,
      imagePath: require("neverendsky.png"),
      btn: "Click on image for read book",
      Book: "Wings of Fire",
      author: "A.P.J. Abdul Kalam",
    },
    {
      id: 7,
      imagePath: require("spirtdeamon.png"),
      btn: "Click on image for read book",
      Book: "The Da Vinci Code",
      author: "Dan Brown",
    },
    {
      id: 8,
      imagePath: require("springbook.png"),
      btn: "Click on image for read book",
      Book: "The Hobbit",
      author: "J.R.R. Tolkien",
    },
  ];

  return (
    <div className="all-books">
      <h1 className="title">All Books</h1>
      <div className="book-grid">
        {data.map((item) => (
          <div className="book-card" key={item.id}>
            <img src={item.imagePath} alt={item.Book} className="book-img" />
            <h3>{item.Book}</h3>
            <p className="author">by {item.author}</p>
            <button className="read-btn">{item.btn}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBook;
