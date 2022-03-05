import React from "react";
import ThumbnailGrid from "../../components/ThumbnailGrid";
import { ThumbnailType } from "../../components/ThumbnailGrid/types";

interface MyCourseProps {}

const thumbnailList: ThumbnailType[] = [
  {
    title: "Course Title",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQzL5WViIVUfBfU0OL8iS2bV8TLeFTz758w&usqp=CAU",
    author: "Matthew Fisher",
    description: "Just another course.",
    completion: 50,
  },
  {
    title: "Course Title",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQzL5WViIVUfBfU0OL8iS2bV8TLeFTz758w&usqp=CAU",
    author: "Matthew Fisher",
    description: "Just another course.",
    completion: 50,
  },
  {
    title: "Course Title",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQzL5WViIVUfBfU0OL8iS2bV8TLeFTz758w&usqp=CAU",
    author: "Matthew Fisher",
    description: "Just another course.",
    completion: 50,
  },
  {
    title: "Course Title",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQzL5WViIVUfBfU0OL8iS2bV8TLeFTz758w&usqp=CAU",
    author: "Matthew Fisher",
    description: "Just another course.",
    completion: 50,
  },
  {
    title: "Course Title",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQzL5WViIVUfBfU0OL8iS2bV8TLeFTz758w&usqp=CAU",
    author: "Matthew Fisher",
    description: "Just another course.",
    completion: 50,
  },
  {
    title: "Course Title",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQzL5WViIVUfBfU0OL8iS2bV8TLeFTz758w&usqp=CAU",
    author: "Matthew Fisher",
    description: "Just another course.",
    completion: 50,
  },
];

const MyCourses: React.FC<MyCourseProps> = ({}) => {
  return (
    <div>
      <h1>Currently Enrolled</h1>
      <ThumbnailGrid rSize={5} thumbnailList={thumbnailList} />
    </div>
  );
};

export default MyCourses;
