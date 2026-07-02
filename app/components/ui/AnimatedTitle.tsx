"use client";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";

type AnimatedTitleProps = {
  children: string;
  className: string;
  wordSpace: string;
  charSpace: string;
  delay?: number;
  as?: "h2" | "h3";
};

export default function AnimatedTitle({
  children,
  className,
  wordSpace,
  charSpace,
  as = "h2",
}: AnimatedTitleProps) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const content = children.split(" ").map((word, index) => {
    return (
      <motion.span
        ref={ref}
        aria-hidden="true"
        key={index}
        initial="hidden"
        animate={ctrls}
        variants={wordAnimation}
        transition={{
          delayChildren: index * 0.25,
          staggerChildren: 0.05,
        }}
        className={`inline-block whitespace-nowrap select-none ${wordSpace}`}
      >
        {word.split("").map((character, index) => {
          return (
            <motion.span
              aria-hidden="true"
              key={index}
              variants={characterAnimation}
              className={`inline-block ${charSpace}`}
            >
              {character}
            </motion.span>
          );
        })}
      </motion.span>
    );
  });

  if (as === "h3") {
    return <h3 className={className}>{content}</h3>;
  }

  return <h2 className={className}>{content}</h2>;
}