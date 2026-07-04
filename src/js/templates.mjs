import spritePath from '../images/sprite.symbol.svg';

export function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

export function mediaCardTemplate(info) {
  return `<section>
    <a href="${info.link}">
      <img src="${info.image}" alt="${info.name}">
    </a>
    <a href="${info.link}"><h2>${info.name}</h2></a>
    <p>${info.description}</p>
  </section>`;
}

export function footerTemplate(info) {
  const mailing = info.addresses.find((address) => address.type === "Mailing");
  const voice = info.contacts.phoneNumbers.find((phone) => phone.type === "Voice");

  return `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div>
      <p>${mailing.line1}</p>
      <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
    </div>
    <h4>Phone:</h4>
    <p>${voice.phoneNumber}</p>
  </section>`;
}

export function alertTemplate(alert) {
  let alertType = "";
  switch (alert.category) {
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }
  return `<li class="alert">
    <svg class="icon" focusable="false" aria-hidden="true">
      <use xlink:href="${spritePath}#alert-${alertType}"></use>
    </svg>
    <div>
      <h3 class="alert-${alertType}">${alert.title}</h3>
      <p>${alert.description}</p>
    </div>
  </li>`;
}

export function visitorCenterTemplate(center) {
  return `<div class="visitor-center">
    <h3><a href="visitor_center.html?id=${center.id}">${center.name}</a></h3>
    <p>${center.description}</p>
    <p>${center.directionsInfo}</p>
  </div>`;
}

export function activityTemplate(activity) {
  return `<li>${activity.name}</li>`;
}

export function listTemplate(data, contentTemplate) {
  const html = data.map(contentTemplate);
  return `<ul>${html.join("")}</ul>`;
}

export function vcImageTemplate(image) {
  return `<li><img src="${image.url}" alt="${image.altText}"></li>`;
}

export function vcAmenityTemplate(amenity) {
  return `<li>${amenity}</li>`;
}

export function vcAddressTemplate(address) {
  return `<li class="vc-address">
    <h3>${address.type} Address</h3>
    <p>${address.line1}</p>
    ${address.line2 ? `<p>${address.line2}</p>` : ""}
    <p>${address.city}, ${address.stateCode} ${address.postalCode}</p>
  </li>`;
}

export function vcContactTemplate(center) {
  const email = center.contacts?.emailAddresses?.[0];
  const phone = center.contacts?.phoneNumbers?.[0];

  return `
    ${email ? `<p>Email: <a href="mailto:${email.emailAddress}">${email.emailAddress}</a></p>` : ""}
    ${phone ? `<p>Phone: ${phone.phoneNumber}</p>` : ""}
  `;
}