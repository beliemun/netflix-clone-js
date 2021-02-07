import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
`;

const Text = styled.span`
    color: #bdc3c7;
    font-size:20px;
    font-weight: 600;
    padding-top:20px;
`;

const Loader = () =>
    <Container>
        <Text>Loading..</Text>
    </Container>

export default Loader;