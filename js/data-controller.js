import { buildTechWrapper, buildYearBox, buildProjectStructure, buildSummary } from "./dom-builder.js"

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
        const summaryContainer = document.getElementById("summary");
        const timelineContainer = document.getElementById("timeline");

        timelineContainer.innerHTML = "";

        const summaryElements = buildSummary(content.summary);
        summaryContainer.append(summaryElements[0], summaryElements[1], summaryElements[2]);

        storeSummary(summaryElements[0].textContent + " " + summaryElements[1].textContent)

        content.timeline.forEach(data => {
            timelineContainer.appendChild(buildYearBox(data))
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

function storeSummary(item) {
    item = item.replace("<strong>", "");
    item = item.replace("</strong>", "");

    localStorage.setItem("summary", item);
}