import cappuccinoDrinkImage from "./resources/images/cappuccino.png";
import chocolateDonutImage from "./resources/images/chocolate.png";
import coffeeCupImage from "./resources/images/coffee-cup.png";
import cookiesDonutImage from "./resources/images/cookies.png";
import donutImage from "./resources/images/donut.png";
import glazedDonutImage from "./resources/images/glazed.png";
import hotCoffeeDrinkImage from "./resources/images/hot-coffee.png";
import latteDrinkImage from "./resources/images/latte.png";
import matchaDrinkImage from "./resources/images/matcha.png";
import strawberryDonutImage from "./resources/images/strawberry.png";

const itemsArray = [];

class Item {
    constructor(name, price, imageSrc, isDonut) {
        this.name = name;
        this.price = price;
        this.imageSrc = imageSrc;
        this.imageAlt = name;
        this.isDonut = isDonut
    }
}

function storeItem(name, price, imageSrc, isDonut) {
    const item = new Item(name, price, imageSrc, isDonut);

    itemsArray.push(item);
}

const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

})

storeItem("Classic Glazed", 2.50, glazedDonutImage, true);
storeItem("Chocolate Dream", 3.00, chocolateDonutImage, true);
storeItem("Strawberry Bliss", 3.00, strawberryDonutImage, true);
storeItem("Cookies $ Cream", 3.50, cookiesDonutImage, true);

storeItem("Hot Coffee", 2.00, hotCoffeeDrinkImage, false);
storeItem("Iced Latte", 2.50, latteDrinkImage, false);
storeItem("Cappuccino", 2.5, cappuccinoDrinkImage, false);
storeItem("Iced Matcha", 3.00, matchaDrinkImage, false);

export function displayMenuPage() {
    const content = document.querySelector("#content");
    const menuBtn = document.querySelector("#menu-btn");

    const menuHeader = document.createElement("h2");
    const menuPara = document.createElement("p");
    const menuList = document.createElement("div");

    const donutContainer = document.createElement("div");
    const donutTitle = document.createElement("div");
    const donutIconContainer = document.createElement("div");
    const donutIcon = document.createElement("img");
    const donutHeader = document.createElement("h3");
    const donutList = document.createElement("ul");

    const drinkContainer = document.createElement("div");
    const drinkTitle = document.createElement("div");
    const drinkIconContainer = document.createElement("div");
    const drinkIcon = document.createElement("img");
    const drinkHeader = document.createElement("h3");
    const drinkList = document.createElement("ul");

    itemsArray.forEach(item => {
        const productContainer = document.createElement("li");
        const product = document.createElement("div");
        const productImage = document.createElement("img");
        const productName = document.createElement("p");
        const productPrice = document.createElement("p");

        productImage.src = item.imageSrc;
        productImage.alt = item.imageAlt;
        product.classList.add("item");
        product.appendChild(productImage);
        productPrice.classList.add("pink");
        productPrice.textContent = priceFormatter.format(item.price);
        productName.textContent = item.name;
        productContainer.classList.add("item-container");
        productContainer.append(product, productName, productPrice);
        
        if(item.isDonut) {
            donutList.appendChild(productContainer);
        }
        else {
            drinkList.appendChild(productContainer);
        }
    })

    donutList.classList.add("list");

    donutIcon.src = donutImage;
    donutIcon.alt = "Donut List";
    donutIconContainer.classList.add("title-img");
    donutIconContainer.appendChild(donutIcon);

    donutHeader.classList.add("chillin-font");
    donutHeader.textContent = "Donuts";

    donutTitle.classList.add("title");
    donutTitle.append(donutIconContainer, donutHeader);

    donutContainer.classList.add("donut-list");
    donutContainer.append(donutTitle, donutList);

    drinkList.classList.add("list");

    drinkIcon.src = coffeeCupImage;
    drinkIcon.alt = "Drinks List";
    drinkIconContainer.classList.add("title-img");
    drinkIconContainer.appendChild(drinkIcon);

    drinkHeader.classList.add("chillin-font");
    drinkHeader.textContent = "Drinks";

    drinkTitle.classList.add("title");
    drinkTitle.append(drinkIconContainer, drinkHeader);

    drinkContainer.classList.add("drink-list");
    drinkContainer.append(drinkTitle, drinkList);

    menuList.classList.add("menu-list");
    menuList.append(donutContainer, drinkContainer);

    menuPara.textContent = "Fresh donuts. Great drinks. Happy moments";
    menuHeader.classList.add("chillin-font");
    menuHeader.textContent = "Our Menu";

    content.classList.add("menu-page");
    content.append(menuHeader, menuPara, menuList);

    menuBtn.classList.add("active");

}