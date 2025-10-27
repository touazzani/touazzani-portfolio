import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const MovingTriangles: React.FC = () => {
  const patternRef = useRef<SVGPatternElement>(null);

  useEffect(() => {
    if (patternRef.current) {
      const patternWidth = 20; // largeur d'un petit triangle

      gsap.fromTo(
        patternRef.current,
        { attr: { x: 0 } },
        {
          attr: { x: patternWidth },
          duration: 1, // plus rapide car triangles plus petits
          ease: "none",
          repeat: -1,
          onRepeat: () => {
            patternRef.current?.setAttribute("x", "0");
          },
        }
      );
    }
  }, []);

  return (
    <svg width="100%" height="20">
      <defs>
        <pattern
          id="triangles"
          patternUnits="userSpaceOnUse"
          width="20"
          height="20"
          ref={patternRef}
        >
          {/* Petit triangle */}
          <polygon points="0,20 10,0 20,20" fill="oklch(55.2% 0.016 285.938)" />
        </pattern>
      </defs>

      {/* Bande horizontale */}
      <rect width="100%" height="20" fill="url(#triangles)" />
    </svg>
  );
};
