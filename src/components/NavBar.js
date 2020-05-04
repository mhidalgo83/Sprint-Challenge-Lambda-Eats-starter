import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2%;
`;

const BtnDiv = styled.ul`
  display: flex;
  align-content: center;
  padding: 2%;
`;

const Tag = styled(Button)`
  text-decoration: none;
  margin: 0 2%;
`;

const NavBar = (props) => {
  return (
    <Nav>
      <h1>Lambda Eats</h1>
      <BtnDiv>
        <Tag>
          <Link to="/">Home</Link>
        </Tag>
        <Tag>
          <Link to="/pizza">Pizza</Link>
        </Tag>
      </BtnDiv>
    </Nav>
  );
};

export default NavBar;
