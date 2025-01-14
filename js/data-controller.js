import { buildTechWrapper, buildYearBox, buildProjectStructure } from "./dom-builder.js"

export function loadTechs() {
    fetch("../data/techs.json")
    .then ((response) => response.json())
    .then((techs) => {
        const techContainer = document.getElementById("tech-container");

        // two times to infinite scroll-left
        techContainer.appendChild(buildTechWrapper(techs));
        techContainer.appendChild(buildTechWrapper(techs));
    })
    .catch((error) => console.log(error));
}

export function loadAboutSection() {
    fetch("../data/about.json")
    .then((response) => response.json())
    .then((content) => {
        const aboutContent = document.getElementById("timeline");

        localStorage.setItem("summary", content.summary);

        aboutContent.innerHTML = "";

        content.timeline.forEach(data => {
            aboutContent.appendChild(buildYearBox(data))
        });
    })
    .catch((error) => console.log(error));
}

export function loadProjects() {
    fetch("../data/projects.json")
    .then((response) => response.json())
    .then((projects) => {
        const projectContainer = document.getElementById("project-container");

        projectContainer.innerHTML = "";

        projects.forEach(p => {
            projectContainer.appendChild(buildProjectStructure(p));
        })
    })
    .catch((error) => console.log(error));
}