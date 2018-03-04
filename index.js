function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  document.getElementByClassName("nested").querySelector(".target");
}