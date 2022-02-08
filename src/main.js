import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./router.js";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import appHeader from "./components/Header";
import appFooter from "./components/Footer";

const app = createApp(App);

app.component("v-pagination", VPagination);
app.component("app-header", appHeader);
app.component("app-footer", appFooter);

app.use(router);
app.mount("#app");
