import Vue from "vue";
import VueRouter from "vue-router";

import PageHome from "./pages/Home";
import PageAbout from "./pages/About";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/xyz",
            component: PageHome
        },
        {
            path: "/xyz/about",
            component: PageAbout
        }
    ]
});

export default router;
