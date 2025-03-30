import React from "react";
import styled from "styled-components";
import { FlexAlign, FlexJustify } from "../LittleSquare/style";
import { arrayFromNumber, sliceArrayFrom } from "../../helpers";
import { palatte } from "../../styles/colors";

const BigSquareWrapper = styled.div<{ flip?: string }>`
  box-shadow: 0 0 0 0.5px ${palatte.lines};
  flex-wrap: wrap;
  justify-content: flex-end;
  top: 1px;
  transform: ${(props) => (props.flip ? "scaleX(-1)" : "scaleX(1)")};
  display: flex;
  position: relative;
  height: 40px;
  width: 40px;
`;

export const LittleSquareWrapper = styled.div<{
  justify?: FlexJustify;
  align?: FlexAlign;
}>`
  display: flex;
  flex-direction: column;
  flex-wrap: inherit;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;

export const StyledEm = styled.em`
  background: ${palatte.primary};
  display: flex;
  height: 10px;
  width: 10px;
`;

interface BigSquareProps {
  matrix: number;
  index: number;
}

interface LengthObject {
  slice3: number;
  slice2: number;
  slice1: number;
  slice0: number;
}

const BigSquare: React.FC<BigSquareProps> = ({ matrix, index }) => {
  const getLittleSquares = React.useCallback((n: number) => {
    const littleSquareArray = arrayFromNumber(n);

    return littleSquareArray.map((_, i) => {
      return <StyledEm key={i} />;
    });
  }, []);

  const squareTemplate = React.useCallback(
    (index: number, square: number, flipArr: number[]) => {
      const array = arrayFromNumber(index);
      const slice = sliceArrayFrom(array);

      if (!slice) return null;

      const len: LengthObject = {
        slice3: slice[3]?.length ?? 0,
        slice2: slice[2]?.length ?? 0,
        slice1: slice[1]?.length ?? 0,
        slice0: slice[0]?.length ?? 0,
      };

      const flip = flipArr.includes(square + 1);

      if (len.slice0 === 0) {
        return <BigSquareWrapper key={square} flip={flip.toString()} />;
      }

      return (
        <BigSquareWrapper key={square}>
          {len.slice3 > 0 && (
            <LittleSquareWrapper
              className="little-square"
              justify="flex-start"
              align="flex-end"
            >
              {getLittleSquares(len.slice3)}
            </LittleSquareWrapper>
          )}
          {len.slice2 > 0 && (
            <LittleSquareWrapper className="little-square" justify="flex-end">
              {getLittleSquares(len.slice2)}
            </LittleSquareWrapper>
          )}
          {len.slice1 > 0 && (
            <LittleSquareWrapper
              className="little-square"
              justify="flex-start"
              align="flex-end"
            >
              {getLittleSquares(len.slice1)}
            </LittleSquareWrapper>
          )}
          {len.slice0 > 0 && (
            <LittleSquareWrapper>
              {getLittleSquares(len.slice0)}
            </LittleSquareWrapper>
          )}
        </BigSquareWrapper>
      );
    },
    [getLittleSquares]
  );

  const generatedSquares = React.useCallback(() => {
    const squareArray = arrayFromNumber(matrix);
    const originalArray = arrayFromNumber(matrix);

    const slicedArray: number[] = squareArray.splice(1, index);
    const reversedArray = slicedArray.reverse();

    const mutatedSquareArray = reversedArray
      .concat(originalArray)
      .slice(0, 17) as number[];

    return mutatedSquareArray.map((square: number, i: number) => {
      const indiciesToFlip = slicedArray;
      return squareTemplate(square, i, indiciesToFlip);
    });
  }, [matrix, index, squareTemplate]);

  return (
    <LittleSquareWrapper className="little-square">
      {generatedSquares()}
    </LittleSquareWrapper>
  );
};

export default React.memo(BigSquare);
