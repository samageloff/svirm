import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bool } from "prop-types";
import StyledDiv from "common/styled/StyledDiv";
import { navIsToggled } from "shared/selectors";
import { navToggle } from "shared/actions";

const navStyles = {
  color: "white",
  cursor: "pointer",
  position: "absolute",
  lineHeight: "1em",
  top: "1em",
  padding: "1em",
  left: "0",
  zIndex: 10,
  background: "black",
};

Nav.propTypes = {
  toggled: bool,
};

const Nav = () => {
  const toggled = useSelector(navIsToggled);
  const dispatch = useDispatch();

  return (
    <StyledDiv css={navStyles} onClick={() => dispatch(navToggle())}>
      {toggled ? "-" : "+"}
    </StyledDiv>
  );
};

export default Nav;
