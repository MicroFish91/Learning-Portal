import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Container } from "./styles";
import Thumbnail from "./Thumbnail";
import { ThumbnailGridProps } from "./types";

const ThumbnailGrid: React.FC<ThumbnailGridProps> = ({
  cSize = "10rem",
  rSize,
  thumbnailList,
}) => {
  return (
    <Container rSize={rSize}>
      Courses
      {thumbnailList.map((thumbnail) => {
        return (
          <Thumbnail
            key={uuidv4()}
            cSize={cSize}
            image={thumbnail.image}
            title={thumbnail.title}
          />
        );
      })}
    </Container>
  );
};

export default ThumbnailGrid;
