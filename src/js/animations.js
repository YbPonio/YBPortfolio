/**
 * Animation Module utilizing Anime.js (ES Module for Vite)
 * Personal Portfolio - Ycker Bandola Ponio (ybponio)
 */

import anime from 'animejs';

export const PortfolioAnimations = {
  // Initialize terminal line typing and hero elements reveal
  initHeroAnimations: function () {
    const tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000
    });

    tl.add({
      targets: '#hero-terminal-header',
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 600
    })
      .add({
        targets: '.terminal-line',
        opacity: [0, 1],
        translateX: [-15, 0],
        delay: anime.stagger(200),
        duration: 600
      })
      .add({
        targets: '#hero-title-main',
        opacity: [0, 1],
        scale: [0.95, 1],
        duration: 800
      }, '-=400')
      .add({
        targets: '.hero-role-badge',
        opacity: [0, 1],
        translateY: [15, 0],
        delay: anime.stagger(150),
        duration: 600
      }, '-=400')
      .add({
        targets: '.hero-cta-btn',
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: anime.stagger(120),
        duration: 500
      }, '-=300');
  },

  // Staggered reveal for dynamic project cards
  animateProjectCards: function () {
    anime({
      targets: '.project-card-item',
      opacity: [0, 1],
      translateY: [40, 0],
      scale: [0.97, 1],
      delay: anime.stagger(180, { start: 100 }),
      duration: 800,
      easing: 'cubicBezier(0.16, 1, 0.3, 1)'
    });
  },

  // Smooth scroll handler
  setupSmoothScroll: function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  },

  // Contact Form Submission Success Timeline
  playContactSuccessAnimation: function (callback) {
    const modal = document.getElementById('contact-success-modal');
    if (!modal) return;

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const successTl = anime.timeline({
      easing: 'easeOutBack'
    });

    successTl
      .add({
        targets: '#contact-success-modal .modal-card',
        scale: [0.7, 1],
        opacity: [0, 1],
        duration: 500
      })
      .add({
        targets: '#success-svg-circle',
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 700,
        easing: 'easeInOutSine'
      }, '-=200')
      .add({
        targets: '#success-svg-check',
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 500,
        easing: 'easeInOutQuad'
      }, '-=300')
      .add({
        targets: '#success-modal-text',
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 400
      }, '-=200');
  },

  // Scroll section reveal trigger setup
  setupScrollTriggers: function () {
    const observerOptions = { threshold: 0.15 };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('scroll-reveal-group')) {
            anime({
              targets: entry.target.querySelectorAll('.scroll-item'),
              opacity: [0, 1],
              translateY: [30, 0],
              delay: anime.stagger(150),
              duration: 700,
              easing: 'easeOutCubic'
            });
            obs.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal-group').forEach(el => observer.observe(el));
  }
};
