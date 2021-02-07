import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Loader from "Components/Loader";

const Container = styled.div`
    width:100%;
    height:calc(100vh - 50px);
    position:absolute;
`;

const Backdrop = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-image:url(${props => props.bgImage});
    background-size:cover;
    background-position:center center;
    filter: blur(5px);
    opacity: 0.5;
`;

const Content = styled.div`
    display:flex;
    position: relative;
    width:100%;
    height:100%;
    z-index:1;
    padding:50px;
`;

const Cover = styled.div`
    width:30%;
    height:100%;
    background-image:url(${props => props.bgImage});
    background-size:cover;
    background-position:center center;
`;

const Data = styled.div`
    width : 70%;
    margin-left: 20px;
`;

const Title = styled.h3`
    font-size:32px;
    margin-bottom:20px;
`;

const ItemContainer = styled.div`
    margin-bottom:20px;
`;

const Item = styled.span``;

const Divider = styled.span`
    margin: 0 5px;
`;

const Overview = styled.p`
    font-size: 14px;
    opacity: 0.7;
    line-height : 1.5;
    width: 50%;
`;

const DetailPresenter = ({
    result,
    error,
    loading }) => loading ?
        (
            <HelmetProvider>
                <Helmet>
                    <title> Loading.. | Nicoflix</title>
                </Helmet>
                <Loader />
            </HelmetProvider>
        ) : (
            <HelmetProvider>
                <Helmet>
                    {result && (
                        <title>{result.original_title ? result.original_title : result.original_name} | Nicoflix</title>
                    )}
                </Helmet>
                <Container>
                    {result && (
                        <>
                            <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
                            <Content>
                                <Cover bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assets/noimage.jpg")} />
                                <Data>
                                    <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                                    <ItemContainer>
                                        <Item>{result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}</Item>
                                        <Divider>•</Divider>
                                        <Item>{result.runtime ? result.runtime : result.episode_run_time[0]} min</Item>
                                        <Divider>•</Divider>
                                        <Item>{result.genres &&
                                            result.genres.map((genre, index) =>
                                                index === result.genres.length - 1
                                                    ? genre.name
                                                    : `${genre.name} / `
                                            )}
                                        </Item>
                                    </ItemContainer>
                                    <Overview>{result.overview}</Overview>
                                </Data>
                            </Content>
                        </>
                    )}
                </Container>
            </HelmetProvider>
        );

DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default DetailPresenter;
