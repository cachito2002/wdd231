import { getParkData, getAlertData, getVisitorCenterData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { alertTemplate, visitorCenterTemplate, activityTemplate } from "./templates.mjs";

function setAlerts(alerts) {
  const alertList = document.querySelector(".alert-list");
  alertList.innerHTML = alerts.map(alertTemplate).join("");
}

function setVisitorCenters(centers) {
  const centerList = document.querySelector(".visitor-center-list");
  centerList.innerHTML = centers.map(visitorCenterTemplate).join("");
}

function setActivities(activities) {
  const activityList = document.querySelector(".activities-list");
  activityList.innerHTML = activities.map(activityTemplate).join("");
}

async function init() {
  const parkData = await getParkData();
  setHeaderFooter(parkData);

  const alertData = await getAlertData(parkData.parkCode);
  setAlerts(alertData.data);

  const centerData = await getVisitorCenterData(parkData.parkCode);
  setVisitorCenters(centerData.data);

  setActivities(parkData.activities);
}

init();