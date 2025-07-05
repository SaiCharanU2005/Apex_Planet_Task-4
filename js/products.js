const products = [
  {
    name: "Smartphone",
    category: "Electronics",
    price: 299,
    image: "assets/images/smartphone.jpg"
  },
  {
    name: "Running Shoes",
    category: "Footwear",
    price: 99,
    image: "assets/images/shoes.jpg"
  },
  {
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 49,
    image: "assets/images/speaker.jpg"
  },
  {
    name: "Wrist Watch",
    category: "Accessories",
    price: 199,
    image: "assets/images/watch.jpg"
  },
  {
    name: "Backpack",
    category: "Fashion",
    price: 79,
    image: "assets/images/backpack.jpg"
  },
  {
    name: "Gaming Headset",
    category: "Electronics",
    price: 119,
    image: "assets/images/headset.jpg"
  },
  {
    name: "Laptop Stand",
    category: "Accessories",
    price: 39,
    image: "assets/images/laptop-stand.jpg"
  },
  {
    name: "Mountain Bike",
    category: "Fitness",
    price: 250,
    image: "assets/images/cycle.jpg"
  },
  {
    name: "Sunglasses",
    category: "Fashion",
    price: 59,
    image: "assets/images/sunglasses.jpg"
  },
  {
    name: "Casual T-Shirt",
    category: "Fashion",
    price: 29,
    image: "assets/images/tshirt.jpg"
  },
  {
    name: "Smart Watch",
    category: "Electronics",
    price: 149,
    image: "assets/images/smartwatch.jpg"
  },
  {
    name: "Desk Lamp",
    category: "Home Decor",
    price: 35,
    image: "assets/images/lamp.jpg"
  },
  {
    name: "Water Bottle",
    category: "Fitness",
    price: 15,
    image: "assets/images/water-bottle.jpg"
  },
  {
    name: "Sneakers",
    category: "Footwear",
    price: 109,
    image: "assets/images/sneakers.jpg"
  },
  {
    name: "Wireless Mouse",
    category: "Electronics",
    price: 27,
    image: "assets/images/mouse.jpg"
  }
];

const grid = document.getElementById("productGrid");
const search = document.getElementById("search");
const sort = document.getElementById("sort");

function displayProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" style="width:100%; border-radius:12px; margin-bottom:1rem;">
      <h4>${p.name}</h4>
      <p style="color:#00ffcc;">$${p.price}</p>
      <button style="background:#00ffcc; color:#000; border:none; padding:0.5rem 1rem; border-radius:8px; cursor:pointer;">Buy Now</button>
    `;
    grid.appendChild(div);
  });
}

function applyFilters() {
  let filtered = [...products];
  const query = search.value.toLowerCase();

  if (query) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(query));
  }

  if (sort.value === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort.value === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

search.addEventListener("input", applyFilters);
sort.addEventListener("change", applyFilters);

window.onload = () => displayProducts(products);
