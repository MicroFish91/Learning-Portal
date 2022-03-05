import React from "react";
import styled from "styled-components";
import { ThumbnailContainerProps, ThumbnailProps } from "../types";

const Thumbnail: React.FC<ThumbnailProps> = ({
  cSize = "15rem",
  image,
  title,
  description,
  author,
  completion,
}) => (
  <ThumbnailContainer cSize={cSize}>
    <ThumbnailImage src={image} />
    <TextContainer>
      <ThumbnailTitle>{title}</ThumbnailTitle>
      <ThumbnailDescription>{description}</ThumbnailDescription>
      <div>{author}</div>
      <div>{completion}</div>
    </TextContainer>
  </ThumbnailContainer>
);

export default Thumbnail;

export const ThumbnailContainer = styled.div`
  border: 1px solid black;

  height: ${(props: ThumbnailContainerProps) => `${props.cSize};`};
  overflow: hidden;
`;

export const TextContainer = styled.div`
  padding: 12px 15px;

  height: auto;
`;

export const ThumbnailDescription = styled.div``;

export const ThumbnailImage = styled.img`
  height: 50%;
`;

export const ThumbnailTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
