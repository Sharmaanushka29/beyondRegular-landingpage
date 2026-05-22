'use client';

import { useEffect, useRef, useState } from 'react';

export default function ComparisonGraphic() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedConversionA, setAnimatedConversionA] = useState(0);
  const [animatedConversionB, setAnimatedConversionB] = useState(0);
  const [animatedRevenueA, setAnimatedRevenueA] = useState(0);
  const [animatedRevenueB, setAnimatedRevenueB] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('comparison-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Animate numbers when visible
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setAnimatedConversionA(5.28 * easeOut);
      setAnimatedConversionB(2.12 * easeOut);
      setAnimatedRevenueA(75.4 * easeOut);
      setAnimatedRevenueB(-3.71 * easeOut);

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    // Animation state
    let animationFrame: number;
    let progress = 0;

    // Product card dimensions
    const cardWidth = 200;
    const cardHeight = 280;

    // Particle system for conversions
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      color: string;
      size: number;
    }> = [];

    const createConversionParticle = (x: number, y: number, color: string) => {
      const angle = (Math.random() - 0.5) * Math.PI * 0.5 - Math.PI / 2;
      const speed = Math.random() * 3 + 2;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: Math.random() * 40 + 30,
        color,
        size: Math.random() * 3 + 2,
      });
    };

    const animate = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      progress += 0.008;
      if (progress > 1) progress = 0;

      const leftX = width * 0.25;
      const rightX = width * 0.75;
      const cardY = height * 0.35;

      // Draw Static Image Card (B - Left Side)
      const drawStaticCard = () => {
        // Card background
        ctx.fillStyle = '#1f2937';
        ctx.strokeStyle = '#374151';
        ctx.lineWidth = 2;
        roundRect(ctx, leftX - cardWidth / 2, cardY, cardWidth, cardHeight, 12);
        ctx.fill();
        ctx.stroke();

        // "B" label
        ctx.fillStyle = '#6b7280';
        ctx.font = 'bold 20px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('B', leftX - cardWidth / 2 + 30, cardY - 15);

        // Static image placeholder (simple rectangle)
        ctx.fillStyle = '#374151';
        roundRect(ctx, leftX - cardWidth / 2 + 20, cardY + 20, cardWidth - 40, 120, 8);
        ctx.fill();

        // Simple product icon
        ctx.fillStyle = '#4b5563';
        ctx.font = '48px sans-serif';
        ctx.fillText('🕶️', leftX, cardY + 80);

        // Product info
        ctx.fillStyle = '#9ca3af';
        ctx.font = '14px sans-serif';
        ctx.fillText('Winter Glasses', leftX, cardY + 160);
        ctx.fillText('$42.00', leftX, cardY + 180);

        // Stars
        ctx.fillStyle = '#f59e0b';
        ctx.font = '12px sans-serif';
        ctx.fillText('★★★★★', leftX, cardY + 200);

        // Order button (static)
        ctx.fillStyle = '#374151';
        ctx.strokeStyle = '#4b5563';
        ctx.lineWidth = 1;
        roundRect(ctx, leftX - 70, cardY + 220, 140, 35, 6);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#9ca3af';
        ctx.font = '14px sans-serif';
        ctx.fillText('Order now', leftX, cardY + 243);

        // Slow conversion particles (fewer)
        if (Math.random() > 0.95) {
          createConversionParticle(leftX, cardY + 240, '#ef4444');
        }
      };

      // Draw Shoppable Video Card (A - Right Side)
      const drawVideoCard = () => {
        // Card background with glow
        const glowIntensity = 0.3 + Math.sin(progress * Math.PI * 2) * 0.2;
        ctx.shadowColor = '#3b82f6';
        ctx.shadowBlur = 20 * glowIntensity;
        ctx.fillStyle = '#1f2937';
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 2;
        roundRect(ctx, rightX - cardWidth / 2, cardY, cardWidth, cardHeight, 12);
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;

        // "A" label
        ctx.fillStyle = '#3b82f6';
        ctx.font = 'bold 20px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('A', rightX - cardWidth / 2 + 30, cardY - 15);

        // Video frame with play indicator
        const videoGradient = ctx.createLinearGradient(
          rightX - cardWidth / 2 + 20,
          cardY + 20,
          rightX - cardWidth / 2 + 20,
          cardY + 140
        );
        videoGradient.addColorStop(0, '#1e40af');
        videoGradient.addColorStop(1, '#3b82f6');
        ctx.fillStyle = videoGradient;
        roundRect(ctx, rightX - cardWidth / 2 + 20, cardY + 20, cardWidth - 40, 120, 8);
        ctx.fill();

        // Animated video content (person with glasses)
        ctx.fillStyle = '#60a5fa';
        ctx.font = '48px sans-serif';
        const videoProgress = Math.sin(progress * Math.PI * 4);
        ctx.save();
        ctx.translate(rightX, cardY + 80);
        ctx.scale(1 + videoProgress * 0.05, 1 + videoProgress * 0.05);
        ctx.fillText('🕶️', 0, 0);
        ctx.restore();

        // Play indicator
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        ctx.arc(rightX + 50, cardY + 40, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.moveTo(rightX + 47, cardY + 35);
        ctx.lineTo(rightX + 47, cardY + 45);
        ctx.lineTo(rightX + 55, cardY + 40);
        ctx.closePath();
        ctx.fill();

        // Product info
        ctx.fillStyle = '#e5e7eb';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText('Winter Glasses', rightX, cardY + 160);
        ctx.fillStyle = '#3b82f6';
        ctx.fillText('$42.00', rightX, cardY + 180);

        // Stars
        ctx.fillStyle = '#fbbf24';
        ctx.font = '12px sans-serif';
        ctx.fillText('★★★★★', rightX, cardY + 200);

        // Animated order button
        const buttonPulse = 1 + Math.sin(progress * Math.PI * 4) * 0.1;
        ctx.save();
        ctx.translate(rightX, cardY + 237);
        ctx.scale(buttonPulse, buttonPulse);
        
        const buttonGradient = ctx.createLinearGradient(-70, 0, 70, 0);
        buttonGradient.addColorStop(0, '#3b82f6');
        buttonGradient.addColorStop(1, '#2563eb');
        ctx.fillStyle = buttonGradient;
        roundRect(ctx, -70, -17, 140, 35, 6);
        ctx.fill();
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText('Order now', 0, 6);
        ctx.restore();

        // High conversion particles (more frequent)
        if (Math.random() > 0.7) {
          createConversionParticle(rightX, cardY + 240, '#3b82f6');
        }
      };

      drawStaticCard();
      drawVideoCard();

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.1; // Gravity
        p.life--;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = p.life / p.maxLife;
        ctx.fillStyle = p.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw center comparison with "Cluster" label
      const centerX = width * 0.5;
      const centerY = height * 0.5;

      // Cluster circle
      ctx.fillStyle = '#000000';
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 50, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#9ca3af';
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Cluster', centerX, centerY + 5);

      // Connection lines
      ctx.strokeStyle = '#374151';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      
      // Left to center
      ctx.beginPath();
      ctx.moveTo(leftX + cardWidth / 2, cardY + cardHeight / 2);
      ctx.lineTo(centerX - 50, centerY);
      ctx.stroke();

      // Right to center
      ctx.beginPath();
      ctx.moveTo(rightX - cardWidth / 2, cardY + cardHeight / 2);
      ctx.lineTo(centerX + 50, centerY);
      ctx.stroke();

      ctx.setLineDash([]);

      animationFrame = requestAnimationFrame(animate);
    };

    // Helper function for rounded rectangles
    function roundRect(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      width: number,
      height: number,
      radius: number
    ) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', updateSize);
    };
  }, [isVisible]);

  return (
    <section
      id="comparison-section"
      className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Shoppable Video vs Static Images
          </h2>
          <p className="text-xl text-gray-400">
            Real conversion data from e-commerce research
          </p>
        </div>

        <div className="relative">
          <canvas
            ref={canvasRef}
            className="w-full h-[600px] rounded-xl"
            style={{ background: 'transparent' }}
          />

          {/* Stats overlay - Left (Static Images) */}
          <div className="absolute top-[420px] left-[5%] md:left-[12%] bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4 w-[200px]">
            <h3 className="text-sm font-semibold text-gray-400 mb-3">Static Images (B)</h3>
            <div className="space-y-2">
              <div>
                <div className="text-xs text-gray-500">Conversion Rate</div>
                <div className="text-2xl font-bold text-red-400">
                  {animatedConversionB.toFixed(2)}%
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Revenue / Visitor</div>
                <div className="text-lg font-bold text-red-400">
                  {animatedRevenueB.toFixed(1)}%
                </div>
              </div>
            </div>
          </div>

          {/* Stats overlay - Right (Shoppable Video) */}
          <div className="absolute top-[420px] right-[5%] md:right-[12%] bg-gray-900/90 backdrop-blur-sm border border-blue-500 rounded-lg p-4 w-[200px]">
            <h3 className="text-sm font-semibold text-blue-400 mb-3">Shoppable Video (A)</h3>
            <div className="space-y-2">
              <div>
                <div className="text-xs text-gray-400">Conversion Rate</div>
                <div className="text-2xl font-bold text-blue-400">
                  +{animatedConversionA.toFixed(2)}%
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Revenue / Visitor</div>
                <div className="text-lg font-bold text-green-400">
                  +{animatedRevenueA.toFixed(1)}%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research-backed stats comparison */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <div className="text-4xl font-bold text-blue-400 mb-2">2.5x</div>
            <div className="text-gray-400">Higher Conversion Rate</div>
            <div className="text-xs text-gray-500 mt-2">Shoppable video vs static images</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700">
            <div className="text-4xl font-bold text-purple-400 mb-2">30%</div>
            <div className="text-gray-400">Better Than Standard Video</div>
            <div className="text-xs text-gray-500 mt-2">Interactive shopping experience</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/50">
            <div className="text-4xl font-bold text-green-400 mb-2">75%</div>
            <div className="text-gray-400">Revenue Increase Per Visitor</div>
            <div className="text-xs text-gray-500 mt-2">Real-world performance data</div>
          </div>
        </div>

        {/* Source attribution */}
        <div className="mt-8 text-center text-xs text-gray-600">
          <p>
            Data sources: Research-based conversion metrics from industry studies.{' '}
            <a 
              href="https://whatmore.ai/blog/shoppable-video-benchmarks-2026/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 underline"
            >
              Shoppable video benchmarks
            </a>
            {' '}and{' '}
            <a 
              href="https://videowise.com/blog/video-marketing-complete-guide" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 underline"
            >
              video commerce research
            </a>
            . Content rephrased for compliance with licensing restrictions.
          </p>
        </div>
      </div>
    </section>
  );
}
