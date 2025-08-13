
const productGrid = document.getElementById("product-grid");
const pagination = document.getElementById("pagination");
let products = [];
let currentPage = 1;
const productsPerPage = 5;

// Fetch products from JSON
fetch("products.json")
    .then(response => response.json())
    .then(data => {
        products = data;
        renderProducts();
        setupPagination();
    })
    .catch(err => console.error("Error loading products:", err));

// Render products for current page
function renderProducts() {
    productGrid.innerHTML = "";
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = products.slice(start, end);

    paginatedProducts.forEach(prod => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <div class="product-img" style="background-image: url('${prod.image}')"></div>
            <div class="product-tag">${prod.tag}</div>
            <div class="product-info">
                <h3>${prod.name}</h3>
                <span class="product-price">₹${prod.price}</span>
                <a href="https://wa.me/911234567890?text=Hi,%20I%20want%20to%20order%20${encodeURIComponent(prod.name)}" target="_blank" class="btn">Order via WhatsApp</a>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Setup pagination buttons
function setupPagination() {
    pagination.innerHTML = "";
    const pageCount = Math.ceil(products.length / productsPerPage);
    for(let i = 1; i <= pageCount; i++){
        const btn = document.createElement("button");
        btn.innerText = i;
        btn.classList.add("page-btn");
        if(i === currentPage) btn.classList.add("active");
        btn.addEventListener("click", () => {
            currentPage = i;
            renderProducts();
            setupPagination();
        });
        pagination.appendChild(btn);
    }
}
