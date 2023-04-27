const MAINCONTENT = document.getElementById("main");
function bottom() {
  MAINCONTENT.scrollIntoView();
}

window.setTimeout(function () {
  bottom();
}, 500);
