fetch("../data/techs.json")
    .then(response => response.json())
    .then(techs => {
        const techContainer = document.getElementById("tech-container");

        techContainer.appendChild(getTechWrapper(techs));
        techContainer.appendChild(getTechWrapper(techs));
    })
    .catch(error => console.error(error));

function getTechWrapper(techList) {
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