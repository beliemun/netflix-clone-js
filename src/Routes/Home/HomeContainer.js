import React from "react";
import HomePresenter from "./HomePresenter";

class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    loading: null,
    error: null,
  };

  render() {
    const { nowPlaying, upComing, popular, loading, error } = this.state;
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
}

export default HomeContainer;
