/**
 * SKAN PG & HOMES - CLIENT SCRIPT
 * Interactive helpers for navigation, table of contents scroll-spy, and account deletion
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Table of Contents Scroll-Spy
  const tocLinks = document.querySelectorAll('.toc-link');
  const sections = document.querySelectorAll('.policy-section');

  if (tocLinks.length > 0 && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          tocLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((sec) => observer.observe(sec));
  }

  // Account Deletion Form Handler
  const deletionForm = document.getElementById('deletionForm');
  const deletionSuccess = document.getElementById('deletionSuccess');

  if (deletionForm) {
    deletionForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const phone = document.getElementById('phoneInput')?.value;
      const email = document.getElementById('emailInput')?.value;
      const confirmCheck = document.getElementById('confirmCheck')?.checked;

      if (!phone && !email) {
        alert('Please provide either your registered phone number or email address.');
        return;
      }

      if (!confirmCheck) {
        alert('Please confirm that you understand account deletion is permanent.');
        return;
      }

      // Show success message
      deletionForm.style.display = 'none';
      if (deletionSuccess) {
        deletionSuccess.style.display = 'block';
        deletionSuccess.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
