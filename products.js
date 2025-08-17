// products.js

// Array of product objects
const products = [
  {
    name: "Handbag 1",
    description: "Elegant handbag, perfect for everyday use.",
    price: "₹1,000",
    image: "images/product2.jpg",
    whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%201"
  },
  {
    name: "Handbag 2",
    description: "Chic handbag with modern style.",
    price: "₹1,000",
    image: "images/product3.jpg",
    whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%202"
  },
  {
    name: "Handbag 3",
    description: "Spacious and stylish for daily essentials.",
    price: "₹1,000",
    image: "images/product4.jpg",
    whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%203"
  },
  {
    name: "Handbag 4",
    description: "Classic design with premium materials.",
    price: "₹1,000",
    image: "images/product5.jpg",
    whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%204"
  },
  {
    name: "Handbag 5",
    description: "Elegant and durable handbag for work or travel.",
    price: "₹1,000",
    image: "images/product6.jpg",
    whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%205"
  },
  {
    name: "Handbag 6",
    description: "Fashionable handbag with sturdy straps.",
    price: "₹1,000",
    image: "images/product7.jpg",
    whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%206"
  },
  {
    name: "Handbag 7",
    description: "Compact handbag ideal for casual outings.",
    price: "₹1,000",
    image: "images/product8.jpg",
    whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%207"
  },
  {
    name: "Handbag 8",
    description: "Luxury handcrafted handbag with modern accents.",
    price: "₹1,000",
    image: "images/product9.jpg",
    whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%208"
  },
  {
    name: "Handbag 9",
    description: "Stylish handbag for daily fashion and convenience.",
    price: "₹1,000",
    image: "images/product10.jpg",
    whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%209"
  },
  {
    name: "Handbag 10",
    description: "Premium handbag for office and casual outings.",
    price: "₹1,000",
    image: "images/product11.jpg",
    whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%2010"
  },
  {
    name: "Handbag 11",
    description: "Elegant handbag suitable for any occasion.",
    price: "₹1,000",
    image: "images/product12.jpg",
    whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%2011"
  },
  {
    name: "Handbag 12",
    description: "Modern handbag with spacious interior.",
    price: "₹1,000",
    image: "images/product13.jpg",
    whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%2012"
  }
];

// Function to display products dynamically
const productList = document.getElementById('product-list');

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <span class="price">${product.price}</span>
    <a href="${product.whatsapp}" target="_blank" class="whatsapp-btn">Buy on WhatsApp</a>
  `;
  productList.appendChild(card);
});
