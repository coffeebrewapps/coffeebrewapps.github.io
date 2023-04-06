// Reference: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
function toggleMenu() {
  var x = document.getElementById("top-nav");
  if (x.className === "top-nav") {
    x.className += " responsive";
  } else {
    x.className = "top-nav";
  }
}

function toggleCollapse(btn) {
  var contentId = btn.id.replace("-btn", "-content");
  var previewId = btn.id.replace("-btn", "-preview");
  var contentElement = document.getElementById(contentId);
  var previewElement = document.getElementById(previewId);
  if (contentElement.hidden) {
    contentElement.hidden = false;
    previewElement.hidden = true;
    btn.innerHTML = "Hide";
  } else {
    contentElement.hidden = true;
    previewElement.hidden = false;
    btn.innerHTML = "Expand";
  }
}
