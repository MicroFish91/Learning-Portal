// * Component Props

// * 1
export interface ThumbnailGridProps {
  cSize?: string;
  rSize: number;
  gridGap?: number;
  thumbnailList: ThumbnailList;
}

export type ThumbnailList = ThumbnailType[];

export type ThumbnailType = {
  title: string;
  image: string;
  author: string;
  description: string;
  completion: number;
};

// * 2
export interface ThumbnailProps extends ThumbnailType {
  cSize: string;
}

// Styled-Component Props
export interface GridContainerProps {
  gridGap: number;
  rSize: number;
}

export interface ThumbnailContainerProps {
  cSize: string;
}
