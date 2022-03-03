export interface Dimension {
  height: string;
  width: string;
}

export interface PageDimensions {
  header: Dimension;
  sidebar: Dimension;
  content: Dimension;
  footer: Dimension;
}

// Main (Home Page style) Dimensions
export const MAIN_DIMENSIONS: PageDimensions = {
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
