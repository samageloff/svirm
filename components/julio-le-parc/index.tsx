"use client";

import React from "react";
import Column from "./components/Column";
import styled from "styled-components";

export const config = {
  matrix: 17,
  gridSize: 40,
};

const JulioLeParcStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: ${config.matrix * config.gridSize}px;
  margin: 0 auto;
  width: ${config.matrix * config.gridSize}px;
`;

const JulioLeParcContainer: React.FC = () => {
  return (
    <JulioLeParcStyled>
      <Column matrix={config.matrix} />
    </JulioLeParcStyled>
  );
};

export default JulioLeParcContainer;
