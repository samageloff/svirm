import styled from "styled-components";

export const palatte = {
  background: "rgba(229, 217, 211, 0)",
  shapes: "rgb(14, 14, 16)",
};

export const Background = styled.div`
  background: ${palatte.background};
  width: 702px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
`;
