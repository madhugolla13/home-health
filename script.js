document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Dark Mode Toggle
  const themeSwitch = document.querySelector('.theme-switch');
  const body = document.documentElement;
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }

  if (themeSwitch) {
    themeSwitch.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      let newTheme = 'light';
      
      if (currentTheme === 'light' || !currentTheme) {
        newTheme = 'dark';
      }
      
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeSwitch) return;
    const icon = themeSwitch.querySelector('i');
    if (theme === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }

  // Search Functionality (for diseases.html)
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.card');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();

      cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        // Check if title or any list item matches the search term
        const textContent = card.textContent.toLowerCase();
        
        if (textContent.includes(searchTerm)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
});
