import { createMemoryHistory, createRouter } from "vue-router";

// import views

const routes = [
    // { path: '/', component: HomeView },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});