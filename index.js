const projects = [
  {
    title: "Galería de Naruto",
    description: "Una galería con paginación usando fetch y API pública.",
    image: "docs/Img/naruto.jpg",
    link: "https://danil0-1.github.io/Naruto-Characteres-Gallery/DOM/index.html"
  },
  {
    title: "Comparador F1",
    description: "Sistema que compara vehículos de F1 usando JS y LocalStorage. Realizado junto a Nicolás Muskus y Darwin Machuca.",
    image: "docs/Img/f1.jpg",
    link: "https://github.com/NicolasMuskusTarazona/Formula-1"
  },
  {
    title: "Cocina",
    description: "Landing page responsive con animaciones y presentación de platos.",
    image: "docs/Img/maryann.jpg",
    link: "a"
  },
  {
    title: "App de ecommerce de ropa",
    description: "Aplicación de ropa con pantallas animadas. Solo se ve bien en celular (modo vertical).",
    image: "docs/Img/ecommerce.jpg",
    link: "https://danil0-1.github.io/app_de_ecommerce_de_ropa/views/splashscreen.html"
  },
  {
    title: "50 Landings Creativas",
    description: "Diseños modernos de landing page se adapta solo en celular",
    image: "docs/Img/50landings.jpg",
    link: "https://danil0-1.github.io/50---Landing-page-designs--Community-/"
  },
  {
    title: "Sitio accesible para personas con discapacidad visual",
    description: "Prototipo con alto contraste y diseño pensado para escritorio. Solo se ve bien en PC.",
    image: "docs/Img/discapacidad.png",
    link: "https://danil0-1.github.io/Prototipo-interactivo-de-p-gina-web-para-personas-con-dificultades-visuales--Community-/views/black-home.html"
  },
  {
    title: "Calculadora práctica",
    description: "Calculadora interactiva con operaciones básicas. Proyecto personal con animaciones suaves.",
    image: "docs/Img/Calculadora.jpg", 
    link: "https://danil0-1.github.io/Calculadora-Danilo-Practice/"
  }
];

const container = document.getElementById("projectCards");

projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.className = "card animate-entry";
  card.style.animationDelay = `${index * 0.2}s`;

  card.innerHTML = `
    <a href="${project.link}" target="_blank">
      <img src="${project.image}" alt="${project.title}">
    </a>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">Ver proyecto →</a>
  `;

  container.appendChild(card);
});
