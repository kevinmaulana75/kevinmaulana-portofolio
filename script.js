// Mobile Menu Logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('overflow-hidden');
    });
});

// Sticky Nav Logic
let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Hide/Show logic based on direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.classList.add('nav-hidden');
    } else {
        navbar.classList.remove('nav-hidden');
    }

    // Background blur logic
    if (currentScrollY > 50) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }

    lastScrollY = currentScrollY;
});

// Reveal elements on scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
