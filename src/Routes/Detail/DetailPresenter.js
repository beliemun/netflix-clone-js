import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
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

const DetailPresenter = ({
    result,
    error,
    loading }) => loading ? <Loader /> : (
        <Container>
            {result && (
                <>
                    <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
                    <Content>
                        <Cover bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assets/noimage.jpg")} />
                    </Content>
                </>
            )}
        </Container>
    );

DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default DetailPresenter;
