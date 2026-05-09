<template>
    <main class="add-product-container">
        <h1>Add Product</h1>
        <form @submit.prevent="handleSubmit" class="product-form">
            <section class="form-group">
                <label for="title">Title</label>
                <input id="title" v-model="form.title" type="text" placeholder="Product title" required>
            </section>
            <section class="form-group">
                <label for="price">Price</label>
                <input id="price" v-model.number="form.price" type="number" step="0.01" placeholder="0.00" required>
            </section>
            <section class="form-group">
                <label for="description">Description</label>
                <textarea id="description" v-model="form.description" placeholder="Product description" rows="3"
                    required></textarea>
            </section>

            <section class="form-group">
                <label for="category">Category</label>
                <select id="category" v-model.number="form.categoryId" required>
                    <option v-for="category in productsStore.categories" :key="category.id" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </section>

            <section class="form-group">
                <label for="image">Image URL</label>
                <input id="image" v-model="form.image" type="url" placeholder="https://example.com/image.jpg" required>
            </section>
            <button type="submit" :disabled="productsStore.loading" class="submit-button">
                {{ productsStore.loading ? 'Adding...' : 'Add Product' }}
            </button>
            <section v-if="productsStore.error" class="error-message">
                Error: {{ productsStore.error }}
            </section>
        </form>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProductsStore, type NewProduct } from '../stores/products'

const router = useRouter();
const productsStore = useProductsStore();

const form = ref<NewProduct>({
    title: '',
    price: 0,
    description: '',
    image: '',
    categoryId: 1
})

const handleSubmit = async () => {
    try {
        await productsStore.addProduct(form.value)
        // Reset form after successful submission
        // form.value = {
        //     title: '',
        //     price: 0,
        //     description: '',
        //     image: ''
        // }
        // Navigate back to home
        router.push('/')
    } catch (error) {
        // Error is handled in the store
        console.error('Failed to add product:', error)
    }
}
</script>

<style scoped>
.add-product-container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #1a1a1a;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
}

h1 {
    color: #f0f0f0;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2rem;
}

.product-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

label {
    color: #f0f0f0;
    font-weight: 600;
    font-size: 0.9rem;
}

input,
textarea,
select {
    padding: 0.75rem;
    border: 1px solid #333;
    border-radius: 6px;
    background-color: #2a2a2a;
    color: #f0f0f0;
    font-size: 1rem;
    transition: border-color 0.2s ease, background-color 0.2s ease;
}

input:focus,
textarea:focus,
select:focus {
    outline: none;
    border-color: #2563eb;
    background-color: #333;
}

input::placeholder,
textarea::placeholder {
    color: #999;
}

.submit-button {
    padding: 1rem;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
    margin-top: 1rem;
}

.submit-button:hover:not(:disabled) {
    background-color: #1d4ed8;
}

.submit-button:disabled {
    background-color: #666;
    cursor: not-allowed;
}

.error-message {
    color: #ef4444;
    background-color: rgba(239, 68, 68, 0.1);
    padding: 0.75rem;
    border-radius: 6px;
    border: 1px solid rgba(239, 68, 68, 0.3);
    font-size: 0.9rem;
}

textarea {
    resize: vertical;
    min-height: 80px;
}
</style>