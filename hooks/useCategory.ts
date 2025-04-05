export const useCategory = () => {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase

  const getCategories = async () => {
    const { data, error, pending } = await useFetch('/categories', {
      baseURL: apiBase,
    })

    return { data, error, pending }
  }

  const createCategory = async (category: { name_en: string, name_bn: string }) => {
    const { data, error, pending } = await useFetch('/category/save', {
      method: 'POST',
      baseURL: apiBase,
      body: category,
    })

    return { data, error, pending }
  }

  const updateCategory = async (id: number, updatedData: { name_en: string, name_bn: string }) => {
    const { data, error, pending } = await useFetch(`/category/update/${id}`, {
      method: 'POST',
      baseURL: apiBase,
      body: updatedData,
    })

    return { data, error, pending }
  }

  const deleteCategory = async (id: number) => {
    const { data, error, pending } = await useFetch(`/category/delete/${id}`, {
      method: 'GET',
      baseURL: apiBase,
    })

    return { data, error, pending }
  }

  return {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
  }
}
