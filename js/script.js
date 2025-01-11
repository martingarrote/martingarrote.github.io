const header = document.querySelector("header");
const arrow = document.getElementById("arrow");

document.addEventListener("DOMContentLoaded", () => {
  loadTechs();
  loadAbout();
  loadProjects();
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

arrow.addEventListener("click", () => (location.href = "#about"));

function loadTechs() {
  fetch("../data/techs.json")
    .then((response) => response.json())
    .then((techs) => insertTechs(techs))
    .catch((error) => console.log(error));
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

  techList.forEach((tech) => {
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

function loadAbout() {
  fetch("../data/about.json")
    .then((response) => response.json())
    .then((content) => {
      insertTimeline(content.timeline);

      localStorage.setItem("summary", content.summary);
    })
    .catch((error) => console.log(error));
}

function insertTimeline(timeline) {
  const aboutContent = document.getElementById("timeline");

  aboutContent.innerHTML = "";

  timeline.forEach((t) => {
    aboutContent.appendChild(createYearBox(t));
  });
}

function createYearBox(data) {
  const yearBox = document.createElement("div");
  yearBox.classList.add("year-box");

  const year = document.createElement("span");
  year.classList.add("year");
  year.innerText = data.year;

  const verticalLine = document.createElement("span");
  verticalLine.classList.add("line");
  verticalLine.classList.add("vertical");

  const p = document.createElement("p");
  p.innerHTML = data.text;

  yearBox.appendChild(year);
  yearBox.appendChild(verticalLine);
  yearBox.appendChild(p);

  return yearBox;
}

function download() {
  const link = document.createElement("a");

  link.setAttribute("download", "martingarrote_cv.pdf");
  link.href = "/assets/files/martingarrote_cv.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function copyAboutSummary() {
  const summary = localStorage.getItem("summary");

  navigator.clipboard.writeText(summary);
}

function loadProjects() {
  fetch("../data/projects.json")
    .then((response) => response.json())
    .then((projects) => insertProjects(projects))
    .catch((error) => console.log(error));
}

function insertProjects(projects) {
  const projectContainer = document.getElementById("project-container");

  projectContainer.innerHTML = "";

  projects.forEach((p) => {
    projectContainer.innerHTML += createProjectStructure(p);
  });

  // realocate
  handleProjectHovering();
}

function createProjectStructure(project) {
  let tags = "";
  let buttons = "";
  let description = "";

  project.tags.forEach((tag) => {
    tags += `<span class="tag">${tag}</span>`;
  });

  buttons += project.website
    ? `<a href="${project.website}" class="project-btn"><i class="ph ph-globe"></i></a>`
    : "";
  buttons += project.github
    ? `<a href="${project.github}" class="project-btn"><i class="ph ph-github-logo"></i></a>`
    : "";

  // need modal implementation
  // buttons += project.openable ? `<a class="project-btn open-iframe" data-url="${project.website}"><i class="ph ph-frame-corners"></i></a>` : "";

  description += project.description.part1
    ? `<p>${project.description.part1}</p>`
    : "";
  description += project.description.part2
    ? `<p>${project.description.part2}</p>`
    : "";
  description += project.description.part3
    ? `<p>${project.description.part3}</p>`
    : "";

  return `
  <div class="project">
    <div class="img-container">
      <img class="project-image" src="${project.image}" alt="${project.title}">
    </div>
    <div class="project-content">
        <h3>${project.title}</h3>
        ${description}
        <div class="tags">${tags}</div>
    </div>
    <span class="line"></span>
    <div class="project-buttons">
        ${buttons}
    </div>
  </div>
  `;
}

function handleProjectHovering() {
  const container = document.getElementById("project-container");
  const projects = document.querySelectorAll(".project");

  projects.forEach(p => {
    p.addEventListener("mouseenter", () => {
      container.classList.add("blur-inside")
    })

    p.addEventListener("mouseleave", () => {
      container.classList.remove("blur-inside")
    })
  })
}