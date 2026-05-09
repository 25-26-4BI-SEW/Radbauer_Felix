<script setup lang="ts">
// import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
	<header class="header">
		<section class="main-heading">
			<router-link to="/">
				<h1>RecipeApp</h1>
			</router-link>
		</section>
		<section class="nav-links">
			<router-link to="/add-product">Add Product</router-link>
		</section>
	</header>
	<main>
		<router-view />
	</main>
</template>

<style scoped>
.header {
	padding: 1rem 2rem;
	background-color: #1a1a1a;
	border-bottom: 1px solid #333;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.header .main-heading h1 {
	margin: 0;
	color: #f0f0f0;
	font-size: 1.5rem;
	font-weight: 700;
}

.header .nav-links a {
	text-decoration: underline;
	color: #229968;
}

.header .nav-links a:hover {
	color: #0747d1;
}

.header .main-heading a:hover h1 {
	color: #094de1;
}
</style>

<!-- Unscoped styles to override any global defaults -->
<style>
body {
	margin: 0;
	padding: 0;
	background-color: #121212;
	color: #f0f0f0;
}

#app {
	/* max-width: none !important; */
	width: 100% !important;
}
</style>