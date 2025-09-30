import './style.css'

// Product data
const products = [
  {
    id: 1,
    name: 'iFruit 18 Pro Max',
    price: 1199,
    category: 'smartphones',
    description: 'The most advanced iFruit ever with titanium design and E18 Pro chip.',
    fullDescription: 'Experience the ultimate in smartphone technology with the iFruit 18 Pro Max. Featuring a stunning titanium design, the powerful E18 Pro chip, and an advanced camera system that captures life in incredible detail.',
    image: 'https://img.freepik.com/premium-photo/futuristic-smart-phone-with-transparent-display-human-hands-concept-actual-future-innovative-ideas-best-technologies-humanity_564276-4433.jpg',
    specs: {
      'Display': '6.7-inch Crystal Clear AMOLED',
      'Chip': 'E18 Pro',
      'Storage': '256GB',
      'Camera': '48MP Main, 12MP Ultra Wide, 12MP Telephoto',
      'Battery': 'Up to 29 hours video playback',
      'Colors': 'Natural Titanium, Blue Titanium, Black Titanium'
    }
  },
  {
    id: 2,
    name: 'PassionBook Pro 16"',
    price: 2499,
    category: 'laptops',
    description: 'Professional laptop with X3 Pro chip for ultimate performance.',
    fullDescription: 'Built for professionals who demand the best. The PassionBook Pro 16-inch with X3 Pro chip delivers exceptional performance for video editing, 3D rendering, and complex workflows.',
    image: 'https://cdn.hiconsumption.com/wp-content/uploads/2024/02/Lenovo-ThinkBook-Transparent-Display-Laptop-Concept-1.jpg',
    specs: {
      'Display': '16.2-inch Super Clear AMOLED',
      'Chip': 'eCore X3 Pro',
      'Memory': '18GB unified memory',
      'Storage': '512GB SSD',
      'Battery': 'Up to 22 hours',
      'Ports': '3x Thunderbolt 4, HDMI, SDXC, MagCharge 3'
    }
  },
  {
    id: 3,
    name: 'FruitPad Air',
    price: 599,
    category: 'tablets',
    description: 'Versatile tablet perfect for creativity and productivity.',
    fullDescription: 'The FruitPad Air combines powerful performance with versatile functionality. Perfect for digital artists, students, and professionals who need a portable creative canvas.',
    image: 'https://media.istockphoto.com/id/171363000/photo/futuristic-digital-tablet-in-the-hands.jpg?s=612x612&w=0&k=20&c=JauMA0sqbvqsFC144xd0_JOO3PHaXfATN2uO_W8hGd4=',
    specs: {
      'Display': '10.9-inch AMOLED XDR',
      'Chip': 'eCore X1',
      'Storage': '64GB',
      'Camera': '12MP Wide, 12MP Ultra Wide front',
      'Compatibility': 'Passionfruit Pencil (2nd gen), Snap Keyboard',
      'Colors': 'Space Gray, Pink, Purple, Blue, Starlight'
    }
  },
  {
    id: 4,
    name: 'AirPhone Pro',
    price: 249,
    category: 'accessories',
    description: 'Premium wireless earbuds with active noise cancellation.',
    fullDescription: 'Immerse yourself in superior sound quality with AirPhone Pro. Features adaptive transparency, personalized spatial audio, and all-day comfort.',
    image: 'https://i.pinimg.com/736x/3f/3a/c5/3f3ac557933fa7fcd9ebb0fc0bce3ab8.jpg',
    specs: {
      'Audio': 'Adaptive Audio, Adaptive Noise Cancellation',
      'Battery': 'Up to 6 hours listening time',
      'Chip': 'W2 chip',
      'Controls': 'Touch control, AI voice control',
      'Compatibility': 'All Passionfruit devices',
      'Case': 'MagCharge and Type-C charging'
    }
  },
  {
    id: 5,
    name: 'iFruit 18 S Ultra',
    price: 1299,
    category: 'smartphones',
    description: 'Flagship phone with Wireless Pen and advanced AI features.',
    fullDescription: 'The iFruit 18 S Ultra redefines mobile productivity with its integrated Wireless Pen, AI-powered camera system, and stunning display that adapts to any lighting condition.',
    image: 'https://png.pngtree.com/png-clipart/20250211/original/pngtree-a-futuristic-paper-thin-digital-notebook-png-image_20421275.png',
    specs: {
      'Display': '6.8-inch Dynamic AMOLED 4X',
      'Processor': 'Snapdragon 8 Gen 4',
      'RAM': '12GB',
      'Storage': '256GB',
      'Camera': '40MP main, 20MP telephoto, 12MP ultra-wide',
      'S Pen': 'Built-in S Pen with Air Actions'
    }
  },
  {
    id: 6,
    name: 'PassionBook Flex 13',
    price: 999,
    category: 'laptops',
    description: 'Ultra-portable laptop with stunning InfinityEdge display.',
    fullDescription: 'Experience premium computing in an ultra-compact all-in-one form. The PassionBook Flex 13 delivers powerful performance in a sleek design that fits anywhere.',
    image: 'https://www.yankodesign.com/images/design_news/2019/09/the-future-of-flexible-displays-lies-in-laptops-the-flexbook-concept-shows-why/flexbook_concept_2.jpg',
    specs: {
      'Display': '13.4-inch FHD+ InfinityEdge',
      'Processor': 'Intel Core i7-1360P',
      'RAM': '16GB LPDDR5',
      'Storage': '512GB PCIe NVMe SSD',
      'Graphics': 'Intel Iris Xe',
      'Weight': '2.59 gr'
    }
  }
];

// Application state
let currentPage = 'home';
let cart = [];
let currentFilter = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeRouter();
  initializeNavigation();
  updateCartCount();
  showPage('home');
});

// Router functionality
function initializeRouter() {
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('load', handleRoute);
}

function handleRoute() {
  const hash = window.location.hash.slice(1) || 'home';
  const [page, params] = hash.split('?');
  
  showPage(page, params);
}

function navigateTo(page, params = '') {
  const url = params ? `#${page}?${params}` : `#${page}`;
  window.location.hash = url;
}

// Navigation functionality
function initializeNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      
      // Update active nav link
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

// Page rendering functions
function showPage(page, params = '') {
  const app = document.getElementById('app');
  currentPage = page;
  
  // Parse params
  const urlParams = new URLSearchParams(params);
  
  app.innerHTML = '';
  
  let pageContent;
  
  switch(page) {
    case 'home':
      pageContent = renderHomePage();
      break;
    case 'shop':
      const category = urlParams.get('category') || 'all';
      pageContent = renderShopPage(category);
      break;
    case 'product':
      const productId = urlParams.get('id');
      pageContent = renderProductPage(productId);
      break;
    case 'about':
      pageContent = renderAboutPage();
      break;
    case 'contact':
      pageContent = renderContactPage();
      break;
    case 'cart':
      pageContent = renderCartPage();
      break;
    default:
      pageContent = renderHomePage();
  }
  
  app.innerHTML = pageContent;
  app.querySelector('.page').classList.add('active');
  
  // Initialize page-specific functionality
  initializePageFunctionality(page);
}

function renderHomePage() {
  const featuredProducts = products.slice(0, 3);
  
  return `
    <div class="page">
      <section class="hero">
        <div class="hero-content">
          <h1>Discover Amazing Electronics</h1>
          <p>Premium devices and accessories for the modern lifestyle</p>
          <a href="#shop" class="cta-button">Shop Now</a>
        </div>
      </section>
      
      <section class="section">
        <h2 class="section-title">Featured Products</h2>
        <div class="product-grid">
          ${featuredProducts.map(product => renderProductCard(product)).join('')}
        </div>
      </section>
      
      <section class="section">
        <h2 class="section-title">Shop by Category</h2>
        <div class="categories">
          <div class="category-card" onclick="navigateTo('shop', 'category=smartphones')">
            <div class="category-icon">📱</div>
            <div class="category-name">Smartphones</div>
          </div>
          <div class="category-card" onclick="navigateTo('shop', 'category=laptops')">
            <div class="category-icon">💻</div>
            <div class="category-name">Laptops</div>
          </div>
          <div class="category-card" onclick="navigateTo('shop', 'category=tablets')">
            <div class="category-icon">📱</div>
            <div class="category-name">Tablets</div>
          </div>
          <div class="category-card" onclick="navigateTo('shop', 'category=accessories')">
            <div class="category-icon">🎧</div>
            <div class="category-name">Accessories</div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderShopPage(category = 'all') {
  let filteredProducts = products;
  if (category !== 'all') {
    filteredProducts = products.filter(p => p.category === category);
  }
  
  return `
    <div class="page">
      <section class="section">
        <h1 class="section-title">Shop ${category !== 'all' ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products'}</h1>
        
        <div class="filters">
          <button class="filter-btn ${category === 'all' ? 'active' : ''}" onclick="navigateTo('shop', 'category=all')">All</button>
          <button class="filter-btn ${category === 'smartphones' ? 'active' : ''}" onclick="navigateTo('shop', 'category=smartphones')">Smartphones</button>
          <button class="filter-btn ${category === 'laptops' ? 'active' : ''}" onclick="navigateTo('shop', 'category=laptops')">Laptops</button>
          <button class="filter-btn ${category === 'tablets' ? 'active' : ''}" onclick="navigateTo('shop', 'category=tablets')">Tablets</button>
          <button class="filter-btn ${category === 'accessories' ? 'active' : ''}" onclick="navigateTo('shop', 'category=accessories')">Accessories</button>
        </div>
        
        <div class="product-grid">
          ${filteredProducts.map(product => renderProductCard(product)).join('')}
        </div>
      </section>
    </div>
  `;
}

function renderProductPage(productId) {
  const product = products.find(p => p.id == productId);
  
  if (!product) {
    return `
      <div class="page">
        <section class="section">
          <h1>Product not found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <a href="#shop" class="btn btn-primary">Back to Shop</a>
        </section>
      </div>
    `;
  }
  
  return `
    <div class="page">
      <section class="section">
        <div class="product-detail">
          <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div class="product-detail-info">
            <h1>${product.name}</h1>
            <div class="product-detail-price">$${product.price}</div>
            <div class="product-description-full">
              ${product.fullDescription}
            </div>
            
            <div class="product-specs">
              <h3>Specifications</h3>
              <ul class="specs-list">
                ${Object.entries(product.specs).map(([key, value]) => `
                  <li><strong>${key}:</strong> <span>${value}</span></li>
                `).join('')}
              </ul>
            </div>
            
            <div class="product-actions">
              <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
              <button class="btn btn-secondary" onclick="navigateTo('shop')">Back to Shop</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderAboutPage() {
  return `
    <div class="page">
      <section class="section">
        <h1 class="section-title">About Passionfruit</h1>
        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
          <p style="font-size: 1.25rem; margin-bottom: 2rem; color: var(--gray-600);">
            We're passionate about bringing you the latest and greatest in electronic devices and personal technology.
          </p>
          
          <div style="text-align: left; line-height: 1.8; color: var(--gray-600); margin-bottom: 3rem;">
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Our Mission</h3>
            <p>At Passionfruit, we believe technology should enhance your life, not complicate it. That's why we carefully curate our selection of premium electronics, ensuring every product meets our high standards for quality, innovation, and user experience.</p>
            
            <h3 style="color: var(--primary-color); margin-bottom: 1rem; margin-top: 2rem;">Why Choose Us?</h3>
            <ul style="padding-left: 2rem;">
              <li>✅ Carefully selected premium products</li>
              <li>✅ Expert customer support</li>
              <li>✅ Fast and secure shipping</li>
              <li>✅ 30-day return guarantee</li>
              <li>✅ Competitive pricing</li>
              <li>✅ Latest technology trends</li>
            </ul>
            
            <h3 style="color: var(--primary-color); margin-bottom: 1rem; margin-top: 2rem;">Our Values</h3>
            <p>Innovation, quality, and customer satisfaction drive everything we do. We're committed to providing an exceptional shopping experience and helping our customers find the perfect technology solutions for their needs.</p>
          </div>
          
          <a href="#shop" class="cta-button">Start Shopping</a>
        </div>
      </section>
    </div>
  `;
}

function renderContactPage() {
  return `
    <div class="page">
      <section class="section">
        <h1 class="section-title">Contact Us</h1>
        <div style="max-width: 600px; margin: 0 auto;">
          <p style="text-align: center; margin-bottom: 3rem; color: var(--gray-600);">
            Have questions? We'd love to hear from you. Get in touch with our team.
          </p>
          
          <form class="form" onsubmit="handleContactForm(event)">
            <div class="form-group">
              <label for="name" class="form-label">Your Name</label>
              <input type="text" id="name" name="name" class="form-input" required>
            </div>
            
            <div class="form-group">
              <label for="email" class="form-label">Email Address</label>
              <input type="email" id="email" name="email" class="form-input" required>
            </div>
            
            <div class="form-group">
              <label for="subject" class="form-label">Subject</label>
              <input type="text" id="subject" name="subject" class="form-input" required>
            </div>
            
            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea id="message" name="message" class="form-textarea" required></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
          </form>
          
          <div style="margin-top: 3rem; text-align: center; color: var(--gray-600);">
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Other Ways to Reach Us</h3>
            <p>📧 hello@passionfruit.com</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📍 123 Tech Street, Silicon Valley, CA 94102</p>
            <p style="margin-top: 1rem;">
              <strong>Business Hours:</strong><br>
              Monday - Friday: 9:00 AM - 6:00 PM PST<br>
              Saturday: 10:00 AM - 4:00 PM PST<br>
              Sunday: Closed
            </p>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderCartPage() {
  if (cart.length === 0) {
    return `
      <div class="page">
        <section class="section">
          <h1 class="section-title">Your Cart</h1>
          <div style="text-align: center; padding: 3rem;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">🛒</div>
            <h3 style="margin-bottom: 1rem;">Your cart is empty</h3>
            <p style="color: var(--gray-600); margin-bottom: 2rem;">Add some amazing products to get started!</p>
            <a href="#shop" class="cta-button">Start Shopping</a>
          </div>
        </section>
      </div>
    `;
  }
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  return `
    <div class="page">
      <section class="section">
        <h1 class="section-title">Your Cart</h1>
        
        <div class="cart-items">
          ${cart.map(item => renderCartItem(item)).join('')}
        </div>
        
        <div class="cart-summary">
          <div class="cart-total">Total: $${total.toFixed(2)}</div>
          <button class="cta-button" onclick="checkout()">Proceed to Checkout</button>
        </div>
      </section>
    </div>
  `;
}

function renderProductCard(product) {
  return `
    <div class="product-card animate-fade-in-up" onclick="navigateTo('product', 'id=${product.id}')">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-price">$${product.price}</div>
        <div class="product-actions">
          <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
          <button class="btn btn-secondary" onclick="event.stopPropagation(); navigateTo('product', 'id=${product.id}')">View Details</button>
        </div>
      </div>
    </div>
  `;
}

function renderCartItem(item) {
  return `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${item.price}</div>
      </div>
      <div class="cart-item-actions">
        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
        <span style="padding: 0 1rem;">${item.quantity}</span>
        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
        <button class="btn btn-secondary" onclick="removeFromCart(${item.id})" style="margin-left: 1rem;">Remove</button>
      </div>
    </div>
  `;
}

// Page-specific functionality
function initializePageFunctionality(page) {
  switch(page) {
    case 'contact':
      // Contact form is already handled by inline onsubmit
      break;
    default:
      break;
  }
}

// Cart functionality
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
  
  updateCartCount();
  
  // Show success message
  showNotification(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartCount();
  
  // Re-render cart page if currently viewing it
  if (currentPage === 'cart') {
    showPage('cart');
  }
  
  showNotification('Item removed from cart', 'info');
}

function updateQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = newQuantity;
    updateCartCount();
    
    // Re-render cart page if currently viewing it
    if (currentPage === 'cart') {
      showPage('cart');
    }
  }
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').textContent = count;
}

function checkout() {
  if (cart.length === 0) return;
  
  // Simulate checkout process
  showNotification('Thank you for purchasing with us!', 'info');
}

// Form handlers
function handleContactForm(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message')
  };
  
  // Simulate form submission
  showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
  
  // Reset form
  event.target.reset();
}

// Utility functions
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: ${type === 'success' ? 'var(--success-color)' : type === 'error' ? 'var(--error-color)' : 'var(--accent-color)'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow-lg);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Make functions globally available
window.navigateTo = navigateTo;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.checkout = checkout;
window.handleContactForm = handleContactForm;