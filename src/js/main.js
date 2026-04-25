import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// Update disclaimer link
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

// Update page title
document.title = parkData.fullName;

// Update hero image
const heroImage = document.querySelector(".hero-banner > img");
heroImage.src = parkData.images[0].url;
heroImage.alt = parkData.images[0].altText;

// Update park name, designation, and states
const heroContent = document.querySelector(".hero-banner__content");
heroContent.innerHTML = parkInfoTemplate(parkData);

// Template function
function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}