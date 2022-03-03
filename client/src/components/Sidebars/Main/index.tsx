import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MAIN_LAYOUT_DIMENSIONS } from "../../../constants";

interface mainSidebarProps {}

const MainSidebar: React.FC<mainSidebarProps> = ({}) => {
  return (
    <Container>
      <a>
        <Link to="/">Home</Link>
      </a>
      <a>
        <Link to="/courses">Courses</Link>
      </a>
      <a>
        <Link to="">Gradebook</Link>
      </a>
    </Container>
  );
};

export default MainSidebar;

const { header, sidebar } = MAIN_LAYOUT_DIMENSIONS;

const Container = styled.div`
  position: fixed;
  top: ${header.height};
  left: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: left;

  background-color: lightblue;

  height: calc(100vh - ${header.height});
  width: ${sidebar.width};
  padding-top: 10px;
  padding-left: 10px;

  a {
    margin: 0.4em;
  }
`;
