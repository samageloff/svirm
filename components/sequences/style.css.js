import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.flip ? "scale(-1, -1)" : "scale(1, 1)")};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;
