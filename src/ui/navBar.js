import { sidebarToggle } from "./sidebar";
import createNewProject from "./createNewProject";
export default function createNavBar() {
    let container = document.createElement("div");
    container.classList.add("navigationContainer");

    let menuButton=document.createElement("div");
    menuButton.classList.add("menuButton");
    menuButton.innerHTML="Menu";
    menuButton.addEventListener("click",()=>
    sidebarToggle());
    container.appendChild(menuButton);

    let title=document.createElement("h1");
    title.innerHTML="What To do!";
    container.appendChild(title);



    let navigation = document.createElement("ul");
    navigation.classList.add("navbar");
    container.appendChild(navigation);

    let home = document.createElement("li");
    home.classList.add("home");
    home.innerHTML = "Home";
    navigation.appendChild(home);

    let createProjectButton = document.createElement("li");
    createProjectButton.classList.add("createProjectButton");
    createProjectButton.innerHTML = "Create Project";
    navigation.appendChild(createProjectButton);
    
    return (container);
}