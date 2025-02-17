import React, { useEffect, useRef } from 'react';
import './InteractiveBackground.css';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };

    // Ekran boyutuna göre parçacık sayısını hesapla
    const calculateParticleCount = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        return 50;  // Mobil için daha az parçacık
      } else if (width <= 1024) {
        return 100; // Tablet için orta seviye
      }
      return 150;   // Desktop için tam sayı
    };

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Parçacıkları temizle ve yeni sayıya göre oluştur
      particles = [];
      const particleCount = calculateParticleCount();

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3 + 1;
        const speedX = Math.random() * 1 - 0.5;
        const speedY = Math.random() * 1 - 0.5;
        particles.push({ x, y, size, speedX, speedY });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Parçacıkları çiz
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(135, 206, 235, 0.5)';
        ctx.fill();

        // Mouse ile etkileşim
        if (mouse.x != null) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - distance) / mouse.radius;
            
            particle.x -= Math.cos(angle) * force * 3;
            particle.y -= Math.sin(angle) * force * 3;
          }
        }

        // Parçacıkları hareket ettir
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Ekran sınırlarını kontrol et
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Yakın parçacıkları çizgilerle bağla
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(135, 206, 235, ${0.3 - distance/500})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(); // Ekran boyutu değiştiğinde parçacıkları yeniden oluştur
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="interactive-background" />;
};

export default InteractiveBackground; 