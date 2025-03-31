"use client";

import React, { useState, useEffect } from "react";
import { Background } from "./styles";
import { Shape } from "./components/Shape";
import { Wrapper, List } from "./style.css";

const gridSize = 13;
const degrees = 15;

/**
 * getRotation
 * @params num String
 *
 * rotate(12) => '180deg'
 **/
const getRotation = (num) => `${degrees * num}deg`;

/**
 * genShapes
 * @params start Number
 * @params reverse Bool
 **/
const genShapes = ({ start, reverse = null, isAnimating }) => {
  const generatedList = genList(start, reverse);

  return generatedList.map((rotation, index) => {
    return (
      <Shape
        key={index}
        rotate={getRotation(rotation)}
        isAnimating={isAnimating}
      />
    );
  });
};

/**
 * generateArray
 * @params length Number
 * @params start Number
 *
 * generateArray(5, 2) => [2, 3, 4, 5, 6]
 **/
const generateArray = (length, start) => {
  const arr = Array.from(Array(length), (x, index) => index + start);

  return arr;
};

/**
 * genList
 * @params start Number
 * @params reverse Bool
 **/
const genList = (start, reverse) => {
  return reverse
    ? generateArray(gridSize, start).reverse()
    : generateArray(gridSize, start);
};

/**
 * genShapeList
 * @params start Number
 * @params reverse Bool
 **/
const genShapeList = ({ start, reverse, isAnimating }) => {
  const list = genList(start, reverse);

  return list.map((index) => {
    return (
      <List className="list" key={index}>
        {genShapes({ start: index, isAnimating })}
      </List>
    );
  });
};

export const Instability = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = () => {
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 2000);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(true);
    }, 1000);
  }, []);

  return (
    <div>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
      >
        Re-trigger Animation
      </button>

      <Background>
        <Wrapper>
          {genShapeList({ start: 0, reverse: false, isAnimating })}
        </Wrapper>
        <Wrapper>
          {genShapeList({ start: 6, reverse: true, isAnimating })}
        </Wrapper>
        <Wrapper flip={"true"}>
          {genShapeList({ start: 6, reverse: true, isAnimating })}
        </Wrapper>
        <Wrapper flip={"true"}>
          {genShapeList({ start: 0, reverse: false, isAnimating })}
        </Wrapper>
      </Background>
    </div>
  );
};

export default Instability;
