import createTask from './task';
class Tasks {
    constructor(title, description, startDate) {
        this.title = title;
        this.description = description;
        this.startDate = startDate;
    }

}
let tasks = [];
export default function addTask(title, description, startDate) {
    tasks.push(new Tasks(title, description, startDate));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addSampleTasks() {
    let samples = [];
    samples.push(new Tasks("Work", "All work and no play", "1-2-2022"));
    samples.push(new Tasks("Works", "All work and no plays", "2-2-2022"));
    localStorage.setItem("tasks", JSON.stringify(samples));
}

function loadTasks() {
    let storage = localStorage.getItem("tasks");
    if (storage !== '') {
        for (let task of JSON.parse(storage)) {
            createTaskObject(task);
        }
    }
    console.log("AFTER" + tasks);
}

function createTaskObject(task) {
    tasks.push(new Tasks(task.title, task.description, task.startDate));
    document.getElementsByTagName('body')[0].appendChild(createTask(task.title, task.description));
}

export { addSampleTasks, loadTasks }