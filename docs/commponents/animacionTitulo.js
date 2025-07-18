const texto = "Desarrollador Web Junior | HTML, CSS, JavaScript";
let i = 0;
let escribiendo = true;

function efectoMaquina() {
  const titulo = document.getElementById("typing-title");

  if (escribiendo) {
    titulo.textContent = texto.substring(0, i++);
    if (i > texto.length) {
      escribiendo = false;
      setTimeout(efectoMaquina, 1500); 
      return;
    }
  } else {
    titulo.textContent = texto.substring(0, i--);
    if (i < 0) {
      escribiendo = true;
    }
  }

  setTimeout(efectoMaquina, 60);
}

window.addEventListener("load", efectoMaquina);
