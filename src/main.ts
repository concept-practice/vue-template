import { createApp } from "vue";
import App from "./app/App.vue";
import "./registerServiceWorker";
import router from "./router";

createApp(App).use(router).mount("#app");
