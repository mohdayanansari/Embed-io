'use client';
import Lottie from 'lottie-react';
import light from '../../animations/light-emoji.json';

const Animation = () => {
  return <Lottie animationData={light} loop={true} />;
};

export default Animation;
