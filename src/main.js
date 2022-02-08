import { createApp } from "vue";
import "./index.css";
import "./assets/loader.css";
import App from "./App.vue";
import router from "./router.js";

import appHeader from "./components/Header";
import appFooter from "./components/Footer";

const app = createApp(App);
app.component("app-header", appHeader);
app.component("app-footer", appFooter);

app.use(router);
app.mount("#app");
