<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Categories</h1>
      <div class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
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
                <button class="btn btn-primary btn-sm me-2" @click="editCategory(category)">
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

    <div class="modal fade" id="editCategoryModal" tabindex="-1" aria-labelledby="editCategoryModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updateCategory">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
              type="text"
              id="name"
              class="form-control"
              v-model="selectedCategory.name"
              required
              />
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <textarea
              id="description"
              class="form-control"
              v-model="selectedCategory.description"
              rows="3" 
              required 
              />
            </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Update</button>
        </div>
      </form>
      </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Categories
  const categories = ref([
    { id: 1, name: 'Technology', description: 'All about technology' },
    { id: 2, name: 'Health', description: 'Health and wellness' },
    { id: 3, name: 'Education', description: 'Educational resources' },
  ]);
  
  const selectedCategory = ref({id: null, name: '', description: ''});

  // Edit
  const editCategory = (category) => {

    selectedCategory.value = {...category}
    const modal = new bootstrap.Modal(document.getElementById('editCategoryModal'));
    modal.show();

  };

  // Update
  const updateCategory = () => {
    const index = categories.value.findIndex(item => item.id === selectedCategory.value.id);
    if(index !== -1){
      categories.value[index] = {...selectedCategory.value};
    }

    // Modal close
    const modalElement = document.getElementById('editCategoryModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  };
  
  // Delete
  const deleteCategory = (id) => {
   categories.value = categories.value.filter(category => category.id != id);
  };
  </script>
  
  <style scoped>
 
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
  
  .btn-sm {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
  }
  
  .me-2 {
    margin-right: 0.5rem;
  }
  </style>
  