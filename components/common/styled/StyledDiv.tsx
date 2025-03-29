import styled from "styled-components";

interface StyledDivProps {
  css?: React.CSSProperties;
}

// Utility function to convert camelCase to kebab-case
const camelToKebab = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

// Function to convert a style object to a CSS string
const styleObjectToCssString = (styleObject: React.CSSProperties) => {
  return Object.entries(styleObject)
    .map(([key, value]) => `${camelToKebab(key)}: ${value};`)
    .join("\n");
};

const StyledDiv = styled.div<StyledDivProps>`
  ${({ css }) => (css ? styleObjectToCssString(css) : "")}
`;

export default StyledDiv;
