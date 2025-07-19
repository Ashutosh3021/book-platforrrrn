
    document.addEventListener('DOMContentLoaded', () => {
      const navbar = document.querySelector('.navbar');
      const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
      const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
      const mobileNavLinks = document.querySelectorAll('.mobile-nav-menu a');

      // Navbar scroll effect
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });

      // Mobile menu toggle
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : 'auto';
      });

      // Close mobile menu when clicking on a link
      mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenuBtn.classList.remove('active');
          mobileMenuOverlay.classList.remove('active');
          document.body.style.overflow = 'auto';
        });
      });

      // Close mobile menu when clicking outside
      mobileMenuOverlay.addEventListener('click', (e) => {
        if (e.target === mobileMenuOverlay) {
          mobileMenuBtn.classList.remove('active');
          mobileMenuOverlay.classList.remove('active');
          document.body.style.overflow = 'auto';
        }
      });

      // Intersection Observer for animations
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-show');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
      });

      // Contact form
      document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you! We will get back to you shortly.');
        this.reset();
      });

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    });
  