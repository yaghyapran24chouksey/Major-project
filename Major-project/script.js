
// Data for services and testimonials
const services = [
  {
    title: 'Fireworks',
    description: 'Add a magical touch to your wedding with stunning fireworks displays that light up the night sky.',
    image: "img/Services/firework_perfectcoldpyroandweddingentire_2.jpg",
    link: 'Firework.html'
  },
  {
    title: 'Band Baja Baraat',
    description: 'Experience the joy of a traditional baraat with live music, dance, and vibrant celebrations.',
    image: "img/Services/Bandbajabaarat.jpg",
    link: 'Band_baja_baraat.html'
  },
  {
    title: 'Invitation Carda',
    description: 'Create beautiful and personalized wedding invitations that set the tone for your special day.',
    image: "img/Services/Invitation_card.jpg",
    link: 'Invitation-card.html'
  },
  {
    title: 'Catering',
    description: 'Delight your guests with exquisite Indian cuisine and beverage options for your reception.',
    image: "img/Services/Catering.jpg",
    link: 'Catering.html'
  },
  {
    title: 'Wedding Planner',
    description: 'Let our expert wedding planners handle all the details, from venue selection to day-of coordination.',
    image: "img/Services/Wedding_decoration.jpg",
    link: 'wedding-planner.html'
  },
  // {
  //   title: 'Entertainment',
  //   description: 'Book amazing DJs, traditional dancers, and performers to keep your celebration lively.',
  //   image: 'https://images.unsplash.com/photo-1571747143413-97c9c9142455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  //   link: '#'
  // }
];

const testimonials = [
  {
    name: 'Priya & Arjun',
    role: 'Newlyweds',
    testimonial: "Working with Vow Ventures made our wedding planning stress-free. They took care of every detail, from the mehendi ceremony to the reception!",
    image: 'https://images.unsplash.com/photo-1583316368906-ec73700a2f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    rating: 5
  },
  {
    name: 'Meera & Vikram',
    role: 'Married June 2023',
    testimonial: "The attention to detail was impeccable! Our mandap was breathtaking, and our guests are still talking about how beautiful everything was.",
    image: 'https://images.unsplash.com/photo-1583316368049-84a1046ea684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1889&q=80',
    rating: 5
  },
  {
    name: 'Anjali & Rahul',
    role: 'Married September 2023',
    testimonial: "From venue selection to the final vidaai ceremony, Vow Ventures made our wedding absolutely perfect. Worth every penny!",
    image: 'https://images.unsplash.com/photo-1590648472611-2910e53e98b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    rating: 5
  }
];

// DOM elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const servicesGrid = document.getElementById('servicesGrid');
const testimonialGrid = document.getElementById('testimonialGrid');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const toastClose = document.getElementById('toastClose');
const currentYearSpan = document.getElementById('currentYear');

// Carousel elements
const carousel = document.getElementById('showcaseCarousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear();

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// Carousel functionality
let currentSlide = 0;
let autoSlideInterval;

function setupCarousel() {
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-slide');
  if (slides.length === 0) return;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  // Add event listeners for buttons
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Set up auto-slide
  startAutoSlide();

  // Pause auto-slide on hover
  carousel.addEventListener('mouseenter', stopAutoSlide);
  carousel.addEventListener('mouseleave', startAutoSlide);
}

function updateCarousel() {
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-slide');
  if (slides.length === 0) return;

  // Update slide position
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update dots
  const dots = dotsContainer.querySelectorAll('.carousel-dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function nextSlide() {
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-slide');
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-slide');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
  stopAutoSlide();
  startAutoSlide();
}

function startAutoSlide() {
  stopAutoSlide();
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Generate service cards
function createServiceCards() {
  services.forEach(service => {
    const serviceCard = document.createElement('a');
    serviceCard.href = service.link;
    serviceCard.className = 'service-card';

    serviceCard.innerHTML = `
        <div class="service-card-image">
          <img src="${service.image}" alt="${service.title}">
          <div class="service-card-content">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
          </div>
        </div>
      `;

    servicesGrid.appendChild(serviceCard);
  });
}

// Generate testimonial cards
function createTestimonialCards() {
  testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';

    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
      starsHTML += `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${i < testimonial.rating ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        `;
    }

    testimonialCard.innerHTML = `
        <div class="testimonial-header">
          <div class="testimonial-image">
            <img src="${testimonial.image}" alt="${testimonial.name}">
          </div>
          <div>
            <h4 class="testimonial-name">${testimonial.name}</h4>
            <p class="testimonial-role">${testimonial.role}</p>
          </div>
        </div>
        <div class="testimonial-rating">
          ${starsHTML}
        </div>
        <p class="testimonial-text">${testimonial.testimonial}</p>
      `;

    testimonialGrid.appendChild(testimonialCard);
  });
}

// Show toast notification
function showToast(duration = 3000) {
  toast.classList.add('show');

  setTimeout(() => {
    hideToast();
  }, duration);
}

// Hide toast notification
function hideToast() {
  toast.classList.remove('show');
}

// Contact form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simulate form submission (would be replaced with actual API call)
  const formData = new FormData(contactForm);
  const formValues = {};

  formData.forEach((value, key) => {
    formValues[key] = value;
  });

  console.log('Form submitted with values:', formValues);

  // Reset form
  contactForm.reset();

  // Show success toast
  showToast();
});

// Close toast on button click
toastClose.addEventListener('click', hideToast);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  });
});


// Search functionality
const searchForm = document.getElementById('searchForm');
const mobileSearchForm = document.getElementById('mobileSearchForm');
const searchInput = document.getElementById('searchInput');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const searchResults = document.getElementById('searchResults');
const searchQuery = document.getElementById('searchQuery');
const resultsGrid = document.getElementById('resultsGrid');

function handleSearch(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  const query = input.value.trim();

  if (query) {
    // Hide all sections except search results
    document.querySelectorAll('section').forEach(section => {
      if (section.id !== 'searchResults') {
        section.style.display = 'none';
      }
    });

    // Show search results section
    searchResults.classList.remove('hidden');
    searchQuery.textContent = query;

    // Clear previous results
    resultsGrid.innerHTML = '';

    // Example: Filter services based on search query
    const filteredServices = services.filter(service =>
      service.title.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredServices.length > 0) {
      filteredServices.forEach(service => {
        const resultCard = document.createElement('div');
        resultCard.className = 'service-card';
        resultCard.innerHTML = `
          <div class="service-card-image">
            <img src="${service.image}" alt="${service.title}">
            <div class="service-card-content">
              <h3>${service.title}</h3>
              <p>${service.description}</p>
            </div>
          </div>
        `;
        resultsGrid.appendChild(resultCard);
      });
    } else {
      resultsGrid.innerHTML = `
        <div class="no-results">
          <p>No results found for "${query}". Try searching for something else.</p>
        </div>
      `;
    }

    // Scroll to search results
    searchResults.scrollIntoView({ behavior: 'smooth' });

    // Clear the search input
    input.value = '';

    // Close mobile menu if open
    mobileMenu.classList.remove('open');
    mobileMenuBtn.classList.remove('open');
  }
}

// Add event listeners for search forms
searchForm.addEventListener('submit', handleSearch);
mobileSearchForm.addEventListener('submit', handleSearch);


// Initialize the page
function init() {
  createServiceCards();
  createTestimonialCards();
  setupCarousel();
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
