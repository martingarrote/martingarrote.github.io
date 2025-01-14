export function buildTechWrapper(techList) {
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
        techItem.append(span);

        techWrapper.appendChild(techItem);
    });

    return techWrapper;
}

export function buildYearBox(data) {
    const yearBox = document.createElement("div");
    yearBox.className = "year-box";

    const year = document.createElement("span");
    year.className = "year";
    year.innerText = data.year;

    const verticalLine = document.createElement("span");
    verticalLine.className = "line";
    verticalLine.classList.add("vertical");

    const p = document.createElement("p");
    p.innerHTML = data.text;

    yearBox.appendChild(year);
    yearBox.appendChild(verticalLine);
    yearBox.appendChild(p);

    return yearBox;
}

export function buildProjectStructure(project) {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";

    const line = document.createElement("span");
    line.className = "line";

    projectDiv.appendChild(buildProjectImage(project));
    projectDiv.appendChild(buildProjectContent(project));
    projectDiv.appendChild(line);
    projectDiv.appendChild(buildProjectButtons(project));

    return projectDiv;
}

function buildProjectImage(project) {
    const img = document.createElement("img");
    img.className = "project-image";
    img.src = project.image;
    img.alt = project.title;

    const imageContainer = document.createElement("div");
    imageContainer.className = "img-container";

    imageContainer.appendChild(img);

    return imageContainer;
}

function buildProjectContent(project) {
    const projectTitle = document.createElement("h3");
    projectTitle.innerText = project.title;
    
    const tagContainer = document.createElement("div");
    tagContainer.className = "tags";

    project.tags.forEach(projectTag => {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.innerText = projectTag;

        tagContainer.appendChild(tag);
    })

    const projectContent = document.createElement("div");
    projectContent.className = "project-content";
    projectContent.appendChild(projectTitle);

    buildProjectDescription(project.description).forEach(p => {
        if (p.innerText.length > 0) {
            projectContent.appendChild(p);
        }
    })

    projectContent.appendChild(tagContainer);

    return projectContent;
}

function buildProjectDescription(description) {
    const descriptionPart1 = document.createElement("p");
    descriptionPart1.innerText = description.part1

    const descriptionPart2 = document.createElement("p");
    descriptionPart2.innerText = description.part2;

    const descriptionPart3 = document.createElement("p");
    descriptionPart3.innerText = description.part3;

    return [descriptionPart1, descriptionPart2, descriptionPart3];
}

function buildProjectButtons(project) {
    const wbIcon = document.createElement("i");
    wbIcon.className = "ph ph-globe";

    const websiteButton = document.createElement("a");
    websiteButton.className = "project-btn";
    websiteButton.href = project.website;
    websiteButton.appendChild(wbIcon);

    const gbIcon = document.createElement("i");
    gbIcon.className = "devicon-github-original";

    const githubButton = document.createElement("a");
    githubButton.className = "project-btn";
    githubButton.href = project.github;
    githubButton.appendChild(gbIcon);

    const projectButtons = document.createElement("div");
    projectButtons.className = "project-buttons";
    projectButtons.appendChild(websiteButton);
    projectButtons.appendChild(githubButton);

    return projectButtons;
}
