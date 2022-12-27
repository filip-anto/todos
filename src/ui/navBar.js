export default function createNavBar() {
    let container = document.createElement("div");
    container.classList.add("navigationContainer");

    let navigation = document.createElement("ul");
    navigation.classList.add("navbar");
    container.appendChild(navigation);

    let home = document.createElement("li");
    home.classList.add("home");
    home.innerHTML = "Home";
    navigation.appendChild(home);

    let createProject = document.createElement("li");
    createProject.classList.add("createProject");
    createProject.innerHTML = "Create Project";
    navigation.appendChild(createProject);
    
    return (container);
}