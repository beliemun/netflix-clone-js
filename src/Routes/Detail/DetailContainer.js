import { movieAPI, tvAPI } from "api";
import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";


const DetailContainer = (props) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { location: { pathname } } = props;
  const [isMovie] = useState(pathname.includes("/movie/"));

  useEffect(() => {
    const {
      match: { params: { id } },
      history: { push }
    } = props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    loadDatas(parsedId);
  }, [props]);

  const loadDatas = async (parsedId) => {
    let result = null;
    try {
      if (isMovie) {
        const { data } = await movieAPI.movieDetail(parsedId);
        result = data;
      } else {
        const { data } = await tvAPI.showDetail(parsedId);
        result = data;
      }
    } catch {
      setError("Can't find anything.");
    } finally {
      setLoading(false);
      setResult(result);
    }
  }

  return (
    <DetailPresenter
      result={result}
      // searchTerm={searchTerm}
      loading={loading}
      error={error}
    />
  );
}

export default DetailContainer;
