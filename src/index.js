import "./index.css";

const btn = document.getElementById("btn");

const body = document.body;

btn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
