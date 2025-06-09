document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Navbar Scroll Effect
    const navbar = document.querySelector('.luxury-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll(
            '.timeline-content, .project-card, .education-card, .skill-category, .contact-method'
        );
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    // Initialize floating elements
    const createFloatingElements = () => {
        const container = document.querySelector('.hero-section');
        for (let i = 0; i < 5; i++) {
            const element = document.createElement('div');
            element.classList.add('floating-element');
            element.style.width = `${Math.random() * 300 + 100}px`;
            element.style.height = element.style.width;
            element.style.left = `${Math.random() * 100}%`;
            element.style.top = `${Math.random() * 100}%`;
            element.style.animationDelay = `${Math.random() * 5}s`;
            element.style.opacity = `${Math.random() * 0.1 + 0.05}`;
            container.appendChild(element);
        }
    };
    
    // Initialize skill bars animation
    const animateSkillBars = () => {
        document.querySelectorAll('.skill-progress').forEach(bar => {
            const percent = bar.parentElement.previousElementSibling.querySelector('.skill-percent').textContent;
            bar.style.width = percent;
        });
    };
    
    // Back to top button
    const backToTopButton = document.createElement('div');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopButton);
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    // Initialize particles if needed
    // You would integrate a particle.js library here for advanced effects
    
    // Initialize all animations
    createFloatingElements();
    animateSkillBars();
    
    // Run once on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            let isValid = true;
            const inputs = this.querySelectorAll('.form-input');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'var(--danger)';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // Here you would typically send the form data to a server
                // For demo purposes, we'll show a success message
                const submitButton = this.querySelector('.submit-button');
                submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent';
                submitButton.style.background = 'var(--success)';
                
                setTimeout(() => {
                    submitButton.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                    submitButton.style.background = 'linear-gradient(135deg, var(--primary), var(--primary-dark))';
                    this.reset();
                }, 3000);
            }
        });
    }
    
    // Project card hover effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const title = this.querySelector('.project-title');
            const description = this.querySelector('.project-description');
            const link = this.querySelector('.project-link');
            
            title.style.transform = 'translateY(0)';
            title.style.opacity = '1';
            description.style.transform = 'translateY(0)';
            description.style.opacity = '1';
            link.style.transform = 'translateY(0)';
            link.style.opacity = '1';
        });
    });
});