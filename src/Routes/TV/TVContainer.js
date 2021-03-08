import React, { useState, useEffect } from "react";
import TVPresenter from "./TVPresenter";
import { tvAPI } from "api";

const TVContainer = () => {
  const [topRated, setTopRated] = useState(null);
  const [popular, setPopular] = useState(null);
  const [airingToday, setAiringToday] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDatas();
    return () => setLoading(false);
  }, []);

  const loadDatas = async () => {
    try {
      const {
        data: { results: topRated },
      } = await tvAPI.topRated();
      const {
        data: { results: popular },
      } = await tvAPI.popular();
      const {
        data: { results: airingToday },
      } = await tvAPI.airingToday();
      setTopRated(topRated);
      setPopular(popular);
      setAiringToday(airingToday);
    } catch {
      setError("Can't find TV information.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TVPresenter
      topRated={topRated}
      popular={popular}
      airingToday={airingToday}
      loading={loading}
      error={error}
    />
  );
};

export default TVContainer;
