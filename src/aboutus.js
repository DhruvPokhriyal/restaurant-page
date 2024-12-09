import "./aboutus.css";

export function aboutUsSetting() {
    const main = document.querySelector("#content");
    main.innerHTML = "";
    const heading = document.createElement("h1");
    heading.classList.add("about-heading");
    const content = document.createElement("p");
    content.classList.add("about-content");
    heading.textContent = "About";
    content.textContent = `At Fornax, we know the value of a home-cooked meal. Every dish we create is made fresh on-site, with ingredients sourced or harvested on the same day. We believe in slow cooking and meal-savoring - because good things take time.
Now that times have changed, we must adapt. With our new Cook-It-Yourself (CIY) Meal Kits, we bring the Kitchen Comfort experience straight to your doorstep. Inside, you'll find everything you need to recreate our beloved home-style meals: Easy to follow illustrated recipes, prepared ingredients, and even a QR code for real-time cooking videos to help you unleash your inner chef.
Times have changed, but our philosophy has not. We believe in the life-changing comfort of a good meal - and now you can cook it yourself!`;
    const aboutSection = document.createElement("div");
    aboutSection.classList.add("abt");
    const aboutBg = document.createElement("div");
    aboutBg.classList.add("about-bg");
    aboutSection.appendChild(heading);
    aboutSection.appendChild(content);
    aboutBg.appendChild(aboutSection);
    main.append(aboutBg);
}
