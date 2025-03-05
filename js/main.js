import { loadTechs, loadAboutSection, loadProjects } from "./data-controller.js"

const header = document.querySelector("header");
const navItems = document.querySelectorAll("nav > ul > *");
const home = document.getElementById("home");

const arrow = document.getElementById("arrow");
const download = document.getElementById("download");
const copySummary = document.getElementById("copy-summary");
const copyEmail = document.getElementById("email-address");
const backTop = document.getElementById("back-top");

const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

const navigationMapping = {
    "about": about,
    "projects": projects,
    "contact": contact
};

const actionMapping = [
    { element: home,        action: () => window.scrollTo(0, 0) },
    { element: arrow,       action: () => about.scrollIntoView() },
    { element: download,    action: () => openResume() },
    { element: copySummary, action: () => copy(localStorage.getItem("summary")) },
    { element: copyEmail,   action: () => copy(copyEmail.textContent) },
    { element: backTop,     action: () => window.scrollTo(0, 0) }
]

document.addEventListener("DOMContentLoaded", () => {
    navItems.forEach(item => {
        let target = item.dataset.target;
        
        item.addEventListener("click", () => {
            navigationMapping[target].scrollIntoView();
        });
    })

    loadTechs();
    loadAboutSection();
    loadProjects();

    actionMapping.forEach(({element, action}) => {
        element.addEventListener("click", action);
    })
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
})

function copy(content) {
    navigator.clipboard.writeText(content);
}

function openResume() {
    window.open("/assets/documents/martingarrote_cv.pdf");
}