import React, { useEffect } from "react";
import "../styles/Background.css";

const Background = () => {
  useEffect(() => {
    const canvas = document.getElementById("blobCanvas");
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createBlob = (x, y, size, speedX, speedY, color) => ({
      x,
      y,
      size,
      speedX,
      speedY,
      color,
    });

    const blobs = [];
    const blobCount = 10;  // Fewer blobs for a refined look

    const colors = ["#252525", "#1B1B1B", "#333333", "#444444", "#555555", "#666666"];

    for (let i = 0; i < blobCount; i++) {
      blobs.push(
        createBlob(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 180 + 100,
          (Math.random() - 0.5) * 0.5,  // Slow drift
          (Math.random() - 0.5) * 0.5,  // Slow drift
          colors[Math.floor(Math.random() * colors.length)]
        )
      );
    }

    const drawBlobs = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((blob) => {
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.size, 0, Math.PI * 2);
        ctx.fillStyle = blob.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();

        // Slow, gentle floating
        blob.x += blob.speedX;
        blob.y += blob.speedY;

        // Stay near corners and sides
        if (blob.x - blob.size < 0 || blob.x + blob.size > canvas.width) {
          blob.speedX *= -1;
        }
        if (blob.y - blob.size < 0 || blob.y + blob.size > canvas.height) {
          blob.speedY *= -1;
        }
      });

      requestAnimationFrame(drawBlobs);
    };

    resizeCanvas();
    drawBlobs();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="background-container">
      {/* 🌌 Canvas for Floating Blobs */}
      <canvas id="blobCanvas"></canvas>

      {/* 🔥 Corner Glows */}
      <div className="corner-glow glow1"></div>
      <div className="corner-glow glow2"></div>
      <div className="corner-glow glow3"></div>
      <div className="corner-glow glow4"></div>

      {/* 🌊 Gentle Flowing Waves */}
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
    </div>
  );
};

export default Background;






