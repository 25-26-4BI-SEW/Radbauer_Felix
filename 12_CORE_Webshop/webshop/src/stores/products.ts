import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Category {
  id: number
  name: string
  slug: string
  image: string
  creationAt: string
  updatedAt: string
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  category: {
    id: number
    name: string
    slug: string
    image: string
    creationAt: string
    updatedAt: string
  }
  creationAt: string
  updatedAt: string
}

export interface NewProduct {
  title: string
  price: number
  description: string
  image: string
  categoryId: number
};

export const useProductsStore = defineStore('products', () => {
  // State
  const products = ref<Product[]>([]);
  const categories = ref<Category[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/categories');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      categories.value = data;
    } catch (err) {
      console.error(err);
      error.value = err instanceof Error ? err.message : 'Unknown error';
    }
  }

  // Actions
  const fetchProducts = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      products.value = data.sort(() => Math.random() - 0.5).slice(0, 10);
    } catch (err) {
      console.error(err);
      error.value = err instanceof Error ? err.message : 'Unknown error';
    } finally {
      loading.value = false;
    }
  }

  const addProduct = async (newProduct: NewProduct) => {
    loading.value = true;
    error.value = null;

    try {
      const payload = {
        title: newProduct.title,
        price: Number(newProduct.price),
        description: newProduct.description,
        images: newProduct.image ? [newProduct.image] : [],
        categoryId: newProduct.categoryId
      }

      console.log('Sending payload:', payload);

      const response = await fetch('https://api.escuelajs.co/api/v1/products/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      console.log('Response status:', response.status, response.statusText);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
      }

      const createdProduct = await response.json();
      products.value.unshift(createdProduct);

      return createdProduct;
    } catch (err) {
      console.error('Add product error:', err);
      error.value = err instanceof Error ? err.message : 'Unknown error';
      throw err;
    } finally {
      loading.value = false;
    }
  }

  const getProductById = (id: number) => {
    return products.value.find(product => product.id === id);
  }

  const removeProduct = async (id: number) => {
    loading.value = true;
    error.value = null;
    const productToDelete = getProductById(id);

    try {
      if(productToDelete) {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
          method: 'DELETE'
        });
        console.log(response);
        products.value = products.value.filter(p => p.id !== id);
      }
    } catch (err) {
      console.error('Add product error:', err);
      error.value = err instanceof Error ? err.message : 'Unknown error';
      throw err;
    } finally {
      loading.value = false;
    }
  }


  // Initialize products and categories on store creation
  fetchProducts();
  fetchCategories();

  return {
    // State
    products,
    categories,
    loading,
    error,

    // Actions
    fetchProducts,
    fetchCategories,
    addProduct,
    getProductById,
    removeProduct
  };
})
