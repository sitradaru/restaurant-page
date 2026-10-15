import "./style.css";
import { displayHomePage } from "./home.js";
import { displayMenuPage } from "./menu.js";
import { displayContactPage } from "./contact.js";

const navBtns = document.querySelectorAll(".nav-btn");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");
const content = document.querySelector("#content");

displayHomePage();

content.addEventListener("click", (event) => {
    const buttonAction = event.target.dataset.action;

    if(!buttonAction) { return }

    content.className = "";
    content.textContent = "";
    homeBtn.classList.remove("active");

    if(buttonAction==="menu") {
        content.classList.add("menu-page");
        menuBtn.classList.add("active");
        contactBtn.classList.remove("active");
        displayMenuPage();
    }
    else if(buttonAction==="contact") {
        content.classList.add("contact-page");
        contactBtn.classList.add("active");
        menuBtn.classList.remove("active");
        displayContactPage();

    }
});

navBtns.forEach(button => {
    button.addEventListener("click", (event) => {
        const buttonAction = event.currentTarget.dataset.action;
        content.className = "";
        content.textContent = "";

        if(buttonAction==="home") {
            content.classList.add("home-page");
            homeBtn.classList.add("active");
            menuBtn.classList.remove("active");
            contactBtn.classList.remove("active");
            displayHomePage();
        }
        else if(buttonAction==="menu") {
            content.classList.add("menu-page");
            menuBtn.classList.add("active");
            homeBtn.classList.remove("active");
            contactBtn.classList.remove("active");
            displayMenuPage();
        }
        else if(buttonAction==="contact") {
            content.classList.add("contact-page");
            contactBtn.classList.add("active");
            menuBtn.classList.remove("active");
            homeBtn.classList.remove("active");
            displayContactPage();
        }
    })
})
