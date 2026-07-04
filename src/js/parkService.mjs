const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;

async function getJson(url) {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };
  let data = {};
  const response = await fetch(baseUrl + url, options);
  if (response.ok) {
    data = await response.json();
  } else throw new Error("response not ok");
  return data;
}

export async function getParkData() {
  const parkData = await getJson("parks?parkCode=yell");
  return parkData.data[0];
}

export function getInfoLinks(images) {
  return [
    {
      name: "Current Conditions &#x203A;",
      link: "conditions.html",
      image: images[2].url,
      description: "Check out the conditions you are expecting before arriving"
    },
    {
      name: "Fees and Passes &#x203A;",
      link: "fees.html",
      image: images[3].url,
      description: "Learn about the fees and passes that are available"
    },
    {
      name: "Visitor Centers &#x203A;",
      link: "visitor_center.html",
      image: images[9].url,
      description: "Learn about the visitor centers in the park"
    }
  ];
}

export async function getAlertData(parkCode) {
  return await getJson(`alerts?parkCode=${parkCode}`);
}

export async function getVisitorCenterData(parkCode) {
  return await getJson(`visitorcenters?parkCode=${parkCode}`);
}

export async function getParkVisitorCenterDetails(id) {
  return await getJson(`visitorcenters?id=${id}`);
}