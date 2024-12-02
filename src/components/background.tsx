"use client";

import { useEffect, useRef } from "react";

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const matrix =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const characters = matrix.split("");

    const fontSize = 10;
    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array.from({ length: columns }, () =>
      Math.floor(Math.random() * (canvas.height / fontSize)),
    );

    const draw = () => {
      if (
        window.innerWidth !== canvas.width ||
        window.innerHeight !== canvas.height
      ) {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        columns = Math.floor(canvas.width / fontSize);
        drops = Array.from({ length: columns }, () =>
          Math.floor(Math.random() * (canvas.height / fontSize)),
        );
      }

      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00750A";
      ctx.font = `${fontSize}px Arial`;

      for (let i = 0; i < drops.length; i++) {
        const text =
          characters[Math.floor(Math.random() * characters.length)] ?? " ";
        ctx.fillText(text, i * fontSize, (drops[i] ?? 0) * fontSize);

        if (
          (drops[i] ?? 0) * fontSize > canvas.height &&
          Math.random() > 0.975
        ) {
          drops[i] = 0;
        }

        drops[i]!++;
      }
    };

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default MatrixBackground;
