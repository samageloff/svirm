import React from "react";
import { motion } from "motion/react";
import styled from "styled-components";
import { palatte } from "../../styles";

// Define the styled motion component
const MotionShapeStyle = styled(motion.div)`
  background: linear-gradient(
    to right,
    ${palatte.background} 20%,
    ${palatte.shapes} 0%
  );
  border-radius: 50%;
  height: 23px;
  width: 23px;
  margin: 2px;
`;

export const Shape = ({ rotate, isAnimating }) => {
  return (
    <MotionShapeStyle
      animate={isAnimating ? { rotate: [0, rotate] } : { rotate: 0 }}
      transition={{ duration: 2, ease: "easeInOut", repeat: 0 }}
    />
  );
};

export default Shape;
