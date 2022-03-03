import React from "react";
import styled from "styled-components";
import { MAIN_LAYOUT_DIMENSIONS } from "../../../constants";

interface headerProps {}

const MainHeader: React.FC<headerProps> = ({}) => {
  return (
    <Nav>
      <Title>My Learning Portal</Title>
      <ButtonContainer>
        <button>Login</button>
        <button>Register</button>
      </ButtonContainer>
    </Nav>
  );
};

export default MainHeader;

const { header } = MAIN_LAYOUT_DIMENSIONS;

const ButtonContainer = styled.div`
  button {
    margin: 1em;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  height: ${header.height};
  color: white;
  border: 2px solid black;
  background-color: black;
`;

const Title = styled.div``;
