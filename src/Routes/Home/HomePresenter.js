import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div``;

const HomePresenter = ({
    nowPlaying,
    upComing,
    popular,
    error,
    loading }) => loading ? <Loader /> :
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title={"Now Playing"}>{nowPlaying.map(moive => <span>{moive.title}</span>)}</Section>
            )}
            {upComing && upComing.length > 0 && (
                <Section title={"Up Coming"}>{upComing.map(moive => <span>{moive.title}</span>)}</Section>
            )}
            {popular && popular.length > 0 && (
                <Section title={"Popular Shows"}>{popular.map(moive => <span>{moive.title}</span>)}</Section>
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
