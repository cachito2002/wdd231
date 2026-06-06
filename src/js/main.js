import { getParkData, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `<h1>${data.fullName}</h1>
  <p>${data.description}</p>`;
}

function setParkInfo(data) {
  const infoEl = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  infoEl.innerHTML = html.join("");
}

async function init() {
  const parkData = await getParkData();
  const infoLinks = getInfoLinks(parkData.images);

  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfo(infoLinks);
}
function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  const globalNav = document.querySelector(".global-nav");

  menuButton.addEventListener("click", (ev) => {
    globalNav.classList.toggle("open");

    let button = ev.target;
    if (button.tagName !== "BUTTON") {
      button = button.closest("button");
    }

    const isOpen = globalNav.classList.contains("open");
    button.setAttribute("aria-expanded", isOpen);
    button.setAttribute("aria-label", isOpen ? "Close Menu" : "Open Menu");
  });
}

async function init() {
  const parkData = await getParkData();
  const infoLinks = getInfoLinks(parkData.images);

  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfo(infoLinks);

  enableNavigation(); 
}
init();