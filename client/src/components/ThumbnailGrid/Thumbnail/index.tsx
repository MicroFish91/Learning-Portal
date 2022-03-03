import React from "react";
import styled from "styled-components";
import { ThumbnailProps } from "../types";

const Thumbnail: React.FC<ThumbnailProps> = ({
  cSize = "10rem",
  image,
  title,
}) => {
  return (
    <Container cSize={cSize}>
      <div>{title}</div>
      <img src={image} />
    </Container>
  );
};

export default Thumbnail;

interface ContainerProps {
  cSize: string;
}

const Container = styled.div`
  height: ${(props: ContainerProps) => `${props.cSize};`};
  overflow: hidden;
`;
