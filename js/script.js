const header = document.querySelector('header');

document.addEventListener("DOMContentLoaded", () => {
    loadTechs();
    // loadProjects();
})

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

function loadTechs() {
    fetch("../data/techs.json")
        .then(response => response.json())
        .then(techs => insertTechs(techs))
        .catch(error => console.log(error));
}

function insertTechs(techs) {
    const techContainer = document.getElementById("tech-container");

    techContainer.appendChild(createTechWrapper(techs));
    techContainer.appendChild(createTechWrapper(techs));
}

function createTechWrapper(techList) {
    const techWrapper = document.createElement("div");
    const largeIcons = ["Mockito"];

    techWrapper.className = "tech-wrapper";

    techList.forEach(tech => {
        const techItem = document.createElement("div");
        techItem.className = "tech-item";

        const img = document.createElement("img");
        img.src = tech.src;
        img.alt = tech.alt;

        const span = document.createElement("span");
        span.textContent = tech.name;

        if (largeIcons.includes(tech.name)) {
            img.className = "large";
        }

        techItem.appendChild(img);
        techItem.appendChild(span);

        techWrapper.appendChild(techItem);
    });

    return techWrapper;
}
