import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
    padding-top:20px;
`;

const HomePresenter = ({
    nowPlaying,
    upComing,
    popular,
    error,
    loading }) => loading ? <Loader /> :
        <>
            <Helmet>
                <title>Movies | Nicoflix</title>
            </Helmet>
            <Container>
                {nowPlaying && nowPlaying.length > 0 && (
                    <Section title={"Now Playing"}>{nowPlaying.map(movie =>
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                            year={movie.release_date && movie.release_date.substring(0, 4)}
                            isMovie={true}
                        />
                    )}
                    </Section>
                )}
                {upComing && upComing.length > 0 && (
                    <Section title={"Up Coming"}>{upComing.map(movie =>
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                            year={movie.release_date && movie.release_date.substring(0, 4)}
                            isMovie={true}
                        />
                    )}
                    </Section>
                )}
                {popular && popular.length > 0 && (
                    <Section title={"Popular Shows"}>{popular.map(movie =>
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                            year={movie.release_date && movie.release_date.substring(0, 4)}
                            isMovie={true}
                        />
                    )}
                    </Section>
                )}
                {error && <Message text={error} color={"#e74c3c"} />}
            </Container>
        </>
HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    upComing: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
}

export default HomePresenter;
