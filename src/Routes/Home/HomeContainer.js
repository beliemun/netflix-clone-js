import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesAPI } from "api";

class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesAPI.nowPlaying();
      const {
        data: { results: upComing },
      } = await moviesAPI.upComing();
      const {
        data: { results: popular },
      } = await moviesAPI.popular();
      this.setState({
        nowPlaying,
        upComing,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find moives information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

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
