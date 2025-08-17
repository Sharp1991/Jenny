// js/products.js

const products = [];

for (let i = 1; i <= 50; i++) {
  products.push({
    name: `Product ${i}`,
    description: `Description for Product ${i}.`,
    price: `₹${100 + i*10}`,
    image: `images/product${i}.jpg`,
    whatsapp: `https://wa.me/1234567890?text=I%20want%20to%20buy%20Product%20${i}`
  });
}
