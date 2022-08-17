import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import axios from "axios";
// Style CSS
import "./style.css";
// Component
import MovieCard from "../../components/MovieCard/index.jsx";
// URLs
import {
  POPULAR_MOVIE_URL,
  SEARCH_URL,
  GENRES_URL,
} from "../../MovieDB/movieDB";
import Navbar from "../../components/Navbar";

function MainPage() {
  const userName = useSelector((state) => state.home.userData.name);

  const [movies, setMovie] = useState([]);
  const [search, setSearch] = useState();
  const [genres, setGenres] = useState([]);
  var [url_pick, setURLPick] = useState(POPULAR_MOVIE_URL);
  var [relYear, setReleaseYear] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState();
  const [selectedYear, setSelectedYear] = useState();
  const [titleText, setTitleText] = useState("Recommended Movie for You");

  const releaseYear = async () => {
    for (let i = 2000; i < 2023; i++) {
      relYear.push(i);
      setReleaseYear(relYear);
    }
  };

  async function fetchMovieData(url) {
    let response = await axios.get(url);
    let movie = await response.data;
    setMovie(movie.results);
  }

  async function fetchGenres() {
    let response = await axios.get(GENRES_URL);
    let { genres } = await response.data;
    setGenres(genres);
  }

  const searchWithForm = () => {
    url_pick = `https://api.themoviedb.org/3/discover/movie?with_genres=${selectedGenre}&primary_release_year=${selectedYear}&api_key=61cb98bf35c7d608e444bd4dfc1e5de0`;
    setURLPick(url_pick);
    setTitleText("Best Matches With your Choices");
  };

  const todayHitsMovie = () => {
    url_pick =
      "https://api.themoviedb.org/3/trending/all/day?api_key=61cb98bf35c7d608e444bd4dfc1e5de0";
    setURLPick(url_pick);
    setTitleText("Today's Hit Movies");
  };

  useEffect(() => {
    fetchMovieData(url_pick);
    fetchGenres();
    releaseYear();
  }, [url_pick]);

  const searchMovie = () => {
    url_pick = `${SEARCH_URL}${search}`;
    setURLPick(url_pick);
    setTitleText(`We are looking for: ${search}`);
  };

  return (
    <>
      <Navbar />

      <div>
        <div className="container bg-secondary border border-4 rounded-3 d-flex flex-column m-auto p-5">
          {/* User Name */}
          <h2>Welcome {userName} </h2>
          {/*Suggest Form Section  */}
          <div className="d-flex flex-row">
            <div className="col mx-3">
              <form>
                <label htmlFor="genres" className="mb-2">
                  Genres:
                </label>
                <select
                  selected
                  className="form-select"
                  id="genres"
                  onChange={(item) => setSelectedGenre(item.target.value)}
                >
                  {genres.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                <label htmlFor="years" className="mb-2 mt-2">
                  Release Year:
                </label>
                <select
                  className="form-select"
                  id="years"
                  onChange={(item) => setSelectedYear(item.target.value)}
                >
                  {relYear.map((year, index) => {
                    return (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
                <button
                  type="button"
                  className="btn btn-success mt-2"
                  onClick={searchWithForm}
                >
                  Search
                </button>
              </form>
              <button
                type="button"
                onClick={todayHitsMovie}
                className="btn btn-danger text-center mt-2"
              >
                Today's Hit!
              </button>
            </div>

            <div className="col">
              {/* Search Form Section */}
              <form>
                <label htmlFor="searchArea" className="form-label">
                  Search Movie:
                </label>

                <input
                  id="searchArea"
                  type="text"
                  placeholder="Enter movie/directors/actors/actress"
                  className="form-control"
                  onChange={(word) => {
                    setSearch(word.target.value);
                  }}
                  value={search}
                  onKeyUp={searchMovie}
                />
              </form>
            </div>
          </div>
        </div>
        {/* Movies Section */}
        <h1 className="text-center mt-2 text-success">{titleText}</h1>
        <div className="container">
          {movies.length === 0 ? (
            <p className="not-found">Not Found</p>
          ) : (
            movies.map((item, index) => {
              return <MovieCard key={index} info={item} />;
            })
          )}
        </div>
      </div>
    </>
  );
}

export default MainPage;
