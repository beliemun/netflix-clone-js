import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.8);
  font-size: 16px;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 100px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#e74c3c" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;
`;

const StyledLink = styled(Link)`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = ({ location: { pathname } }) => {
  return (
    <StyledHeader>
      <List>
        <Item current={pathname === "/"}>
          <StyledLink to="/">Moives</StyledLink>
        </Item>
        <Item current={pathname === "/tv"}>
          <StyledLink to="/tv">TV</StyledLink>
        </Item>
        <Item current={pathname === "/search"}>
          <StyledLink to="/search">Search</StyledLink>
        </Item>
      </List>
    </StyledHeader>
  );
};

export default withRouter(Header);
