import * as menupage from "./menupage.js";
import * as homepage from "./homepage.js";
import * as aboutpage from "./aboutus.js";
import "./styles.css";

const content = document.querySelector("#content");
const homeButton = document.querySelector(".home");
const aboutButton = document.querySelector(".about");
const menuButton = document.querySelector(".menu");

function transitionContent(newContent) {
    content.classList.add("hidden");
    setTimeout(() => {
        newContent();
        content.classList.remove("hidden");
    }, 500);
}

window.onload = function () {
    homeButton.classList.add("currentPage");
    transitionContent(homepage.homepageSetting);
};

menuButton.addEventListener("click", () => {
    homeButton.classList.remove("currentPage");
    aboutButton.classList.remove("currentPage");
    menuButton.classList.add("currentPage");
    transitionContent(menupage.menuSetting);
});

homeButton.addEventListener("click", () => {
    aboutButton.classList.remove("currentPage");
    menuButton.classList.remove("currentPage");
    homeButton.classList.add("currentPage");
    transitionContent(homepage.homepageSetting);
});

aboutButton.addEventListener("click", () => {
    homeButton.classList.remove("currentPage");
    menuButton.classList.remove("currentPage");
    aboutButton.classList.add("currentPage");
    transitionContent(aboutpage.aboutUsSetting);
});
