import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    font-size:12px;
    padding:5px;
`;


const Image = styled.div`
    height:240px;
    background-size:cover;
    background-position: center center;
    background-image: url(${props => props.bgUrl});
    border-radius:10px;
    transition: opacity 0.15s ease-in-out;
`;

const Rating = styled.span`
    position: absolute;
    right: 5px;
    bottom: 3px;
    opacity: 0;
`;

const ImageContainer = styled.div`
    margin-bottom:5px;
    position: relative;
    &:hover {
        ${Image}{
            opacity:0.3;
        }
        ${Rating}{
            opacity:1;
        }
    }
`;

const Title = styled.span`
    display:block;
    font-size: 13px;
    margin-bottom:3px;
`;

const Year = styled.span`
    font-size: 11px;
    color: rgba(255,255,255,0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image
                    bgUrl={
                        imageUrl
                            ? `https://image.tmdb.org/t/p/w300/${imageUrl}`
                            : require("../assets/noimage.jpg").default
                    }
                />
                <Rating>
                    <span role="img" aria-label="star">⭐️</span>
                    {" "}
                    {rating}/10
            </Rating>
            </ImageContainer>
            <Title>{title.length > 15 ? `${title.substring(0, 15)}...` : title}</Title>
            <Year>{year}</Year>
        </Container>
    </Link>
)

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
}

export default Poster;