document.addEventListener('DOMContentLoaded', function() {
    // Fetch products from JSON file in parent folder
    fetch('../products.json')
        .then(response => response.json())
        .then(products => {
            const container = document.getElementById('products-container');
            
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-image" style="background-image: url('${product.image}')"></div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <div class="product-meta">
                            <span class="price">${product.price}</span>
                            <a href="https://wa.me/1234567890?text=I%20want%20to%20buy%20${encodeURIComponent(product.name)}" class="whatsapp-btn">
                                <i class="fab fa-whatsapp"></i> Order
                            </a>
                        </div>
                    </div>
                `;
                container.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error loading products:', error));
});
