//your JS code here. If required.
let div=document.getElementById("browser-info");
let info=navigator.userAgent;
let version=navigator.appVersion;

function getName(info){
	if (info.includes("Firefox")) {
    return "Firefox";
  } else if (info.includes("Chrome")) {
    return "Chrome";
  } else if (info.includes("Safari")) {
    return "Safari";
  } else if (info.includes("Opera") || info.includes("OPR")) {
    return "Opera";
  } else if (info.includes("Edge")) {
    return "Microsoft Edge";
  } else if (info.includes("MSIE") || info.includes("Trident/")) {
    return "Internet Explorer";
  } else {
    return "Unknown";
  }
}
let name=getName(info);
div.innerText+=` ${name} version ${version}`
