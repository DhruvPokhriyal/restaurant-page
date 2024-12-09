export function homepageSetting() {
    const main = document.querySelector("#content");
    main.innerHTML = "";
    const mainHeading = document.createElement("h1");
    mainHeading.textContent = "Fornax Restaurant";
    const subHeading = document.createElement("h3");
    subHeading.textContent = "Taste Delicious";
    main.appendChild(mainHeading);
    main.appendChild(subHeading);
}
