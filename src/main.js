// importo il css di boostrap in versione mini
import "bootstrap/dist/css/bootstrap.min.css";
// importo il js di boostrap
import * as bootstrap from "bootstrap";

import { createApp } from "vue";
import "./style/generals.scss";
import App from "./App.vue";

createApp(App).mount("#app");
