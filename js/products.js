document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            name: "Handbag 1",
            description: "Elegant handcrafted handbag.",
            price: "₹1,000",
            image: "https://i.imgur.com/1xhXEaj.jpeg",
            whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%201"
        },
        {
            name: "Handbag 2",
            description: "Stylish and modern handbag.",
            price: "₹1,200",
            image: "https://i.imgur.com/y8bwPny.jpeg",
            whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%202"
        },
        {
            name: "Handbag 3",
            description: "Traditional weave handbag.",
            price: "₹1,500",
            image: "https://i.imgur.com/0F9Hb52.jpeg",
            whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%203"
        },
        {
            name: "Handbag 4",
            description: "Trendy and spacious handbag.",
            price: "₹1,300",
            image: "https://i.imgur.com/WnMQ9YZ.jpeg",
            whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%204"
        },
        {
            name: "Handbag 5",
            description: "Handcrafted tribal handbag.",
            price: "₹1,700",
            image: "https://i.imgur.com/mcUtIrW.jpeg",
            whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%205"
        },
        {
            name: "Handbag 6",
            description: "Elegant woven handbag.",
            price: "₹1,400",
            image: "https://i.imgur.com/OZCUyOp.jpeg",
            whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%206"
        },
        {
            name: "Handbag 7",
            description: "Colorful and durable handbag.",
            price: "₹1,600",
            image: "https://i.imgur.com/6cu8uEW.jpeg",
            whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%207"
        },
        {
            name: "Handbag 8",
            description: "Classic design handbag.",
            price: "₹1,500",
            image: "https://i.imgur.com/0JXSgMr.jpeg",
            whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%208"
        },
        {
            name: "Handbag 9",
            description: "Modern and versatile handbag.",
            price: "₹1,800",
            image: "https://i.imgur.com/dlQqaEj.jpeg",
            whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%209"
        },
        {
            name: "Handbag 10",
            description: "Trendy handcrafted handbag.",
            price: "₹2,000",
            image: "https://i.imgur.com/kYFxAVY.jpeg",
            whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%2010"
        },
        {
            name: "Handbag 11",
            description: "Elegant tribal handbag.",
            price: "₹1,900",
            image: "https://i.imgur.com/H0Ji40X.jpeg",
            whatsapp: "https://wa.me/1234567890?text=I%20want%20to%20buy%20Handbag%2011"
        }
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
});
