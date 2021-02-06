import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div``;

const Form = styled.form`
    width: 100%;
    padding: 0 20px;
`;

const Input = styled.input`
    all:unset;
    font-size: 30px;
    width: 100%;
`;

const SearchPresenter = ({
    movieResults,
    tvResults,
    searchTerm,
    error,
    loading,
    handleSubmit,
    updateTerm }) =>
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movies or TV Shows.." value={searchTerm} onChange={updateTerm} />
        </Form>
        {loading ? <Loader /> : <>
            {movieResults && movieResults.length > 0 && (
                <Section title="Moive Results">
                    {movieResults.map(movie =>
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
            {tvResults && tvResults.length > 0 && (
                <Section title="TV Show Results">
                    {tvResults.map(show =>
                        <Poster
                            key={show.id}
                            id={show.id}
                            title={show.original_name}
                            imageUrl={show.poster_path}
                            rating={show.vote_average}
                            year={show.first_air_date && show.first_air_date.substring(0, 4)}
                            isMovie={true}
                        />
                    )}
                </Section>
            )}
            {error && <Message text={error} color="#e74c3c" />}
            {movieResults && tvResults && movieResults.length === 0 && tvResults.length === 0 &&
                <Message text={`Nothing found`} color="#bdc3c7" />}
        </>}
    </Container>

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;