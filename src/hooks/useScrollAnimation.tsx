import { useRef } from "react";
import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

interface ScrollAnimationOptions {
  offset?: [string, string];
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { offset = ["start end", "end start"], springConfig = { stiffness: 100, damping: 30, mass: 0.5 } } = options;
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });

  const smoothProgress = useSpring(scrollYProgress, springConfig);

  return { ref, scrollYProgress, smoothProgress };
};

export const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

export const useParallaxY = (value: MotionValue<number>, start: number, end: number) => {
  return useTransform(value, [0, 1], [start, end]);
};

export const useOpacityOnScroll = (value: MotionValue<number>, fadeIn: boolean = true) => {
  return useTransform(value, fadeIn ? [0, 0.3, 0.7, 1] : [0, 0.3, 0.7, 1], fadeIn ? [0, 1, 1, 0] : [1, 1, 1, 0]);
};

export const useScaleOnScroll = (value: MotionValue<number>, min: number = 0.8, max: number = 1) => {
  return useTransform(value, [0, 0.5, 1], [min, max, min]);
};
