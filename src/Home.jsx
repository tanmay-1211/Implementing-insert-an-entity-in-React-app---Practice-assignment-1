import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Book Library</h1>

      {/* Add Book Button */}
      <Link to="/add-book">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
          Add Book
        </button>
      </Link>

      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;