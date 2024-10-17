<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <div class="product-list">
    <h1>Mahsulotlar Ro'yxati</h1>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Nomi</th>
        <th>Tavsifi</th>
        <th>Narxi</th>
        <th>Faollik</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.name }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.price }} $</td>
        <td>
            <span :class="product.active ? 'active' : 'inactive'">
              {{ product.active ? 'Ha' : 'Yo\'q' }}
            </span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async fetchProducts() {
      try {
        // const response = await fetch('http://localhost:8081/api/product');

        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }

        // this.products = await response.json();

        this.products = [
          {
            id: 1,
            name: "Laptop",
            price: 1200,
            description: "High performance laptop",
            stock: 5,
            category: "Electronics"
          },
          {
            id: 2,
            name: "Smartphone",
            price: 800,
            description: "Latest model smartphone",
            stock: 10,
            category: "Electronics"
          },
          {
            id: 3,
            name: "Headphones",
            price: 150,
            description: "Noise-cancelling headphones",
            stock: 20,
            category: "Audio"
          },
          {
            id: 4,
            name: "Gaming Console",
            price: 500,
            description: "Next-gen gaming console",
            stock: 7,
            category: "Entertainment"
          },
          {
            id: 5,
            name: "Smart Watch",
            price: 250,
            description: "Smart watch with health tracking",
            stock: 15,
            category: "Wearables"
          },
          {
            id: 6,
            name: "Tablet",
            price: 600,
            description: "Lightweight tablet for work and play",
            stock: 8,
            category: "Electronics"
          },
          {
            id: 7,
            name: "Bluetooth Speaker",
            price: 100,
            description: "Portable Bluetooth speaker",
            stock: 25,
            category: "Audio"
          },
          {
            id: 8,
            name: "Camera",
            price: 900,
            description: "Professional camera for photography",
            stock: 3,
            category: "Photography"
          },
          {
            id: 9,
            name: "Fitness Tracker",
            price: 80,
            description: "Track your fitness progress",
            stock: 18,
            category: "Wearables"
          },
          {
            id: 10,
            name: "Keyboard",
            price: 50,
            description: "Mechanical keyboard for typing",
            stock: 30,
            category: "Accessories"
          }
        ];

        console.log(this.products)

      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style scoped>

nav.navbar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-list {
  font-family: 'Arial', sans-serif;
  //margin: 10px 10px 10px 10px; /* Added top margin to avoid overlap with navbar */
  text-align: center;
  overflow-x: auto; /* Allows horizontal scrolling on smaller screens */
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

table {
  width: 100%;
  max-width: 100%; /* Ensures the table doesn't exceed the container's width */
  border-collapse: collapse;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

th, td {
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: center;
}

th {
  background-color: #ff6f61;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f1f1f1;
}

td {
  color: #333;
  font-size: 1rem;
}

.active {
  color: #28a745;
  font-weight: bold;
}

.inactive {
  color: #dc3545;
  font-weight: bold;
}

/* Responsive design */
@media (max-width: 768px) {
  table {
    font-size: 0.9rem;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  th, td {
    padding: 10px;
  }
}


</style>
