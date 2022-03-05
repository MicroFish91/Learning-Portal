import styled from "styled-components";
import { GridContainerProps } from "./types";

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 4%;
  grid-template-columns: ${(props: GridContainerProps) =>
    `repeat(${props.rSize}, minmax(0, 1fr))`};
`;
