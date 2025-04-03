import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          (`https://www.omdbapi.com/?apikey=17dec6d0&i=${id}&plot=full`)
        );

        if (response.data.Response == "False") {
          throw new Error("Фильм табылмады");
        }

        setMovie(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <p>Жүктелуде...</p>;
  if (error) return <p>Қате: {error}</p>;

  return (
    <div className="movie-detail">
      <div className="movie-detail-header">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Poster"
          }
          alt={movie.Title}
        />
        <div>
          <h1>{movie.Title}</h1>
          <p><strong>Рейтинг:</strong> {movie.imdbRating}</p>
          <p><strong>Жылы:</strong> {movie.Year}</p>
        </div>
      </div>

      <div className="movie-detail-content">
        <h3>Сюжет</h3>
        <p>{movie.Plot}</p>

        <div className="movie-detail-extra">
          <div className="movie-detail-group">
            <h3>Режиссер</h3>
            <p>{movie.Director}</p>
          </div>

          <div className="movie-detail-group">
            <h3>Актерлер</h3>
            <p>{movie.Actors}</p>
          </div>

          <div className="movie-detail-group">
            <h3>Жанр</h3>
            <p>{movie.Genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;