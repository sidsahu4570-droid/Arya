import React, { useEffect, useRef } from 'react';

export default function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse position for subtle parallax
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Generate Stars
    const numStars = Math.floor((width * height) / 4500);
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      baseAlpha: Math.random() * 0.7 + 0.3,
      alpha: Math.random() * 0.7 + 0.3,
      twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      layer: Math.random() * 3 + 1, // 1 to 3 parallax layer
      color: Math.random() > 0.3 ? '#f5f0eb' : Math.random() > 0.5 ? '#e6c894' : '#df9e8e'
    }));

    // Shooting stars
    const shootingStars = [];
    const createShootingStar = () => {
      if (Math.random() < 0.03 && shootingStars.length < 2) {
        shootingStars.push({
          x: Math.random() * width,
          y: Math.random() * (height / 2),
          length: Math.random() * 80 + 40,
          speed: Math.random() * 10 + 6,
          angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
          opacity: 1
        });
      }
    };

    const render = () => {
      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const offsetX = (mouse.x - width / 2) * 0.02;
      const offsetY = (mouse.y - height / 2) * 0.02;

      ctx.clearRect(0, 0, width, height);

      // Render stars
      stars.forEach((star) => {
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 0.95 || star.alpha < 0.15) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        const px = star.x + offsetX * star.layer;
        const py = star.y + offsetY * star.layer;

        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.beginPath();
        ctx.arc(px, py, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow for larger stars
        if (star.size > 1.2) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = star.color;
        } else {
          ctx.shadowBlur = 0;
        }
      });
      ctx.shadowBlur = 0;

      // Shooting stars logic
      createShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity -= 0.015;

        if (ss.opacity <= 0 || ss.x > width || ss.y > height) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const grad = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        grad.addColorStop(0, `rgba(230, 200, 148, ${ss.opacity})`);
        grad.addColorStop(1, 'rgba(230, 200, 148, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85
      }}
    />
  );
}
