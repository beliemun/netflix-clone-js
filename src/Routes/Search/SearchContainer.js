import React, { useState, useEffect } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieAPI, tvAPI } from "api";

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleSubmit();
  }, [])

  const handleSubmit = () => {
    if (searchTerm !== "") {
      searchByTerm();
    }
  }

  const searchByTerm = async () => {
    try {
      const { data: { results: movieResults } } = await movieAPI.search(searchTerm);
      const { data: { results: tvResults } } = await tvAPI.search(searchTerm);
      setMovieResults(movieResults);
      setTvResults(tvResults);
    } catch {
      setError("Can't find results.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      loading={loading}
      error={error}
      handleSubmit={handleSubmit}
    />
  );
}

export default SearchContainer;
