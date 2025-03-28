import styled from "styled-components";

export const StyledDiv = styled.div`
  ${(props) => props.css.toJS()}
`;

StyledDiv.defaultProps = {
  css: {},
};

export default StyledDiv;
