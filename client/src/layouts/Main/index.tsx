import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Headers/Main";
import Sidebar from "../../components/Sidebars/Main";
import { MAIN_LAYOUT_DIMENSIONS } from "../../constants";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default MainLayout;

const { header, sidebar } = MAIN_LAYOUT_DIMENSIONS;

const Content = styled.div`
  position: fixed;
  top: ${header.height};
  left: ${sidebar.width};

  height: auto;
  width: calc(100% - ${sidebar.width});
`;
