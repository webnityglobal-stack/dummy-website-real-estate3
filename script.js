
/* ==========================================
   PROPVANTA - REAL ESTATE WEBSITE
   Property Data, Search & Navigation
========================================== */

// 1. PROPERTY DATA
const properties = [
  {
    id: 1,
    name: "Green Valley Residential Plot",
    type: "Residential Plot",
    group: "Plots",
    location: "Dehradun, Uttarakhand",
    price: 2800000,
    priceLabel: "₹28 Lakhs Onwards",
    area: "150 Sq. Yd.",
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
    description: "Residential plot in a green developing locality."
  },
  {
    id: 2,
    name: "Modern 2 BHK Apartment",
    type: "2 BHK Flat",
    group: "Flats",
    location: "Delhi NCR",
    price: 4500000,
    priceLabel: "₹45 Lakhs Onwards",
    area: "980 Sq. Ft.",
    badge: "Hot Deal",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    description: "Modern apartment with a comfortable layout."
  },
  {
    id: 3,
    name: "Agricultural Farm Land",
    type: "Agricultural Land",
    group: "Land",
    location: "Rishikesh, Uttarakhand",
    price: 2500000,
    priceLabel: "₹25 Lakhs Onwards",
    area: "1 Acre",
    badge: "Investment",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
    description: "Open agricultural land for suitable land-use plans."
  },
  {
    id: 4,
    name: "Premium Commercial Office",
    type: "Office Space",
    group: "Commercial",
    location: "Gurugram, Haryana",
    price: 12000000,
    priceLabel: "₹1.20 Crore Onwards",
    area: "450 Sq. Ft.",
    badge: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
    description: "Office space in a modern commercial building."
  },
  {
    id: 5,
    name: "Luxury 3 BHK Flat",
    type: "3 BHK Flat",
    group: "Flats",
    location: "Noida, Uttar Pradesh",
    price: 7500000,
    priceLabel: "₹75 Lakhs Onwards",
    area: "1450 Sq. Ft.",
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    description: "Spacious flat suitable for modern family living."
  },
  {
    id: 6,
    name: "Farmhouse Plot",
    type: "Farmhouse Plot",
    group: "Plots",
    location: "Meerut, Uttar Pradesh",
    price: 1800000,
    priceLabel: "₹18 Lakhs Onwards",
    area: "200 Sq. Yd.",
    badge: "New Listing",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=900&q=85",
    description: "A plot option for a farmhouse-style project."
  },
  {
    id: 7,
    name: "Industrial Land Parcel",
    type: "Industrial Land",
    group: "Land",
    location: "Ghaziabad, Uttar Pradesh",
    price: 8500000,
    priceLabel: "₹85 Lakhs Onwards",
    area: "500 Sq. Yd.",
    badge: "Investment",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=85",
    description: "Industrial land listing; verify permitted usage."
  },
  {
    id: 8,
    name: "Retail Shop Space",
    type: "Shop",
    group: "Commercial",
    location: "Noida, Uttar Pradesh",
    price: 5500000,
    priceLabel: "₹55 Lakhs Onwards",
    area: "350 Sq. Ft.",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    description: "Commercial shop option for retail businesses."
  },
  {
    id: 9,
    name: "Ready to Move Apartment",
    type: "Ready to Move Flat",
    group: "Flats",
    location: "Indirapuram, Ghaziabad",
    price: 5200000,
    priceLabel: "₹52 Lakhs Onwards",
    area: "1100 Sq. Ft.",
    badge: "Ready to Move",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
    description: "Apartment listing advertised as ready to move."
  },
  {
    id: 10,
    name: "Gated Community Plot",
    type: "Gated Community Plot",
    group: "Plots",
    location: "Haridwar, Uttarakhand",
    price: 2200000,
    priceLabel: "₹22 Lakhs Onwards",
    area: "120 Sq. Yd.",
    badge: "New Project",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    description: "Plot listing in a planned development concept."
  },
  {
    id: 11,
    name: "Farm Land",
    type: "Farm Land",
    group: "Land",
    location: "Meerut, Uttar Pradesh",
    price: 3200000,
    priceLabel: "₹32 Lakhs Onwards",
    area: "1.5 Acres",
    badge: "Farm Land",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85",
    description: "Land listing for buyers exploring rural properties."
  },
  {
    id: 12,
    name: "Luxury Apartment",
    type: "Luxury Apartment",
    group: "Flats",
    location: "Gurugram, Haryana",
    price: 15000000,
    priceLabel: "₹1.50 Crore Onwards",
    area: "2200 Sq. Ft.",
    badge: "Luxury",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    description: "Luxury apartment listing with a contemporary interior."
  },
  {
    id: 13,
    name: "Commercial Plot",
    type: "Commercial Plot",
    group: "Plots",
    location: "Noida, Uttar Pradesh",
    price: 6500000,
    priceLabel: "₹65 Lakhs Onwards",
    area: "250 Sq. Yd.",
    badge: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
    description: "Commercial plot listing; check development permissions."
  },
  {
    id: 14,
    name: "Warehouse Space",
    type: "Warehouse",
    group: "Commercial",
    location: "Ghaziabad, Uttar Pradesh",
    price: 9500000,
    priceLabel: "₹95 Lakhs Onwards",
    area: "2000 Sq. Ft.",
    badge: "Commercial",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
    description: "Warehouse listing for storage or logistics requirements."
  }
];

// 2. DOM ELEMENTS
const propertyGrid = document.getElementById("propertyGrid");
const searchForm = document.getElementById("searchForm");
const locationInput = document.getElementById("location");
const propertyTypeSelect = document.getElementById("propertyType");
const budgetSelect = document.getElementById("budget");
const resultMessage = document.getElementById("resultMessage");
const showAllButton = document.getElementById("showAll");

const navLinks = document.getElementById("navLinks");
const menuToggle = document.getElementById("menuToggle");

let selectedGroup = "Plots";
let filteredProperties = [...properties];

// 3. DISPLAY PROPERTY CARDS
function renderProperties(list) {
  if (!propertyGrid) return;

  propertyGrid.innerHTML = "";

  if (list.length === 0) {
    propertyGrid.innerHTML = `
      <div class="no-results">
        <h3>No properties found</h3>
        <p>Try another location, property type or budget.</p>
        <button class="btn btn-orange" id="resetSearch">
          Clear Filters
        </button>
      </div>
    `;

    const resetButton = document.getElementById("resetSearch");

    if (resetButton) {
      resetButton.addEventListener("click", resetSearch);
    }

    if (resultMessage) {
      resultMessage.textContent = "No matching properties found.";
    }

    return;
  }

  list.forEach((property) => {
    const card = document.createElement("article");
    card.className = "property-card";

    const image = document.createElement("img");
    image.src = property.image;
    image.alt = property.name;
    image.loading = "lazy";

    image.addEventListener("error", () => {
      image.style.display = "none";
    });

    const imageContainer = document.createElement("div");
    imageContainer.className = "property-image";

    const badge = document.createElement("span");
    badge.className = "property-badge";
    badge.textContent = property.badge;

    imageContainer.append(image, badge);

    const details = document.createElement("div");
    details.className = "property-details";

    const title = document.createElement("h3");
    title.textContent = property.name;

    const location = document.createElement("p");
    location.className = "property-location";
    location.textContent = "⌖ " + property.location;

    const price = document.createElement("p");
    price.className = "property-price";
    price.textContent = property.priceLabel;

    const meta = document.createElement("div");
    meta.className = "property-meta";

    const type = document.createElement("span");
    type.textContent = property.type;

    const area = document.createElement("span");
    area.textContent = "▧ " + property.area;

    meta.append(type, area);

    const button = document.createElement("button");
    button.className = "btn btn-orange";
    button.textContent = "View Details →";

    button.addEventListener("click", () => {
      showPropertyDetails(property.id);
    });

    details.append(title, location, price, meta, button);
    card.append(imageContainer, details);
    propertyGrid.appendChild(card);
  });

  if (resultMessage) {
    resultMessage.textContent =
      `Showing ${list.length} propert${list.length === 1 ? "y" : "ies"}.`;
  }
}

// 4. PROPERTY DETAILS
function showPropertyDetails(id) {
  const property = properties.find((item) => item.id === id);

  if (!property) return;

  const message = [
    "Hello PropVanta, I am interested in this property:",
    "",
    "Property: " + property.name,
    "Type: " + property.type,
    "Location: " + property.location,
    "Price: " + property.priceLabel,
    "Area: " + property.area,
    "",
    "Please share more details."
  ].join("\n");

  // Replace with your actual business WhatsApp number.
  const whatsappNumber = "919876543210";

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
}

// 5. SEARCH AND FILTER
function filterProperties() {
  const location = locationInput.value.trim().toLowerCase();
  const type = propertyTypeSelect.value;
  const maxBudget = Number(budgetSelect.value) || Infinity;

  filteredProperties = properties.filter((property) => {
    const matchesLocation =
      !location ||
      property.location.toLowerCase().includes(location);

    const matchesType =
      !type || property.type === type;

    const matchesBudget =
      property.price <= maxBudget;

    const matchesGroup =
      !selectedGroup || property.group === selectedGroup;

    return (
      matchesLocation &&
      matchesType &&
      matchesBudget &&
      matchesGroup
    );
  });

  renderProperties(filteredProperties);

  const section = document.getElementById("properties");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// 6. SEARCH FORM
if (searchForm) {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    filterProperties();
  });
}

// 7. PROPERTY CATEGORY TABS
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => {
      item.classList.remove("active");
    });

    tab.classList.add("active");

    const category = tab.dataset.searchType;

    const groupMap = {
      Plots: "Plots",
      Flats: "Flats",
      Land: "Land",
      Commercial: "Commercial"
    };

    selectedGroup = groupMap[category] || "";

    if (propertyTypeSelect) {
      propertyTypeSelect.value = "";
    }

    filterProperties();
  });
});

// 8. NAVBAR CATEGORY LINKS
document.querySelectorAll("[data-type]").forEach((link) => {
  link.addEventListener("click", () => {
    const type = link.dataset.type;

    selectedGroup = "";

    if (propertyTypeSelect) {
      propertyTypeSelect.value = type === "All" ? "" : type;
    }

    if (navLinks) {
      navLinks.classList.remove("show");
    }

    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
    }

    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      dropdown.classList.remove("open");
    });

    filterProperties();
  });
});

// 9. VIEW ALL PROPERTIES
if (showAllButton) {
  showAllButton.addEventListener("click", () => {
    selectedGroup = "";

    if (locationInput) locationInput.value = "";
    if (propertyTypeSelect) propertyTypeSelect.value = "";
    if (budgetSelect) budgetSelect.value = "";

    document.querySelectorAll(".tab").forEach((tab) => {
      tab.classList.remove("active");
    });

    renderProperties(properties);
  });
}

// 10. MOBILE NAVIGATION
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });
}

// 11. MOBILE DROPDOWN BUTTONS
document.querySelectorAll(".drop-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const dropdown = button.closest(".dropdown");

    if (!dropdown) return;

    const willOpen = !dropdown.classList.contains("open");

    document.querySelectorAll(".dropdown").forEach((item) => {
      item.classList.remove("open");
    });

    if (willOpen) {
      dropdown.classList.add("open");
    }
  });
});

// 12. CLOSE MOBILE MENU WHEN CLICKING A NORMAL LINK
document.querySelectorAll(
  '.nav-links > a:not([data-type])'
).forEach((link) => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("show");

    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    }

    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      dropdown.classList.remove("open");
    });
  });
});

// 13. FOOTER YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// 14. INITIAL PAGE LOAD
renderProperties(properties.filter(
  (property) => property.group === selectedGroup
));
