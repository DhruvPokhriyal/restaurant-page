import "./aboutus.css";

export function aboutUsSetting() {
    const main = document.querySelector("#content");
    main.innerHTML = "";
    const heading = document.createElement("h1");
    heading.classList.add("about-heading");
    const content = document.createElement("p");
    content.classList.add("about-content");
    const contactDetails = document.createElement("p");
    contactDetails.classList.add("contacts");
    heading.textContent = "About";
    content.textContent = `At Fornax, we know the value of a home-cooked meal. Every dish we create is made fresh on-site, with ingredients sourced or harvested on the same day. We believe in slow cooking and meal-savoring - because good things take time.
Now that times have changed, we must adapt. With our new Cook-It-Yourself (CIY) Meal Kits, we bring the Kitchen Comfort experience straight to your doorstep. Inside, you'll find everything you need to recreate our beloved home-style meals: Easy to follow illustrated recipes, prepared ingredients, and even a QR code for real-time cooking videos to help you unleash your inner chef.
Times have changed, but our philosophy has not. We believe in the life-changing comfort of a good meal - and now you can cook it yourself!`;
    contactDetails.textContent = "Number : 1234567890";
    const aboutSection = document.createElement("div");
    aboutSection.classList.add("abt");
    const aboutBg = document.createElement("div");
    const aboutImg = document.createElement("img");
    aboutImg.src =
        "https://images.unsplash.com/photo-1652690772450-2cc9c53060f5?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    aboutImg.classList.add("about-img");
    aboutBg.classList.add("about-bg");
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("about-image-container");
    aboutSection.appendChild(heading);
    aboutSection.appendChild(content);
    aboutSection.appendChild(contactDetails);
    imgContainer.appendChild(aboutImg);
    aboutBg.appendChild(imgContainer);
    aboutBg.appendChild(aboutSection);
    main.append(aboutBg);
}
