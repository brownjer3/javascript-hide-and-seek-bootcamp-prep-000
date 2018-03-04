function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector("div.target");
}

function increaseRankBy(n) {
  var rank = document.getElementById("main").querySelectorAll("ul.ranked-list li");
  
  for (var i = 0; i < rank.length; i++) {
    rank[i].innerHTML = (i + 1).toString();
  }
}