"use client";

import React, { useEffect } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { currentTick, initialized, slides } from "../../../lib/redux/selectors";
import variables from "../../common/styles/variables.scss";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

const CurrentTickDiv = styled.div`
  display: ${(props) => (props.initialized ? "block" : "none")};
  font-family: ${variables.custom_font_family};
  font-size: 8rem;
  position: absolute;
`;

const SwiperContainerDiv = styled.div`
  opacity: ${(props) => (props.initialized ? "0" : "1")};
  pointer-events: ${(props) => (props.initialized ? "none" : "all")};
  transition: opacity 0.35s ease;
`;

const ShadowDiv = styled.div`
  opacity: ${(props) => (props.initialized ? "0" : "1")};
  content: " ";
  height: 160px;
  position: absolute;
  width: 90px;
  transition: opacity 0.35s ease;
  z-index: 10;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.001), #000);
  right: ${(props) => (props.right ? "0" : "none")}
  left: ${(props) => (props.left ? "0" : "none")}
`;

const Carousel = () => {
  const currentTickValue = useAppSelector(currentTick);
  const initializedValue = useAppSelector(initialized);
  const slidesValue = useAppSelector(slides);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("initializedValue", initializedValue);
  }, [initializedValue]);

  const getSlides = () =>
    slidesValue.map((slide, index) => (
      <SwiperSlide key={index} className="swiper-slide">
        {slide}
      </SwiperSlide>
    ));

  return [
    <ShadowDiv key={0} left={true.toString()} initialized={initializedValue} />,
    <CurrentTickDiv key={1} initialized={initializedValue}>
      {currentTickValue}
    </CurrentTickDiv>,
    <SwiperContainerDiv
      key={2}
      initialized={initializedValue}
      className="carousel-container"
    >
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        initialSlide={2}
        spaceBetween={50}
      >
        {getSlides()}
      </Swiper>
    </SwiperContainerDiv>,
    <ShadowDiv
      key={3}
      right={true.toString()}
      initialized={initializedValue}
    />,
  ];
};

export default Carousel;
