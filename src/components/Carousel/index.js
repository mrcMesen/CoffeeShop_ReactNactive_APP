import React from "react";

import { SliderBox } from "react-native-image-slider-box";

const tempImages = [
  "https://californiaavocado.com/wp-content/uploads/2020/07/California-Club-Sandwich.jpeg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/251px-A_small_cup_of_coffee.JPG",
];

/**
 * Promotion Carouse Slider
 *
 * @param {data} array Data for iterate and show each item
 */
export const Carousel = ({ data }) => {
  return <SliderBox images={tempImages} autoplay circleLoop />;
};
