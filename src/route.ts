import { createRouter, createWebHashHistory } from "vue-router";

// import views
import MainView from "./Views/MainView.vue";
import PortfolioView from "./Views/PortfolioView.vue";
import AboutView from "./Views/AboutView.vue";
import ContactView from "./Views/ContactView.vue";
import MusicGamesView from "./Views/MusicGamesView.vue";

const routes = [
    { path: '/', component: MainView },
    { path: '/portfolio', component: PortfolioView },
    { path: '/about', component: AboutView },
    { path: '/contact', component: ContactView },
    { path: '/otoge', component: MusicGamesView }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});