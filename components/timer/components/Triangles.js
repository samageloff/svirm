import React from "react";
import styled from "styled-components";

// Replace this with the actual value or pass it as a prop
const colorTriangles = "#ff0000"; // Example value for $color-triangles

const TriangleBase = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colorTriangles};
    transform: rotate(30deg) skewX(-30deg);
  }
`;

const BottomTriangle = styled(TriangleBase)`
  bottom: 0;
  padding-bottom: 50%;

  &:before {
    top: 0;
    transform-origin: 0 100%;
  }
`;

const TopTriangle = styled(TriangleBase)`
  top: 0;
  padding-top: 50%;

  &:before {
    bottom: 0;
    transform-origin: 100% 0;
  }
`;

const Triangles = () => {
  return [<TopTriangle key={0} />, <BottomTriangle key={1} />];
};

export default Triangles;
