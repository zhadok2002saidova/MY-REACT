import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BookGallery = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Book Gallery</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              textAlign: "center",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={book.image} alt={book.title} style={{ width: "150px" }} />
            <h3>{book.title}</h3>
            <Link to={`/book/${book.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookGallery;
