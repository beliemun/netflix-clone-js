import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div``;

const TVPresenter = ({
    topRated,
    popular,
    airingToday,
    error,
    loading }) => loading ? <Loader /> :
        <Container>
            {topRated && topRated.length > 0 && (
                <Section title="Top Rated Shows">{topRated.map(show => <span>{show.name}</span>)}</Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular Shows">{popular.map(show => <span>{show.name}</span>)}</Section>
            )}
            {airingToday && airingToday.length > 0 && (
                <Section title="Airing Today">{airingToday.map(show => <span>{show.name}</span>)}</Section>
            )}
        </Container>

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    error: PropTypes.string.isRequired,
    loading: PropTypes.string
}

export default TVPresenter;
