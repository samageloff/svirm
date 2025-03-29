"use client";

import React from "react";
import styled from "styled-components";
import Clicker from "./components/Clicker";
import Ticker from "./components/Ticker";
import TimePanel from "./components/TimePanel";
import Triangles from "./components/Triangles";

// Replace these with actual values or pass them as props
const colorWrapper = "#f0f0f0"; // Example value for $color-wrapper
const colorViewport = "#ffffff"; // Example value for $color-viewport
const colorBlack = "#000000"; // Example value for $color-black
const sizeMinHeight = "500px"; // Example value for $size-min-height
const sizeMinWidth = "800px"; // Example value for $size-min-width
const zIndexViewport = 10; // Example value for $z-index-viewport

const Wrapper = styled.div`
  align-items: center;
  background: ${colorWrapper};
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const Viewport = styled.div`
  align-items: center;
  background-color: ${(props) => props.colorviewport};
  box-shadow: 0 4px 60px -10px rgba(${(props) => props.colorblack}, 0.5);
  display: flex;
  height: ${sizeMinHeight};
  position: relative;
  overflow: hidden;
  width: ${sizeMinWidth};
  z-index: ${zIndexViewport};

  @media (max-width: ${sizeMinWidth}) {
    height: 100%;
    width: 100%;
  }
`;

const Timer = () => (
  <Wrapper className="wrapper">
    <Viewport
      colorblack={colorBlack}
      bgcolor={colorViewport}
      className="viewport"
    >
      <Ticker />
      <Clicker />
      <TimePanel />
    </Viewport>
    <Triangles />
  </Wrapper>
);

export default Timer;
