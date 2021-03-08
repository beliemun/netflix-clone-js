import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding-top: 20px;
`;

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  background-color: red;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;

const HomePresenter = ({ nowPlaying, upComing, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <HelmetProvider>
      <Background>
        <iframe
          title="video"
          src="https://www.youtube.com/embed/PFWAOnvMd1Q?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=PFWAOnvMd1Q"
          frameborder="0"
          width="100%"
          height="100%"
          allowfullscreen
        ></iframe>
        {/* <Video
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          //   src="https://www.youtube.com/watch?v=PFWAOnvMd1Q"
          autoPlay="true"
          loop="true"
        ></Video> */}
      </Background>
      <Helmet>
        <title>Movies | Nicoflix</title>
      </Helmet>
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title={"Now Playing"}>
            {nowPlaying.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {upComing && upComing.length > 0 && (
          <Section title={"Up Coming"}>
            {upComing.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title={"Popular Shows"}>
            {popular.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} color={"#e74c3c"} />}
      </Container>
    </HelmetProvider>
  );
HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
