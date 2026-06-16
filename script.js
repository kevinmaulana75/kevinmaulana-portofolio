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
    const progressBar = document.getElementById('scroll-progress');

    // Munculkan navbar hanya jika sudah scroll melewati 50px
    if (currentScrollY > 50) {
        navbar.classList.remove('nav-hidden');
    } else {
        navbar.classList.add('nav-hidden');
    }

    // Logika Progress Bar
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (currentScrollY / windowHeight) * 100;
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
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

// Pop-up Form Logic
const getInTouchBtn = document.getElementById('get-in-touch-btn');
const contactPopup = document.getElementById('contact-popup');
const closePopupBtn = document.getElementById('close-popup-btn');

if (getInTouchBtn && contactPopup && closePopupBtn) {
    getInTouchBtn.addEventListener('click', () => {
        contactPopup.classList.remove('opacity-0', 'pointer-events-none');
        contactPopup.classList.add('opacity-100', 'pointer-events-auto');
        document.body.classList.add('overflow-hidden');
    });

    closePopupBtn.addEventListener('click', () => {
        contactPopup.classList.remove('opacity-100', 'pointer-events-auto');
        contactPopup.classList.add('opacity-0', 'pointer-events-none');
        document.body.classList.remove('overflow-hidden');
    });

    // Close popup when clicking outside the form content
    contactPopup.addEventListener('click', (e) => {
        if (e.target === contactPopup) {
            closePopupBtn.click(); // Simulate click on close button
        }
    });
}

// Form Validation and Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value;
        // Regex untuk validasi format email yang lebih ketat
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {
            e.preventDefault(); // Mencegah form dikirim
            alert('Mohon masukkan format email yang valid (contoh: nama@email.com).');
        } else {
            e.preventDefault(); // Mencegah refresh halaman untuk keperluan demo
            alert('Terima kasih! Pesan Anda telah berhasil dikirim.');
            contactForm.reset(); // Mengosongkan form
            closePopupBtn.click(); // Menutup pop-up secara otomatis
        }
    });
}

// Video Hover Play Logic
const reelsContainers = document.querySelectorAll('#reels .group');
reelsContainers.forEach(container => {
    const video = container.querySelector('video');
    if (video) {
        container.addEventListener('mouseenter', () => {
            video.play().catch(error => console.log("Playback interaction blocked:", error));
        });
        container.addEventListener('mouseleave', () => {
            video.pause();
        });
    }
});
