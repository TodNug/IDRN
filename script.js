const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const mode = document.querySelector(".mode");
const body = document.body;
const ctnPrj = document.getElementById("ctnPrj");
const header = document.getElementById("hdr");
const reject = document.getElementById("reject");
const entry = document.querySelector(".entrypg");
const ele = document.querySelector(".projects");

if (localStorage.getItem("background") === "dark") {
  body.classList.add("dark");
  body.classList.remove("light");
  sun.style.display = "block";
  moon.style.display = "none";
} else if (localStorage.getItem("background") === "light") {
  body.classList.add("light");
  body.classList.remove("dark");
  sun.style.display = "none";
  moon.style.display = "block";
}

function openAbout() {
  window.open("about.html", "_self");
}

function openPrj() {
  ctnPrj.style.right = "0%";
  ctnPrj.style.opacity = "1";
  header.style.marginTop = "-13vh";
  entry.classList.add("move");
  sessionStorage.removeItem("project");
  sessionStorage.setItem("project", "open");
}
function closePrj() {
  ctnPrj.style.right = "-100%";
  ctnPrj.style.opacity = "0";
  header.style.marginTop = "0";
  entry.classList.remove("move");
  sessionStorage.removeItem("project");
  sessionStorage.setItem("project", "close");
}

if (sessionStorage.getItem("project") === "open") {
  openPrj();
}
if (sessionStorage.getItem("project") === "close") {
  closePrj();
}

function open1() {
  window.open("project1.html", "_self");
}

mode.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.add("light");
    body.classList.remove("dark");
    sun.style.display = "none";
    moon.style.display = "block";
    localStorage.removeItem("background");
    localStorage.setItem("background", "light");
  } else if (body.classList.contains("light")) {
    body.classList.add("dark");
    body.classList.remove("light");
    sun.style.display = "block";
    moon.style.display = "none";
    localStorage.removeItem("background");
    localStorage.setItem("background", "dark");
  }
});
