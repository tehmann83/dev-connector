const checkFontawesome = (element, property) => {
  return window.getComputedStyle(element, null).getPropertyValue(property);
};

window.onload = function() {
  let span = document.createElement("span");

  span.className = "fa";
  span.style.display = "none";
  document.body.insertBefore(span, document.body.firstChild);

  if (css(span, "font-family") !== "FontAwesome") {
    // add a local fallback
    console.log("awwwweeeeeesome");
  }
  document.body.removeChild(span);
};

module.exports.checkFontawesome = checkFontawesome;
