// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.main-navigation')) {
            navMenu?.classList.remove('active');
            menuToggle?.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Close mobile menu when window is resized
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu?.classList.remove('active');
            menuToggle?.setAttribute('aria-expanded', 'false');
        }
    });
});