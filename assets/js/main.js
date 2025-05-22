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
  setActiveNavLink();
  window.addEventListener('scroll', setActiveNavLink);

  // Smooth scrolling for in-page anchor links only
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // If it's an in-page anchor (starts with #), apply smooth scroll
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(href);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
      // Otherwise: it's a page link → allow browser to navigate normally
    });
  });

  // Interactive component hover/focus/pressed demo states
  const hoverButtons = document.querySelectorAll('.btn:not(.btn-hover):not(.btn-pressed):not(.btn-focus):not(.btn-disabled)');

  hoverButtons.forEach(button => {
    button.addEventListener('mouseover', function() {
      this.classList.add('btn-hover-demo');
    });

    button.addEventListener('mouseout', function() {
      this.classList.remove('btn-hover-demo');
    });

    button.addEventListener('mousedown', function() {
      this.classList.add('btn-pressed-demo');
    });

    button.addEventListener('mouseup', function() {
      this.classList.remove('btn-pressed-demo');
    });

    button.addEventListener('focus', function() {
      this.classList.add('btn-focus-demo');
    });

    button.addEventListener('blur', function() {
      this.classList.remove('btn-focus-demo');
    });
  });

  // Add CSS classes for interactive demo states
  const style = document.createElement('style');
  style.textContent = `
    .btn-hover-demo {
      background-color: #4b0077 !important;
    }
    .btn-secondary.btn-hover-demo {
      background-color: rgba(0, 48, 92, 0.05) !important;
    }
    .btn-pressed-demo {
      background-color: #2d0046 !important;
    }
    .btn-secondary.btn-pressed-demo {
      background-color: rgba(0, 48, 92, 0.1) !important;
    }
    .btn-focus-demo {
      outline: 2px solid #37C640 !important;
      outline-offset: 2px !important;
    }
  `;
  document.head.appendChild(style);
});
