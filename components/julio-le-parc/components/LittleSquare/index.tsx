import React from "react";
import { arrayFromNumber, sliceArrayFrom } from "../../helpers";
import { littleSquareStyle, FlexJustify, FlexAlign } from "./style";
import StyledDiv from "@/components/common/styled/StyledDiv";

interface LittleSquareProps {
  matrix: number;
  index: number;
}

interface LengthObject {
  slice3: number | undefined;
  slice2: number | undefined;
  slice1: number | undefined;
  slice0: number | undefined;
}

const LittleSquare: React.FC<LittleSquareProps> = ({ matrix, index }) => {
  const getLittleSquare = React.useCallback((n: number) => {
    const littleSquareArray = arrayFromNumber(n) as number[];

    return littleSquareArray.map((value: number) => {
      return <em key={value} style={emStyle} />;
    });
  }, []);

  const littleSquareTemplate = React.useCallback(
    (index: number, square: number, arr: number[]) => {
      const array = arrayFromNumber(index) as number[];
      const slice = (sliceArrayFrom(array) || []) as number[][];

      const len: LengthObject = {
        slice3: slice[3]?.length,
        slice2: slice[2]?.length,
        slice1: slice[1]?.length,
        slice0: slice[0]?.length,
      };

      const flip = arr.includes(square + 1);

      if (len.slice0 === 0) {
        return <div key={square} css={littleSquareStyle(flip)} />;
      }

      return (
        <StyledDiv key={square} css={littleSquareStyle(flip)}>
          {len.slice3 && (
            <StyledDiv
              css={littleSquareStyle(
                "flex-start" as FlexJustify,
                "flex-end" as FlexAlign
              )}
            >
              {getLittleSquare(len.slice3)}
            </StyledDiv>
          )}
          {len.slice2 && (
            <StyledDiv css={littleSquareStyle("flex-end" as FlexJustify)}>
              {getLittleSquare(len.slice2)}
            </StyledDiv>
          )}
          {len.slice1 && (
            <StyledDiv
              css={littleSquareStyle(
                "flex-start" as FlexJustify,
                "flex-end" as FlexAlign
              )}
            >
              {getLittleSquare(len.slice1)}
            </StyledDiv>
          )}
          {len.slice0 && (
            <StyledDiv css={littleSquareStyle("flex-end" as FlexJustify)}>
              {getLittleSquare(len.slice0)}
            </StyledDiv>
          )}
        </StyledDiv>
      );
    },
    [getLittleSquare]
  );

  const generatedLittleSquare = React.useCallback(() => {
    const squareArray = arrayFromNumber(matrix) as number[];
    const originalArray = arrayFromNumber(matrix) as number[];

    const slicedArray = squareArray.splice(1, index);
    const reversedArray = slicedArray.reverse();

    const mutatedSquareArray = reversedArray
      .concat(originalArray)
      .slice(0, matrix);

    return mutatedSquareArray.map((square: number, index: number) => {
      const indiciesToFlip = slicedArray;
      return littleSquareTemplate(square, index, indiciesToFlip);
    });
  }, [matrix, index, littleSquareTemplate]);

  return <div>{generatedLittleSquare()}</div>;
};

export default React.memo(LittleSquare);
