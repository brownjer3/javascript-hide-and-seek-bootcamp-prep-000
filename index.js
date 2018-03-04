function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector("div.target");
}

function increaseRankBy(n) {
  var rank = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  
  for (var i = 0; i < rank.length; i++) {
    var number = parseInt(rank[i].innerHTML);
    rank[i].innerHTML = (number + n).toString();
  }
}

function deepestChild() {
  document.getElementById("app").querySelectorAll("div#grand-node div");
}