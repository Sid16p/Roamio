// Main JavaScript for Roamio Travel Website
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initializeNavbar();
    initializeAnimations();
    initializeContactForm();
    initializeLazyLoading();
    
    // Load homepage content if on homepage
    if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
        loadHomepageContent();
    }
    
    // Load destination details if on destination details page
    if (window.location.pathname.includes('destination-details.html')) {
        loadDestinationDetails();
    }
});

// Navbar functionality
function initializeNavbar() {
    const navbar = document.querySelector('.custom-navbar');
    
    // Handle navbar scroll behavior
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(52, 73, 94, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(52, 73, 94, 0.9)';
        }
    });
    
    // Mobile menu toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            setTimeout(() => {
                const isExpanded = navbarCollapse.classList.contains('show');
                navbar.style.backgroundColor = isExpanded ? 'rgba(52, 73, 94, 0.98)' : 'rgba(52, 73, 94, 0.9)';
            }, 100);
        });
    }
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animation functionality
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe all elements with animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add animation classes to cards
    const cards = document.querySelectorAll('.destination-card, .feature-card, .tip-card, .team-card');
    cards.forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
            if (contactForm.checkValidity()) {
                // Simulate form submission
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    contactForm.style.display = 'none';
                    document.getElementById('successMessage').style.display = 'block';
                    
                    // Reset form after showing success message
                    setTimeout(() => {
                        contactForm.reset();
                        contactForm.classList.remove('was-validated');
                        contactForm.style.display = 'block';
                        document.getElementById('successMessage').style.display = 'none';
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }, 5000);
                }, 2000);
            }
            
            contactForm.classList.add('was-validated');
        });
        
        // Real-time validation
        const formInputs = contactForm.querySelectorAll('.form-control');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                if (this.checkValidity()) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                }
            });
        });
    }
}

// Lazy loading for images
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Homepage content loading
function loadHomepageContent() {
    loadFeaturedDestinations();
    loadFeaturedTips();
}

// Load featured destinations for homepage
function loadFeaturedDestinations() {
    const container = document.getElementById('featured-destinations');
    if (!container || typeof destinations === 'undefined') return;
    
    // Get featured destinations (first 6)
    const featuredDestinations = destinations.slice(0, 6);
    
    container.innerHTML = featuredDestinations.map(destination => `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="destination-card">
                <img src="${destination.image}" alt="${destination.name}" class="card-img-top">
                <div class="card-body">
                    <span class="destination-category">${destination.category}</span>
                    <h5 class="card-title">${destination.name}</h5>
                    <p class="card-text">${destination.shortDescription}</p>
                    <a href="destination-details.html?id=${destination.id}" class="btn btn-primary">
                        View Details <i class="fas fa-arrow-right ms-1"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Load featured tips for homepage
function loadFeaturedTips() {
    const container = document.getElementById('featured-tips');
    if (!container || typeof travelTips === 'undefined') return;
    
    // Get featured tips (first 3)
    const featuredTips = travelTips.filter(tip => tip.featured).slice(0, 3);
    
    container.innerHTML = featuredTips.map(tip => `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="tip-card" onclick="showTipModal('${tip.id}')">
                <img src="${tip.image}" alt="${tip.title}" class="card-img-top">
                <div class="card-body">
                    <span class="tip-category">${tip.category}</span>
                    <h5 class="card-title">${tip.title}</h5>
                    <p class="card-text">${tip.summary}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Load destination details
function loadDestinationDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const destinationId = urlParams.get('id');
    
    if (!destinationId || typeof destinations === 'undefined') {
        window.location.href = 'destinations.html';
        return;
    }
    
    const destination = destinations.find(d => d.id === destinationId);
    
    if (!destination) {
        window.location.href = 'destinations.html';
        return;
    }
    
    // Update page content
    document.getElementById('destination-title').textContent = destination.name;
    document.getElementById('destination-location').innerHTML = `<i class="fas fa-map-marker-alt me-2"></i>${destination.location}`;
    document.getElementById('destination-overview').textContent = destination.description;
    
    // Update hero background
    const heroSection = document.getElementById('destination-hero');
    heroSection.style.backgroundImage = `linear-gradient(135deg, rgba(52, 73, 94, 0.7), rgba(41, 128, 185, 0.7)), url('${destination.image}')`;
    
    // Update best time to visit
    document.getElementById('best-time-content').innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <h5>Best Season</h5>
                <p>${destination.bestTime.season}</p>
            </div>
            <div class="col-md-6">
                <h5>Weather</h5>
                <p>${destination.bestTime.weather}</p>
            </div>
        </div>
        <div class="alert alert-info">
            <i class="fas fa-info-circle me-2"></i>
            ${destination.bestTime.tip}
        </div>
    `;
    
    // Update things to do
    document.getElementById('things-to-do-content').innerHTML = `
        <div class="row">
            ${destination.thingsToDo.map(activity => `
                <div class="col-md-6 mb-3">
                    <div class="d-flex align-items-start">
                        <i class="fas fa-check-circle text-success me-2 mt-1"></i>
                        <div>
                            <h6>${activity.name}</h6>
                            <p class="text-muted small">${activity.description}</p>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Update where to stay
    document.getElementById('where-to-stay-content').innerHTML = `
        <div class="row g-3">
            ${destination.accommodation.map(place => `
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <h6 class="card-title">${place.name}</h6>
                            <p class="card-text small">${place.description}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="badge bg-primary">${place.type}</span>
                                <span class="text-primary fw-bold">${place.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Update local tips
    document.getElementById('local-tips-content').innerHTML = `
        <div class="row g-3">
            ${destination.localTips.map(tip => `
                <div class="col-12">
                    <div class="alert alert-light border-start border-primary border-4">
                        <h6 class="alert-heading">${tip.title}</h6>
                        <p class="mb-0">${tip.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Update photo gallery
    document.getElementById('photo-gallery').innerHTML = destination.gallery.map(photo => `
        <div class="col-md-4 col-sm-6 mb-3">
            <img src="${photo}" alt="${destination.name}" class="img-fluid rounded shadow-sm" 
                 onclick="showPhotoModal('${photo}')" style="cursor: pointer;">
        </div>
    `).join('');
    
    // Update quick facts
    document.getElementById('quick-facts').innerHTML = `
        <div class="row g-2">
            <div class="col-6">
                <small class="text-muted">Category</small>
                <p class="mb-2 fw-bold">${destination.category}</p>
            </div>
            <div class="col-6">
                <small class="text-muted">Best Season</small>
                <p class="mb-2 fw-bold">${destination.bestTime.season}</p>
            </div>
            <div class="col-6">
                <small class="text-muted">Duration</small>
                <p class="mb-2 fw-bold">${destination.duration}</p>
            </div>
            <div class="col-6">
                <small class="text-muted">Budget</small>
                <p class="mb-2 fw-bold">${destination.budget}</p>
            </div>
        </div>
    `;
    
    // Update related destinations
    const relatedDestinations = destinations
        .filter(d => d.category === destination.category && d.id !== destination.id)
        .slice(0, 3);
    
    document.getElementById('related-destinations').innerHTML = relatedDestinations.map(dest => `
        <div class="mb-3">
            <div class="d-flex">
                <img src="${dest.image}" alt="${dest.name}" class="rounded me-3" style="width: 60px; height: 60px; object-fit: cover;">
                <div class="flex-grow-1">
                    <h6 class="mb-1">${dest.name}</h6>
                    <p class="text-muted small mb-1">${dest.location}</p>
                    <a href="destination-details.html?id=${dest.id}" class="small text-primary text-decoration-none">
                        View Details <i class="fas fa-arrow-right ms-1"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('') || '<p class="text-muted">No related destinations found.</p>';
}

// Show photo modal
function showPhotoModal(imageSrc) {
    const modal = new bootstrap.Modal(document.getElementById('photoModal'));
    document.getElementById('modalImage').src = imageSrc;
    modal.show();
}

// Show tip modal
function showTipModal(tipId) {
    if (typeof travelTips === 'undefined') return;
    
    const tip = travelTips.find(t => t.id === tipId);
    if (!tip) return;
    
    document.getElementById('tipModalTitle').textContent = tip.title;
    document.getElementById('tipModalBody').innerHTML = `
        <img src="${tip.image}" alt="${tip.title}" class="img-fluid rounded mb-3">
        <div class="mb-3">
            <span class="badge bg-secondary">${tip.category}</span>
        </div>
        <div>${tip.content}</div>
    `;
    
    const modal = new bootstrap.Modal(document.getElementById('tipModal'));
    modal.show();
}

// Utility functions
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Could integrate with error reporting service here
});

// Performance monitoring
window.addEventListener('load', function() {
    if ('performance' in window) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log('Page load time:', loadTime + 'ms');
    }
});
