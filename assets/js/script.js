// ---------------------- Navigation
const topics = ["aboutme", "education", "skills", "projects", "contact"];

// Start menu
const startMenu = document.getElementsByClassName("startpage menu")[0];
const menuItems = startMenu.querySelectorAll("ul > li");

// Auxiliary Menu
const auxMenu = document.getElementsByClassName("auxmenu")[0];
const auxMenuItems = auxMenu.querySelectorAll("ul > li");

// ---------------------- Pages
const startPage = document.getElementsByClassName("startpage")[0];
const contentPage = document.getElementsByClassName("contentpage")[0];

// ---------------------- Subpages
const subPages = document.getElementsByClassName("subpage");

// ---------------------- Implementation

// Define functionality to the start menu
startMenu.addEventListener("click", (e) => {
    let menuItemsArray = Array.from(menuItems)
    if (menuItemsArray.includes(e.target)) {
        let clickedItem = topics[menuItemsArray.indexOf(e.target)]

        changePage();
        changeSubPage(clickedItem);
        changeActiveItem(clickedItem);
    }
})

// Define a way to return to the start page in the auxiliary menu
document.getElementById("start").addEventListener("click", () => {
    changePage()
})


// Define functionality to the auxiliary menu
auxMenu.addEventListener("click", (e) => {
    let auxItems = Array.from(auxMenuItems).splice(1, auxMenuItems.length);
    if (auxItems.includes(e.target)) {
        let clickedItem = topics[auxItems.indexOf(e.target)]

        changeSubPage(clickedItem)
        changeActiveItem(clickedItem)
    }
})

// Change the active page, toggling the "hidden" class
function changePage() {
    startPage.classList.toggle("hidden");
    contentPage.classList.toggle("hidden");
    auxMenu.classList.toggle("hidden");
}

// Change the active subpage in the content page, hide all other subpages, then make the specified subpage visible
function changeSubPage(subpage) {
    Array.from(subPages).forEach((s) => {s.classList.add("hidden")});
    document.getElementsByClassName(subpage)[0].classList.remove("hidden");
}

// Change the active item, emphasizing it among the other auxiliary menu items
function changeActiveItem(item) {
    auxMenuItems.forEach(i => {i.classList.remove("activeItem")});
    document.getElementById(item).classList.add("activeItem")
}