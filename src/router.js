import {createRouter, createWebHistory} from 'vue-router';

import MainPage from './components/MainPage.vue';
import NotFound from './components/navigation/NotFound.vue';
import RecipePage from './components/RecipePage.vue';
import CreateRecipe from './components/CreateRecipe.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/main',
        },
        {
            path: '/main',
            name: 'main',
            component: MainPage,
        },
        {
            name: 'create',
            path: '/create',
            component: CreateRecipe,
        },
        {
            name: 'recipe',
            path: '/:recipeId',
            component: RecipePage,
            props: true,
        },
        {
            path: '/:catchAll(.*)',
            component: NotFound,
        }
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        // console.log(to, from, savedPosition);

        if (savedPosition != null) {
            return savedPosition;
        }
        return { left: 0, top: 0, };
    }
});

export default router;