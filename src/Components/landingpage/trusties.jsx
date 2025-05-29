"use client";
import React, { useEffect, useRef } from "react";

const Trusties = () => {
  const containerRef = useRef(null);
  const imgSet1Ref = useRef(null);
  const imgSet2Ref = useRef(null);
  const animationRef = useRef(null);

  const images = [
    { src: "/paypal.svg" },
    { src: "/mastercard.svg" },
    { src: "/universal.svg" },
    { src: "/paypal.svg" },
    { src: "/mastercard.svg" },
    { src: "/universal.svg" },
  ];

  useEffect(() => {
    let position1 = 0;
    let position2 = 0;
    let speed = 50;
    let gap = 100;

    const initializePositions = () => {
      if (containerRef.current && imgSet1Ref.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = imgSet1Ref.current.offsetWidth;

        position1 = containerWidth;
        position2 = containerWidth + contentWidth + gap;
      }
    };

    const animate = () => {
      if (!imgSet1Ref.current || !imgSet2Ref.current) return;

      const contentWidth = imgSet1Ref.current.offsetWidth;
      position1 -= speed / 10;
      position2 -= speed / 10;

      if (position1 <= -contentWidth - gap) {
        position1 = position2 + contentWidth + gap;
      }
      if (position2 <= -contentWidth - gap) {
        position2 = position1 + contentWidth + gap;
      }

      imgSet1Ref.current.style.transform = `translateX(${position1}px)`;
      imgSet2Ref.current.style.transform = `translateX(${position2}px)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    const timer = setTimeout(() => {
      initializePositions();
      animate();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col justify-between  items-center bg-white dark:bg-black px-4 md:px-15 py-10 max-w-[1440px] mx-auto">
      <h1 className="font-worksans font-medium text-[20px] text-textlight dark:text-textdark">
        Trusties
      </h1>
      <div
        ref={containerRef}
        className="relative w-full h-[100px] overflow-hidden"
      >
        <div
          ref={imgSet1Ref}
          className="absolute top-0 left-0 flex flex-row items-center justify-evenly gap-10"
        >
          {images.map((img, index) => (
            <img key={`a-${index}`} src={img.src} alt="" className="md:w-[140px] w-[100px] h-[28px] md:h-[45px]" />
          ))}
        </div>
        <div
          ref={imgSet2Ref}
          className="absolute top-0 left-0 flex flex-row items-center justify-evenly gap-10"
        >
          {images.map((img, index) => (
            <img key={`b-${index}`} src={img.src} alt="" className="md:w-[140px] w-[100px] h-[28px] md:h-[45px]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusties;
