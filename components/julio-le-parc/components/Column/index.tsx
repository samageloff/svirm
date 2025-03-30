import React from "react";
import { motion } from "framer-motion";
import { arrayFromNumber } from "../../helpers";
import BigSquare from "../BigSquare";
import { columnStyles } from "./style";
import styled from "styled-components";

interface ColumnProps {
  matrix: number;
}

const SquareWrapper = styled.div(columnStyles);

const Column: React.FC<ColumnProps> = ({ matrix }) => {
  const generateColumn = React.useCallback(() => {
    const columnArray = arrayFromNumber(matrix);

    return columnArray.map((column, index) => {
      return (
        <SquareWrapper className="square-wrapper" key={`grid-${index}`}>
          <BigSquare matrix={matrix} index={index} />
        </SquareWrapper>
      );
    });
  }, [matrix]);

  return generateColumn();
};

export default React.memo(Column);
