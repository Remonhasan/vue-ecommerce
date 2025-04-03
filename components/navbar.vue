<template>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">My Nuxt App</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto"> 
              <li class="nav-item">
                <NuxtLink class="nav-link active" to="/">Home</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/category">Category</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script setup>
 
  </script>
  
  <style scoped>

  .navbar {
    background-color: #f8f9fa !important; 
    padding: 10px 20px; 
    border-radius: 8px; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .navbar .navbar-brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  .navbar-nav .nav-link {
    font-size: 1rem;
    margin-left: 15px; 
  }
  
  .navbar-nav .nav-link:hover {
    color: #007bff !important; 
  }
  
  .container {
    margin-top: 20px; 
  }
  </style>
  