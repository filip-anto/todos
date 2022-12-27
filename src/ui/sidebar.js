export default function sidebarCreation() {
    let sidebarContainer = document.createElement("div");
    sidebarContainer.classList.add("sidebarContainer");

    let sidebarNavigation = document.createElement("ul");
    sidebarNavigation.classList.add("sidebarNavigation");
    sidebarContainer.appendChild(sidebarNavigation);

    let home = document.createElement("li");
    home.classList.add("home");
    home.innerHTML = "Home";
    sidebarNavigation.appendChild(home);

    let sidebarCreateProject = document.createElement("li");
    sidebarCreateProject.classList.add("sidebarCreateProject");
    sidebarCreateProject.innerHTML = "Create Project";
    sidebarNavigation.appendChild(sidebarCreateProject);
    
    return (sidebarContainer);
}