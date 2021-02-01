import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends React.Component {
  state = {
    result: null,
    loading: true,
    error: null,
  };
}

const DetailContainer = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  return (
    <DetailPresenter
      result={result}
      searchTerm={searchTerm}
      loading={loading}
      error={error}
    />
  );
}

export default DetailContainer;
