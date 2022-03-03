import styled from "styled-components";
import { ContainerProps } from "./types";

export const Container = styled.div`
  display: grid;
  grid-gap: 10%;
  grid-template-columns: ${(props: ContainerProps) =>
    `repeat(${props.rSize}, minmax(0, 1fr))`};
`;
