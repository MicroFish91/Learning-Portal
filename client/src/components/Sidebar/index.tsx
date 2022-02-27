import React from "react";
import { Link } from "react-router-dom";

interface sidebarProps {}

const Sidebar: React.FC<sidebarProps> = ({}) => {
  return (
    <div>
      Sidebar
      <Link to="">Home</Link>
      <Link to="">Courses</Link>
      <Link to="">Gradebook</Link>
    </div>
  );
};

export default Sidebar;
