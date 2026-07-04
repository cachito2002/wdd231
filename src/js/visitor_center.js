import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import {
  listTemplate,
  vcImageTemplate,
  vcAmenityTemplate,
  vcAddressTemplate,
  vcContactTemplate
} from "./templates.mjs";

function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

function setTitle(center) {
  document.querySelector("#vc-title").textContent = center.name;
}

function setGeneralInfo(center) {
  const image = center.images[0];
  const imgEl = document.querySelector("#vc-info-image");
  imgEl.src = image.url;
  imgEl.alt = image.altText;

  const captionEl = document.querySelector("#vc-info-caption");
  captionEl.innerHTML = `${image.caption || ""}${
    image.credit ? `<span class="credit">${image.credit}</span>` : ""
  }`;

  document.querySelector("#vc-info-description").textContent = center.description;
}

function setAddresses(center) {
  const html = listTemplate(center.addresses, vcAddressTemplate);
  document.querySelector(".vc-addresses").innerHTML = html;
}

function setDirections(center) {
  document.querySelector(".vc-directions").textContent = center.directionsInfo;
}

function setAmenities(center) {
  document.querySelector(".vc-amenities").outerHTML =
    `<ul class="vc-amenities">${listTemplate(center.amenities, vcAmenityTemplate).replace(/^<ul>|<\/ul>$/g, "")}</ul>`;
}

function setContact(center) {
  document.querySelector(".vc-contact").innerHTML = vcContactTemplate(center);
}

function setGallery(center) {
  document.querySelector(".vc-gallery ul").outerHTML = listTemplate(center.images, vcImageTemplate);
}

async function init() {
  const parkData = await getParkData();
  setHeaderFooter(parkData);

  const id = getParam("id");
  const centerData = await getParkVisitorCenterDetails(id);
  const center = centerData.data[0];

  setTitle(center);
  setGeneralInfo(center);
  setAddresses(center);
  setDirections(center);
  setAmenities(center);
  setContact(center);
  setGallery(center);
}

init();