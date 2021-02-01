import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { moviesAPI } from "api";

const HomeContainer = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upComing, setUpcoming] = useState(null);
  const [popular, setPopular] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDatas();
  }, [])

  const loadDatas = async () => {
    try {
      const { data: { results: nowPlaying } } = await moviesAPI.nowPlaying();
      const { data: { results: upComing } } = await moviesAPI.upComing();
      const { data: { results: popular } } = await moviesAPI.popular();
      setNowPlaying(nowPlaying);
      setUpcoming(upComing);
      setPopular(popular);
    } catch {
      setError("Can't find moives information.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      upComing={upComing}
      popular={popular}
      loading={loading}
      error={error}
    />
  );
}

export default HomeContainer;
