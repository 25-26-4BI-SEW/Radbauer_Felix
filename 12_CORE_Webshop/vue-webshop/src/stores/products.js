
import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        title: 'Gaming Mouse',
        price: 49.99,
        description: 'RGB gaming mouse with adjustable DPI.',
        image:
          'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200&auto=format&fit=crop'
      },
      {
        id: 2,
        title: 'Mechanical Keyboard',
        price: 89.99,
        description: 'Compact mechanical keyboard with blue switches.',
        image:
          'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop'
      }
    ]
  }),

  actions: {
    addProduct(product) {
      this.products.unshift({
        ...product,
        id: Date.now()
      })
    },

    deleteProduct(id) {
      this.products = this.products.filter(product => product.id !== id)
    },

    updateProduct(updatedProduct) {
      const index = this.products.findIndex(
        product => product.id === updatedProduct.id
      )

      if (index !== -1) {
        this.products[index] = updatedProduct
      }
    }
  }
})