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
function sidebarToggle() {
    console.log (document.getElementsByClassName("sidebarContainer")[0].style.width==='');
    if (document.getElementsByClassName("sidebarContainer")[0].style.width===''){
        document.getElementsByClassName("sidebarContainer")[0].style.width = "10%";     
    }else 
    if (document.getElementsByClassName("sidebarContainer")[0].style.width !=="0px") {
        document.getElementsByClassName("sidebarContainer")[0].style.width = "0px";
        document.getElementsByClassName("sidebarNavigation")[0].style.visibility = "hidden";
    } else {
        document.getElementsByClassName("sidebarContainer")[0].style.width = "10%";
        document.getElementsByClassName("sidebarNavigation")[0].style.visibility = "visible";
    }

}


export { sidebarToggle }