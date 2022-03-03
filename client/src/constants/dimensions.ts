export type Dimension = {
  height: string;
  width: string;
};

export type LayoutDimensions = {
  header: Dimension;
  sidebar: Dimension;
  content: Dimension;
  footer: Dimension;
};

// Main Layout Dimensions
export const MAIN_LAYOUT_DIMENSIONS: LayoutDimensions = {
  header: {
    height: "4rem",
    width: "100%",
  },
  sidebar: {
    height: "100%",
    width: "12rem",
  },
  content: {
    height: "100%",
    width: "100%",
  },
  footer: {
    height: "4rem",
    width: "100%",
  },
};
