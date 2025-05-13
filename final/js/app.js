document.addEventListener('DOMContentLoaded', () => {
    const nav       = document.getElementById('main-nav');
    const toggleBtn = document.getElementById('mobile-menu');
    const iconSpan  = toggleBtn.querySelector('span');
    
    toggleBtn.addEventListener('click', () => {
      // Toggle the class that shows the menu
      nav.classList.toggle('open');
  
      // Swap the icon: hamburger ↔ close (X)
      if (nav.classList.contains('open')) {
        iconSpan.classList.remove('icon-hamburger');
        iconSpan.classList.add('icon-close');
      } else {
        iconSpan.classList.remove('icon-close');
        iconSpan.classList.add('icon-hamburger');
      }
    });
  
    // Optional: clicking a nav link closes the menu
    nav.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        iconSpan.classList.replace('icon-close', 'icon-hamburger');
      });
    });
  });
  