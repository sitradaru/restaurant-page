import mapImage from "./resources/images/address.png";
import donutDrawing from "./resources/images/donut-drawing.png";
import donutLogo from "./resources/images/donut-logo.png";

export function displayContactPage() {
    const content = document.querySelector("#content");
    const contactBtn = document.querySelector("#contact-btn");

    const aside = createAsideSection();
    const mapContainer = createMapSection();
    const illustration = createIllustrationSection();

    content.classList.add("contact-page");
    content.append(aside, mapContainer, illustration);
    contactBtn.classList.add("active");
}

function createIcon(svg) {
    const icon = document.createElement("div");
    icon.classList.add("icon");
    icon.innerHTML = svg;

    return icon;
}

function createAsideSection() {

    const aside = document.createElement("aside");
    const contactHeader = document.createElement("h2");
    const firstLine = document.createElement("p");
    const secondLine = document.createElement("p");

    const contactInfo = document.createElement("div");
    const addressContact = document.createElement("div");
    let addressIcon = document.createElement("div");
    const addressText = document.createElement("div");
    const lane = document.createElement("p");
    const city = document.createElement("p");

    const phoneContact = document.createElement("div");
    let phoneIcon = document.createElement("div");
    const phoneNumber = document.createElement("p");

    const emailContact = document.createElement("div");
    let emailIcon = document.createElement("div");
    const email = document.createElement("p");

    const hours = document.createElement("div");
    let hoursIcon = document.createElement("div");
    const hoursText = document.createElement("div");
    const openDaily = document.createElement("p");
    const dailyHours = document.createElement("p");

    dailyHours.textContent = "8:00 AM - 10:00PM";
    openDaily.textContent = "Open Daily";
    hoursText.append(openDaily, dailyHours);
    const clockSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clock-outline</title><path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" /></svg>`;
    hoursIcon = createIcon(clockSvg);
    hours.classList.add("contact");
    hours.append(hoursIcon, hoursText);

    email.textContent = "hello@doughanddrizzle.com";
    const emailSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>`;
    emailIcon = createIcon(emailSvg);
    emailContact.classList.add("contact");
    emailContact.append(emailIcon, email);

    phoneNumber.textContent = "+251 911 233 058";
    const phoneSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>`;
    phoneIcon = createIcon(phoneSvg);
    phoneContact.classList.add("contact");
    phoneContact.append(phoneIcon, phoneNumber);

    city.textContent = "Addis Ababa, Ethiopia";
    lane.textContent = "123 Sweet Lane";
    addressText.append(lane, city);
    const addressSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker-outline</title><path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" /></svg>`;
    addressIcon = createIcon(addressSvg);
    addressContact.classList.add("contact");
    addressContact.append(addressIcon, addressText);

    contactInfo.classList.add("contact-info");
    contactInfo.append(addressContact, phoneContact, emailContact, hours);

    firstLine.textContent = "Have a question, feedback, or just want to say hi?";
    secondLine.textContent = "We'd love to hear from you!";
    contactHeader.classList.add("chillin-font");
    contactHeader.textContent = "Get in Touch";

    aside.append(contactHeader, firstLine, secondLine, contactInfo);

    return aside;


}

function createMapSection() {

    const mapContainer = document.createElement("div");
    const map = document.createElement("img");
    const popup = document.createElement("div");
    const popupImgContainer = document.createElement("div");
    const popupImage = document.createElement("img");
    const popupText = document.createElement("span");

    popupText.classList.add("chillin-font");
    popupText.textContent = "Dough & Drizzle";
    popupImage.src = donutLogo;
    popupImage.alt = "Donut icon";
    popupImgContainer.classList.add("popup-img");
    popupImgContainer.appendChild(popupImage);
    popup.classList.add("popup");
    popup.append(popupImgContainer, popupText);

    map.src = mapImage;
    map.alt = "Dough and Drizzle location";
    mapContainer.classList.add("map-img");
    mapContainer.append(map, popup);
    
    return mapContainer;
}

function createIllustrationSection() {

    const illustration = document.createElement("div");
    const cuteDonutContainer = document.createElement("div");
    const cuteDonut = document.createElement("img");
    const seeYou = document.createElement("span");
    const soon = document.createElement("span");

    seeYou.classList.add("chillin-font");
    seeYou.textContent = "See you";
    soon.classList.add("chillin-font");
    soon.textContent = "soon!";
    cuteDonut.src = donutDrawing;
    cuteDonut.alt = "Cute Donut";
    cuteDonutContainer.classList.add("cute-donut");
    cuteDonutContainer.appendChild(cuteDonut);
    illustration.classList.add("illustration");
    illustration.append(cuteDonutContainer, seeYou, soon);

    return illustration
}


