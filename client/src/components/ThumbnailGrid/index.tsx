import React from "react";
import { v4 as uuidv4 } from "uuid";
import { GridContainer } from "./styles";
import Thumbnail from "./Thumbnail";
import { ThumbnailGridProps } from "./types";

const ThumbnailGrid: React.FC<ThumbnailGridProps> = ({
  cSize = "15rem",
  rSize,
  gridGap = 4,
  thumbnailList,
}) => {
  return (
    <GridContainer gridGap={gridGap} rSize={rSize}>
      {thumbnailList.map((thumbnail) => {
        return (
          <Thumbnail
            key={uuidv4()}
            cSize={cSize}
            image={thumbnail.image}
            title={thumbnail.title}
            description={thumbnail.description}
            author={thumbnail.author}
            completion={thumbnail.completion}
          />
        );
      })}
    </GridContainer>
  );
};

export default ThumbnailGrid;
