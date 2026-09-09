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

    // Subtle mouse tracking for gentle romantic parallax
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Generate Floating Candlelight Stardust Particles
    const numParticles = Math.floor((width * height) / 7000);
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      alpha: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.015 + 0.005,
      layer: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? '#f8ede5' : Math.random() > 0.5 ? '#e7b8c1' : '#c98291'
    }));

    // Soft Bokeh Orbs
    const numBokeh = 12;
    const bokehOrbs = Array.from({ length: numBokeh }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 90 + 40,
      alpha: Math.random() * 0.08 + 0.03,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      color: Math.random() > 0.5 ? 'rgba(231, 184, 193, ' : 'rgba(125, 38, 59, '
    }));

    // Rose Petal Silhouettes
    const numPetals = 8;
    const petals = Array.from({ length: numPetals }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 12 + 8,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.01,
      speedY: Math.random() * 0.4 + 0.2,
      speedX: Math.sin(Math.random() * Math.PI) * 0.3,
      opacity: Math.random() * 0.35 + 0.15
    }));

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.03;
      mouse.y += (mouse.targetY - mouse.y) * 0.03;

      const offsetX = (mouse.x - width / 2) * 0.015;
      const offsetY = (mouse.y - height / 2) * 0.015;

      ctx.clearRect(0, 0, width, height);

      // Render Soft Bokeh Orbs
      bokehOrbs.forEach((orb) => {
        orb.x += orb.speedX;
        orb.y += orb.speedY;

        if (orb.x < -100) orb.x = width + 100;
        if (orb.x > width + 100) orb.x = -100;
        if (orb.y < -100) orb.y = height + 100;
        if (orb.y > height + 100) orb.y = -100;

        const px = orb.x + offsetX * 0.5;
        const py = orb.y + offsetY * 0.5;

        const grad = ctx.createRadialGradient(px, py, 0, px, py, orb.radius);
        grad.addColorStop(0, orb.color + orb.alpha + ')');
        grad.addColorStop(1, orb.color + '0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render Floating Dust Particles
      particles.forEach((p) => {
        p.alpha += p.pulseSpeed;
        if (p.alpha > 0.7 || p.alpha < 0.15) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        const px = p.x + offsetX * p.layer;
        const py = p.y + offsetY * p.layer;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(0.8, p.alpha));
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // Render Falling Rose Petals
      petals.forEach((petal) => {
        petal.y += petal.speedY;
        petal.x += Math.sin(petal.y * 0.01) * 0.5;
        petal.rotation += petal.rotationSpeed;

        if (petal.y > height + 20) {
          petal.y = -20;
          petal.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(petal.x + offsetX, petal.y + offsetY);
        ctx.rotate(petal.rotation);
        ctx.fillStyle = `rgba(201, 130, 145, ${petal.opacity})`;

        // Simple organic petal path
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-petal.size / 2, -petal.size, -petal.size, petal.size / 2, 0, petal.size);
        ctx.bezierCurveTo(petal.size, petal.size / 2, petal.size / 2, -petal.size, 0, 0);
        ctx.fill();
        ctx.restore();
      });

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
        opacity: 0.9
      }}
    />
  );
}
