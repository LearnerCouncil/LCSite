var colorMode = window.localStorage.getItem("color-mode");
var colorModeButton = document.getElementById("color-mode-button");

if (colorMode === null) {
  colorMode = "light";
  // if(window.matchMedia("(prefers-color-scheme: light)").matches) {
  // 	colorMode = "light";
  // } else {
  // 	colorMode = "dark";
  // }
}
update();

colorModeButton.addEventListener("click", toggle);

function update() {
  if (colorMode === "light") {
    //colorModeButton.firstElementChild.src = "images/moon.svg";
    colorModeButton.style.backgroundImage = "url(../images/moon.svg)";
    document.documentElement.setAttribute("color-mode", "light");
    window.localStorage.setItem("color-mode", "light");
  } else {
    //colorModeButton.firstElementChild.src = "images/sun.svg";
    colorModeButton.style.backgroundImage = "url(../images/sun.svg)";
    document.documentElement.setAttribute("color-mode", "dark");
    window.localStorage.setItem("color-mode", "dark");
  }
}

function toggle() {
  if (colorMode === "light") {
    colorMode = "dark";
  } else {
    colorMode = "light";
  }
  update();
}
