document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelectorAll('.mobile-menu a');
    
    burger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            burger.classList.remove('toggle');
        });
    });
    
    // Sticky Navbar on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Tab Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentIndex = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonial(index));
    });
    
    prevBtn.addEventListener('click', function() {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = testimonials.length - 1;
        showTestimonial(newIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        let newIndex = currentIndex + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonial(newIndex);
    });
    
    // Auto-rotate testimonials
    let testimonialInterval = setInterval(() => {
        let newIndex = currentIndex + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonial(newIndex);
    }, 5000);
    
    // Pause auto-rotation on hover
    const slider = document.querySelector('.testimonial-slider');
    slider.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(() => {
            let newIndex = currentIndex + 1;
            if (newIndex >= testimonials.length) newIndex = 0;
            showTestimonial(newIndex);
        }, 5000);
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            
            if (this.classList.contains('active')) {
                answer.classList.add('active');
            } else {
                answer.classList.remove('active');
            }
        });
    });
    
    // Form Submission
    const bootcampForm = document.getElementById('bootcamp-form');
    
    bootcampForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const plan = document.getElementById('plan').value;
        
        // Here you would typically send this data to a server
        console.log('Form submitted:', { name, email, phone, plan });
        
        // Show success message
        alert(`Thank you, ${name}! Your registration for the ${plan} has been received. We'll contact you shortly at ${email}.`);
        
        // Reset form
        bootcampForm.reset();
    });
    
    // Scroll animations
    const animateElements = document.querySelectorAll('.benefit-card, .pricing-card, .faq-item');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Smooth scrolling for anchor links
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
            }
        });
    });
});

// Week Accordion Functionality
const weekAccordions = document.querySelectorAll('.week-accordion');

weekAccordions.forEach(accordion => {
    const header = accordion.querySelector('.week-header');
    
    header.addEventListener('click', function() {
        // Close all other accordions
        weekAccordions.forEach(item => {
            if (item !== accordion) {
                item.classList.remove('active');
                item.querySelector('.week-content').classList.remove('active');
            }
        });
        
        // Toggle current accordion
        accordion.classList.toggle('active');
        const content = accordion.querySelector('.week-content');
        content.classList.toggle('active');
    });
});

// Microcourse Form Submission
const microcourseForm = document.getElementById('microcourse-form');

microcourseForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const parentName = document.getElementById('parent-name').value;
    const childName = document.getElementById('child-name').value;
    const childAge = document.getElementById('child-age').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const plan = document.getElementById('plan').value;
    
    // Here you would typically send this data to a server
    console.log('Microcourse Form submitted:', { 
        parentName, 
        childName, 
        childAge, 
        email, 
        phone, 
        plan 
    });
    
    // Show success message
    alert(`Thank you, ${parentName}! Your enrollment for ${childName} (age ${childAge}) in the ${plan} plan has been received. We'll contact you shortly at ${email} with next steps.`);
    
    // Reset form
    microcourseForm.reset();
});

// Open intro video modal
const imageBadge = document.querySelector('.image-badge');
if (imageBadge) {
    imageBadge.addEventListener('click', function() {
        // In a real implementation, this would open a video modal
        alert('This would open an introductory video about the confidence building microcourse');
    });
}

// Mentor Filter Functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const mentorCards = document.querySelectorAll('.mentor-card');

// Show all mentors initially
mentorCards.forEach(card => card.classList.add('active'));

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all filter buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        mentorCards.forEach(card => {
            card.classList.remove('active');
            
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.add('active');
            }
        });
    });
});

// Mentorship Form Submission
const mentorshipForm = document.getElementById('mentorship-form');

mentorshipForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const studentLevel = document.getElementById('student-level').value;
    const mentorshipType = document.getElementById('mentorship-type').value;
    const goals = document.getElementById('goals').value;
    
    // Here you would typically send this data to a server
    console.log('Mentorship Form submitted:', { 
        name, 
        email, 
        phone, 
        studentLevel, 
        mentorshipType, 
        goals 
    });
    
    // Show success message
    alert(`Thank you, ${name}! Your mentorship request has been received. We'll contact you within 24 hours to discuss mentor matching options.`);
    
    // Reset form
    mentorshipForm.reset();
});

// Initialize all mentor cards as active
document.addEventListener('DOMContentLoaded', function() {
    mentorCards.forEach(card => card.classList.add('active'));
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const interest = document.getElementById('interest').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to a server
    console.log('Contact Form submitted:', { 
        name, 
        email, 
        phone, 
        interest, 
        message 
    });
    
    // Show success message
    alert(`Thank you, ${name}! Your message has been sent. We'll respond within 24 hours.`);
    
    // Reset form
    contactForm.reset();
});

// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.mobile-menu a');

burger.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    burger.classList.toggle('toggle');
});

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showTestimonial(index));
});

prevBtn.addEventListener('click', function() {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = testimonials.length - 1;
    showTestimonial(newIndex);
});

nextBtn.addEventListener('click', function() {
    let newIndex = currentIndex + 1;
    if (newIndex >= testimonials.length) newIndex = 0;
    showTestimonial(newIndex);
});

// Auto-rotate testimonials
let testimonialInterval = setInterval(() => {
    let newIndex = currentIndex + 1;
    if (newIndex >= testimonials.length) newIndex = 0;
    showTestimonial(newIndex);
}, 5000);

// Pause auto-rotation on hover
const slider = document.querySelector('.testimonial-slider');
slider.addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

slider.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(() => {
        let newIndex = currentIndex + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonial(newIndex);
    }, 5000);
});

// Sticky Navbar on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
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
        }
    });
});