import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";


const DetailContainer = (props) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const {
      match: {
        params: { id },
      },
      history: { push }
    } = props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
  }, [props]);

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
