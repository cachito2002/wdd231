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