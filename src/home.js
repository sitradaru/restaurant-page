export function displayHomePage() {
    const content = document.querySelector("#content");

    const homeDiv = document.createElement("div");
    const homeHeader = document.createElement("h2");
    const homePara = document.createElement("p");
    const homeButtonDiv = document.createElement("div");
    const viewBtn = document.createElement("button");
    const contactBtn = document.createElement("button");

    contactBtn.textContent = "Contact Us";
    viewBtn.textContent = "View Menu";
    homeButtonDiv.append(viewBtn, contactBtn);

    homePara.textContent = "Freshly baked, always delicious. At Dough & Drizzle, we serve handcrafted donuts and refreshing drinks to make your day a little sweeter.";
    homeHeader.classList.add("chillin-font");
    homeHeader.textContent = "Life is Better with Donuts and Hot Latte";

    homeDiv.classList.add("home-page-content");
    homeDiv.append(homeHeader, homePara, homeButtonDiv);

    content.classList.add("home-page");
    content.appendChild(homeDiv);
}