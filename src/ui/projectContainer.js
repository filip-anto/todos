export default function createProjectContainer(){
    let projectContainer=document.createElement("div");
    projectContainer.classList.add("projectContainer");
    document.getElementsByClassName('mainContent')[0].appendChild(projectContainer);
}