// Get DOM Elements 
const menuServices = document.getElementById("menu-services");
const menuBio = document.getElementById("menu-bio");
const menuContact = document.getElementById("menu-contact");
const navMenu = document.getElementById("nav-menu");
const hamburger = document.getElementById("hamburger");

console.log(navMenu.style.visibility);

// Function to create sub menus
function createSubMenu(parentElement, ulID, ...elements) {
    console.log("mouseover");
    const newUL = document.createElement("ul");
    newUL.id = ulID;
    newUL.className = "sub-menu";
    for (let i=0; i<elements.length; i++) {
        let newLI = document.createElement("li");
        newLI.className = "li-" + elements[i];
        newLI.textContent = elements[i];
        newUL.appendChild(newLI);
    }
    parentElement.appendChild(newUL);
}

// Creat sub menus
menuServices.addEventListener("click", () => {
    document.getElementById("services-sub-menu") === null ? createSubMenu(menuServices, "services-sub-menu", "lessons", "live performance", "studio") : document.getElementById("services-sub-menu").remove()
})

// hamburger.addEventListener("click", () => {
//     console.log(navMenu.style.visibility);
//     if (navMenu.style.visibility === "hidden"){
//         navMenu.style.visibility = "visible";
//     } else if (navMenu.style.visibility === "visible") {
//         navMenu.style.visibility = "hidden";
//     }

//     navMenu.style.visibility === "hidden" ? navMenu.style.visibility = "visible" : navMenu.style.visibility = "hidden"
// })

hamburger.addEventListener("click", () => {
    console.log('hamburger clicked');
    if (navMenu.style.visibility != 'visible') {
        navMenu.style.visibility = 'visible';
    } else {
        navMenu.style.visibility = 'hidden';
    }
})