import React from "react";
import ThumbnailGrid from "../../components/ThumbnailGrid";
import { ThumbnailType } from "../../components/ThumbnailGrid/types";

interface CourseSearchProps {}

const thumbnailList: ThumbnailType[] = [
  {
    title: "test1",
    image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
  },
  {
    title: "test2",
    image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
  },
  {
    title: "test3",
    image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
  },
  {
    title: "test4",
    image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
  },
  {
    title: "test5",
    image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
  },
];

const CourseSearch: React.FC<CourseSearchProps> = ({}) => {
  return (
    <div>
      <ThumbnailGrid rSize={4} thumbnailList={thumbnailList} />
    </div>
  );
};

export default CourseSearch;
