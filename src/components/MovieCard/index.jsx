import React from "react";
// movieDB
import { POSTER_IMAGE } from "../../MovieDB/movieDB";

function MovieCard(movie) {
  return (
    <>
      <div className="movie-card">
        {movie.info.poster_path ? (
          <img
            src={`${POSTER_IMAGE}${movie.info.poster_path}`}
            className="poster"
            alt="poster"
          />
        ) : (
          <div className="no-poster">Images not found</div>
        )}
        <div className="movie-details">
          <div className="box">
            <h4 className="title">{movie.info.title}</h4>
            <p className="ratings">{movie.info.vote_average.toFixed(1)}</p>
          </div>
          <div className="overview">
            <h1>Overview</h1>
            {movie.info.overview}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
