import { movieAPI, tvAPI } from "api";
import React, { useState, useEffect, useCallback } from "react";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = (props) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const {
    location: { pathname },
    match: { params: { id } }
  } = props;
  const [parsedId] = useState(parseInt(id));
  const [isMovie] = useState(pathname.includes("/movie/"));

  const loadDatas = useCallback(async (parsedId) => {
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
  }, [isMovie]);

  useEffect(() => {
    const { history: { push } } = props;
    if (isNaN(parsedId)) {
      return push("/");
    }
    loadDatas(parsedId);
  }, [props, loadDatas, parsedId]);

  return (
    <DetailPresenter
      result={result}
      error={error}
      loading={loading}
    />
  );
}

export default DetailContainer;
