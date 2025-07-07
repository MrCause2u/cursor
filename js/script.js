// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileNavigation();
    initContactForm();
    initDonationForm();
    initSmoothScrolling();
    initAnimations();
    initDonationTabs();
});

// Mobile Navigation
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Validate required fields
            if (!validateContactForm(data)) {
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Validate Contact Form
function validateContactForm(data) {
    const requiredFields = ['name', 'email', 'subject', 'message'];
    
    for (let field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            showNotification(`Please fill in the ${field} field.`, 'error');
            return false;
        }
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return false;
    }
    
    return true;
}

// Donation Form Handling
function initDonationForm() {
    const donationForm = document.getElementById('donationForm');
    
    if (donationForm) {
        // Handle amount button selection
        const amountButtons = document.querySelectorAll('.amount-btn');
        const customAmountInput = document.querySelector('.custom-amount-input');
        const customAmountField = document.getElementById('customAmount');
        
        amountButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove selected class from all buttons
                amountButtons.forEach(b => b.classList.remove('selected'));
                
                // Add selected class to clicked button
                this.classList.add('selected');
                
                // Show/hide custom amount input
                if (this.classList.contains('custom-amount')) {
                    customAmountInput.style.display = 'block';
                    customAmountField.focus();
                } else {
                    customAmountInput.style.display = 'none';
                    customAmountField.value = '';
                }
            });
        });
        
        // Handle form submission
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(donationForm);
            const data = Object.fromEntries(formData);
            
            if (!validateDonationForm(data)) {
                return;
            }
            
            // Get selected amount
            const selectedAmount = getSelectedAmount();
            if (!selectedAmount) {
                showNotification('Please select a donation amount.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = donationForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;
            
            // Simulate donation processing
            setTimeout(() => {
                showNotification(`Thank you for your generous donation of $${selectedAmount}!`, 'success');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Redirect to thank you page or reset form
                // window.location.href = 'thank-you.html';
            }, 3000);
        });
    }
}

// Get Selected Donation Amount
function getSelectedAmount() {
    const selectedBtn = document.querySelector('.amount-btn.selected');
    
    if (!selectedBtn) {
        return null;
    }
    
    if (selectedBtn.classList.contains('custom-amount')) {
        const customAmount = document.getElementById('customAmount').value;
        return customAmount ? parseFloat(customAmount) : null;
    } else {
        return parseFloat(selectedBtn.dataset.amount);
    }
}

// Validate Donation Form
function validateDonationForm(data) {
    const requiredFields = ['firstName', 'lastName', 'email', 'donationType'];
    
    for (let field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            const fieldName = field.replace(/([A-Z])/g, ' $1').toLowerCase();
            showNotification(`Please fill in the ${fieldName} field.`, 'error');
            return false;
        }
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return false;
    }
    
    return true;
}

// Donation Tabs Functionality
function initDonationTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    // Handle anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80; // Account for fixed header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animations
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .event-card, .leader-card, .impact-card, .method-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Counter animation for statistics
    animateCounters();
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number, .impact-stat .number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
            }
        };
        
        updateCounter();
    };
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        notification.remove();
    });
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Handle close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Get notification icon based on type
function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'fa-check-circle';
        case 'error': return 'fa-exclamation-circle';
        case 'warning': return 'fa-exclamation-triangle';
        default: return 'fa-info-circle';
    }
}

// Get notification color based on type
function getNotificationColor(type) {
    switch (type) {
        case 'success': return '#28a745';
        case 'error': return '#dc3545';
        case 'warning': return '#ffc107';
        default: return '#17a2b8';
    }
}

// Form Validation Utilities
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

// Local Storage for form data persistence
function saveFormData(formId, data) {
    localStorage.setItem(`formData_${formId}`, JSON.stringify(data));
}

function loadFormData(formId) {
    const data = localStorage.getItem(`formData_${formId}`);
    return data ? JSON.parse(data) : null;
}

function clearFormData(formId) {
    localStorage.removeItem(`formData_${formId}`);
}

// Auto-save form data (optional feature)
function initFormAutoSave() {
    const forms = document.querySelectorAll('form[id]');
    
    forms.forEach(form => {
        const formId = form.id;
        
        // Load saved data
        const savedData = loadFormData(formId);
        if (savedData) {
            Object.keys(savedData).forEach(key => {
                const field = form.querySelector(`[name="${key}"]`);
                if (field && field.type !== 'submit') {
                    field.value = savedData[key];
                }
            });
        }
        
        // Save data on input
        form.addEventListener('input', function(e) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            saveFormData(formId, data);
        });
        
        // Clear data on successful submission
        form.addEventListener('submit', function() {
            setTimeout(() => clearFormData(formId), 1000);
        });
    });
}

// Scroll to top functionality
function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
        } else {
            scrollBtn.style.opacity = '0';
        }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top
initScrollToTop();

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: auto;
    }
    
    .scroll-to-top:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    }
`;
document.head.appendChild(style);