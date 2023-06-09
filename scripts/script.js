let switchTo;
switchTo = document.getElementById("aboutme");
function switchWindow(id) {
  switchTo.style.zIndex = 1;
  switch (id) {
    case 0:
      switchTo = document.getElementById("aboutme");

      break;
    case 1:
      switchTo = document.getElementById("projects");
      break;
    case 2:
      switchTo = document.getElementById("contact");
      break;
  }
  switchTo.style.zIndex = "2";
}
