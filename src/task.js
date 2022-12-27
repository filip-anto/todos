import { compareAsc, format } from 'date-fns';
export default function createTask(title,description) {
    let taskCard = document.createElement("div");
    taskCard.classList.add("card");

    let titleLabel = document.createElement("div");
    titleLabel.classList.add("titleLabel");
    titleLabel.innerHTML = "Title:";
    taskCard.appendChild(titleLabel);

    let titleValue = document.createElement("div");
    titleValue.classList.add("titleValue");
    titleValue.innerHTML=title;
    taskCard.appendChild(titleValue);

    let descriptionLabel = document.createElement("div");
    descriptionLabel.classList.add("descriptionLabel");
    descriptionLabel.innerHTML = "Description:";
    taskCard.appendChild(descriptionLabel);

    let descriptionValue = document.createElement("div");
    descriptionValue.classList.add("descriptionValue");
    descriptionValue.innerHTML=description;
    taskCard.appendChild(descriptionValue);
    console.log(taskCard);
    return (taskCard);
}