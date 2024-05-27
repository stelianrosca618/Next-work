import React from "react";

const StarryBackground = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  const numberOfStars = 1000;
  const stars = [];

  for (let i = 0; i < numberOfStars; i++) {
    const x = Math.random() * 100;
    const y = (Math.random() * 2 - 1) * 170;
    const r = 0.1;
    stars.push({ cx: x, cy: y, r });
  }

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width,
        height,
        zIndex: "-1",
      }}
      viewBox={`0 0 100 100`}
    >
      {stars.map((star, index) => (
        <circle
          key={index}
          cx={star.cx}
          cy={star.cy}
          r={star.r}
          fill="#ffffff"
          className="star"
        />
      ))}
    </svg>
  );
};

export default StarryBackground;
