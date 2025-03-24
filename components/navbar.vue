<template>
    <div class="container">
      <!-- Navbar Section -->
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
            <ul class="navbar-nav ms-auto"> <!-- 'ms-auto' for aligning items to the right -->
              <li class="nav-item">
                <NuxtLink class="nav-link active" to="/">Home</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/about">About</NuxtLink>
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
  // Any logic for the navbar can be added here
  </script>
  
  <style scoped>
  /* Custom styling for the navbar */
  .navbar {
    background-color: #f8f9fa !important; /* Light gray background */
    padding: 10px 20px; /* Padding around navbar */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
  }
  
  .navbar .navbar-brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  .navbar-nav .nav-link {
    font-size: 1rem;
    margin-left: 15px; /* Adds margin between nav items */
  }
  
  .navbar-nav .nav-link:hover {
    color: #007bff !important; /* Highlight on hover */
  }
  
  .container {
    margin-top: 20px; /* Adds margin to the top of the container */
  }
  </style>
  