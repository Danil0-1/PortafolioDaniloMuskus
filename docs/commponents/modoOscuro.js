const toggleButton = document.getElementById("darkModeToggle");

if (localStorage.getItem("modo-oscuro") === "true") {
  document.body.classList.add("dark");
  toggleButton.textContent = "Modo claro";
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  toggleButton.textContent = isDark ? "Modo claro" : "Modo oscuro";

  localStorage.setItem("modo-oscuro", isDark);
});
