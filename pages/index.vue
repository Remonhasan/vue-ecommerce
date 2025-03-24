<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <!-- Main Content Section -->
        <div class="col-md-8 text-center">
          <h1 class="display-4 text-primary mb-4">Welcome to the Home Page!</h1>
          <p class="lead text-muted">
            This is the default homepage of your Nuxt app. Explore more by navigating through the site.
          </p>
          <NuxtLink 
            to="/about" 
            class="btn btn-primary btn-lg mt-4"
            role="button"
          >
            Go to About Page
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // You can add any additional logic for the Home page here.
  </script>
  
  <style scoped>
  /* Custom styling for the home page */
  h1 {
    font-weight: 700; /* Makes the heading bold */
    color: #007bff; /* Blue color for the heading */
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  
  .btn {
    text-transform: uppercase; /* Makes the text on button uppercase */
    font-weight: 600; /* Bold button text */
  }
  
  .container {
    padding: 0 15px; /* Adds padding to prevent content from touching the edges on smaller screens */
  }
  
  .mt-5 {
    margin-top: 5rem !important; /* Adds margin to the top */
  }
  
  .text-muted {
    color: #6c757d; /* Lighter text color for the paragraph */
  }
  
  .text-center {
    text-align: center;
  }
  </style>
  