const html = document.querySelector("html");
const btn = document.querySelector("#theme-btn");

if (localStorage.getItem("darkmode") == "true") {
  html.classList.add("dark");
}

function toggleTheme() {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("darkmode", "true");
  } else {
    localStorage.setItem("darkmode", "false");
  }
}

btn.addEventListener("click", toggleTheme);
