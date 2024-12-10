import "./menupage.css";

export function menuSetting() {
    class MenuItem {
        constructor(price, name, comment, bgImg) {
            this.price = price;
            this.name = name;
            this.comment = comment;
            this.bgImg = bgImg;
        }
    }
    const itemList = [
        new MenuItem(
            "$10.0",
            "Spaghetti",
            "Delicious",
            "https://plus.unsplash.com/premium_photo-1677000666741-17c3c57139a2?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ),
        new MenuItem(
            "$12.0",
            "Pizza",
            "Crispy",
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ),
        new MenuItem(
            "$6.0",
            "Momos",
            "Asian Food",
            "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ),
    ];

    const main = document.querySelector("#content");
    main.innerHTML = "";
    const menuBg = document.createElement("div");
    menuBg.classList.add("menu-bg");
    const heading = document.createElement("h1");
    heading.textContent = "MENU";
    heading.classList.add("menu-heading");
    const body = document.createElement("div");
    body.classList.add("menu-body");
    for (let i = 0; i < 3; i++) {
        const item = itemList[i];
        const card = document.createElement("div");
        card.style.backgroundImage = `url(${item.bgImg})`;
        const price = document.createElement("div");
        price.textContent = item.price;
        const name = document.createElement("p");
        name.textContent = item.name;
        const comment = document.createElement("p");
        comment.textContent = item.comment;
        const itemInfo = document.createElement("div");
        itemInfo.classList.add("item-info");
        card.classList.add("menu-card");
        price.classList.add("item-price");
        name.classList.add("item-name");
        comment.classList.add("item-comment");
        itemInfo.appendChild(name);
        itemInfo.appendChild(comment);
        card.appendChild(price);
        card.appendChild(itemInfo);
        body.appendChild(card);
    }
    menuBg.appendChild(heading);
    menuBg.appendChild(body);
    main.append(menuBg);
}
