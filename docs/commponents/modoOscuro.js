const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  
  // Cambia el texto del botón
  if (document.body.classList.contains("dark")) {
    toggleButton.textContent = "Modo claro";
  } else {
    toggleButton.textContent = "Modo oscuro";
  }
});
