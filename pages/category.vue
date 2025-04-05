<template>
    <div class="container mt-5">
      <div class="d-flex justify-content-end mb-3">
        <button
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#createCategoryModal"
        @click="newCategory = { name_en: '', name_bn: '' }"
        >
        + Create Category
      </button>

      </div>

      <h1 class="text-center mb-4">Categories</h1>
      <div v-if="pending">Loading..</div>
      <div v-else class="table-responsive">
        <table class="table table-striped table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name(EN)</th>
              <th scope="col">Name(BN)</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <!-- Loop through categories here -->
            <tr v-for="category in categories" :key="category.id">
              <th scope="row">{{ category.id }}</th>
              <td>{{ category.name_en }}</td>
              <td>{{ category.name_bn }}</td>
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

    <div class="modal fade" id="createCategoryModal" tabindex="-1" aria-labelledby="createCategoryModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form @submit.prevent="createCategory">
          <div class="modal-header">
            <h5 class="modal-title">Create Category</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Name (EN)</label>
              <input type="text" class="form-control" v-model="newCategory.name_en" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Name (BN)</label>
              <input type="text" class="form-control" v-model="newCategory.name_bn" required />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Create</button>
          </div>
        </form>
      </div>
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
              <label for="name" class="form-label">Name (EN)</label>
              <input
              type="text"
              id="name"
              class="form-control"
              v-model="selectedCategory.name_en"
              required
              />
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Name (BN)</label>
              <input
              type="text"
              id="name"
              class="form-control"
              v-model="selectedCategory.name_bn"
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
  import { ref, computed } from 'vue';
  import { useCategory } from '~/hooks/useCategory';

  const { getCategories, createCategory: createCategoryApi, updateCategory: updateCategoryApi, deleteCategory: deleteCategoryApi } = useCategory();
  
  const response = ref(null);
  const error = ref(null);
  const pending = ref(false);

  const categories = computed(() => response.value?.data || []);
  const selectedCategory = ref({ id: null, name_en: '', name_bn: '' });

  // Get Categories
  const fetchCategories = async () => {
    pending.value = true;
    const res = await getCategories();
    response.value = res.data.value;
    error.value = res.error;
    pending.value = false;
  };

  await fetchCategories();

  // Create Category
  const newCategory = ref({ name_en: '', name_bn: '' });

  const createCategory = async () => {
    const res = await createCategoryApi(newCategory.value);

    if (!res.error.value) {
      await fetchCategories();

      // Reset form
      newCategory.value = { name_en: '', name_bn: '' };

      // Close modal
      const modalElement = document.getElementById('createCategoryModal');
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();
    } else {
      alert('Create failed');
    }
  };


  // Edit
  const editCategory = (category) => {
    console.log("value", category)
    selectedCategory.value = { ...category };
    const modal = new bootstrap.Modal(document.getElementById('editCategoryModal'));
    modal.show();
  };

  // Update
  const updateCategory = async () => {
    const { id, name_en, name_bn } = selectedCategory.value;

    const res = await updateCategoryApi(id, { name_en, name_bn });
    
    if (!res.error.value) {
      await fetchCategories(); // Refresh list

      const modalElement = document.getElementById('editCategoryModal');
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();
    } else {
      alert('Update failed');
    }
  };
  
  // Delete
  const deleteCategory = async (id) => {
    if (confirm("Are you sure you want to delete this category?")) {
      const res = await deleteCategoryApi(id);
      if (!res.error.value) {
        await fetchCategories(); // Refresh list
      } else {
        alert('Delete failed');
      }
    }
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
  