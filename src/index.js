import * as homepage from "./homepage.js";
import * as aboutpage from "./aboutus.js";
import "./styles.css";

const homeButton = document.querySelector(".home");
const aboutButton = document.querySelector(".about");
const menuButton = document.querySelector(".menu");

window.onload = function () {
    homepage.homepageSetting();
    homeButton.classList.add("currentPage");
};

aboutButton.addEventListener("click", () => {
    homeButton.classList.remove("currentPage");
    menuButton.classList.remove("currentPage");
    aboutButton.classList.add("currentPage");
    aboutpage.aboutUsSetting();
});
