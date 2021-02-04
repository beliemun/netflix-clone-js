import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";

const Container = styled.div`

`;

const HomePresenter = ({
    nowPlaying,
    upComing,
    popular,
    error,
    loading }) => loading ? null :
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title={"Now Playing"}>{nowPlaying.map(moive => moive.title)}</Section>
            )}
            {upComing && upComing.length > 0 && (
                <Section title={"Up Coming"}>{upComing.map(moive => moive.title)}</Section>
            )}
            {popular && popular.length > 0 && (
                <Section title={"Popular"}>{popular.map(moive => moive.title)}</Section>
            )}
        </Container>

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    upComing: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string.isRequired,
    loading: PropTypes.string
}

export default HomePresenter;
