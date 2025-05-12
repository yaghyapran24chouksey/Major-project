// DOM elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

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
  if (mobileMenu.classList.contains('open')) {
    document.body.style.overflow = 'hidden'; // Prevent body scroll
  } else {
    document.body.style.overflow = ''; // Allow body scroll
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// filter button js
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('active');
}