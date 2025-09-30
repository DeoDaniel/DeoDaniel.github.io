<p align="center">
  <img src="./public/passion-fruit-1.svg" alt="Passionfruit Logo" width="150"/>
</p>

<h1 align="center">Passionfruit</h1>

<p align="center">
  <strong>A modern, responsive e-commerce website for electronic products and personal devices built with semantic HTML5, native CSS3, and vanilla JavaScript.</strong>
  <br />
  <br />
  <a href="https://deodaniel.github.io/Passionfruit"><strong>View Live Demo »</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Online-brightgreen?style=for-the-badge" alt="Website Status">
</p>

---

## 🚀 Features

- **Multi-page Navigation**: Smooth client-side routing without page refreshes
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Product Catalog**: Filterable product grid with detailed product pages
- **Shopping Cart**: Add/remove items with quantity management
- **Contact Form**: Functional contact form with validation
- **Modern UI**: Clean design with smooth animations and hover effects

## 🛠️ Technologies Used

### HTML5 (Semantic Structure)
- **Semantic Elements**: Uses proper HTML5 semantic tags for better accessibility and SEO
  - `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
  - `<article>` for product cards
  - Proper heading hierarchy (h1-h4)
- **Accessibility**: ARIA labels, alt attributes, and semantic markup
- **SEO Optimized**: Meta tags, structured content, and semantic HTML

### CSS3 (Modern Styling)
- **CSS Custom Properties**: Comprehensive design system with CSS variables
  - Color palette with primary, secondary, and accent colors
  - Typography scale with consistent font sizes
  - Spacing system using 8px grid
  - Border radius and shadow definitions
- **Flexbox & Grid**: Modern layout techniques
  - CSS Grid for product layouts and responsive design
  - Flexbox for component alignment and navigation
- **Responsive Design**: Mobile-first approach with breakpoints
  - Tablet: 768px and below
  - Mobile: 480px and below
- **Animations**: Smooth transitions and micro-interactions
  - Hover effects on cards and buttons
  - Page transition animations
  - Loading states and feedback

### JavaScript (Vanilla ES6+)
- **Client-side Routing**: Hash-based routing system
  - URL management with `window.location.hash`
  - Dynamic page rendering without server requests
- **State Management**: Application state handling
  - Shopping cart state persistence
  - Current page and filter states
- **DOM Manipulation**: Dynamic content rendering
  - Template literals for HTML generation
  - Event delegation and handling
- **Local Storage**: Cart persistence across sessions

## 📁 Project Structure

```
passionfruit-website/
├── index.html          # Main HTML structure
├── style.css           # All CSS styling and responsive design
├── main.js             # JavaScript functionality and routing
├── package.json        # Project configuration and dependencies
├── public/
│   └── passion-fruit-1.svg       # Passionfuit logo asset
└── README.md          # Project documentation
```

## 🏗️ Architecture Overview

### HTML Structure (`index.html`)
The HTML file serves as the foundation with a semantic structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Meta tags, title, and SEO optimization -->
  </head>
  <body>
    <header class="header">
      <!-- Navigation with brand and menu -->
    </header>
    
    <main id="app">
      <!-- Dynamic content insertion point -->
    </main>
    
    <footer class="footer">
      <!-- Site footer with links and contact info -->
    </footer>
  </body>
</html>
```

**Key Elements:**
- **Header**: Contains navigation with logo and menu items
- **Main**: Dynamic content area where pages are rendered
- **Footer**: Static footer with company information and links

### CSS Architecture (`style.css`)
The CSS is organized using a systematic approach:

#### 1. CSS Custom Properties (Design System)
```css
:root {
  --primary-color: #1a202c;
  --secondary-color: #f56500;
  --accent-color: #38b2ac;
  /* Typography, spacing, and component variables */
}
```

#### 2. Component-Based Styling
- **Base Styles**: Reset, typography, and global styles
- **Layout Components**: Header, navigation, footer
- **UI Components**: Buttons, cards, forms, modals
- **Page-Specific Styles**: Homepage hero, product grids, cart
- **Responsive Utilities**: Media queries and responsive helpers

#### 3. Responsive Design Strategy
```css
/* Mobile-first approach */
.product-grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile default */
}

@media (min-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet */
  }
}

@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop */
  }
}
```

### JavaScript Architecture (`main.js`)
The JavaScript is structured in a modular approach:

#### 1. Data Layer
```javascript
const products = [
  // Product data with specifications and images
];

let cart = [];
let currentPage = 'home';
```

#### 2. Router System
```javascript
function initializeRouter() {
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('load', handleRoute);
}

function handleRoute() {
  const hash = window.location.hash.slice(1) || 'home';
  const [page, params] = hash.split('?');
  showPage(page, params);
}
```

#### 3. Page Rendering
```javascript
function showPage(page, params = '') {
  const app = document.getElementById('app');
  
  switch(page) {
    case 'home':
      pageContent = renderHomePage();
      break;
    case 'shop':
      pageContent = renderShopPage(category);
      break;
    // Additional pages...
  }
  
  app.innerHTML = pageContent;
}
```

#### 4. Component Rendering
```javascript
function renderProductCard(product) {
  return `
    <div class="product-card" onclick="navigateTo('product', 'id=${product.id}')">
      <!-- Product card HTML template -->
    </div>
  `;
}
```

## 🎨 Design System

### Color Palette
- **Primary**: `#1a202c` (Deep Navy) - Headers, text, primary elements
- **Secondary**: `#f56500` (Vibrant Orange) - CTAs, highlights, brand accent
- **Accent**: `#38b2ac` (Teal) - Links, secondary actions
- **Grays**: 50-900 scale for backgrounds, borders, and text hierarchy

### Typography
- **Font Family**: Inter with system font fallbacks
- **Scale**: 0.75rem to 3rem with consistent line heights
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Spacing System
- **Base Unit**: 8px grid system
- **Scale**: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px

## 🔧 Key Features Implementation

### 1. Client-Side Routing
- Hash-based routing for single-page application behavior
- URL parameter parsing for product IDs and categories
- Browser history management

### 2. Shopping Cart
- Add/remove items with quantity management
- Local storage persistence
- Real-time cart count updates
- Cart summary with total calculation

### 3. Product Filtering
- Category-based filtering
- Dynamic product grid updates
- URL state management for filters

### 4. Responsive Images
- Placeholder images from Pexels
- Lazy loading for performance
- Responsive image sizing with `object-fit`

### 5. Form Handling
- Contact form with validation
- Form submission simulation
- User feedback with notifications

## 🚀 Getting Started

### Prerequisites
- Node.js (for development server)
- Modern web browser

### Installation
1. Clone or download the project files
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Production Build
Create a production build:
```bash
npm run build
```

## 📱 Browser Support

- **Modern Browsers**: Chrome 60+, Firefox 60+, Safari 12+, Edge 79+
- **CSS Features**: CSS Grid, Flexbox, Custom Properties
- **JavaScript**: ES6+ features (arrow functions, template literals, destructuring)

## 🎯 Performance Optimizations

- **Lazy Loading**: Images load only when needed
- **CSS Optimization**: Efficient selectors and minimal reflows
- **JavaScript**: Event delegation and efficient DOM manipulation
- **Responsive Images**: Appropriate sizing for different devices

## 🔮 Future Enhancements

- User authentication and accounts
- Payment integration
- Product search functionality
- Wishlist feature
- Product reviews and ratings
- Advanced filtering (price range, brand, etc.)
- Progressive Web App (PWA) features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ by Daniel Tadeo Evantiyasa - 1313624028 - ILKOM 2024**
