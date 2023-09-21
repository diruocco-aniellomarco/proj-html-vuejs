// importo il css di boostrap in versione mini
import "bootstrap/dist/css/bootstrap.min.css";
// importo il js di boostrap
import * as bootstrap from "bootstrap";

import { createApp } from "vue";
import "./style/generals.scss";
import App from "./App.vue";

/* import fontawesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
library.add(
  faChevronLeft,
  faChevronRight,
  faFacebook,
  faSquareTwitter,
  faSquareInstagram,
  faSquareYoutube,
  faBars,
  faHouseChimney,
  faSuitcase,
  faBookOpenReader,
  faBook,
  faUser,
  faAngleDown,
  faMagnifyingGlass,
  faClock,
  faShare,
  faYoutube
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
