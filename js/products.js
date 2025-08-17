const products = [
  {
    name: "Handbag 1",
    description: "Elegant handcrafted handbag for daily use.",
    price: "₹1,200",
    image: "https://raw.githubusercontent.com/Sharp1991/Jenny/main/images/product2.jpg",
    whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%201"
  },
  {
    name: "Handbag 2",
    description: "Stylish handbag with traditional patterns.",
    price: "₹1,350",
    image: "https://raw.githubusercontent.com/Sharp1991/Jenny/main/images/product3.jpg",
    whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%202"
  },
  // ...add up to Handbag 12
];

const container = document.getElementById('products-container');

products.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('product-card');
  card.innerHTML = `
    <div class="product-image" style="background-image: url('${product.image}')"></div>
    <div class="product-info">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-meta">
        <span class="price">${product.price}</span>
        <a href="${product.whatsapp}" class="whatsapp-btn">
          <i class="fab fa-whatsapp"></i> Order
        </a>
      </div>
    </div>
  `;
  container.appendChild(card);
});
