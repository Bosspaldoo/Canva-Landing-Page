// Application data with pricing, reviews, and social information
const appData = {
  "plans": [
    {
      "duration": "1 Month",
      "price": "$1.00",
      "priceNote": "Total payment",
      "title": "Short-Term Access",
      "description": "Perfect for quick projects and testing Canva Team features",
      "features": [
        "100+ million premium stock photos, videos, audio, and graphics",
        "610,000+ premium and free templates with new designs daily",
        "Remove image background instantly",
        "100 GB of cloud storage",
        "Can be used for PC running on Mac or Windows and mobile devices",
        "The plan also include all other features that Canva Pro offer",
        "Exclusive access to Affinity Products: Affinity Education. Visit Affinity Education Resources to learn more."
      ],
      "idealFor": "Freelancers, short-term projects",
      "badge": "Most Flexible",
      "badgeColor": "blue",
      "checkoutUrl": "https://www.paypal.com/ncp/payment/QH3FA62MN5NPJ"
    },
    {
      "duration": "3 Months", 
      "price": "$1.99",
      "priceNote": "Total payment",
      "title": "Quarterly Plan",
      "description": "Ideal for seasonal campaigns and medium-term projects",
      "features": [
        "100+ million premium stock photos, videos, audio, and graphics",
        "610,000+ premium and free templates with new designs daily",
        "Remove image background instantly",
        "100 GB of cloud storage",
        "Can be used for PC running on Mac or Windows and mobile devices",
        "The plan also include all other features that Canva Pro offer",
        "Exclusive access to Affinity Products: Affinity Education. Visit Affinity Education Resources to learn more."
      ],
      "idealFor": "Small business, quarterly campaigns",
      "badge": "Hot Deal",
      "badgeColor": "red",
      "checkoutUrl": "https://www.paypal.com/ncp/payment/K8QJDZDXWBAGS"
    },
    {
      "duration": "6 Months",
      "price": "$2.99", 
      "priceNote": "Total payment",
      "title": "Half-Year Value",
      "description": "Perfect balance of commitment and flexibility",
      "features": [
        "100+ million premium stock photos, videos, audio, and graphics",
        "610,000+ premium and free templates with new designs daily",
        "Remove image background instantly",
        "100 GB of cloud storage",
        "Can be used for PC running on Mac or Windows and mobile devices",
        "The plan also include all other features that Canva Pro offer",
        "Exclusive access to Affinity Products: Affinity Education. Visit Affinity Education Resources to learn more."
      ],
      "idealFor": "Growing business, stable projects",
      "badge": "Great Value",
      "badgeColor": "green",
      "checkoutUrl": "https://www.paypal.com/ncp/payment/D6M5T7BB7ACCU"
    },
    {
      "duration": "12 Months",
      "price": "$3.99",
      "priceNote": "Total payment", 
      "title": "Annual Plan",
      "description": "Maximum value for committed teams and businesses",
      "features": [
        "100+ million premium stock photos, videos, audio, and graphics",
        "610,000+ premium and free templates with new designs daily",
        "Remove image background instantly",
        "100 GB of cloud storage",
        "Can be used for PC running on Mac or Windows and mobile devices",
        "The plan also include all other features that Canva Pro offer",
        "Exclusive access to Affinity Products: Affinity Education. Visit Affinity Education Resources to learn more."
      ],
      "idealFor": "Established business, long-term planning",
      "badge": "Most Selling",
      "badgeColor": "orange",
      "checkoutUrl": "https://www.paypal.com/ncp/payment/GP56W44Y4SU4J"
    }
  ],
  "reviews": [
    {
      "name": "Maria Santos",
      "location": "Manila, Philippines", 
      "rating": 5,
      "text": "Incredible value! The 3-month plan was perfect for our startup's rebranding project. Saved us thousands compared to hiring a design agency. Fast delivery and exactly as promised!",
      "plan": "3 Months",
      "date": "August 10, 2025",
      "verified": true
    },
    {
      "name": "Carlos Rodriguez", 
      "location": "Cebu City",
      "rating": 5,
      "text": "Fast delivery and exactly as promised. Our team loves the collaboration features. The brand management tools are game-changers. Will definitely renew our 12-month plan!",
      "plan": "12 Months",
      "date": "August 8, 2025",
      "verified": true
    },
    {
      "name": "Jennifer Lopez",
      "location": "Davao City",
      "rating": 5, 
      "text": "Great for testing Canva Team features before committing long-term. The 1-month access gave us everything we needed for our social media campaign. Highly recommend!",
      "plan": "1 Month",
      "date": "August 5, 2025",
      "verified": true
    },
    {
      "name": "Miguel Torres",
      "location": "Iloilo City",
      "rating": 5,
      "text": "Best investment for our design team! The 6-month plan provided excellent value and all the advanced features we needed. Customer support is also very responsive.",
      "plan": "6 Months", 
      "date": "August 3, 2025",
      "verified": true
    },
    {
      "name": "Ana Garcia",
      "location": "Quezon City", 
      "rating": 5,
      "text": "Professional service and instant access. The team collaboration tools have revolutionized our workflow. Perfect for our marketing agency. Highly recommended!",
      "plan": "12 Months",
      "date": "August 1, 2025",
      "verified": true
    },
    {
      "name": "Roberto Martinez",
      "location": "Baguio City",
      "rating": 4,
      "text": "Good value for money. The collaboration features work well, though I wish there were more template options for our specific industry. Overall satisfied with the service.",
      "plan": "3 Months",
      "date": "July 28, 2025",
      "verified": true
    },
    {
      "name": "Sofia Chen",
      "location": "Makati City",
      "rating": 5,
      "text": "Outstanding customer service and premium features. The 12-month plan has everything our design agency needs. Templates are top-quality and collaboration is seamless.",
      "plan": "12 Months",
      "date": "July 25, 2025",
      "verified": true
    },
    {
      "name": "David Reyes",
      "location": "Taguig City",
      "rating": 5,
      "text": "Perfect for freelancers! The 1-month plan let me test all features before committing. Now I'm a regular customer. Great value and instant access.",
      "plan": "1 Month",
      "date": "July 22, 2025",
      "verified": true
    },
    {
      "name": "Lisa Fernandez",
      "location": "Pasig City",
      "rating": 4,
      "text": "Very good service overall. The 6-month plan offers great value. Only minor issue was initial setup took a few extra minutes, but support helped quickly.",
      "plan": "6 Months",
      "date": "July 20, 2025",
      "verified": true
    },
    {
      "name": "Mark Johnson",
      "location": "Antipolo City",
      "rating": 5,
      "text": "Exceeded expectations! The quarterly plan was ideal for our seasonal marketing campaigns. Team collaboration features are intuitive and powerful.",
      "plan": "3 Months",
      "date": "July 18, 2025",
      "verified": true
    },
    {
      "name": "Grace Morales",
      "location": "Caloocan City",
      "rating": 5,
      "text": "Amazing value for small businesses! The brand management features helped us maintain consistency across all our designs. Highly recommend the annual plan.",
      "plan": "12 Months",
      "date": "July 15, 2025",
      "verified": true
    },
    {
      "name": "Patrick Santos",
      "location": "Marikina City",
      "rating": 4,
      "text": "Solid choice for design teams. Good features and reasonable pricing. The 6-month plan struck the right balance between cost and commitment.",
      "plan": "6 Months",
      "date": "July 12, 2025",
      "verified": true
    }
  ],
  "overallRating": {
    "average": 4.8,
    "totalReviews": 247,
    "distribution": {
      "5": { "count": 195, "percentage": 79 },
      "4": { "count": 35, "percentage": 14 },
      "3": { "count": 12, "percentage": 5 },
      "2": { "count": 3, "percentage": 1 },
      "1": { "count": 2, "percentage": 1 }
    }
  },
  "social": {
    "telegram": {
      "title": "Join Our Telegram Channel",
      "description": "Get exclusive deals, instant updates, and special discounts before anyone else!",
      "benefits": [
        "🔥 Flash deals and limited-time offers",
        "📢 New plan announcements", 
        "💬 Direct support and quick responses",
        "🎁 Exclusive member-only discounts"
      ],
      "buttonText": "Join Telegram Channel",
      "url": "https://t.me/canvateamplans"
    },
    "youtube": {
      "title": "Subscribe to Our YouTube Channel",
      "description": "Learn design tips, Canva tutorials, and maximize your team's creative potential!", 
      "benefits": [
        "🎨 Professional design tutorials",
        "👥 Team collaboration tips",
        "📈 Business branding strategies",
        "🆓 Free templates and resources"
      ],
      "buttonText": "Subscribe on YouTube",
      "url": "https://youtube.com/@canvateamplans"
    }
  },
  "features": [
    {
      "icon": "🎨",
      "title": "Professional Design Tools",
      "description": "Access to thousands of premium templates, fonts, and design elements for all your creative needs"
    },
    {
      "icon": "👥", 
      "title": "Team Collaboration",
      "description": "Real-time collaboration, comments, and approval workflows for seamless teamwork across projects"
    },
    {
      "icon": "📱",
      "title": "Brand Management", 
      "description": "Maintain brand consistency with custom brand kits, colors, fonts, and logo management"
    },
    {
      "icon": "☁️",
      "title": "Cloud Storage",
      "description": "Secure cloud storage for all your designs with easy sharing, organization, and backup features"
    }
  ],
  "faqs": [
    {
      "question": "What's included in Canva Team plans?",
      "answer": "All plans include full Canva Pro features, team collaboration tools, brand kit access, premium templates, and cloud storage. Longer plans include additional advanced features and priority support."
    },
    {
      "question": "How do I get access after payment?",
      "answer": "Access will be provided within 30 minutes after payment confirmation. You’ll receive an official Canva invitation directly to your email."
    },
    {
      "question": "Can I change my plan duration?", 
      "answer": "Yes, you can upgrade to longer plans at any time. Contact our support team for assistance with plan modifications and we'll help you seamlessly transition."
    },
    {
      "question": "Do you offer support?",
      "answer": "Yes, all plans include comprehensive support. Longer duration plans receive priority support and additional resources. Join our Telegram channel for fastest response times."
    },
    {
      "question": "Is there a money-back guarantee?",
      "answer": "We offer a 7-day satisfaction guarantee. If you're not completely satisfied with your plan, contact us within the first 7 days for a full refund."
    },
    {
      "question": "Are these official Canva Team accounts?",
      "answer": "These are Canva Student Access accounts – 100% safe and come with full features."
    }
  ]
};

// Global state
const faqState = {};
let currentReviewsFilter = { rating: 'all', plan: 'all', search: '' };
let currentReviewsPage = 1;
const reviewsPerPage = 6;
let selectedRating = 5;

// Plans Carousel Class
class PlansCarousel {
  constructor() {
    this.track = document.getElementById('carouselTrack');
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.indicators = document.getElementById('carouselIndicators');
    this.currentIndex = 0;
    this.totalPlans = appData.plans.length;
    this.touchStartX = 0;
    this.touchEndX = 0;
    
    if (this.track) {
      this.init();
    }
  }
  
  init() {
    this.generatePlanCards();
    this.generateIndicators();
    this.bindEvents();
    this.updateCarousel();
    this.setupTouchEvents();
    this.setupKeyboardNavigation();
    this.fixArrowVisibility();
  }
  
  fixArrowVisibility() {
    if (this.prevBtn && this.nextBtn) {
      this.prevBtn.style.display = window.innerWidth > 768 ? 'flex' : 'none';
      this.nextBtn.style.display = window.innerWidth > 768 ? 'flex' : 'none';
      
      window.addEventListener('resize', () => {
        this.prevBtn.style.display = window.innerWidth > 768 ? 'flex' : 'none';
        this.nextBtn.style.display = window.innerWidth > 768 ? 'flex' : 'none';
      });
    }
  }
  
  generatePlanCards() {
    const cardsHTML = appData.plans.map((plan, index) => `
      <div class="plan-card" data-index="${index}">
        <div class="plan-card__badge plan-card__badge--${plan.badgeColor}">${plan.badge}</div>
        <div class="plan-card__price">
          ${plan.price}
          <span class="plan-card__price-note">${plan.priceNote}</span>
        </div>
        <div class="plan-card__duration">${plan.duration}</div>
        <h3 class="plan-card__title">${plan.title}</h3>
        <p class="plan-card__description">${plan.description}</p>
        <ul class="plan-card__features">
          ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <div class="plan-card__ideal">
          <strong>Ideal for:</strong> ${plan.idealFor}
        </div>
        <a href="${plan.checkoutUrl}" target="_blank" class="btn btn--primary plan-card__cta">
          Buy Now - ${plan.price}
        </a>
      </div>
    `).join('');
    
    this.track.innerHTML = cardsHTML;
  }
  
  generateIndicators() {
    if (!this.indicators) return;
    
    const indicatorsHTML = appData.plans.map((_, index) => 
      `<button class="carousel__indicator" data-index="${index}" aria-label="Go to plan ${index + 1}"></button>`
    ).join('');
    
    this.indicators.innerHTML = indicatorsHTML;
    
    this.indicators.addEventListener('click', (e) => {
      if (e.target.classList.contains('carousel__indicator')) {
        const index = parseInt(e.target.dataset.index);
        this.goToSlide(index);
      }
    });
  }
  
  bindEvents() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.previousSlide();
      });
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.nextSlide();
      });
    }
  }
  
  setupTouchEvents() {
    this.track.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    });
    
    this.track.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    });
  }
  
  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      if (document.activeElement.closest('#plansCarousel')) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.previousSlide();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.nextSlide();
        }
      }
    });
  }
  
  handleSwipe() {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.previousSlide();
      }
    }
  }
  
  previousSlide() {
    this.currentIndex = this.currentIndex === 0 ? this.totalPlans - 1 : this.currentIndex - 1;
    this.updateCarousel();
  }
  
  nextSlide() {
    this.currentIndex = this.currentIndex === this.totalPlans - 1 ? 0 : this.currentIndex + 1;
    this.updateCarousel();
  }
  
  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
  }
  
  updateCarousel() {
    const cardWidth = 300 + 24;
    const isMobile = window.innerWidth <= 768;
    
    if (!isMobile) {
      const offset = -this.currentIndex * cardWidth;
      this.track.style.transform = `translateX(${offset}px)`;
    } else {
      const targetCard = this.track.children[this.currentIndex];
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      }
    }
    
    this.updateIndicators();
  }
  
  updateIndicators() {
    if (!this.indicators) return;
    
    const indicators = this.indicators.querySelectorAll('.carousel__indicator');
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('carousel__indicator--active', index === this.currentIndex);
    });
  }
}

// Rating Distribution Chart
function generateRatingChart() {
  const chartContainer = document.getElementById('ratingChart');
  if (!chartContainer) return;
  
  const distribution = appData.overallRating.distribution;
  
  const chartHTML = Object.keys(distribution).reverse().map(rating => {
    const data = distribution[rating];
    return `
      <div class="rating-bar">
        <span class="rating-bar__label">${rating} stars</span>
        <div class="rating-bar__track">
          <div class="rating-bar__fill" style="width: ${data.percentage}%"></div>
        </div>
        <span class="rating-bar__count">${data.count}</span>
      </div>
    `;
  }).join('');
  
  chartContainer.innerHTML = chartHTML;
}

// Generate rating breakdown for reviews page
function generateRatingBreakdown() {
  const breakdownContainer = document.getElementById('reviewsBreakdown');
  if (!breakdownContainer) return;
  
  const distribution = appData.overallRating.distribution;
  
  const breakdownHTML = Object.keys(distribution).reverse().map(rating => {
    const data = distribution[rating];
    return `
      <div class="rating-bar">
        <span class="rating-bar__label">${rating} ★</span>
        <div class="rating-bar__track">
          <div class="rating-bar__fill" style="width: ${data.percentage}%"></div>
        </div>
        <span class="rating-bar__count">${data.percentage}% (${data.count})</span>
      </div>
    `;
  }).join('');
  
  breakdownContainer.innerHTML = breakdownHTML;
}

// Reviews generation for homepage
function generateReviews() {
  const reviewsGrid = document.getElementById('reviewsGrid');
  if (!reviewsGrid) return;
  
  const displayReviews = appData.reviews.slice(0, 6);
  
  const reviewsHTML = displayReviews.map(review => {
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    return `
      <div class="review-card fade-in">
        <div class="review-card__header">
          <div class="review-card__author">
            <div class="review-card__name">${review.name}</div>
            <div class="review-card__location">${review.location}</div>
          </div>
          <div class="review-card__rating">${stars}</div>
        </div>
        <p class="review-card__text">"${review.text}"</p>
        <div class="review-card__footer">
          <div class="review-card__plan">Used ${review.plan} Plan</div>
          ${review.verified ? '<span class="review-card__verified">✓ Verified</span>' : ''}
        </div>
      </div>
    `;
  }).join('');
  
  reviewsGrid.innerHTML = reviewsHTML;
}

// Reviews page functionality
function initializeReviewsPage() {
  console.log('Initializing reviews page');
  generateRatingBreakdown();
  setupReviewsFilters();
  displayFilteredReviews();
}

function setupReviewsFilters() {
  const filterRating = document.getElementById('filterRating');
  const filterPlan = document.getElementById('filterPlan');
  const searchReviews = document.getElementById('searchReviews');
  
  if (filterRating) {
    filterRating.addEventListener('change', (e) => {
      currentReviewsFilter.rating = e.target.value;
      currentReviewsPage = 1;
      displayFilteredReviews();
    });
  }
  
  if (filterPlan) {
    filterPlan.addEventListener('change', (e) => {
      currentReviewsFilter.plan = e.target.value;
      currentReviewsPage = 1;
      displayFilteredReviews();
    });
  }
  
  if (searchReviews) {
    let searchTimeout;
    searchReviews.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        currentReviewsFilter.search = e.target.value.toLowerCase();
        currentReviewsPage = 1;
        displayFilteredReviews();
      }, 300);
    });
  }
}

function getFilteredReviews() {
  return appData.reviews.filter(review => {
    const matchesRating = currentReviewsFilter.rating === 'all' || 
                         review.rating.toString() === currentReviewsFilter.rating;
    
    const matchesPlan = currentReviewsFilter.plan === 'all' || 
                       review.plan === currentReviewsFilter.plan;
    
    const matchesSearch = currentReviewsFilter.search === '' ||
                         review.text.toLowerCase().includes(currentReviewsFilter.search) ||
                         review.name.toLowerCase().includes(currentReviewsFilter.search) ||
                         review.location.toLowerCase().includes(currentReviewsFilter.search);
    
    return matchesRating && matchesPlan && matchesSearch;
  });
}

function displayFilteredReviews() {
  const allReviewsGrid = document.getElementById('allReviewsGrid');
  if (!allReviewsGrid) return;
  
  const filteredReviews = getFilteredReviews();
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const startIndex = (currentReviewsPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = filteredReviews.slice(startIndex, endIndex);
  
  if (currentReviews.length === 0) {
    allReviewsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
        <h3>No reviews found</h3>
        <p>Try adjusting your filters or search terms.</p>
      </div>
    `;
  } else {
    const reviewsHTML = currentReviews.map(review => {
      const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
      return `
        <div class="review-card">
          <div class="review-card__header">
            <div class="review-card__author">
              <div class="review-card__name">${review.name}</div>
              <div class="review-card__location">${review.location}</div>
            </div>
            <div class="review-card__rating">${stars}</div>
          </div>
          <p class="review-card__text">"${review.text}"</p>
          <div class="review-card__footer">
            <div class="review-card__plan">Used ${review.plan} Plan</div>
            <div class="review-card__date">${review.date}</div>
          </div>
          ${review.verified ? '<span class="review-card__verified">✓ Verified Purchase</span>' : ''}
        </div>
      `;
    }).join('');
    
    allReviewsGrid.innerHTML = reviewsHTML;
  }
  
  generatePagination(totalPages);
}

function generatePagination(totalPages) {
  const paginationContainer = document.getElementById('reviewsPagination');
  if (!paginationContainer) return;
  
  if (totalPages <= 1) {
    paginationContainer.innerHTML = '';
    return;
  }
  
  let paginationHTML = '';
  
  paginationHTML += `
    <button class="pagination-btn" ${currentReviewsPage === 1 ? 'disabled' : ''} 
            onclick="changePage(${currentReviewsPage - 1})">
      ← Previous
    </button>
  `;
  
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentReviewsPage - 1 && i <= currentReviewsPage + 1)) {
      paginationHTML += `
        <button class="pagination-btn ${i === currentReviewsPage ? 'active' : ''}" 
                onclick="changePage(${i})">
          ${i}
        </button>
      `;
    } else if (i === currentReviewsPage - 2 || i === currentReviewsPage + 2) {
      paginationHTML += '<span class="pagination-ellipsis">...</span>';
    }
  }
  
  paginationHTML += `
    <button class="pagination-btn" ${currentReviewsPage === totalPages ? 'disabled' : ''} 
            onclick="changePage(${currentReviewsPage + 1})">
      Next →
    </button>
  `;
  
  paginationContainer.innerHTML = paginationHTML;
}

function changePage(page) {
  const filteredReviews = getFilteredReviews();
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  
  if (page >= 1 && page <= totalPages) {
    currentReviewsPage = page;
    displayFilteredReviews();
    
    const reviewsContent = document.querySelector('.reviews-page-content');
    if (reviewsContent) {
      reviewsContent.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Review Form Modal
function showReviewForm() {
  console.log('Showing review form');
  const modal = document.getElementById('reviewModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
      const firstInput = modal.querySelector('input[type="text"]');
      if (firstInput) firstInput.focus();
    }, 100);
  }
}

function hideReviewForm() {
  console.log('Hiding review form');
  const modal = document.getElementById('reviewModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

// Star Rating Functionality
function initializeStarRating() {
  const starRating = document.getElementById('starRating');
  const ratingValue = document.getElementById('ratingValue');
  
  if (!starRating || !ratingValue) return;
  
  const stars = starRating.querySelectorAll('.star');
  
  stars.forEach((star, index) => {
    star.addEventListener('click', (e) => {
      e.preventDefault();
      selectedRating = index + 1;
      ratingValue.value = selectedRating;
      updateStarDisplay();
    });
    
    star.addEventListener('mouseenter', () => {
      highlightStars(index + 1);
    });
  });
  
  starRating.addEventListener('mouseleave', () => {
    updateStarDisplay();
  });
  
  updateStarDisplay();
}

function highlightStars(rating) {
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    star.classList.toggle('active', index < rating);
  });
}

function updateStarDisplay() {
  highlightStars(selectedRating);
}

// Form Submission Handler
function setupFormSubmission() {
  const reviewForm = document.getElementById('reviewForm');
  if (!reviewForm) return;
  
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submission started');
    
    const requiredFields = reviewForm.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = 'var(--color-error)';
      } else {
        field.style.borderColor = 'var(--color-border)';
      }
    });
    
    if (!isValid) {
      alert('Please fill in all required fields.');
      return;
    }
    
    const submitButton = reviewForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;
    
    setTimeout(() => {
      window.location.href = 'thank-you.html';
    }, 1000);
  });
}

// Social media section generation
function generateSocialSection() {
  const socialGrid = document.getElementById('socialGrid');
  if (!socialGrid) return;
  
  const socialHTML = `
    <div class="social-card fade-in">
      <div class="social-card__icon social-card__icon--telegram">📱</div>
      <h3 class="social-card__title">${appData.social.telegram.title}</h3>
      <p class="social-card__description">${appData.social.telegram.description}</p>
      <ul class="social-card__benefits">
        ${appData.social.telegram.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
      </ul>
      <a href="${appData.social.telegram.url}" 
         target="_blank" 
         rel="noopener noreferrer"
         class="social-card__btn social-card__btn--telegram">
        ${appData.social.telegram.buttonText}
      </a>
    </div>
    
    <div class="social-card fade-in">
      <div class="social-card__icon social-card__icon--youtube">▶️</div>
      <h3 class="social-card__title">${appData.social.youtube.title}</h3>
      <p class="social-card__description">${appData.social.youtube.description}</p>
      <ul class="social-card__benefits">
        ${appData.social.youtube.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
      </ul>
      <a href="${appData.social.youtube.url}" 
         target="_blank" 
         rel="noopener noreferrer"
         class="social-card__btn social-card__btn--youtube">
        ${appData.social.youtube.buttonText}
      </a>
    </div>
  `;
  
  socialGrid.innerHTML = socialHTML;
}

// Features generation
function generateFeatures() {
  const featuresGrid = document.getElementById('featuresGrid');
  if (!featuresGrid) return;
  
  const featuresHTML = appData.features.map(feature => `
    <div class="feature-card fade-in">
      <span class="feature-card__icon">${feature.icon}</span>
      <h3 class="feature-card__title">${feature.title}</h3>
      <p class="feature-card__description">${feature.description}</p>
    </div>
  `).join('');
  
  featuresGrid.innerHTML = featuresHTML;
}

// FAQ functionality
function generateFAQ() {
  const faqList = document.getElementById('faqList');
  if (!faqList) return;
  
  const faqHTML = appData.faqs.map((faq, index) => `
    <div class="faq-item">
      <button class="faq-question" aria-expanded="false" data-faq="${index}" type="button">
        <span>${faq.question}</span>
        <span class="faq-toggle">+</span>
      </button>
      <div class="faq-answer" data-faq="${index}">
        ${faq.answer}
      </div>
    </div>
  `).join('');
  
  faqList.innerHTML = faqHTML;
  
  appData.faqs.forEach((_, index) => {
    faqState[index] = false;
  });
}

function handleFAQClick(e) {
  const button = e.target.closest('.faq-question');
  if (!button) return;
  
  e.preventDefault();
  e.stopPropagation();
  
  const faqIndex = parseInt(button.dataset.faq);
  if (isNaN(faqIndex)) return;
  
  const answer = document.querySelector(`.faq-answer[data-faq="${faqIndex}"]`);
  const toggleIcon = button.querySelector('.faq-toggle');
  
  if (!answer || !toggleIcon) return;
  
  const isCurrentlyExpanded = faqState[faqIndex];
  
  Object.keys(faqState).forEach(index => {
    const idx = parseInt(index);
    if (idx !== faqIndex && faqState[idx]) {
      const otherButton = document.querySelector(`.faq-question[data-faq="${idx}"]`);
      const otherAnswer = document.querySelector(`.faq-answer[data-faq="${idx}"]`);
      const otherToggle = otherButton ? otherButton.querySelector('.faq-toggle') : null;
      
      if (otherButton && otherAnswer && otherToggle) {
        otherButton.setAttribute('aria-expanded', 'false');
        otherAnswer.classList.remove('active');
        otherToggle.textContent = '+';
        faqState[idx] = false;
      }
    }
  });
  
  const newState = !isCurrentlyExpanded;
  faqState[faqIndex] = newState;
  
  button.setAttribute('aria-expanded', newState.toString());
  toggleIcon.textContent = newState ? '−' : '+';
  
  if (newState) {
    answer.classList.add('active');
  } else {
    answer.classList.remove('active');
  }
}

function bindFAQEvents() {
  const faqList = document.getElementById('faqList');
  if (faqList) {
    faqList.removeEventListener('click', handleFAQClick);
    faqList.addEventListener('click', handleFAQClick);
  }
}

// Mobile navigation
function initMobileNav() {
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      navToggle.classList.toggle('active');
      
      if (!isVisible) {
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'var(--color-surface)';
        navMenu.style.flexDirection = 'column';
        navMenu.style.padding = 'var(--space-16)';
        navMenu.style.boxShadow = 'var(--shadow-lg)';
        navMenu.style.borderTop = '1px solid var(--color-border)';
        navMenu.style.zIndex = '1001';
      }
    });

    // Only close menu on link click if in mobile view
    navMenu.addEventListener('click', (e) => {
      if (window.innerWidth < 1024) { // ✅ only mobile/tablet
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
          navMenu.style.display = 'none';
          navToggle.classList.remove('active');
        }
      }
    });

    // Click outside closes only on mobile
    document.addEventListener('click', (e) => {
      if (window.innerWidth < 1024) { // ✅ only mobile/tablet
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
          navMenu.style.display = 'none';
          navToggle.classList.remove('active');
        }
      }
    });
  }
}


// Utility functions
function scrollToPlans() {
  const plansSection = document.getElementById('plans');
  if (plansSection) {
    plansSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Intersection Observer for animations
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  setTimeout(() => {
    const animateElements = document.querySelectorAll('.feature-card, .faq-item, .contact-card, .review-card, .social-card');
    animateElements.forEach(el => observer.observe(el));
  }, 200);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing app');
  
  // Initialize components based on current page
  if (document.getElementById('plansCarousel')) {
    window.plansCarousel = new PlansCarousel();
  }
  
  if (document.getElementById('reviewsGrid')) {
    generateFeatures();
    generateReviews();
    generateSocialSection();
    generateFAQ();
    generateRatingChart();
  }
  
  if (document.getElementById('allReviewsGrid')) {
    initializeReviewsPage();
  }
  
  initMobileNav();
  
  if (document.getElementById('reviewForm')) {
    initializeStarRating();
    setupFormSubmission();
  }
  
  setTimeout(() => {
    bindFAQEvents();
  }, 100);
  
  initAnimations();
});

// Global functions for inline event handlers
window.showReviewForm = showReviewForm;
window.hideReviewForm = hideReviewForm;
window.scrollToPlans = scrollToPlans;
window.changePage = changePage;

        // Thank You Popup Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('requestForm');
            const thankYouPopup = document.getElementById('thankYouPopup');
            const closePopup = document.getElementById('closePopup');
            const closePopupBtn = document.getElementById('closePopupBtn');
            
            // Check if the form was submitted (from URL parameter)
            const urlParams = new URLSearchParams(window.location.search);
            const submitted = urlParams.get('submitted');
            
            if (submitted === 'true') {
                thankYouPopup.classList.add('active');
            }
            
            // Form submission handler
            if (form) {
                form.addEventListener('submit', function(e) {
                    // In a real scenario, this would happen after successful submission
                    // For FormSubmit, we'll use the _next parameter to trigger it
                    // But we'll also add local storage to show it when returning
                    localStorage.setItem('formSubmitted', 'true');
                });
            }
            
            // Close popup handlers
            if (closePopup) {
                closePopup.addEventListener('click', function() {
                    thankYouPopup.classList.remove('active');
                });
            }
            
            if (closePopupBtn) {
                closePopupBtn.addEventListener('click', function() {
                    thankYouPopup.classList.remove('active');
                });
            }
            
            // Check local storage for form submission
            if (localStorage.getItem('formSubmitted')) {
                thankYouPopup.classList.add('active');
                localStorage.removeItem('formSubmitted');
            }
            
            // Close popup when clicking outside
            thankYouPopup.addEventListener('click', function(e) {
                if (e.target === thankYouPopup) {
                    thankYouPopup.classList.remove('active');
                }
            });
        });

<!--Index thank u-->
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('reviewForm'); // your form ID
  const thankYouPopup = document.getElementById('thankYouPopup');
  const closePopup = document.getElementById('closePopup');
  const closePopupBtn = document.getElementById('closePopupBtn');

  // Intercept form submission
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // stop normal navigation

      // Submit with fetch to FormSubmit
      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
      }).then(response => {
        if (response.ok) {
          // Show popup
          thankYouPopup.classList.add('active');
          form.reset();
        } else {
          alert("Something went wrong. Please try again.");
        }
      }).catch(() => {
        alert("Error sending form.");
      });
    });
  }

  // Close popup handlers
  if (closePopup) {
    closePopup.addEventListener('click', () => {
      thankYouPopup.classList.remove('active');
    });
  }
  if (closePopupBtn) {
    closePopupBtn.addEventListener('click', () => {
      thankYouPopup.classList.remove('active');
    });
  }

  // Close if click outside
  thankYouPopup.addEventListener('click', function(e) {
    if (e.target === thankYouPopup) {
      thankYouPopup.classList.remove('active');
    }
  });
});
