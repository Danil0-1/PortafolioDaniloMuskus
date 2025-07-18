  const texto = "Desarrollador Web Junior | HTML, CSS, JavaScript";
  let i = 0;
  const velocidad = 60; // velocidad de escritura

  function escribirTitulo() {
    if (i < texto.length) {
      document.getElementById("typing-title").innerHTML += texto.charAt(i);
      i++;
      setTimeout(escribirTitulo, velocidad);
    } else {
      document.getElementById("typing-title").style.borderRight = "none";
    }
  }

window.addEventListener("load", escribirTitulo);