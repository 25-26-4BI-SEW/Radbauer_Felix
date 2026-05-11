<script setup>
import { reactive, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductStore } from '../stores/products';

const route = useRoute();
const router = useRouter();
const store = useProductStore();

const isEditing = computed(() => !!route.params.id);

const existingProduct = isEditing.value
    ? store.products.find(product => product.id === Number(route.params.id))
    : null;

const form = reactive({
    id: existingProduct?.id || null,
    title: existingProduct?.title || '',
    price: existingProduct?.price || '',
    image: existingProduct?.image || '',
    description: existingProduct?.description || ''
});

function saveProduct() {
    if (isEditing.value) {
        store.updateProduct({
            ...form,
            price: Number(form.price)
        });
    } else {
        store.addProduct({
            ...form,
            price: Number(form.price)
        });
    }

    router.push('/');
}
</script>

<template>
    <div class="form-wrapper">
        <form @submit.prevent="saveProduct" class="form">
            <h2>
                {{ isEditing ? 'Edit Product' : 'Add Product' }}
            </h2>

            <input v-model="form.title" type="text" placeholder="Title" required />

            <input v-model="form.price" type="number" step="0.01" placeholder="Price" required />

            <input v-model="form.image" type="text" placeholder="Image URL" required />

            <textarea v-model="form.description" placeholder="Description" rows="5" required></textarea>

            <button type="submit">
                Save
            </button>
        </form>
    </div>
</template>

<style scoped>
.form-wrapper {
    display: flex;
    justify-content: center;
}

.form {
    width: 100%;
    max-width: 500px;
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    margin-top: 0;
    margin-bottom: 20px;
}

input,
textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
}

button {
    width: 100%;
    padding: 12px;
    border: none;
    background: #42b883;
    color: white;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    background: #369f6f;
}
</style>