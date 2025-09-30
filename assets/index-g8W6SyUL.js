(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}})();const c=[{id:1,name:"iFruit 18 Pro Max",price:1199,category:"smartphones",description:"The most advanced iFruit ever with titanium design and E18 Pro chip.",fullDescription:"Experience the ultimate in smartphone technology with the iFruit 18 Pro Max. Featuring a stunning titanium design, the powerful E18 Pro chip, and an advanced camera system that captures life in incredible detail.",image:"https://img.freepik.com/premium-photo/futuristic-smart-phone-with-transparent-display-human-hands-concept-actual-future-innovative-ideas-best-technologies-humanity_564276-4433.jpg",specs:{Display:"6.7-inch Crystal Clear AMOLED",Chip:"E18 Pro",Storage:"256GB",Camera:"48MP Main, 12MP Ultra Wide, 12MP Telephoto",Battery:"Up to 29 hours video playback",Colors:"Natural Titanium, Blue Titanium, Black Titanium"}},{id:2,name:'PassionBook Pro 16"',price:2499,category:"laptops",description:"Professional laptop with X3 Pro chip for ultimate performance.",fullDescription:"Built for professionals who demand the best. The PassionBook Pro 16-inch with X3 Pro chip delivers exceptional performance for video editing, 3D rendering, and complex workflows.",image:"https://cdn.hiconsumption.com/wp-content/uploads/2024/02/Lenovo-ThinkBook-Transparent-Display-Laptop-Concept-1.jpg",specs:{Display:"16.2-inch Super Clear AMOLED",Chip:"eCore X3 Pro",Memory:"18GB unified memory",Storage:"512GB SSD",Battery:"Up to 22 hours",Ports:"3x Thunderbolt 4, HDMI, SDXC, MagCharge 3"}},{id:3,name:"FruitPad Air",price:599,category:"tablets",description:"Versatile tablet perfect for creativity and productivity.",fullDescription:"The FruitPad Air combines powerful performance with versatile functionality. Perfect for digital artists, students, and professionals who need a portable creative canvas.",image:"https://media.istockphoto.com/id/171363000/photo/futuristic-digital-tablet-in-the-hands.jpg?s=612x612&w=0&k=20&c=JauMA0sqbvqsFC144xd0_JOO3PHaXfATN2uO_W8hGd4=",specs:{Display:"10.9-inch AMOLED XDR",Chip:"eCore X1",Storage:"64GB",Camera:"12MP Wide, 12MP Ultra Wide front",Compatibility:"Passionfruit Pencil (2nd gen), Snap Keyboard",Colors:"Space Gray, Pink, Purple, Blue, Starlight"}},{id:4,name:"AirPhone Pro",price:249,category:"accessories",description:"Premium wireless earbuds with active noise cancellation.",fullDescription:"Immerse yourself in superior sound quality with AirPhone Pro. Features adaptive transparency, personalized spatial audio, and all-day comfort.",image:"https://i.pinimg.com/736x/3f/3a/c5/3f3ac557933fa7fcd9ebb0fc0bce3ab8.jpg",specs:{Audio:"Adaptive Audio, Adaptive Noise Cancellation",Battery:"Up to 6 hours listening time",Chip:"W2 chip",Controls:"Touch control, AI voice control",Compatibility:"All Passionfruit devices",Case:"MagCharge and Type-C charging"}},{id:5,name:"iFruit 18 S Ultra",price:1299,category:"smartphones",description:"Flagship phone with Wireless Pen and advanced AI features.",fullDescription:"The iFruit 18 S Ultra redefines mobile productivity with its integrated Wireless Pen, AI-powered camera system, and stunning display that adapts to any lighting condition.",image:"https://png.pngtree.com/png-clipart/20250211/original/pngtree-a-futuristic-paper-thin-digital-notebook-png-image_20421275.png",specs:{Display:"6.8-inch Dynamic AMOLED 4X",Processor:"Snapdragon 8 Gen 4",RAM:"12GB",Storage:"256GB",Camera:"40MP main, 20MP telephoto, 12MP ultra-wide","S Pen":"Built-in S Pen with Air Actions"}},{id:6,name:"PassionBook Flex 13",price:999,category:"laptops",description:"Ultra-portable laptop with stunning InfinityEdge display.",fullDescription:"Experience premium computing in an ultra-compact all-in-one form. The PassionBook Flex 13 delivers powerful performance in a sleek design that fits anywhere.",image:"https://www.yankodesign.com/images/design_news/2019/09/the-future-of-flexible-displays-lies-in-laptops-the-flexbook-concept-shows-why/flexbook_concept_2.jpg",specs:{Display:"13.4-inch FHD+ InfinityEdge",Processor:"Intel Core i7-1360P",RAM:"16GB LPDDR5",Storage:"512GB PCIe NVMe SSD",Graphics:"Intel Iris Xe",Weight:"2.59 gr"}}];let u="home",n=[];document.addEventListener("DOMContentLoaded",function(){f(),b(),d(),l("home")});function f(){window.addEventListener("hashchange",m),window.addEventListener("load",m)}function m(){const e=window.location.hash.slice(1)||"home",[t,i]=e.split("?");l(t,i)}function y(e,t=""){const i=t?`#${e}?${t}`:`#${e}`;window.location.hash=i}function b(){const e=document.querySelector(".nav-toggle"),t=document.querySelector(".nav-menu");e.addEventListener("click",()=>{t.classList.toggle("active")}),document.querySelectorAll(".nav-link").forEach(i=>{i.addEventListener("click",()=>{t.classList.remove("active"),document.querySelectorAll(".nav-link").forEach(o=>o.classList.remove("active")),i.classList.add("active")})})}function l(e,t=""){const i=document.getElementById("app");u=e;const o=new URLSearchParams(t);i.innerHTML="";let a;switch(e){case"home":a=h();break;case"shop":const s=o.get("category")||"all";a=P(s);break;case"product":const r=o.get("id");a=w(r);break;case"about":a=C();break;case"contact":a=k();break;case"cart":a=T();break;default:a=h()}i.innerHTML=a,i.querySelector(".page").classList.add("active")}function h(){return`
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
          ${c.slice(0,3).map(t=>g(t)).join("")}
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
  `}function P(e="all"){let t=c;return e!=="all"&&(t=c.filter(i=>i.category===e)),`
    <div class="page">
      <section class="section">
        <h1 class="section-title">Shop ${e!=="all"?e.charAt(0).toUpperCase()+e.slice(1):"All Products"}</h1>
        
        <div class="filters">
          <button class="filter-btn ${e==="all"?"active":""}" onclick="navigateTo('shop', 'category=all')">All</button>
          <button class="filter-btn ${e==="smartphones"?"active":""}" onclick="navigateTo('shop', 'category=smartphones')">Smartphones</button>
          <button class="filter-btn ${e==="laptops"?"active":""}" onclick="navigateTo('shop', 'category=laptops')">Laptops</button>
          <button class="filter-btn ${e==="tablets"?"active":""}" onclick="navigateTo('shop', 'category=tablets')">Tablets</button>
          <button class="filter-btn ${e==="accessories"?"active":""}" onclick="navigateTo('shop', 'category=accessories')">Accessories</button>
        </div>
        
        <div class="product-grid">
          ${t.map(i=>g(i)).join("")}
        </div>
      </section>
    </div>
  `}function w(e){const t=c.find(i=>i.id==e);return t?`
    <div class="page">
      <section class="section">
        <div class="product-detail">
          <div class="product-detail-image">
            <img src="${t.image}" alt="${t.name}" />
          </div>
          <div class="product-detail-info">
            <h1>${t.name}</h1>
            <div class="product-detail-price">$${t.price}</div>
            <div class="product-description-full">
              ${t.fullDescription}
            </div>
            
            <div class="product-specs">
              <h3>Specifications</h3>
              <ul class="specs-list">
                ${Object.entries(t.specs).map(([i,o])=>`
                  <li><strong>${i}:</strong> <span>${o}</span></li>
                `).join("")}
              </ul>
            </div>
            
            <div class="product-actions">
              <button class="btn btn-primary" onclick="addToCart(${t.id})">Add to Cart</button>
              <button class="btn btn-secondary" onclick="navigateTo('shop')">Back to Shop</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `:`
      <div class="page">
        <section class="section">
          <h1>Product not found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <a href="#shop" class="btn btn-primary">Back to Shop</a>
        </section>
      </div>
    `}function C(){return`
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
  `}function k(){return`
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
  `}function T(){if(n.length===0)return`
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
    `;const e=n.reduce((t,i)=>t+i.price*i.quantity,0);return`
    <div class="page">
      <section class="section">
        <h1 class="section-title">Your Cart</h1>
        
        <div class="cart-items">
          ${n.map(t=>S(t)).join("")}
        </div>
        
        <div class="cart-summary">
          <div class="cart-total">Total: $${e.toFixed(2)}</div>
          <button class="cta-button" onclick="checkout()">Proceed to Checkout</button>
        </div>
      </section>
    </div>
  `}function g(e){return`
    <div class="product-card animate-fade-in-up" onclick="navigateTo('product', 'id=${e.id}')">
      <div class="product-image">
        <img src="${e.image}" alt="${e.name}" loading="lazy" />
      </div>
      <div class="product-info">
        <h3 class="product-name">${e.name}</h3>
        <p class="product-description">${e.description}</p>
        <div class="product-price">$${e.price}</div>
        <div class="product-actions">
          <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart(${e.id})">Add to Cart</button>
          <button class="btn btn-secondary" onclick="event.stopPropagation(); navigateTo('product', 'id=${e.id}')">View Details</button>
        </div>
      </div>
    </div>
  `}function S(e){return`
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${e.image}" alt="${e.name}" />
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${e.name}</div>
        <div class="cart-item-price">$${e.price}</div>
      </div>
      <div class="cart-item-actions">
        <button class="quantity-btn" onclick="updateQuantity(${e.id}, ${e.quantity-1})">-</button>
        <span style="padding: 0 1rem;">${e.quantity}</span>
        <button class="quantity-btn" onclick="updateQuantity(${e.id}, ${e.quantity+1})">+</button>
        <button class="btn btn-secondary" onclick="removeFromCart(${e.id})" style="margin-left: 1rem;">Remove</button>
      </div>
    </div>
  `}function $(e){const t=c.find(o=>o.id===e);if(!t)return;const i=n.find(o=>o.id===e);i?i.quantity+=1:n.push({...t,quantity:1}),d(),p(`${t.name} added to cart!`,"success")}function v(e){n=n.filter(t=>t.id!==e),d(),u==="cart"&&l("cart"),p("Item removed from cart","info")}function x(e,t){if(t<=0){v(e);return}const i=n.find(o=>o.id===e);i&&(i.quantity=t,d(),u==="cart"&&l("cart"))}function d(){const e=n.reduce((t,i)=>t+i.quantity,0);document.getElementById("cart-count").textContent=e}function A(){n.length!==0&&p("Thank you for purchasing with us!","info")}function M(e){e.preventDefault();const t=new FormData(e.target);t.get("name"),t.get("email"),t.get("subject"),t.get("message"),p("Thank you for your message! We'll get back to you soon.","success"),e.target.reset()}function p(e,t="info"){const i=document.createElement("div");i.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: ${t==="success"?"var(--success-color)":t==="error"?"var(--error-color)":"var(--accent-color)"};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow-lg);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `,i.textContent=e,document.body.appendChild(i),setTimeout(()=>{i.style.transform="translateX(0)"},100),setTimeout(()=>{i.style.transform="translateX(100%)",setTimeout(()=>{document.body.removeChild(i)},300)},3e3)}window.navigateTo=y;window.addToCart=$;window.removeFromCart=v;window.updateQuantity=x;window.checkout=A;window.handleContactForm=M;
