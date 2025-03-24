<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Category Listing</h1>
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Category Name</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <!-- Loop through categories here -->
            <tr v-for="category in categories" :key="category.id">
              <th scope="row">{{ category.id }}</th>
              <td>{{ category.name }}</td>
              <td>{{ category.description }}</td>
              <td>
                <button class="btn btn-primary btn-sm me-2" @click="editCategory(category.id)">
                  Edit
                </button>
                <button class="btn btn-danger btn-sm" @click="deleteCategory(category.id)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Mock categories data or fetch from your API
  const categories = ref([
    { id: 1, name: 'Technology', description: 'All about technology' },
    { id: 2, name: 'Health', description: 'Health and wellness' },
    { id: 3, name: 'Education', description: 'Educational resources' },
  ]);
  
  // Function to handle category edit
  const editCategory = (id) => {
    console.log('Editing category with ID:', id);
    // Add your logic here to edit a category
  };
  
  // Function to handle category deletion
  const deleteCategory = (id) => {
    console.log('Deleting category with ID:', id);
    // Add your logic here to delete a category
  };
  </script>
  
  <style scoped>
  /* Styling the table */
  .table th, .table td {
    text-align: center;
  }
  
  .table th {
    background-color: #343a40;
    color: white;
  }
  
  .table-striped tbody tr:nth-of-type(odd) {
    background-color: #f9f9f9;
  }
  
  /* Customize the buttons */
  .btn-sm {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
  }
  
  .me-2 {
    margin-right: 0.5rem;
  }
  </style>
  