import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Immutable from "immutable";
import { Swiper } from "swiper/react";
import { bool, number } from "prop-types";
import StyledDiv from "common/styled/StyledDiv";
import { setCurrentTick } from "timer/actions";
import { currentTick, initialized, slides } from "timer/selectors";
import shadow from "timer/styles/inset-shadow.scss";
import variables from "common/styles/variables.scss";

Carousel.propTypes = {
  currentTick: number,
  initialized: bool,
};

const Carousel = () => {
  const currentTickValue = useSelector(currentTick);
  const initializedValue = useSelector(initialized);
  const slidesValue = useSelector(slides);
  const dispatch = useDispatch();

  useEffect(() => {
    const carousel = new Swiper(".carousel-container", {
      slidesPerView: 3,
      centeredSlides: true,
      initialSlide: 2,
      spaceBetween: 50,
    });

    carousel.on("slideChange", () =>
      dispatch(setCurrentTick(carousel.realIndex))
    );

    return () => {
      carousel.destroy();
    };
  }, [dispatch]);

  const getSlides = () =>
    slidesValue.map((slide, index) => (
      <div key={index} className="swiper-slide">
        {slide}
      </div>
    ));

  const currentTickStyles = Immutable.fromJS({
    display: initializedValue ? "block" : "none",
    fontFamily: variables.custom_font_family,
    fontSize: "8rem",
    position: "absolute",
  });

  const swiperContainerStyles = Immutable.fromJS({
    opacity: initializedValue ? "0" : "1",
    pointerEvents: initializedValue ? "none" : "all",
    transition: "opacity .35s ease",
  });

  const shadowStyles = Immutable.fromJS({
    opacity: initializedValue ? "0" : "1",
  });

  return [
    <StyledDiv
      key={0}
      css={shadowStyles}
      className={shadow["inset-shadow-left"]}
    />,
    <StyledDiv key={1} css={currentTickStyles}>
      {currentTickValue}
    </StyledDiv>,
    <StyledDiv
      key={2}
      css={swiperContainerStyles}
      className="carousel-container"
    >
      <div className="swiper-wrapper">{getSlides()}</div>
    </StyledDiv>,
    <StyledDiv
      key={3}
      css={shadowStyles}
      className={shadow["inset-shadow-right"]}
    />,
  ];
};

export default Carousel;
