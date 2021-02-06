import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Contianer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`;

const Text = styled.span`
    color : ${props => props.color};
    font-size:20px;
    font-weight: 600;
    line-height:30px;
`;

const Message = ({ text, color }) => (
    <Contianer>
        <Text color={color}>{text}</Text>
    </Contianer>
)

Message.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Message;