import "./homepage.css";

export function homepageSetting() {
    const main = document.querySelector("#content");
    main.innerHTML = "";
    const mainHeading = document.createElement("h1");
    mainHeading.textContent = "Fornax Restaurant";
    const subHeading = document.createElement("h3");
    subHeading.textContent = "Taste Delicious";
    const heroSection = document.createElement("div");
    heroSection.classList.add("hero");
    heroSection.appendChild(mainHeading);
    heroSection.appendChild(subHeading);
    const homeBg = document.createElement("div");
    homeBg.classList.add("home-bg");
    homeBg.append(heroSection);
    main.append(homeBg);
}
