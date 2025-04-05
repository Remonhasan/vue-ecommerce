<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8 text-center">
          <h1 class="display-4 text-primary mb-4">Welcome to the Home Page!</h1>
          <p class="lead text-muted">
            This is the default homepage of your Nuxt app. Simple CRUD app on category menu.
          </p>
          <NuxtLink 
            to="/category" 
            class="btn btn-primary btn-lg mt-4"
            role="button"
          >
            Go to Category Page
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  
  h1 {
    font-weight: 700; 
    color: #007bff; 
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  
  .btn {
    text-transform: uppercase; 
    font-weight: 600; 
  }
  
  .container {
    padding: 0 15px; 
  }
  
  .mt-5 {
    margin-top: 5rem !important; 
  }
  
  .text-muted {
    color: #6c757d; 
  }
  
  .text-center {
    text-align: center;
  }
  </style>
  