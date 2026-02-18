// ===================================
//   Hero Terminal Animation
// ===================================
(function () {
    const lines = document.querySelectorAll('#terminal-body .t-hidden');
    lines.forEach((line, i) => {
        setTimeout(() => {
            line.classList.remove('t-hidden');
            line.classList.add('t-visible');
        }, 600 + i * 180);
    });
})();

// ===================================
//   Hero Typewriter Role
// ===================================
(function () {
    const roles = [
        'Full Stack Apps',
        'AI Solutions',
        'Clean UI/UX',
        'Hackathon Projects',
        'Open Source Tools'
    ];
    const el = document.getElementById('typed-role');
    if (!el) return;

    let roleIdx = 0, charIdx = 0, deleting = false;

    function tick() {
        const current = roles[roleIdx];
        if (!deleting) {
            el.textContent = current.slice(0, ++charIdx);
            if (charIdx === current.length) {
                deleting = true;
                setTimeout(tick, 1800);
                return;
            }
        } else {
            el.textContent = current.slice(0, --charIdx);
            if (charIdx === 0) {
                deleting = false;
                roleIdx = (roleIdx + 1) % roles.length;
            }
        }
        setTimeout(tick, deleting ? 55 : 90);
    }
    setTimeout(tick, 1200);
})();

// Project data with detailed information
const projectData = {
    'hydrocraft': {
        title: 'HydroCraftAI',
        type: 'AI Application',
        description: 'Revolutionizing hydroelectric projects with AI! Optimize turbine designs, assess environmental impact, and create sustainable solutions for run-of-river, reservoir, and pumped storage plants. 🚀💡🌿',
        features: [
            'AI-powered turbine design optimization',
            'Environmental impact assessment tools',
            'Support for multiple hydroelectric plant types',
            'Sustainable energy solution planning',
            'Run-of-river system optimization',
            'Reservoir and pumped storage analysis'
        ],
        technologies: ['AI/ML', 'Python', 'Sustainability', 'Hydroelectric', 'Data Analysis'],
        github: 'https://github.com/aaswin-js/HydroCraftAI-SIH',
        demo: 'https://bnaveenbharathi.github.io/HydroCraftAI-SIH/'
    },
    'task-management': {
        title: 'Task Management System',
        type: 'Full Stack Application',
        description: 'A comprehensive task management platform with user authentication, real-time updates, and collaborative features for team productivity. Perfect for managing projects and team workflows.',
        features: [
            'User authentication and authorization',
            'Create, update, and delete tasks',
            'Real-time collaboration features',
            'Task priority and status management',
            'Team member assignment',
            'Dashboard with analytics',
            'Responsive design for mobile and desktop'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Authentication', 'REST API'],
        github: 'https://github.com/aaswin-js',
        demo: '#'
    },
    'ecommerce': {
        title: 'E-Commerce Platform',
        type: 'Web Application',
        description: 'A modern e-commerce solution with shopping cart functionality, payment integration, and responsive design for seamless shopping experience. Built with security and user experience in mind.',
        features: [
            'Product catalog with search and filters',
            'Shopping cart functionality',
            'Secure payment gateway integration',
            'User account management',
            'Order tracking and history',
            'Responsive design for all devices',
            'Admin panel for product management'
        ],
        technologies: ['JavaScript', 'CSS3', 'REST API', 'Payment Gateway', 'Local Storage'],
        github: 'https://github.com/aaswin-js',
        demo: '#'
    }
};

// Get modal elements
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const projectCards = document.querySelectorAll('.project-card');

// Function to open modal with project details
function openModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    // Populate modal content
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-type').textContent = project.type;
    document.getElementById('modal-description').textContent = project.description;

    // Populate features
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Populate technologies
    const techTags = document.getElementById('modal-tech-tags');
    techTags.innerHTML = '';
    project.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = tech;
        techTags.appendChild(span);
    });

    // Set links
    document.getElementById('modal-github').href = project.github;
    document.getElementById('modal-demo').href = project.demo;

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Add click event to project cards
projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Don't open modal if clicking on a link
        if (e.target.tagName === 'A' || e.target.closest('a')) {
            return;
        }
        const projectId = card.getAttribute('data-project');
        openModal(projectId);
    });
});

// Close modal when clicking the X button
modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';

// Apply the saved theme on page load
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Update icon
    if (body.classList.contains('light-mode')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// ===================================
//    Achievement Accordion Toggle
// ===================================
function toggleAchievement(element) {
    // Toggle active class on the clicked element
    element.classList.toggle('active');
}
