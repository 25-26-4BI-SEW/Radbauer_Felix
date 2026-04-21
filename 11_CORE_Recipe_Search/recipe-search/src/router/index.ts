import { createRouter, createWebHistory } from 'vue-router';
import RecipeDetailView from '@/views/RecipeDetailView.vue';
import ImpressumView from '@/views/ImpressumView.vue';
import RecipeListView from '@/views/RecipeListView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: RecipeListView },
        { path: '/recipes/:id', name: 'recipe-detail', component: RecipeDetailView },
        { path: '/impressum', name: 'impressum', component: ImpressumView },
    ]
});

export default router;

/*
import { createRouter, createWebHistory } from 'vue-router';
import RecipeDetailView from '@/views/RecipeDetailView.vue';
import ImpressumView from '@/views/ImpressumView.vue';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/recipes/:id', name: 'recipe-detail', component: RecipeDetailView },
    { path: '/impressum', name: 'impressum', component: ImpressumView },
  ],
});

export default router;
*/