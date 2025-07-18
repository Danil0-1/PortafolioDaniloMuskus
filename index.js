const projects = [
  {
    title: "Galería de Naruto",
    description: "Una galería con paginación usando fetch y API pública.",
    image: "docs/Img/naruto.jpg",
    link: "https://danil0-1.github.io/Naruto-Characteres-Gallery/DOM/index.html"
  },
  {
    title: "Comparador F1",
    description: "Sistema que compara vehículos de F1 usando JS y LocalStorage Realizado Junto Nicolas Muskus Tarazona y Darwin Samuel Machuca Gonzales. ¡ LEER EL README !",
    image: "docs/Img/f1.jpg",
    link: "https://github.com/NicolasMuskusTarazona/Formula-1"
  },
  {
  title: "Cocina de Maryann",
  description: "Landing page con animaciones, presentación de platos y estilo emocional, manejo de platos, Utilidad principal de vista en celular (Responsive).",
  image: "docs/Img/maryann.jpg",
    link: "https://danil0-1.github.io/Maryann-Food/Informacion.html"
  }
];

const container = document.getElementById("projectCards");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">Ver proyecto →</a>
  `;
  container.appendChild(card);
});
