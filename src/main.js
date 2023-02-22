import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "virtual:svg-icons-register";
import SvgIcon from "@/components/SvgIcon/index.vue";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.component("svg-icon", SvgIcon);

app.mount("#app");
