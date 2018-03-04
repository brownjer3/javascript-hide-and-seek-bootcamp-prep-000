function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector("div.target");
}

function increaseRankBy(n) {
  var rank = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  
  for (var i = 0; i < rank.length; i++) {
    rank[i].innerHTML = (i + n).toString();
  }
}