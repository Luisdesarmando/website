/**
 * The Languages Academy - Versão 2.0 Parallax & Motion Engine
 * Pure Vanilla JavaScript - Ultra-lightweight & 60fps+ Smooth
 */

(function () {
  'use strict';

  // 1. Mouse 3D Tilt Effect on Cards
  function initTilt() {
    const tiltCards = document.querySelectorAll('[data-tilt]');
    
    tiltCards.forEach(card => {
      let bounds;
      
      const onMouseEnter = () => {
        bounds = card.getBoundingClientRect();
        card.style.transition = 'transform 0.15s ease-out, box-shadow 0.25s ease';
      };

      const onMouseMove = (e) => {
        if (!bounds) bounds = card.getBoundingClientRect();
        const mouseX = e.clientX - bounds.left;
        const mouseY = e.clientY - bounds.top;
        
        const xPct = (mouseX / bounds.width) - 0.5;
        const yPct = (mouseY / bounds.height) - 0.5;
        
        const maxRotate = parseFloat(card.getAttribute('data-tilt-max')) || 10;
        const rX = -yPct * maxRotate;
        const rY = xPct * maxRotate;
        
        card.style.transform = `perspective(1000px) rotateX(${rX.toFixed(2)}deg) rotateY(${rY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
      };

      const onMouseLeave = () => {
        card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      };

      card.addEventListener('mouseenter', onMouseEnter);
      card.addEventListener('mousemove', onMouseMove);
      card.addEventListener('mouseleave', onMouseLeave);
    });
  }

  // 2. Scroll Parallax Layer Engine
  function initScrollParallax() {
    const parallaxItems = document.querySelectorAll('[data-parallax-speed]');
    if (parallaxItems.length === 0) return;

    let ticking = false;

    const updateParallax = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const winHeight = window.innerHeight;

      parallaxItems.forEach(item => {
        const speed = parseFloat(item.getAttribute('data-parallax-speed')) || 0.1;
        const rect = item.getBoundingClientRect();
        
        // Only compute if within view
        if (rect.top < winHeight && rect.bottom > 0) {
          const centerY = rect.top + rect.height / 2;
          const distFromCenter = centerY - winHeight / 2;
          const translateY = distFromCenter * speed;
          
          const baseTransform = item.getAttribute('data-parallax-base') || '';
          item.style.transform = `${baseTransform} translateY(${translateY.toFixed(1)}px)`;
        }
      });

      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });

    // Initial update
    updateParallax();
  }

  // 3. Scroll Reveal Observer
  function initScrollReveals() {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length === 0) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  // 4. Number Counters Animation
  function initCounters() {
    const counters = document.querySelectorAll('.counter-value');
    if (counters.length === 0) return;

    const counterObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-target'));
          const decimals = parseInt(el.getAttribute('data-decimals')) || 0;
          const duration = 1800; // ms
          const start = 0;
          const startTime = performance.now();

          const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);
            const currentVal = start + (target - start) * ease;

            el.textContent = currentVal.toFixed(decimals);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              el.textContent = target.toFixed(decimals);
            }
          };

          requestAnimationFrame(updateCount);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counters.forEach(counter => counterObserver.observe(counter));
  }

  // 5. Dynamic Ambient Light for Hero Video
  function initAmbientGlow() {
    const heroVideo = document.getElementById('heroPromoVideo');
    const glowTarget = document.getElementById('heroAmbientGlow');
    if (!heroVideo || !glowTarget) return;

    // Pulse ambient glow on video play
    heroVideo.addEventListener('play', () => {
      glowTarget.style.opacity = '0.85';
      glowTarget.style.filter = 'blur(60px)';
    });

    heroVideo.addEventListener('pause', () => {
      glowTarget.style.opacity = '0.4';
      glowTarget.style.filter = 'blur(45px)';
    });
  }

  // Initialize all motion modules when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    initTilt();
    initScrollParallax();
    initScrollReveals();
    initCounters();
    initAmbientGlow();
  });
})();
