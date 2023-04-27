const MAINCONTENT = document.getElementById("main");
function bottom() {
  MAINCONTENT.scrollIntoView();
  console.log("nig");
}

window.setTimeout(function () {
  bottom();
}, 500);
