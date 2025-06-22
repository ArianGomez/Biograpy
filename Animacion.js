
  document.addEventListener("DOMContentLoaded", function () {
    // Añadir la clase a todos los elementos que deben animarse
    const elements = document.querySelectorAll('.main-card, .section-title, .button-list, .contact-section, .social-links, .profile-pic-container');
    elements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          obs.unobserve(entry.target); // Solo se anima una vez
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  });
