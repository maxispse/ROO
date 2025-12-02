import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Post from "./pages/Post.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/post/:id",
            component: Post,
        },
    ],
});

createApp(App)
    .use(router)
    .mount("#app");
