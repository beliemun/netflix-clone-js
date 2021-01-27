import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
`;

const StyledLink = styled(Link)``;

const Header = () => {
  return (
    <header>
      <List>
        <li>
          <StyledLink to="/#">Moives</StyledLink>
        </li>
        <li>
          <StyledLink to="/#/tv">TV</StyledLink>
        </li>
        <li>
          <StyledLink to="/#/search">Search</StyledLink>
        </li>
      </List>
    </header>
  );
};

export default Header;
