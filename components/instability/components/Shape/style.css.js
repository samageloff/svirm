import { palatte } from "../../styles";
import styled from "styled-components";

export const ShapeStyle = styled.div`
  background: linear-gradient(
    to right,
    ${palatte.background} 20%,
    ${palatte.shapes} 0%
  );
  border-radius: 50%;
  height: 23px;
  transition: transform 0.8s ease-in-out;
  transform: ${(props) => `rotate(${props.rotate}) translatez(0)`};
  width: 23px;
  margin: 2px;
`;
