import styled from "styled-components";

interface StyledButtonProps {
  css?: React.CSSProperties;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ css }) => {
    if (!css) return "";
    return Object.entries(css)
      .map(([key, value]) => `${key}: ${value};`)
      .join("\n");
  }}
`;

export default StyledButton;
