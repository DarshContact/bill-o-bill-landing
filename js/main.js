// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            lenis.scrollTo(target);
        }
    });
});

// Animate stat numbers
const statNumbers = document.querySelectorAll('.stat-number[data-target]');
statNumbers.forEach((stat) => {
    const target = parseInt(stat.getAttribute('data-target'));
    
    ScrollTrigger.create({
        trigger: stat,
        start: 'top 80%',
        once: true,
        onEnter: () => {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + '+';
                }
            }, 30);
        }
    });
});

// Animate sections fade in
const sections = document.querySelectorAll('.section');
sections.forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
        },
    });
});

// Animate problem cards
const problemCards = document.querySelectorAll('.problem-card');
problemCards.forEach((card, index) => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
        },
    });
});

// Animate feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.15,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
        },
    });
});

// Animate result cards
const resultCards = document.querySelectorAll('.result-card');
resultCards.forEach((card, index) => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.15,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
        },
    });
});

// Animate why-now cards
const whyNowCards = document.querySelectorAll('.why-now-card');
whyNowCards.forEach((card, index) => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
        },
    });
});

// Animate urgency banner
gsap.from('.urgency-banner', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    scrollTrigger: {
        trigger: '.urgency-banner',
        start: 'top 80%',
    },
});

// Animate CTA section
gsap.from('.cta-box', {
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    scrollTrigger: {
        trigger: '.cta-box',
        start: 'top 80%',
    },
});

// Layer animations
const layers = document.querySelectorAll('.layer');
layers.forEach((layer) => {
    gsap.from(layer, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        scrollTrigger: {
            trigger: layer,
            start: 'top 80%',
        },
    });
});

// Logo animation on scroll
const logo = document.querySelector('.logo');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        logo.style.transform = 'scale(1.05)';
    } else {
        logo.style.transform = 'scale(1)';
    }
});

// Console message
console.log('%c🚀 Bill-o-Bill Landing Page', 'color: #10b981; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ for Indian CAs', 'color: #059669; font-size: 14px;');
