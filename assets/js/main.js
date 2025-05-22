// HomeSwift Design System JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Navigation active state
  const navLinks = document.querySelectorAll('.nav-list a');
  const sections = document.querySelectorAll('section');

  // Highlight active section in navigation
  function setActiveNavLink() {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= (sectionTop - 100)) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  // Initial call and scroll event
  setActi
