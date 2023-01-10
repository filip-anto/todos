import createProject from '../ui/project';
class Projects {
    constructor(title, description, startDate, tasks) {
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.tasks = [];
        /* for (let task in tasks){
             this.tasks.push(task);
         }*/
    }
    addTask(task) {
    this.tasks.push(task);
}
}



let projects = [];

export default function addProject(title, description, startDate) {
    createProjectObject(title, description, startDate);
    localStorage.setItem("projects", JSON.stringify(projects));
}

function addSampleProjects() {
    let samples = [];
    samples.push(new Projects("Work", "All work and no play", "1-2-2022", ['play', 'read', 'write']));
    samples.push(new Projects("Works", "All work and no plays", "2-2-2022", ['water', 'yoga', 'sports']));
    localStorage.setItem("projects", JSON.stringify(samples));
}

function loadProjects() {
    let storage = localStorage.getItem("projects");
    if (storage !== '') {
        for (let project of JSON.parse(storage)) {
            createProjectObject(project);
        }
    }
    console.log("AFTER" + projects);
}

function createProjectObject(project) {
    projects.push(new Projects(project.title, project.description, project.startDate));
    document.getElementsByClassName('projectContainer')[0].appendChild(createProject(project.title, project.description));
}

function createProjectButtonPressed() {
    checkForFormErrors();
    let newProjectTitle = document.getElementById("titleInput").value;
    let newProjectDescription = document.getElementById("descriptionInput").value;
    let newProjectStartingDate = document.getElementById("startingDateInput").value;
    let newProjectEndingDate = document.getElementById("endingDateInput").value;
    addProject(newProjectTitle, newProjectDescription, newProjectStartingDate);
}

function checkForFormErrors() {

}

export { addSampleProjects, loadProjects, createProjectButtonPressed }