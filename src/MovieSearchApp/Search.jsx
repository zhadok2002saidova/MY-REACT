import React, { useState } from "react";
import axios from "axios";

const Search = ({onSearch}) => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=17dec6d0&s=${query}`
      );
      if (response.data.Response === "False") {
        onSearch([]);
      }else{
        onSearch(response.data.Search);
      }
      // onSearch(response.data.Search || []);
    } catch (error) {
      console.error("Ошибка поиска:" + error);
      onSearch([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={ searchMovies}>
        <input
          type="text"
          placeholder="Введите название фильма..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Поиск</button>
      </form>
      {isLoading && <p>Поиск...</p>}
    </div>
  );
};

export default Search;
