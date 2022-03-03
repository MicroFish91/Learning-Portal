export interface ContainerProps {
  rSize: number;
}

export interface ThumbnailGridProps {
  cSize?: string;
  rSize: number;
  thumbnailList: ThumbnailList;
}

export interface ThumbnailProps extends ThumbnailType {
  cSize: string;
}

export type ThumbnailList = ThumbnailType[];

export type ThumbnailType = {
  title: string;
  image: string;
};
