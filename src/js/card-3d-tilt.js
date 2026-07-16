/**
 * 3D Card Tilt Physics Module
 * Personal Portfolio - Ycker Bandola Ponio (ybponio)
 */

export function attach3DTiltToCards() {
  const cards = document.querySelectorAll('.project-card-item');

  cards.forEach(card => {
    // Add 3D perspective style
    card.style.transformStyle = 'preserve-3d';
    card.style.transition = 'transform 0.15s ease-out, box-shadow 0.15s ease-out';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12; // tilt X axis up to -12deg
      const rotateY = ((x - centerX) / centerX) * 12;  // tilt Y axis up to +12deg

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
      card.style.boxShadow = `${-rotateY * 1.5}px ${rotateX * 1.5}px 30px rgba(0, 242, 254, 0.25)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.37)';
    });
  });
}
