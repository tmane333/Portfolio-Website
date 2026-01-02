// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    if (navMenu.style.display === 'flex') {
      navMenu.style.flexDirection = 'column';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '100%';
      navMenu.style.left = '0';
      navMenu.style.width = '100%';
      navMenu.style.background = 'rgba(10, 10, 10, 0.98)';
      navMenu.style.padding = '20px';
      navMenu.style.gap = '20px';
    }
  });

  // Close menu when clicking outside on mobile
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && !e.target.closest('nav')) {
      navMenu.style.display = 'none';
    }
  });
}

// Update nav style on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(10, 10, 10, 0.98)';
    nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
  } else {
    nav.style.background = 'rgba(10, 10, 10, 0.95)';
    nav.style.boxShadow = 'none';
  }
});
