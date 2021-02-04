import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
`;

const Clock = styled.span`
    font-size:30px;
    margin:30px;
`;


const Loader = () =>
    <Container>
        <Clock role="img" aria-label="Loading">⏰</Clock>
    </Container>

export default Loader;