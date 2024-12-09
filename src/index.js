import * as homepage from "./homepage.js";
import "./styles.css";

window.onload = function () {
    homepage.homepageSetting();
    const homeButton = document.querySelector(".home");
    homeButton.classList.add("currentPage");
};
