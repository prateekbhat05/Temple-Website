document.addEventListener('DOMContentLoaded', () => {

  // 1. Load Components (Header/Footer)
  if (typeof Components !== 'undefined') {
    Components.init();
  }

  // 2. Preloader Logic
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 1000); // Wait for fade out animation
      }, 1000); // Minimum load time for effect
    });
  }

  // 3. Custom Cursor Logic
  const cursor = document.getElementById('cursor');
  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    // Add hover effect for links and buttons
    const hoverElements = document.querySelectorAll('a, button, .card, .slide');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }

  // 4. Hero Slider Logic
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  const slideInterval = 5000;

  function nextSlide() {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  if (slides.length > 0) {
    setInterval(nextSlide, slideInterval);
  }

  // 5. Scroll Animation
  const revealElements = document.querySelectorAll('.content, .card, .footer-grid, h2, .gallery-grid img');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // 6. Header Transparency on Scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 7. FAQ Accordion Logic
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;

      // Close other items
      const activeItem = document.querySelector('.faq-item.active');
      if (activeItem && activeItem !== item) {
        activeItem.classList.remove('active');
      }

      // Toggle current
      item.classList.toggle('active');
    });
  });

});
