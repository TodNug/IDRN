const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const mode = document.querySelector(".mode");
const body = document.body;

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
