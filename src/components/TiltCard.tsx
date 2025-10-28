import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  cursorPos: { x: number; y: number };
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
  cursorPos,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const dx = cursorPos.x - cardCenterX;
    const dy = cursorPos.y - cardCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const intensity = Math.max(0, 1 - distance / 400); // atténuation de la lumière
    const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90; // direction de la lumière

    // rotation subtile selon la position de la lumière
    const tiltX = (dy / rect.height) * 10;
    const tiltY = -(dx / rect.width) * 10;

    // gradient directionnel blanc
    const lightGradient = `linear-gradient(${angle}deg, rgba(255,255,255,${
      0.5 * intensity
    }) 0%, rgba(255,255,255,0) 80%)`;

    // on anime en douceur avec gsap
    tl.current?.kill();
    tl.current = gsap.to(cardRef.current, {
      duration: 0.3,
      borderImageSource: lightGradient,
      borderImageSlice: 1,
      ease: "power2.out",
      transformPerspective: 800,
    });
  }, [cursorPos]);

  return (
    <div
      ref={cardRef}
      className={`w-full aspect-square bg-white/10 rounded-2xl border-2 border-white/10 shadow-lg flex items-center justify-center backdrop-blur-sm ${className}`}
      style={{
        transformStyle: "preserve-3d",
        borderImageSource: "linear-gradient(180deg, transparent, transparent)", // valeur par défaut
        borderImageSlice: 1,
      }}
    >
      {children}
    </div>
  );
};

export default TiltCard;
