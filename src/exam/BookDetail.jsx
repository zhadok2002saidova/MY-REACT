import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books/${id}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.image} alt={book.title} />
      <p>{book.description}</p>
      <p>Author: {book.author}</p>
    </div>
  );
};

export default BookDetail;
