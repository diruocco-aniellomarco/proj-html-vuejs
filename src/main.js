// importo il css di boostrap in versione mini
import "bootstrap/dist/css/bootstrap.min.css";
// importo il js di boostrap
import * as bootstrap from "bootstrap";

import { createApp } from "vue";
import "./style/generals.scss";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
