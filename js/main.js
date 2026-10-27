/* Arn's Food and More Enterprise — site scripts */

const WHATSAPP_NUMBER = "233543921662"; // international format, no + or leading 0

const PRODUCTS = [
  {
    id: "baby-nutri-porridge",
    name: "HELLO Baby Nutri Porridge",
    category: "wellness",
    categoryLabel: "Wellness & Staples",
    tagline: "Gentle nutrition for growing babies, from 6 months.",
    description: "A nutritious complementary cereal-legume porridge made with corn, soya beans, beans, banana and ginger to support healthy growth and development.",
    image: "assets/img/hello-baby-nutri.jpeg",
    gallery: ["assets/img/hello-baby-nutri.jpeg", "assets/img/hello-baby-nutri-back.jpeg"],
    sizes: ["200g"],
    pricing: [{ size: "200g", retail: "TBA", wholesale: "TBA" }],
    status: "planned",
    statusLabel: "Planned",
    fda: "Pending",
    ingredients: ["Corn", "Soya beans", "Beans", "Banana", "Ginger"],
    usage: "Complementary food suitable for babies from 6 months onward.",
    packaging: "200g resealable stand-up pouch."
  },
  {
    id: "shito-original",
    name: "HELLO Hot Shito Powder (Original)",
    category: "shito",
    categoryLabel: "Shito Powders",
    tagline: "The flagship. Dry, oil-free, ready in seconds.",
    description: "Our innovative dry powdered version of Ghana's traditional shito. Packed with smoked fish, shrimp, chilli pepper, ginger and garlic — delivering robust local flavour without the oil, the mess, or the short shelf life.",
    image: "assets/img/shito-original.jpg",
    gallery: ["assets/img/shito-original.jpg", "assets/img/shito-original-white.jpg", "assets/img/lifestyle-pasta.jpg"],
    sizes: ["35g", "100g", "200g"],
    pricing: [
      { size: "35g", retail: "TBA", wholesale: "TBA" },
      { size: "100g", retail: "GH₵45", wholesale: "GH₵40" },
      { size: "200g", retail: "GH₵90", wholesale: "GH₵80" }
    ],
    status: "available",
    statusLabel: "Available Now",
    fda: "FDA/SC 26-1041",
    ingredients: ["Chilli pepper", "Onion", "Spring onion", "Garlic", "Ginger", "Smoked fish", "Dry fish", "Shrimp", "Green pepper", "Adjado pepper", "Salt", "Natural seasonings"],
    usage: "Perfect for rice, kenkey, banku, yam, potatoes, noodles, beans, eggs and general meal seasoning.",
    packaging: "Premium black stand-up resealable pouch."
  },
  {
    id: "shito-beef",
    name: "HELLO Hot Shito Powder — Beef",
    category: "shito",
    categoryLabel: "Shito Powders",
    tagline: "Shito powder, deepened with dried beef.",
    description: "The same oil-free HELLO Shito base, enriched with dried beef for a heartier, meatier flavour profile.",
    image: "assets/img/shito-beef.jpg",
    gallery: ["assets/img/shito-beef.jpg"],
    sizes: ["100g", "200g"],
    pricing: [
      { size: "100g", retail: "TBA", wholesale: "TBA" },
      { size: "200g", retail: "TBA", wholesale: "TBA" }
    ],
    status: "soon",
    statusLabel: "Coming Soon",
    fda: "In progress",
    ingredients: ["Chilli pepper", "Onion", "Garlic", "Ginger", "Dried beef", "Salt", "Natural seasonings"],
    usage: "Perfect for rice, kenkey, banku, yam, waakye and general meal seasoning.",
    packaging: "Premium black stand-up resealable pouch."
  },
  {
    id: "shito-beef-wele",
    name: "HELLO Hot Shito Powder — Beef & Wele",
    category: "shito",
    categoryLabel: "Shito Powders",
    tagline: "Beef and wele in one bold pouch.",
    description: "Shito powder combined with dried beef and wele (processed cattle hide) for a double dose of texture and flavour.",
    image: "assets/img/shito-beef-wele.jpg",
    gallery: ["assets/img/shito-beef-wele.jpg"],
    sizes: ["100g", "200g"],
    pricing: [
      { size: "100g", retail: "TBA", wholesale: "TBA" },
      { size: "200g", retail: "TBA", wholesale: "TBA" }
    ],
    status: "soon",
    statusLabel: "Coming Soon",
    fda: "In progress",
    ingredients: ["Chilli pepper", "Onion", "Garlic", "Ginger", "Dried beef", "Wele", "Salt", "Natural seasonings"],
    usage: "Perfect for rice, kenkey, banku, yam and general meal seasoning.",
    packaging: "Premium black stand-up resealable pouch."
  },
  {
    id: "shito-fish",
    name: "HELLO Hot Shito Powder — Fish",
    category: "shito",
    categoryLabel: "Shito Powders",
    tagline: "Extra smoked fish, extra depth.",
    description: "Our shito powder base with extra smoked fish, for a richer, more savoury seafood-forward flavour.",
    image: "assets/img/shito-lineup.jpg",
    gallery: ["assets/img/shito-lineup.jpg"],
    sizes: ["100g", "200g"],
    pricing: [
      { size: "100g", retail: "TBA", wholesale: "TBA" },
      { size: "200g", retail: "TBA", wholesale: "TBA" }
    ],
    status: "soon",
    statusLabel: "Coming Soon",
    fda: "In progress",
    ingredients: ["Chilli pepper", "Onion", "Garlic", "Ginger", "Extra smoked fish", "Shrimp", "Salt", "Natural seasonings"],
    usage: "Perfect for rice, kenkey, banku, yam and general meal seasoning.",
    packaging: "Premium black stand-up resealable pouch."
  },
  {
    id: "pepper-powder",
    name: "HELLO Hot Pepper Powder",
    category: "spices",
    categoryLabel: "Pure Spices",
    tagline: "100% dried chilli pepper. Nothing else.",
    description: "Pure, 100% dried chilli pepper ground to a fine powder — for cooks who want to control the heat themselves.",
    image: "assets/img/pepper-powder.jpg",
    gallery: ["assets/img/pepper-powder.jpg"],
    sizes: ["35g", "100g", "200g"],
    pricing: [
      { size: "35g", retail: "TBA", wholesale: "TBA" },
      { size: "100g", retail: "TBA", wholesale: "TBA" },
      { size: "200g", retail: "TBA", wholesale: "TBA" }
    ],
    status: "planned",
    statusLabel: "Planned",
    fda: "Pending",
    ingredients: ["100% dried chilli pepper"],
    usage: "Soups, stews, marinades and everyday seasoning.",
    packaging: "Resealable stand-up pouch."
  },
  {
    id: "ginger-powder",
    name: "HELLO Ginger Powder",
    category: "spices",
    categoryLabel: "Pure Spices",
    tagline: "100% dried ginger, ground fine.",
    description: "Pure dried ginger powder, part of the HELLO 3-in-1 spice line — bright, warm and versatile.",
    image: "assets/img/ginger-garlic-onion.jpg",
    gallery: ["assets/img/ginger-garlic-onion.jpg"],
    sizes: ["100g", "200g"],
    pricing: [
      { size: "100g", retail: "TBA", wholesale: "TBA" },
      { size: "200g", retail: "TBA", wholesale: "TBA" }
    ],
    status: "planned",
    statusLabel: "Planned",
    fda: "Pending",
    ingredients: ["100% dried ginger"],
    usage: "Soups, marinades, teas and everyday seasoning.",
    packaging: "Resealable stand-up pouch."
  },
  {
    id: "garlic-powder",
    name: "HELLO Garlic Powder",
    category: "spices",
    categoryLabel: "Pure Spices",
    tagline: "100% pure garlic, no fillers.",
    description: "Pure garlic powder — a pantry essential for everyday Ghanaian cooking, from the HELLO spice range.",
    image: "assets/img/ginger-garlic-onion.jpg",
    gallery: ["assets/img/ginger-garlic-onion.jpg"],
    sizes: ["100g", "200g"],
    pricing: [
      { size: "100g", retail: "TBA", wholesale: "TBA" },
      { size: "200g", retail: "TBA", wholesale: "TBA" }
    ],
    status: "planned",
    statusLabel: "Planned",
    fda: "Pending",
    ingredients: ["100% pure garlic powder"],
    usage: "Soups, stews, marinades and everyday seasoning.",
    packaging: "Resealable stand-up pouch."
  },
  {
    id: "onion-powder",
    name: "HELLO Onion Powder",
    category: "spices",
    categoryLabel: "Pure Spices",
    tagline: "100% dried onion powder.",
    description: "Pure dried onion, ground fine for quick, mess-free seasoning wherever fresh onion isn't practical.",
    image: "assets/img/ginger-garlic-onion.jpg",
    gallery: ["assets/img/ginger-garlic-onion.jpg"],
    sizes: ["100g", "200g"],
    pricing: [
      { size: "100g", retail: "TBA", wholesale: "TBA" },
      { size: "200g", retail: "TBA", wholesale: "TBA" }
    ],
    status: "planned",
    statusLabel: "Planned",
    fda: "Pending",
    ingredients: ["100% dried onion powder"],
    usage: "Soups, stews, marinades and everyday seasoning.",
    packaging: "Resealable stand-up pouch."
  },
  {
    id: "rock-salt",
    name: "HELLO Natural Rock Salt",
    category: "staples",
    categoryLabel: "Seasoning & Kitchen Staples",
    tagline: "Naturally white. Naturally mineral-rich.",
    description: "Natural rock salt with minerals, milled to a clean, even grain for daily kitchen use.",
    image: "assets/img/rock-salt.jpg",
    gallery: ["assets/img/rock-salt.jpg"],
    sizes: ["Various packs"],
    pricing: [{ size: "Various packs", retail: "TBA", wholesale: "TBA" }],
    status: "planned",
    statusLabel: "Planned",
    fda: "Pending",
    ingredients: ["Natural rock salt", "Trace minerals"],
    usage: "All-purpose seasoning for soups, stews and everyday cooking.",
    packaging: "Resealable stand-up pouch."
  },
  {
    id: "wele",
    name: "HELLO Wele",
    category: "staples",
    categoryLabel: "Seasoning & Kitchen Staples",
    tagline: "Processed cattle hide, hard or soft.",
    description: "Traditionally processed cattle hide (wele), prepared in both hard and soft styles for classic Ghanaian dishes.",
    image: "assets/img/wele.jpg",
    gallery: ["assets/img/wele.jpg"],
    sizes: ["Hard 100g", "Soft 100g"],
    pricing: [
      { size: "Hard 100g", retail: "TBA", wholesale: "TBA" },
      { size: "Soft 100g", retail: "TBA", wholesale: "TBA" }
    ],
    status: "planned",
    statusLabel: "Planned",
    fda: "Pending",
    ingredients: ["Processed cattle hide (wele)"],
    usage: "Stews, waakye sides and traditional Ghanaian dishes.",
    packaging: "Resealable stand-up pouch."
  },
  {
    id: "seasoning-cubes",
    name: "HELLO Seasoning Cubes",
    category: "staples",
    categoryLabel: "Seasoning & Kitchen Staples",
    tagline: "Multipurpose cubes — chicken, goat & cow.",
    description: "Multipurpose spice cubes available in chicken and goat-and-cow flavour profiles, for quick everyday seasoning.",
    image: "assets/img/cubes-chicken.jpg",
    gallery: ["assets/img/cubes-chicken.jpg", "assets/img/cubes-goatcow.jpg"],
    sizes: ["Cartons", "Sachets"],
    pricing: [{ size: "Cartons / Sachets", retail: "TBA", wholesale: "TBA" }],
    status: "planned",
    statusLabel: "Planned",
    fda: "Pending",
    ingredients: ["Salt", "Natural seasonings", "Flavour profile (chicken or goat & cow)"],
    usage: "Soups, stews, rice and everyday meal seasoning.",
    packaging: "Cartons and single-use sachets."
  },
  {
    id: "herbal-tea",
    name: "HELLO Herbal Vital Tea",
    category: "wellness",
    categoryLabel: "Wellness & Staples",
    tagline: "Natural, formulated, and brewing soon.",
    description: "A naturally formulated herbal tea blend, currently under development, made with wellness in mind.",
    image: "assets/img/herbal-tea.jpg",
    gallery: ["assets/img/herbal-tea.jpg"],
    sizes: ["Tea bags", "Loose leaf"],
    pricing: [{ size: "Tea bags / Loose", retail: "TBA", wholesale: "TBA" }],
    status: "dev",
    statusLabel: "Under Development",
    fda: "Pending",
    ingredients: ["Natural herbal blend (formulation under development)"],
    usage: "Daily brewing, hot or cold.",
    packaging: "Tea bag box or loose-leaf pouch."
  },
  {
    id: "volta-rice",
    name: "HELLO Volta Rice",
    category: "wellness",
    categoryLabel: "Wellness & Staples",
    tagline: "100% local rice from the Volta Region.",
    description: "Premium quality, naturally delicious rice sourced entirely from the Volta Region — a proud staple built on local value addition.",
    image: "assets/img/volta-rice.jpg",
    gallery: ["assets/img/volta-rice.jpg"],
    sizes: ["1kg", "2kg", "5kg", "25kg"],
    pricing: [
      { size: "1kg", retail: "TBA", wholesale: "TBA" },
      { size: "2kg", retail: "TBA", wholesale: "TBA" },
      { size: "5kg", retail: "TBA", wholesale: "TBA" },
      { size: "25kg", retail: "TBA", wholesale: "TBA" }
    ],
    status: "planned",
    statusLabel: "Planned",
    fda: "Pending",
    ingredients: ["100% local Volta Region rice"],
    usage: "Everyday cooking staple — jollof, plain rice, fried rice and more.",
    packaging: "Poly bags, 1kg–25kg."
  }
];

function waLink(message){
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

function initNav(){
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if(!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}

function initWhatsAppLinks(){
  document.querySelectorAll("[data-wa-message]").forEach(el => {
    const msg = el.getAttribute("data-wa-message");
    el.setAttribute("href", waLink(msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
}

function initForms(){
  document.querySelectorAll("form[data-wa-form]").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const lines = [];
      form.querySelectorAll("[data-label]").forEach(field => {
        const label = field.getAttribute("data-label");
        const val = data.get(field.name);
        if(val) lines.push(`${label}: ${val}`);
      });
      const intro = form.getAttribute("data-wa-intro") || "New enquiry from the website:";
      const message = `${intro}\n\n${lines.join("\n")}`;
      window.open(waLink(message), "_blank", "noopener");
      const success = form.parentElement.querySelector(".form-success");
      if(success){ success.classList.add("show"); }
      form.reset();
    });
  });
}

function renderProductGrid(container, filter){
  const list = filter && filter !== "all" ? PRODUCTS.filter(p => p.category === filter) : PRODUCTS;
  container.innerHTML = list.map(p => `
    <a class="p-card" href="product.html?id=${p.id}">
      <div class="thumb">
        <span class="status ${p.status}">${p.statusLabel}</span>
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="body">
        <span class="cat">${p.categoryLabel}</span>
        <h4>${p.name}</h4>
        <p>${p.tagline}</p>
        <div class="foot">
          <span class="price">${p.pricing[0].retail === "TBA" ? "Price on request" : p.pricing[0].retail + " retail"}</span>
          <span class="view">View details →</span>
        </div>
      </div>
    </a>
  `).join("");
}

function initCatalog(){
  const grid = document.querySelector("[data-product-grid]");
  if(!grid) return;
  const buttons = document.querySelectorAll(".filter-btn");
  renderProductGrid(grid, "all");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProductGrid(grid, btn.getAttribute("data-filter"));
    });
  });
}

function statusLabelClass(s){
  return { available:"available", soon:"soon", planned:"planned", dev:"dev" }[s] || "planned";
}

function initProductDetail(){
  const root = document.querySelector("[data-product-detail]");
  if(!root) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || PRODUCTS[0].id;
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];

  document.title = `${p.name} | Arn's Food and More Enterprise`;

  const pricingRows = p.pricing.map(row => `
    <tr><td>${row.size}</td><td>Retail ${row.retail}${row.wholesale && row.wholesale !== "TBA" ? " · Wholesale " + row.wholesale : ""}</td></tr>
  `).join("");

  root.innerHTML = `
    <div class="crumb"><a href="products.html">Products</a> / ${p.categoryLabel} / <span>${p.name}</span></div>
    <div class="detail-grid">
      <div class="detail-media">
        <img src="${p.image}" alt="${p.name}" id="detail-main-img">
        <div class="detail-thumbs">
          ${p.gallery.map(g => `<img src="${g}" alt="" data-thumb>`).join("")}
        </div>
      </div>
      <div class="detail-copy">
        <span class="status ${statusLabelClass(p.status)}" style="position:static;display:inline-flex;margin-bottom:14px;">${p.statusLabel}</span>
        <h1>${p.name}</h1>
        <p class="lead" style="font-size:17px;color:#4a4a4a;">${p.description}</p>
        <div class="badge-row">
          <span class="badge fda">FDA: ${p.fda}</span>
          <span class="badge hot">${p.categoryLabel}</span>
          <span class="badge gold">Sizes: ${p.sizes.join(" · ")}</span>
        </div>
        <table class="spec-table">
          <tr><td>Pack sizes</td><td>${p.sizes.join(", ")}</td></tr>
          ${pricingRows}
          <tr><td>Packaging</td><td>${p.packaging}</td></tr>
          <tr><td>Ingredients</td><td>${p.ingredients.join(", ")}</td></tr>
          <tr><td>Usage</td><td>${p.usage}</td></tr>
        </table>
        <div class="detail-cta">
          <a class="btn btn-primary" data-wa-message="Hello Arn's Food and More Enterprise, I would like to order ${p.name}. Please share availability and pricing." href="#">Order on WhatsApp</a>
          <a class="btn btn-outline" href="wholesale.html">Enquire Wholesale</a>
        </div>
      </div>
    </div>
  `;

  root.querySelectorAll("[data-thumb]").forEach(t => {
    t.addEventListener("click", () => {
      document.getElementById("detail-main-img").src = t.getAttribute("src");
    });
  });

  initWhatsAppLinks();

  // related products
  const relatedRoot = document.querySelector("[data-related]");
  if(relatedRoot){
    const related = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0,3);
    renderProductGrid(relatedRoot, "all");
    relatedRoot.innerHTML = related.map(rp => `
      <a class="p-card" href="product.html?id=${rp.id}">
        <div class="thumb">
          <span class="status ${rp.status}">${rp.statusLabel}</span>
          <img src="${rp.image}" alt="${rp.name}" loading="lazy">
        </div>
        <div class="body">
          <span class="cat">${rp.categoryLabel}</span>
          <h4>${rp.name}</h4>
          <p>${rp.tagline}</p>
        </div>
      </a>
    `).join("");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initWhatsAppLinks();
  initForms();
  initCatalog();
  initProductDetail();

  // year in footer
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
});
