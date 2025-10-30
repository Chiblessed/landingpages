import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function GsapButtonAnimations() {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;

    // Idle floating effect
    gsap.to(btn, {
      y: -4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 1.5,
    });
  }, []);

  const handleHoverEnter = () => {
    gsap.to(btnRef.current, {
      scale: 1.15,
      rotate: 3,
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      duration: 0.4,
      ease: "elastic.out(1, 0.5)",
    });
  };

  const handleHoverLeave = () => {
    gsap.to(btnRef.current, {
      scale: 1,
      rotate: 0,
      boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleClick = () => {
    const btn = btnRef.current;
    gsap.fromTo(
      btn,
      { scale: 1 },
      {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      }
    );
    // Pulse ring effect
    const ring = document.createElement("span");
    const size = btn.offsetWidth * 2;
    ring.style.position = "absolute";
    ring.style.width = ring.style.height = `${size}px`;
    ring.style.border = "2px solid rgba(255,255,255,0.6)";
    ring.style.borderRadius = "50%";
    ring.style.left = `${btn.offsetWidth / 2 - size / 2}px`;
    ring.style.top = `${btn.offsetHeight / 2 - size / 2}px`;
    ring.style.pointerEvents = "none";
    btn.appendChild(ring);
    gsap.fromTo(
      ring,
      { scale: 0, opacity: 1 },
      {
        scale: 1,
        opacity: 0,
        duration: 0.6,
        ease: "power1.out",
        onComplete: () => ring.remove(),
      }
    );
  };

  return (
    <div className="h-screen flex items-center justify-center bg-slate-900">
      <button
        ref={btnRef}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        onClick={handleClick}
        className="relative px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-2xl shadow-lg overflow-hidden"
      >
        Click Me
      </button>
    </div>
  );
}
