import { compareAsc, format } from 'date-fns'
import './ui/style.css';
import createNavBar from './ui/navBar';
import addProject, { addSampleProjects, loadProjects } from './logic/projectManagement';
import createProject from './ui/project';
import createProjectContainer from './ui/projectContainer';
import sidebarCreation from './ui/sidebar';
import createNewProject from './ui/createNewProject'
const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
//console.log(dates.sort(compareAsc));
document.getElementsByTagName("body")[0].appendChild(createNavBar());
let mainContent = document.createElement("div");
mainContent.classList.add("mainContent");
document.getElementsByTagName("body")[0].appendChild(mainContent);
document.getElementsByClassName("mainContent")[0].appendChild(sidebarCreation());
createProjectContainer();
addSampleProjects();
loadProjects();
document.getElementsByTagName("body")[0].appendChild(createNewProject());
document.getElementsByClassName("createProjectButton")[0].addEventListener("click",()=> document.getElementsByClassName("modal")[0].style.display = "block");